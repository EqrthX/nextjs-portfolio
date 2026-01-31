import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import LearningJourney from "@/components/section/LearningJourney";
import Projects from "@/components/section/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section id="hero" className="w-full min-h-screen flex items-center justify-center">
        <Hero/>
      </section>
      <section id="about" className="w-full min-h-screen flex items-center justify-center">
        <About/>
      </section>
      <section id="projects" className="w-full min-h-screen flex items-center justify-center">
        <Projects/>
      </section>
      <section id="learingJourney" className="w-full min-h-screen flex items-center justify-center">
        <LearningJourney/>
      </section>
    </div>
  );
}
