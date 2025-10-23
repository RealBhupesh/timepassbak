import { NextResponse } from "next/server";
import { listDocuments } from "@/lib/persistence";

export async function GET() {
  const orders = await listDocuments("orders");
  return NextResponse.json({ orders });
}
