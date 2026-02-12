"use client";

const areas = [
  {
    title: "Rooftop Lounge",
    desc: "Open sky, city lights, and a relaxed vibe. Perfect for groups and casual dining.",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
  },
  {
    title: "Fine Dine Indoors",
    desc: "Elegant interiors with curated lighting. Ideal for intimate dinners and celebrations.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
  },
];

export default function RooftopShowcase() {
  return (
    <section id="experience" className="py-28 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-display tracking-[0.3em] text-amber-200/60 text-sm uppercase mb-4">
            Choose Your Ambience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-wide">
            The <span className="gold-gradient">Experience</span>
          </h2>
          <p className="text-amber-100/60 max-w-2xl mx-auto font-light">
            From vibrant rooftop vibes to refined indoor elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group relative rounded-sm overflow-hidden border border-[#2d2d2d] hover:border-[#c9a227]/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-amber-100/70 font-light max-w-md">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
