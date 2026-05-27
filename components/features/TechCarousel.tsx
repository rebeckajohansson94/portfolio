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
        {items.map((item, i) => (
          // maps through the items array and renders each skill as a text item with a separator between them
          <span key={item} className="inline-flex items-center gap-8">
            <span className="text-black/80 text-xs tracking-[0.3em] uppercase font-medium">
              {item}
            </span>
            {/* separator is hidden after the last item */}
            {i < items.length - 1 && (
              <span className="text-lavender-mid font-bold">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
