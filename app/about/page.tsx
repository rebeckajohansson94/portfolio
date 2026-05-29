import AboutHero from "@/components/features/about/AboutHero";
import AboutMe from "@/components/features/about/AboutMe";
import TechStack from "@/components/features/about/TechStack";
import IconBar from "@/components/features/about/IconBar";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutMe />
      <IconBar />
      <TechStack />
    </main>
  );
}
