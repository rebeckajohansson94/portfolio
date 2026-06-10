"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex justify-between items-center">
      {/* logo name */}
      <Link
        href="/"
        className="text-lavender-deep tracking-widest text-lg px-4 py-2 rounded-full bg-white/70 backdrop-blur-md transition-all duration-300 hover:bg-white/90 border border-lavender-soft/40 italic"
        style={{ fontFamily: "var(--font-pacifico)" }}
      >
        Rebecka
      </Link>

      {/* desktop nav */}
      <ul className="hidden lg:flex gap-6 px-6 py-2 rounded-full bg-white/70 backdrop-blur-md border border-lavender-soft/40">
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
            href="/#projects"
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

      {/* desktop CTA: hidden on mobile/tablet */}
      <Link
        href="/contact"
        className="hidden lg:block text-white font-semibold text-sm tracking-widest uppercase px-4 py-2 rounded-full bg-lavender-deep/80 backdrop-blur-md hover:bg-lavender-deep transition-all duration-300"
      >
        Let&apos;s talk
      </Link>

      {/* hamburger button: only visible on mobile/tablet */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-lavender-deep p-2 rounded-full bg-white/70 backdrop-blur-md border border-lavender-soft/40 cursor-pointer"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* mobilmenu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mx-6 mt-2 rounded-2xl bg-white/80 backdrop-blur-md border border-lavender-soft/40 py-4 flex flex-col items-center gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMenuOpen(false)}
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lavender-deep font-semibold text-sm tracking-widest uppercase hover:text-lavender-mid transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white font-semibold text-sm tracking-widest uppercase px-4 py-2 rounded-full bg-lavender-deep/80 hover:bg-lavender-deep transition-all duration-300"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </nav>
  );
}
