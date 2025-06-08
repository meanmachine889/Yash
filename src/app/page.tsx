import Achievements from "@/components/achievements";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Touch from "@/components/lgit";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen max-w-screen">
      <div className="max-w-5xl w-[100%] py-4 md:px-5 px-2 space-y-3">
        {/* <Navbar /> */}
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Touch />
      </div>
    </div>
  );
}
