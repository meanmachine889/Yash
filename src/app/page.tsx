import Achievements from "@/components/achievements";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen max-w-screen">
      <div className="max-w-6xl w-[100%] py-4 px-5 space-y-3">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
      </div>
    </div>
  );
}
