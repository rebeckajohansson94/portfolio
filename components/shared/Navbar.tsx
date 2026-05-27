import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex justify-between items-center">
      <Link
        href="/"
        className="text-lavender-deep font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full bg-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/90 border border-lavender-soft/40"
      >
        Rebecka
      </Link>
      <ul className="flex gap-6 px-6 py-2 rounded-full bg-white/70 backdrop-blur-md border border-lavender-soft/40">
        <li>
          <Link
            href="/"
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link
        href="/contact"
        className="text-white font-semibold text-sm tracking-widest uppercase px-4 py-2 rounded-full bg-lavender-deep/80 backdrop-blur-md hover:bg-lavender-deep transition-all duration-300"
      >
        Let&apos;s talk
      </Link>
    </nav>
  );
}
