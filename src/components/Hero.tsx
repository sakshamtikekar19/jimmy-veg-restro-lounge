export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        <p className="font-[family-name:var(--font-cinzel)] tracking-[0.4em] text-amber-200/80 text-sm uppercase mb-6">
          Pure Veg Fine Dine & Rooftop
        </p>
        <h1 className="font-[family-name:var(--font-cinzel)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[1.1] tracking-wide">
          Dine Above the Lights
          <br />
          <span className="gold-gradient">of Dombivli</span>
        </h1>
        <p className="text-lg sm:text-xl text-amber-100/70 max-w-xl mx-auto mb-12 font-light tracking-wide">
          An elevated experience where the city lights meet pure vegetarian elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservation"
            className="font-[family-name:var(--font-cinzel)] tracking-widest text-sm bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8d48b] text-[#0d0d0d] font-semibold px-10 py-4 rounded-sm transition-all duration-300"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="font-[family-name:var(--font-cinzel)] tracking-widest text-sm border border-[#c9a227]/60 text-amber-200/90 hover:bg-[#c9a227]/10 hover:border-[#c9a227] font-medium px-10 py-4 rounded-sm transition-all duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
