import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const { error: dbError } = await supabase.from("waitlist").insert({
    name: name?.trim() || null,
    email: email.trim().toLowerCase(),
  });

  if (dbError) {
    if (dbError.code === "23505") {
      return NextResponse.json({ error: "already_on_list" }, { status: 409 });
    }
    console.error("Supabase insert error:", dbError);
    return NextResponse.json({ error: "Failed to join waitlist." }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "LedgUp <noreply@ledgup.app>",
      to: email.trim().toLowerCase(),
      subject: "You're on the LedgUp waitlist 🎉",
      html: buildConfirmationEmail(name?.trim() || "there"),
    });
  } catch (emailErr) {
    console.error("Resend error:", emailErr);
  }

  return NextResponse.json({ success: true });
}

function buildConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the LedgUp waitlist</title>
</head>
<body style="background:#060B11;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:0;">
  <div style="max-width:560px;margin:0 auto;padding:48px 24px;">
    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;background:#0D1623;border-radius:20px;padding:16px 24px;">
        <span style="font-size:24px;font-weight:700;color:#E3C77D;letter-spacing:-0.5px;">LedgUp</span>
      </div>
    </div>

    <h1 style="font-size:28px;font-weight:700;color:#E3C77D;margin:0 0 16px;text-align:center;">
      You're in, ${name}! 🎉
    </h1>
    <p style="font-size:16px;color:#94A3B8;line-height:1.6;text-align:center;margin:0 0 32px;">
      You've secured your spot on the LedgUp waitlist. When we launch on
      <strong style="color:#ffffff;">iOS & Android</strong>, you'll get
      <strong style="color:#05B89A;">6 months completely free</strong> — no credit card required.
    </p>

    <div style="background:#0D1623;border-radius:16px;padding:24px;margin-bottom:32px;">
      <h2 style="font-size:16px;font-weight:600;color:#ffffff;margin:0 0 16px;">
        What you'll get with LedgUp:
      </h2>
      <ul style="margin:0;padding:0;list-style:none;">
        ${[
          ["💳", "Track all your accounts & credit cards"],
          ["📊", "Smart spending analytics & reports"],
          ["📋", "Monthly budgets per category"],
          ["👨‍👩‍👧‍👦", "Family expense sharing & split"],
          ["🤝", "Split bills with friends"],
          ["💰", "Loan & debt tracker"],
        ]
          .map(
            ([icon, text]) =>
              `<li style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                <span style="font-size:18px;">${icon}</span>
                <span style="font-size:14px;color:#94A3B8;">${text}</span>
              </li>`
          )
          .join("")}
      </ul>
    </div>

    <p style="font-size:13px;color:#4F5D75;text-align:center;margin:0;">
      No ads · No tracking · No data selling<br/>
      We'll email you when LedgUp launches. Stay tuned!
    </p>
  </div>
</body>
</html>`;
}
