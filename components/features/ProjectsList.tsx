"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="grid grid-cols-3 gap-4 p-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={() => {}} />
      ))}
    </section>
  );
}
