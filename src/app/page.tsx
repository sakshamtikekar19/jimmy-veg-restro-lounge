import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Menu from "@/components/Menu";
import RooftopShowcase from "@/components/RooftopShowcase";
import Reservation from "@/components/Reservation";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Menu />
      <RooftopShowcase />
      <Reservation />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
