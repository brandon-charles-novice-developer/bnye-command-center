export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      {/* Ambient orbs — asymmetric placement */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent-purple/[0.04] blur-[100px] pointer-events-none" />

      {/* Content — LEFT aligned, single column, no proof stack */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-24">
        <h1
          className="heading-display text-[var(--step-5)] font-bold text-text-primary leading-[1.1] mb-[var(--space-s)]"
        >
          Enterprise sales meets
          <br />
          <span className="gradient-text">AI engineering</span>
        </h1>
        <p
          className="text-[var(--step-1)] text-text-secondary leading-relaxed max-w-2xl mb-[var(--space-xs)]"
        >
          8+ years on both sides of digital advertising. $50M+ in enterprise
          revenue. Then I built the AI systems.
        </p>
        <p
          className="text-[var(--step-0)] text-text-tertiary max-w-xl mb-[var(--space-l)] leading-relaxed animate-hero-delay-2"
        >
          Production AI orchestration that bridges enterprise sales, agentic
          workflows, and technical implementation.
        </p>
        <div className="flex items-center gap-4 animate-hero-delay-3">
          <a
            href="#projects"
            className="gradient-primary btn-spring px-7 py-3.5 rounded-xl text-[var(--step--1)] font-semibold text-white"
          >
            Explore Projects
          </a>
          <a
            href="/assets/testimonials.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-7 py-3.5 text-[var(--step--1)] font-semibold text-text-primary"
          >
            Client Testimonials
          </a>
        </div>

        {/* Name + title — secondary, below CTAs */}
        <div className="mt-[var(--space-xl)] animate-hero-delay-3">
          <p className="text-[var(--step--1)] text-text-tertiary tracking-[0.15em] uppercase">
            Brandon Nye
          </p>
        </div>
      </div>

      {/* Scroll indicator — bottom left */}
      <div className="absolute bottom-8 left-6 flex items-center gap-3 text-text-tertiary animate-hero-delay-3">
        <div className="w-8 h-px bg-text-tertiary" />
        <span className="text-[var(--step--2)] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
