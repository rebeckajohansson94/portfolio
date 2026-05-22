import Projects from "@/components/features/ProjectsList";
import Hero from "@/components/features/Hero";
import CTA from "@/components/features/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <CTA />
    </main>
  );
}
