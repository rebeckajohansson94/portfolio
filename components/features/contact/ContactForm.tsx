"use client"; // required: useForm is a hook (client component)

import { useForm, ValidationError } from "@formspree/react";
import { Heart } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!); // connects to Formspree using form ID from environment variable

  // renders success message when form is submitted
  if (state.succeeded) {
    return (
      <section className="bg-white flex items-center justify-center py-32">
        <p className="text-lavender-deep text-lg tracking-widest uppercase font-semibold">
          Thanks for reaching out! I&apos;ll get back to you soon{" "}
          <Heart size={20} className="text-lavender-deep inline ml-1" />
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* left: lavender panel with text */}
        <div className="bg-lavender-mid/50 flex items-center p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-6">
            <p className="text-black/70 text-xs tracking-[0.35em] uppercase font-semibold">
              Get in touch
            </p>
            <h2
              className="text-black/70 text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Let&apos;s work{" "}
              <span className="italic font-semibold text-lavender-deep">
                together.
              </span>
            </h2>
            <p className="text-black/70 text-base leading-relaxed font-medium">
              Whether you have a project in mind, a question, or just want to
              say hi - feel free to reach out!
            </p>
          </div>
        </div>

        {/* right: white panel with form */}
        <div className="flex items-center p-8 md:p-12 lg:p-16">
          {/* onSubmit handled by Formspree's handleSubmit */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-lavender-deep text-xs tracking-[0.35em] uppercase font-bold">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="border-b border-lavender-mid/60 pb-2 text-black/70 text-sm tracking-wide outline-none focus:border-lavender-deep transition-colors bg-transparent"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lavender-deep text-xs tracking-[0.35em] uppercase font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="border-b border-lavender-mid/60 pb-2 text-black/70 text-sm tracking-wide outline-none focus:border-lavender-deep transition-colors bg-transparent"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lavender-deep text-xs tracking-[0.35em] uppercase font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                className="border-b border-lavender-mid/60 pb-2 text-black/70 text-sm tracking-wide outline-none focus:border-lavender-deep transition-colors bg-transparent resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-fit text-white font-semibold text-sm tracking-widest uppercase px-8 py-3 bg-lavender-deep hover:bg-lavender-mid transition-colors duration-300 cursor-pointer"
            >
              {state.submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
