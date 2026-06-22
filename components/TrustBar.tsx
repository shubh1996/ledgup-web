const badges = [
  { icon: "🚫", text: "No ads" },
  { icon: "🔒", text: "No tracking" },
  { icon: "🛡️", text: "No data selling" },
  { icon: "✨", text: "Privacy first" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/6 py-5 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl flex flex-wrap justify-center gap-8">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2.5">
            <span className="text-lg">{b.icon}</span>
            <span className="text-brand-subtle text-sm font-medium">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
