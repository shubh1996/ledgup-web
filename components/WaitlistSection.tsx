import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        {/* Glow pill */}
        <div
          aria-hidden
          className="mx-auto mb-8 h-1 w-24 rounded-full"
          style={{ background: "linear-gradient(to right, transparent, #E3C77D, transparent)" }}
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Be first. Get{" "}
          <span className="text-brand-gold">6 months free.</span>
        </h2>
        <p className="text-brand-subtle text-lg mb-10 leading-relaxed">
          Join the waitlist today and lock in 6 months free when LedgUp launches on iOS & Android.
          No credit card. No commitment. Just early access.
        </p>

        <WaitlistForm />

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {["No ads", "No tracking", "No data selling", "Cancel anytime"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="text-brand-teal text-xs">✓</span>
              <span className="text-brand-subtle text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
