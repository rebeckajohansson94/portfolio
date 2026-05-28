import { Project } from "@/types/project";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  openModal: (project: Project) => void;
};

export default function ProjectCard({ project, openModal }: ProjectCardProps) {
  return (
    <div className="relative group flex flex-col min-h-140 w-full border border-lavender-soft/30 hover:border-lavender-mid/60 transition-all duration-300 bg-white">
      {/* year */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-white/80 backdrop-blur-sm text-lavender-deep text-xs tracking-widest px-3 py-1 rounded-full border border-lavender-mid/40 shadow-sm font-medium">
          {project.year}
        </span>
      </div>

      {/* image */}
      <div className="relative w-full h-100 overflow-hidden flex items-center justify-center bg-lavender-mist/30">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={700}
          className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* info */}
      <div className="p-6 flex flex-col gap-3 mt-auto">
        <p className="text-lavender-mid text-xs tracking-[0.3em] uppercase font-semibold">
          {/* displays only the first 2 technologies from the stack array, joined with a dot separator */}
          {project.stack.slice(0, 2).join(" · ")}
        </p>
        <h3
          className="text-black/80 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {project.title}
        </h3>
        <div className="w-full h-px bg-lavender-soft/40" />
        <div className="flex items-center justify-between pt-3">
          <span className="text-black/70 text-xs tracking-[0.3em] uppercase font-semibold">
            View case
          </span>
          <button
            className="border border-lavender-mid/50 hover:bg-lavender-soft/30 bg-lavender-mist/40 rounded-full p-2 transition-colors duration-300 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <ArrowUpRight size={16} className="text-lavender-deep" />
          </button>
        </div>
      </div>
    </div>
  );
}
