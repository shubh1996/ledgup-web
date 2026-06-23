import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";

function verifySignature(body: string, signature: string): boolean {
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");
  return expected === signature;
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";

  if (!verifySignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const entity = event.payload?.subscription?.entity;
  if (!entity) return NextResponse.json({ ok: true });

  const email = entity.notes?.email as string | undefined;
  const razorpaySubId = entity.id as string;

  if (!email) return NextResponse.json({ ok: true });

  // Look up the Supabase user by email
  const { data: users } = await supabase.auth.admin.listUsers();
  const user = users?.users?.find((u) => u.email === email);

  if (!user) {
    console.log(`Webhook: no Supabase user found for ${email}, skipping`);
    return NextResponse.json({ ok: true });
  }

  const uid = user.id;

  switch (event.event) {
    case "subscription.activated":
    case "subscription.charged": {
      const periodEnd = entity.current_end
        ? new Date(entity.current_end * 1000).toISOString()
        : null;
      await supabase
        .from("subscriptions")
        .upsert({
          user_id: uid,
          status: "active",
          plan: "monthly",
          razorpay_sub_id: razorpaySubId,
          current_period_end: periodEnd,
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });
      break;
    }
    case "subscription.cancelled":
    case "subscription.completed": {
      await supabase
        .from("subscriptions")
        .update({ status: "cancelled", updated_at: new Date().toISOString() })
        .eq("user_id", uid);
      break;
    }
    case "subscription.halted": {
      await supabase
        .from("subscriptions")
        .update({ status: "expired", updated_at: new Date().toISOString() })
        .eq("user_id", uid);
      break;
    }
  }

  return NextResponse.json({ ok: true });
}
