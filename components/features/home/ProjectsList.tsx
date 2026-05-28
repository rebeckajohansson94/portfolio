"use client"; // required because this component uses useState via the useModal hook (client component)

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";

export default function Projects() {
  const { isOpen, selectedProject, openModal, closeModal } = useModal(); // destructuring the states and functions needed from the useModal hook

  return (
    <section
      id="projects"
      className="relative bg-white px-8 py-20 overflow-hidden"
    >
      {/* spheres in different shades on the background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-linear-to-br from-lavender-mist/60 to-lavender-soft/20 blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-linear-to-bl from-lavender-soft/50 to-lavender-mid/20 blur-2xl pointer-events-none" />
      <div
        className="absolute -bottom-10 left-1/4 w-64 h-64 rounded-full bg-linear-to-tr from-lavender-mid/30 to-lavender-soft/10 blur-2xl 
      pointer-events-none"
      />

      <div className="max-w-350 mx-auto mb-12">
        <p className="text-lavender-deep text-xs tracking-[0.35em] uppercase mb-4 font-bold">
          Selected work
        </p>
        <h2
          className="text-black/80 text-6xl leading-none font-semibold"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Recent{" "}
          <span className="italic text-lavender-deep font-semibold">
            projects
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
      {/* renders the modal: selectedProject is set when a card is clicked via openModal and passes the project object */}
      <Modal isOpen={isOpen} project={selectedProject} onClose={closeModal} />
    </section>
  );
}
