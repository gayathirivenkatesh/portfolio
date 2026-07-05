import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EducationCerts } from "@/components/sections/EducationCerts";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ConsoleHUD } from "@/components/ui/ConsoleHUD";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ConsoleHUD />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
