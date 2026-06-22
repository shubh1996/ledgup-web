const features = [
  {
    icon: "💳",
    color: "#EF5A68",
    title: "All Your Accounts",
    description:
      "Connect credit cards, bank accounts, and wallets. See your true financial picture at a glance.",
  },
  {
    icon: "📋",
    color: "#05B89A",
    title: "Smart Budgets",
    description:
      "Set monthly budgets by category. Skip a budget item for the month when life happens — totals update instantly.",
  },
  {
    icon: "📊",
    color: "#E3C77D",
    title: "Deep Analytics",
    description:
      "Monthly spending trends, category breakdowns, and income vs. expense charts — beautifully visualised.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    color: "#E3C77D",
    title: "Family Plans",
    description:
      "Create a family plan and share expenses with your household. Approve members, track shared spending together.",
  },
  {
    icon: "🤝",
    color: "#05B89A",
    title: "Split & Settle",
    description:
      "Split bills with friends, track who owes what, and mark expenses as settled — no more awkward reminders.",
  },
  {
    icon: "💰",
    color: "#FF9500",
    title: "Loan Tracker",
    description:
      "Track money you've lent or borrowed. Log repayments and always know the outstanding balance.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything in one place
          </h2>
          <p className="text-brand-subtle text-lg max-w-xl mx-auto">
            No more juggling spreadsheets and banking apps. LedgUp brings your whole financial life
            into a single, beautiful view.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-brand-card border border-white/6 p-6 hover:border-white/12 transition-colors"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4"
                style={{ background: `${f.color}18` }}
              >
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-brand-subtle text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
