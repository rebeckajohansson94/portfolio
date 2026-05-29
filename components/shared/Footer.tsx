import { GitHub, LinkedIn, Mail } from "@deemlol/next-icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-lavender-soft/40 py-7 px-8">
      <div className="max-w-350 mx-auto flex items-center justify-between">
        <p className="text-black/70 text-xs tracking-widest uppercase">
          © 2026 Rebecka Johansson
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:din@email.com"
            className="text-black/70 hover:text-lavender-deep transition-colors"
          >
            <Mail size={16} color="currentColor" strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/ditt-namn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-lavender-deep transition-colors"
          >
            <GitHub size={16} color="currentColor" strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com/in/ditt-namn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-lavender-deep transition-colors"
          >
            <LinkedIn size={16} color="currentColor" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
