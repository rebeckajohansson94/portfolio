import { techStack } from "@/lib/tech";

export default function TechStack() {
  return (
    <section className="bg-lavender-mist/30 px-8 py-24">
      <div className="max-w-350 mx-auto">
        <div className="mb-12">
          <p className="text-lavender-deep text-xs tracking-[0.35em] uppercase mb-4 font-bold">
            Tech stack
          </p>
          <h2
            className="text-black/80 text-5xl leading-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            My{" "}
            <span className="italic text-lavender-deep font-normal">
              toolkit.
            </span>
          </h2>
        </div>

        {/* grid with categories */}
        {/* maps through each category group and renders a card: items are mapped inside each card since the data is nested (array of objects containing arrays) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-lavender-soft/80 hover:border-lavender-mid/80 hover:shadow-sm p-8 flex flex-col gap-4 transition-all duration-300"
            >
              {/* category-name */}
              <div className="text-lavender-mid text-base tracking-[0.3em] uppercase font-bold border-b border-lavender-soft/40 pb-4 flex justify-between items-center">
                {group.category}
                <group.icon size={18} className="text-lavender-deep/80" />
              </div>

              {/* items */}
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-black/70 text-sm tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
