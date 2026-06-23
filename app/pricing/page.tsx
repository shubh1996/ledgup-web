import SubscribeButton from "@/components/SubscribeButton";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const features = [
  "All Your Accounts in one place",
  "Smart Budgets & Alerts",
  "Deep Spending Analytics",
  "Family Plans & Shared Expenses",
  "Split & Settle with friends",
  "Loan Tracker",
];

export const metadata = {
  title: "Pricing — LedgUp",
  description: "₹49/month for full access to LedgUp. No ads, no data selling.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      {/* Nav */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="LedgUp" width={32} height={32} className="rounded-lg" />
          <span className="text-brand-gold font-bold text-lg">LedgUp</span>
        </Link>
        <Link href="/" className="text-brand-subtle text-sm hover:text-white transition-colors">
          ← Back
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <p className="text-brand-teal text-sm font-semibold tracking-widest uppercase mb-4">
          Simple Pricing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          One plan. Everything included.
        </h1>
        <p className="text-brand-subtle text-center max-w-md mb-16">
          Full access to all features. No ads, no data selling, no hidden fees.
        </p>

        {/* Pricing card */}
        <div className="bg-brand-card border border-white/10 rounded-2xl p-8 w-full max-w-md">
          {/* Trial badge */}
          <div className="inline-flex items-center gap-2 bg-brand-teal/15 text-brand-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            ✦ First 3 months free for everyone
          </div>

          {/* Price */}
          <div className="flex items-end gap-2 mb-1">
            <span className="text-5xl font-bold text-white">₹49</span>
            <span className="text-brand-muted text-base mb-2">/month</span>
          </div>
          <p className="text-brand-subtle text-sm mb-8">
            Billed monthly · Cancel anytime
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-brand-subtle">
                <span className="text-brand-teal text-base">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center">
            <SubscribeButton />
            <p className="text-brand-muted text-xs mt-4 text-center">
              On the waitlist? You get 6 months free automatically when you sign up.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-md w-full space-y-6">
          <h2 className="text-white font-semibold text-lg">Common questions</h2>
          {[
            {
              q: "When will I be charged?",
              a: "Your free trial runs first. After it ends, your subscription starts at ₹49/month.",
            },
            {
              q: "Can I cancel?",
              a: "Yes, anytime. You keep access until the end of your billing period.",
            },
            {
              q: "I'm on the waitlist — do I need to pay now?",
              a: "No. Waitlist members get 6 months free automatically when they sign up in the app. No payment needed upfront.",
            },
          ].map(({ q, a }) => (
            <div key={q}>
              <p className="text-white text-sm font-medium mb-1">{q}</p>
              <p className="text-brand-subtle text-sm">{a}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
