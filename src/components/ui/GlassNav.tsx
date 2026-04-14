"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
];

export function GlassNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <Link href="/" className="text-[var(--step-0)] font-bold text-accent-primary tracking-[0.15em]">
        B.NYE
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="link-underline text-[var(--step--1)] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-[var(--step--1)] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
        >
          Resume
        </a>
        <a
          href="/assets/testimonials.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-[var(--step--1)] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
        >
          Testimonials
        </a>
        <a
          href="https://github.com/brandon-charles-novice-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button px-4 py-2 text-[var(--step--1)] font-semibold text-text-primary"
        >
          GitHub
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle navigation"
      >
        <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`block w-5 h-px bg-text-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 glass-nav border-t border-white/5 flex flex-col gap-4 px-8 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[var(--step-0)] text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--step-0)] text-text-secondary hover:text-text-primary transition-colors">
            Resume
          </a>
          <a href="/assets/testimonials.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--step-0)] text-text-secondary hover:text-text-primary transition-colors">
            Testimonials
          </a>
          <a href="https://github.com/brandon-charles-novice-developer" target="_blank" rel="noopener noreferrer" className="glass-button inline-block w-fit px-4 py-2 text-[var(--step--1)] font-semibold text-text-primary">
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
