const handle = "jimmys_veg_restro";
const images = [
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

export default function InstagramFeed() {
  return (
    <section id="social" className="py-28 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-medium text-white mb-12 text-center">
          Follow Us on <span className="gold-gradient">Instagram</span>
        </h2>
        <div className="grid grid-cols-4 gap-1 md:gap-2">
          {images.map((id, i) => (
            <a key={i} href={`https://instagram.com/${handle}`} target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden rounded-lg">
              <img src={`https://images.unsplash.com/photo-${id}?w=400`} alt={`Post ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
