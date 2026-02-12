const areas = [
  { title: "Rooftop Lounge", desc: "Open sky, city lights, relaxed vibe.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800" },
  { title: "Fine Dine Indoors", desc: "Elegant interiors for intimate dinners.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" },
];

export default function RooftopShowcase() {
  return (
    <section id="experience" className="py-28 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-medium text-white mb-16 text-center">
          The <span className="gold-gradient">Experience</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <div key={i} className="rounded-sm overflow-hidden border border-[#2d2d2d]">
              <div className="aspect-[16/10] relative">
                <img src={area.img} alt={area.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                  <p className="text-gray-300">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
