"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "Projects" },
];

export function GlassNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-[var(--space-m)] py-[var(--space-xs)]">
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <Link href="/" className="text-[var(--step-0)] font-bold text-accent-primary tracking-[0.15em]">
          B.NYE
        </Link>

        {/* Desktop links — visible at lg (1024px+) */}
        <div className="hidden lg:flex items-center gap-[var(--space-m)]">
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

        {/* Mobile hamburger — visible below lg */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-text-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 glass-nav border-t border-white/5 flex flex-col gap-[var(--space-xs)] px-[var(--space-m)] py-[var(--space-m)] lg:hidden">
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
