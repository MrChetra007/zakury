import { BrandBanner } from "./components/BrandBanner";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Studio } from "./components/Studio";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-porcelain">
      <div className="grain" aria-hidden="true" />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-champagne focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <BrandBanner />
        <Marquee />
        <Stats />
        <Work />
        <Services />
        <Studio />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
