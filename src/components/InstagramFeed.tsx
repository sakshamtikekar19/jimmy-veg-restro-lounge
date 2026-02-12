"use client";

const instagramHandle = "jimmys_veg_restro";

export default function InstagramFeed() {
  // Placeholder grid - Replace with actual Instagram API or embed
    const placeholderImages = [
    "1517248135467-4c7edcad34c4",
    "1555396273-3670a6ddcd81",
    "1514933651103-005eec06c04b",
    "1559339352-11d035aa65de",
    "1565299624946-b28f40a0ae38",
    "1546069901-ba9599a7e63c",
    "1565557623262-b51c2513a641",
    "1571091718767-18b5b1457add",
    "1585937421612-70a008356fbe",
    "1563379091339-03b21ab4a4f8",
    "1551538827-9c037cb4f32a",
    "1544145945-f90425340c7e",
    "1527281400684-1a845a4e758d",
    "1551024709-8f23befc6f87",
    "1546833998-877b37c2e5c6",
    "1596797038530-2c107229654b",
  ];

  return (
    <section id="social" className="py-28 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-[0.3em] text-amber-200/60 text-sm uppercase mb-4">
            Join Our Community
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6 tracking-wide">
            Follow Us on <span className="gold-gradient">Instagram</span>
          </h2>
          <p className="text-amber-100/60 mb-8 font-light">
            Fresh content from our rooftop and kitchen. Tag us @{instagramHandle}
          </p>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#e8d48b] font-display tracking-widest text-sm transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            @{instagramHandle}
          </a>
        </div>

        <div className="grid grid-cols-4 gap-1 md:gap-2">
          {placeholderImages.map((id, i) => (
            <a
              key={i}
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-sm border border-[#2d2d2d]/50 group hover:border-[#c9a227]/30 transition-all duration-300"
            >
              <img
                src={`https://images.unsplash.com/photo-${id}?w=400`}
                alt={`Jimmy's post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Connect your Instagram API to show live posts. Add{" "}
          <code className="text-[#c9a227]">NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN</code> for live feed.
        </p>
      </div>
    </section>
  );
}
