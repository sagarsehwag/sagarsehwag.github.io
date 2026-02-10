import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Socials } from "@/components/socials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <hr className="border-border" />

      <Projects />

      <hr className="border-border" />

      <Experience />

      <hr className="border-border" />

      <Education />

      <hr className="border-border" />

      <Socials />

      <Footer />
    </main>
  );
}
