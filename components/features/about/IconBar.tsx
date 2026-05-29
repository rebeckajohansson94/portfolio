import { Infinity, Coffee, Sparkles } from "lucide-react";

export default function IconBar() {
  return (
    <section className="bg-lavender-deep py-16 px-8">
      <div className="flex items-center justify-center divide-x divide-white/20">
        <div className="flex flex-col items-center gap-3 px-16">
          <Infinity size={32} className="text-white" />
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-bold">
            Always learning
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-16">
          <Coffee size={32} className="text-white" />
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-bold">
            Coffee powered
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-16">
          <Sparkles size={32} className="text-white" />
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-bold">
            Detail obsessed
          </p>
        </div>
      </div>
    </section>
  );
}
