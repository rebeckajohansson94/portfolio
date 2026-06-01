import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* left: lavender panel with image */}
        <div className="relative bg-lavender-mid/50 flex items-end justify-center pt-16 px-16 min-h-150">
          {/* shaping for image */}
          <div
            className="relative z-10 overflow-hidden w-130 h-160"
            style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
          >
            <Image
              src="/images/rebecka.jpg"
              alt="Rebecka Johansson"
              width={500}
              height={700}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* right: white panel with info */}
        <div className="flex items-center">
          <div className="flex flex-col gap-6 px-16 py-24">
            <div>
              <p className="text-lavender-mid text-xs tracking-[0.35em] uppercase mb-4 font-bold">
                Who I am
              </p>
              <h2
                className="text-black/80 text-5xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Frontend developer with an{" "}
                <span className="italic text-lavender-deep font-semibold">
                  eye for detail.
                </span>
              </h2>
            </div>
            <p className="text-black/70 text-base leading-relaxed">
              I&apos;m a frontend developer student specializing in React, with
              a genuine passion for UX and building interfaces that actually
              feel good to use. I care about clean, structured code and
              components that make sense - not just visually, but from a user
              perspective too.
            </p>
            <p className="text-black/70 text-base leading-relaxed">
              Before transitioning into tech, I worked as a healthcare assistant
              for several years. It gave me a strong foundation in
              communication, collaboration and problem-solving - skills I bring
              with me every day as a developer.
            </p>
            <p className="text-black/70 text-base leading-relaxed">
              I recently completed my first internship at a web agency, where I
              designed and built client websites using WordPress, Elementor and
              CSS. Working in real client projects taught me how to take
              feedback, iterate and adapt to different needs and brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
