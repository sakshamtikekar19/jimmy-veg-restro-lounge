export default function StatsBar() {
  const stats = [
    { label: "Pure Veg", icon: "🌿" },
    { label: "Rooftop Lounge", icon: "🌃" },
    { label: "Fine Dining", icon: "✨" },
  ];
  return (
    <section className="relative z-20 -mt-20 md:-mt-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#141414]/95 backdrop-blur-xl border border-[#c9a227]/20 rounded-sm shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c9a227]/15">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-10 px-8 gap-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className="font-[family-name:var(--font-cinzel)] tracking-widest text-sm text-amber-100/90 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
