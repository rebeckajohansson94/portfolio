export default function AboutHero() {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      {/* video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/about-hero2.mp4" type="video/mp4" />
      </video>

      {/* overlay to make the text pop more */}
      <div className="absolute inset-0 bg-lavender-deep/40" />

      {/* white gradient fade til' the section below */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-b from-transparent via-white/10 to-white z-5" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16 drop-shadow-lg">
        <p className="text-white text-sm tracking-[0.4em] uppercase mb-2 font-semibold">
          Get to know me
        </p>
        <h1
          className="text-white text-[6rem] font-bold leading-none mb-4 uppercase drop-shadow-lg"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          About Me
        </h1>
        <p className="text-white text-lg tracking-widest drop-shadow-lg font-semibold">
          Code, design and a lot of coffee.
        </p>
      </div>
    </section>
  );
}
