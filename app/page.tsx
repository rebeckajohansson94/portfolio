import ProjectList from "@/components/features/home/ProjectsList";
import Hero from "@/components/features/home/Hero";
import CTA from "@/components/features/home/CTA";
import FocusAreas from "@/components/features/home/FocusAreas";

export default function Home() {
  return (
    <main>
      <Hero />
      <FocusAreas />
      <ProjectList />
      <CTA />
    </main>
  );
}
