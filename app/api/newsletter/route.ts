import { NextResponse } from "next/server";
import { z } from "zod";
import { saveDocument } from "@/lib/persistence";

const schema = z.object({
  email: z.string().email("Please provide a valid email address."),
  source: z.string().default("footer")
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = schema.parse(payload);
    await saveDocument("newsletterSubscribers", data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: error.flatten() }, { status: 422 });
    }

    console.error("Newsletter signup failed", error);
    return NextResponse.json({ ok: false, message: "Unable to subscribe at the moment." }, { status: 500 });
  }
}
