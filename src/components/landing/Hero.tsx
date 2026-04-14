import { ContentContainer } from "@/components/ui/ContentContainer";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      {/* Ambient orbs — viewport-responsive sizing */}
      <div className="absolute top-[15%] right-[10%] w-[clamp(300px,30vw,550px)] h-[clamp(300px,30vw,550px)] rounded-full bg-accent-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[clamp(200px,22vw,400px)] h-[clamp(200px,22vw,400px)] rounded-full bg-accent-purple/[0.04] blur-[100px] pointer-events-none" />

      {/* Content — centered for desktop */}
      <ContentContainer className="relative z-10 pt-24 text-center">
        <h1
          className="heading-display text-[var(--step-5)] font-bold text-text-primary leading-[1.1] mb-[var(--space-s)] mx-auto max-w-4xl"
        >
          Enterprise sales meets
          <br />
          <span className="gradient-text">AI engineering</span>
        </h1>
        <p
          className="text-[var(--step-1)] text-text-secondary leading-relaxed max-w-2xl mx-auto mb-[var(--space-xs)]"
        >
          8+ years on both sides of digital advertising. $50M+ in enterprise
          revenue. Then I built the AI systems.
        </p>
        <p
          className="text-[var(--step-0)] text-text-tertiary max-w-xl mx-auto mb-[var(--space-l)] leading-relaxed animate-hero-delay-2"
        >
          Production AI orchestration that bridges enterprise sales, agentic
          workflows, and technical implementation.
        </p>
        <div className="flex items-center justify-center gap-4 animate-hero-delay-3">
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
      </ContentContainer>

      {/* Scroll indicator — centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-text-tertiary animate-hero-delay-3">
        <div className="w-8 h-px bg-text-tertiary" />
        <span className="text-[var(--step--2)] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
