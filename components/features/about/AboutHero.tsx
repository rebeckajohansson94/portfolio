export default function AboutHero() {
  return (
    <section className="relative h-[65vh] overflow-hidden">
      {/* video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster1.png" // fallback img
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
      </video>

      {/* overlay to make the text pop more */}
      <div className="absolute inset-0 bg-lavender-deep/40" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16">
        <p className="text-white text-sm tracking-[0.4em] uppercase mb-2 font-semibold drop-shadow-lg">
          The person behind the pixels
        </p>
        <h1
          className="text-white text-[6rem] font-bold leading-none mb-4 uppercase drop-shadow-lg"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          About me
        </h1>
        <p className="text-white text-lg tracking-widest drop-shadow-lg font-semibold">
          Code, design and a lot of coffee.
        </p>
      </div>
    </section>
  );
}
