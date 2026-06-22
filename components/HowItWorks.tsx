const steps = [
  {
    number: "01",
    title: "Join the waitlist",
    description:
      "Drop your email below. You'll get a confirmation and first access the moment we launch on iOS & Android.",
  },
  {
    number: "02",
    title: "Set up in minutes",
    description:
      "Add your accounts, set your monthly budgets, and invite family members. Your financial dashboard is ready.",
  },
  {
    number: "03",
    title: "Stay in control",
    description:
      "Log expenses, check budgets, view analytics, and settle up — all from one clean app that respects your privacy.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20">
      <div
        className="mx-auto max-w-5xl rounded-3xl border border-white/6 p-10 sm:p-16"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,22,35,0.8) 0%, rgba(6,11,17,0.4) 100%)",
        }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-brand-subtle text-lg">From waitlist to financial clarity in minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-start">
              {/* connector line on desktop */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-5 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(227,199,125,0.3), rgba(227,199,125,0.05))",
                  }}
                />
              )}
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/25 mb-5">
                <span className="text-brand-gold text-xs font-bold">{step.number}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-brand-subtle text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
