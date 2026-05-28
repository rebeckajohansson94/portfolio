import ProjectList from "@/components/features/home/ProjectsList";
import Hero from "@/components/features/home/Hero";
import TechCarousel from "@/components/features/home/TechCarousel";
import CTA from "@/components/features/home/CTA";

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
