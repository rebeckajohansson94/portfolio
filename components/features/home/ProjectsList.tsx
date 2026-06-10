"use client"; // required because this component uses useState via the useModal hook (client component)

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";

export default function Projects() {
  const { selectedProject, openModal, closeModal } = useModal(); // destructuring the states and functions needed from the useModal hook

  return (
    <section
      id="projects"
      className="relative bg-white px-8 py-20 overflow-hidden"
    >
      <div className="max-w-350 mx-auto mb-12">
        <p className="text-lavender-deep text-xs tracking-[0.35em] uppercase mb-4 font-bold">
          Selected work
        </p>
        <h2
          className="text-black/80 text-4xl sm:text-5xl lg:text-6xl font-semibold"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Recent{" "}
          <span className="italic text-lavender-deep font-semibold">
            projects.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-350 mx-auto">
        {projects.map((project) => (
          // maps over the projects array and renders a ProjectCard for each project
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
          />
        ))}
      </div>
      {/* renders the modal if a project has been selected, otherwise renders nothing */}
      {selectedProject ? (
        <Modal project={selectedProject} onClose={closeModal} />
      ) : null}
    </section>
  );
}
