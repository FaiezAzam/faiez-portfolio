import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Skills />
        <Portfolio />
        <Reviews />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
