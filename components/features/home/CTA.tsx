import { GitHub, LinkedIn, Mail } from "@deemlol/next-icons";

export default function CTA() {
  return (
    <section className="relative bg-lavender-deep overflow-hidden py-20 px-8">
      {/* decorative background areas */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-lavender-mid/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-lavender-soft/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-350 mx-auto flex flex-col lg:flex-row items-center justify-center gap-0">
        <div className="flex flex-col gap-4 lg:pr-24 text-center lg:text-left">
          <p className="text-lavender-mist text-xs tracking-[0.35em] uppercase">
            Get in touch
          </p>
          <h2
            className="text-white font-normal"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="text-5xl sm:text-6xl font-bold uppercase block">
              Let&apos;s Work
            </span>
            <span className="text-6xl sm:text-8xl italic font-light block">
              Together!
            </span>
          </h2>
        </div>

        {/* line-divider: only visible on desktop */}
        <div className="hidden lg:block w-px h-40 bg-white/20 mx-8" />

        {/* contact info: centered on mobile/tablet, left-aligned on desktop */}
        <div className="flex flex-col gap-6 lg:min-w-80 lg:pl-16 mt-10 lg:mt-0 items-center lg:items-start">
          <div className="text-center lg:text-left">
            <p
              className="text-white text-2xl font-semibold tracking-[0.07rem]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Rebecka Johansson
            </p>
            <p className="text-lavender-mist text-xs tracking-[0.3em] uppercase mt-1">
              Frontend Developer
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:rebeckaemmajohansson@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm tracking-wide"
            >
              <Mail size={20} color="#FFFFFF" strokeWidth={1.5} />
              rebeckaemmajohansson@gmail.com
            </a>
            <a
              href="https://github.com/rebeckajohansson94"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm tracking-wide"
            >
              <GitHub size={20} color="#FFFFFF" strokeWidth={1.5} />
              rebeckajohansson94
            </a>

            <a
              href="https://www.linkedin.com/in/rebecka-emma-johansson/"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm tracking-wide"
            >
              <LinkedIn size={20} color="#FFFFFF" strokeWidth={1.5} />
              www.linkedin.com/in/rebecka-emma-johansson
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
