import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(227,199,125,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-3 rounded-2xl bg-brand-card px-5 py-3 border border-white/8">
          <Image src="/icon.png" alt="LedgUp" width={32} height={32} className="rounded-lg" />
          <span className="text-xl font-bold text-brand-gold tracking-tight">LedgUp</span>
        </div>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 border border-brand-teal/25 px-4 py-1.5 mb-8">
        <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
        <span className="text-brand-teal text-sm font-medium">Coming to iOS & Android</span>
      </div>

      {/* Heading */}
      <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
        Track smarter.{" "}
        <span className="text-brand-gold">Spend better.</span>
      </h1>

      <p className="mx-auto max-w-xl text-brand-subtle text-lg leading-relaxed mb-10">
        Intelligent expense management for you and your inner circle. Budgets, family sharing,
        loan tracking, and deep analytics — all in one beautiful app.
      </p>

      {/* Waitlist form */}
      <div className="mx-auto max-w-xl">
        <WaitlistForm />
        <p className="mt-4 text-brand-muted text-sm">
          🎁 Waitlist members get{" "}
          <span className="text-brand-gold font-semibold">6 months free</span> at launch
        </p>
      </div>

      {/* Stats row */}
      <div className="mx-auto mt-16 max-w-lg grid grid-cols-3 gap-4">
        {[
          { value: "₹0", label: "to join waitlist" },
          { value: "6mo", label: "free at launch" },
          { value: "iOS+", label: "Android" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-brand-card border border-white/6 px-4 py-5">
            <p className="text-2xl font-bold text-brand-gold">{s.value}</p>
            <p className="text-brand-subtle text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
