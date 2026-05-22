import { Project } from "@/types/project";
import Image from "next/image";
import { MoveRight } from "lucide-react";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className={`relative flex flex-col justify-between bg-linear-to-br ${project.gradient} p-6 rounded-sm overflow-hidden cursor-pointer`}
    >
      <div>
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
        <p className="text-white/70 text-sm mt-1">{project.shortDesc}</p>
      </div>

      <div className="my-6 transition-transform duration-300 hover:scale-102">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full object-cover"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClick}
          className="text-white text-2xl cursor-pointer"
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
}
