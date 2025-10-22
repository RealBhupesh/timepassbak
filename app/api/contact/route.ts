import { NextResponse } from "next/server";
import { z } from "zod";
import { saveDocument } from "@/lib/persistence";

const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please provide a valid email."),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a little more so we can help!")
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    await saveDocument("contactRequests", {
      ...data,
      source: "contact-page"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 422 });
    }

    console.error("Contact form submission failed", error);
    return NextResponse.json({ ok: false, message: "Unable to submit contact request." }, { status: 500 });
  }
}
