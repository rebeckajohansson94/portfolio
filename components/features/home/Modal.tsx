import { Project } from "@/types/project";
import { X } from "lucide-react";
import { GitHub } from "@deemlol/next-icons";

type ModalProps = {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
};

export default function Modal({ isOpen, project, onClose }: ModalProps) {
  if (!isOpen || !project) return null; // returns if modal is closed or no project is selected

  return (
    <>
      {/* overlay: closes the modal when clicking outside the box */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black/40 hover:text-black/80 transition-colors"
        >
          <X size={20} className="text-black/80 cursor-pointer" />
        </button>

        {/* category: slice(0,2) shows only the first 2 items, joined with a dot separator */}
        <p className="text-lavender-mid text-xs tracking-[0.3em] uppercase font-semibold mb-3">
          {project.stack.slice(0, 2).join(" · ")}
        </p>

        <h2
          className="text-black/80 text-5xl font-semibold leading-none mb-2"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {project.title}
        </h2>

        <p className="text-black/80 text-xs tracking-widest uppercase mb-6">
          {project.year}
        </p>

        <div className="w-full h-px bg-lavender-soft/40 mb-6" />

        <p className="text-black/70 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="w-full h-px bg-lavender-soft/40 mb-6" />

        {/* maps through the stack array and renders a <span> for each tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-lavender-deep text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-lavender-mid/60 bg-lavender-mist/60 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full h-px bg-lavender-soft/40 mb-6" />

        {/* buttons only render if the link exists, using the && operator */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 bg-lavender-deep text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-lavender-mid transition-colors duration-300"
            >
              <GitHub size={16} color="#FFFFFF" strokeWidth={1.5} />
              GitHub
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              className="flex items-center gap-2 bg-lavender-deep text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-lavender-mid transition-colors duration-300"
            >
              <GitHub size={16} color="#FFFFFF" strokeWidth={1.5} />
              Figma
            </a>
          )}
        </div>
      </div>
    </>
  );
}
