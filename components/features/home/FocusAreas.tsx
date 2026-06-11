import { services } from "@/lib/services";

export default function FocusAreas() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-350 mx-auto">
        <p className="text-lavender-deep text-xs tracking-[0.35em] uppercase mb-4 font-bold">
          My focus areas
        </p>
        <h2
          className="text-black/90 text-4xl md:text-5xl font-normal mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What I{" "}
          <span className="italic text-lavender-deep font-semibold">do.</span>
        </h2>
        <p className="text-black/60 text-base leading-relaxed mb-12">
          I&apos;m a frontend developer with a genuine interest in both code and
          design, here&apos;s where I focus my energy.
        </p>

        {/* divide adds borders between cards automatically, vertical on desktop, horizontal on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-lavender-soft/60 divide-y divide-x-0 lg:divide-x lg:divide-y-0 divide-lavender-soft/60">
          {services.map((service) => (
            <div key={service.number} className="flex flex-col gap-3 p-8">
              <span
                className="text-lavender-deep text-4xl font-normal leading-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.number}
              </span>
              <h3 className="text-black/80 text-sm font-semibold tracking-wide">
                {service.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
