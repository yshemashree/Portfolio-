import Hero from "@/components/Hero";
import Gap from "@/components/Gap";
import Work from "@/components/Work";
import Altitude from "@/components/Altitude";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-canvas">
      <Hero />
      <Gap />
      <Work />
      <Altitude />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
