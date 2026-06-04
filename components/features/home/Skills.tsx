import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <div className="bg-lavender-soft/10 border-y border-lavender-soft/40 py-4 px-8">
      <div className="flex justify-between items-center">
        {skills.map((skill) => (
          // maps through the skills array and renders each skill as a text item
          <span
            key={skill}
            className="text-black/70 text-xs tracking-[0.3em] uppercase font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
