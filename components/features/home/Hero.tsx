export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster1.png" // fallback img
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
      </video>

      {/* overlay to make the text pop more */}
      <div className="absolute inset-0 bg-lavender-deep/40" />

      {/* hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16">
        <p className="text-white text-sm tracking-[0.4em] uppercase mb-2 font-bold drop-shadow-lg">
          Hello, I&apos;m
        </p>
        <h1
          className="text-white text-[8rem] font-bold leading-none mb-4 uppercase drop-shadow-lg"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Rebecka Johansson
        </h1>
        <p className="text-white text-xl m-8 tracking-widest drop-shadow-lg">
          I turn ideas into interfaces.
        </p>
        <a
          href="#projects"
          className="text-white border-4 border-white/60 w-fit px-6 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-lavender-deep transition-colors duration-300 font-bold drop-shadow-lg"
        >
          View my work
        </a>
      </div>
    </section>
  );
}
