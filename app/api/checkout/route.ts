import { NextResponse } from "next/server";
import { z } from "zod";
import Stripe from "stripe";
import { saveDocument } from "@/lib/persistence";

const schema = z.object({
  items: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        price: z.number().nonnegative(),
        quantity: z.number().int().min(1),
        image: z.string().optional(),
        category: z.string().optional()
      })
    )
    .min(1),
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    fulfillment: z.enum(["pickup", "delivery"]),
    desiredDate: z.string().min(1),
    notes: z.string().optional()
  })
});

let stripeClient: Stripe | null = null;

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) return null;
  if (stripeClient) return stripeClient;
  stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16"
  });
  return stripeClient;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = schema.parse(payload);

    const orderRecord = await saveDocument("orders", {
      ...data,
      status: process.env.STRIPE_SECRET_KEY ? "pending-payment" : "awaiting-confirmation"
    });

    const stripe = getStripe();

    if (!stripe) {
      return NextResponse.json({
        checkoutUrl: null,
        orderId: orderRecord.id,
        message: "Stripe is not configured. We have received your order details and will reach out to confirm payment."
      });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/thank-you?orderId=${orderRecord.id}`,
      cancel_url: `${siteUrl}/menu?checkout=cancelled`,
      customer_email: data.customer.email,
      metadata: {
        orderId: orderRecord.id as string,
        fulfillment: data.customer.fulfillment,
        desiredDate: data.customer.desiredDate
      },
      line_items: data.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : undefined,
            metadata: {
              menuItemId: item.id,
              category: item.category ?? ""
            }
          },
          unit_amount: Math.round(item.price * 100)
        },
        quantity: item.quantity
      })),
      billing_address_collection: "auto",
      automatic_tax: { enabled: true },
      phone_number_collection: { enabled: true }
    });

    return NextResponse.json({ checkoutUrl: session.url, orderId: orderRecord.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 422 });
    }

    console.error("Checkout creation failed", error);
    return NextResponse.json(
      { ok: false, message: "Unable to create checkout session at this time." },
      { status: 500 }
    );
  }
}
