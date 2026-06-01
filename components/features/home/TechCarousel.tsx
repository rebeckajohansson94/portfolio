export default function TechCarousel() {
  const items = [
    "UX Design",
    "Web Development",
    "UI Design",
    "Backend Development",
    "Mobile Development",
    "User Experience",
    "Frontend Development",
  ];

  return (
    <div className="bg-white border-y border-lavender-soft/40 py-4 px-8">
      <div className="flex justify-between items-center">
        {items.map((item) => (
          // maps through the items array and renders each skill as a text item
          <span
            key={item}
            className="text-black/70 text-xs tracking-[0.3em] uppercase font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
