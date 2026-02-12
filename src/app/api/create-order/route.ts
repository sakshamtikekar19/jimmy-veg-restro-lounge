import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;
const razorpay =
  keyId && keySecret
    ? new Razorpay({ key_id: keyId, key_secret: keySecret })
    : null;

export async function POST(request: Request) {
  if (!razorpay) {
    return NextResponse.json(
      { error: "Razorpay not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env" },
      { status: 503 }
    );
  }
  try {
    const { amount, currency = "INR", receipt } = await request.json();
    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: receipt || `jimmys-${Date.now()}`,
    });
    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    console.error("Razorpay create order error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create order" },
      { status: 500 }
    );
  }
}
