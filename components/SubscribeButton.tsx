"use client";

import { useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) return resolve(true);
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function SubscribeButton() {
  const [step, setStep] = useState<"idle" | "form" | "loading" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe() {
    setStep("loading");
    setErrorMsg("");

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setErrorMsg("Failed to load payment processor. Please try again.");
      setStep("form");
      return;
    }

    const res = await fetch("/api/subscribe/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      setErrorMsg(data.error ?? "Something went wrong.");
      setStep("form");
      return;
    }

    const options = {
      key: data.key_id,
      subscription_id: data.subscription_id,
      name: "LedgUp",
      description: "Monthly Subscription — ₹99/month",
      image: "/icon.png",
      prefill: { name, email },
      theme: { color: "#E3C77D" },
      handler: () => setStep("success"),
      modal: { ondismiss: () => setStep("form") },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setStep("form"); // keep form visible until checkout completes
  }

  if (step === "success") {
    return (
      <div className="text-center py-6 px-4">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-white font-semibold text-lg">You're subscribed!</p>
        <p className="text-brand-subtle text-sm mt-2">
          Welcome to LedgUp Premium. You'll get full access when the app launches.
        </p>
      </div>
    );
  }

  if (step === "idle") {
    return (
      <button
        onClick={() => setStep("form")}
        className="bg-brand-gold text-brand-bg font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base"
      >
        Subscribe — ₹99/month
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm space-y-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold text-sm"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-gold text-sm"
      />
      {errorMsg && <p className="text-brand-red text-xs">{errorMsg}</p>}
      <button
        onClick={handleSubscribe}
        disabled={step === "loading" || !email}
        className="w-full bg-brand-gold text-brand-bg font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
      >
        {step === "loading" ? "Opening checkout…" : "Pay ₹99/month"}
      </button>
      <button
        onClick={() => setStep("idle")}
        className="w-full text-brand-muted text-xs hover:text-brand-subtle transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}
