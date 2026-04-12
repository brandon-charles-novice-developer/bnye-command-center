export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      {/* Ambient orbs — asymmetric placement, not centered */}
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent-primary/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent-purple/[0.04] blur-[100px] pointer-events-none" />

      {/* Content — LEFT aligned (anti-AI: not centered) */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-24">
        <div className="lg:col-span-7">
          <p
            className="text-[var(--step--1)] font-semibold tracking-[0.25em] uppercase text-accent-cyan mb-[var(--space-s)] animate-hero"
          >
            Sales Engineering Command Center
          </p>
          <h1
            className="text-[var(--step-5)] font-bold text-text-primary leading-[1.1] mb-[var(--space-s)] animate-hero-delay-1"
          >
            Brandon Nye
          </h1>
          <p
            className="text-[var(--step-1)] text-text-secondary leading-relaxed mb-[var(--space-xs)] animate-hero-delay-2"
          >
            Enterprise Solutions Engineer
            <br />
            <span className="text-text-tertiary">&amp; AI Systems Builder</span>
          </p>
          <p
            className="text-[var(--step-0)] text-text-tertiary max-w-lg mb-[var(--space-l)] animate-hero-delay-3 leading-relaxed"
          >
            Production AI orchestration systems that bridge enterprise sales,
            agentic workflows, and technical implementation.
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
        </div>

        {/* Right column — proof stack */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-[var(--space-s)] animate-hero-delay-3">
          <div className="glass-card p-5 flex items-baseline gap-4">
            <span className="text-[var(--step-3)] font-bold gradient-text leading-none">
              $50M+
            </span>
            <span className="text-[var(--step--1)] text-text-tertiary">
              Revenue Generated
            </span>
          </div>
          {[
            { quote: "\u201CTrue partner rather than a vendor.\u201D", author: "Griffin Lay", title: "Director, Omnicom" },
            { quote: "\u201CProvides the exact deliverable needed the first time.\u201D", author: "Federico Lee", title: "Director, IPG/Kinesso" },
            { quote: "\u201CMost reliable and responsive partners.\u201D", author: "Trisha Chandra", title: "Media Manager, Uber" },
          ].map((t) => (
            <div
              key={t.author}
              className="glass-card p-5"
            >
              <p className="text-[var(--step--1)] text-text-secondary leading-relaxed italic mb-2">
                {t.quote}
              </p>
              <p className="text-[var(--step--2)] text-text-tertiary">
                {t.author} — {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — bottom left, not centered */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-text-tertiary animate-hero-delay-3">
        <div className="w-8 h-px bg-text-tertiary" />
        <span className="text-[var(--step--2)] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
