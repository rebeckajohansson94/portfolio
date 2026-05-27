import ProjectList from "@/components/features/ProjectsList";
import Hero from "@/components/features/Hero";
import TechCarousel from "@/components/features/TechCarousel";
import CTA from "@/components/features/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechCarousel />
      <ProjectList />
      <CTA />
    </main>
  );
}
