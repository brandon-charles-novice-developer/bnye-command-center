import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
];

export function GlassNav() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      <Link href="/" className="text-[var(--step-0)] font-bold text-accent-primary tracking-[0.15em]">
        B.NYE
      </Link>
      <div className="flex items-center gap-8">
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
    </nav>
  );
}
