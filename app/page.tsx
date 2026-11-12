import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import GitHubStats from "@/components/sections/GitHubStats";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SmoothScroll>
        <div className="relative min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Projects />
            <GitHubStats />
            <Experience />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
