import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
