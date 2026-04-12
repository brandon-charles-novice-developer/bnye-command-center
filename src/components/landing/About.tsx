import { GlassCard } from "@/components/ui/GlassCard";

const highlights = [
  { value: "$50M+", label: "Revenue Generated", detail: "3.5 years, single enterprise account" },
  { value: "7", label: "Client Testimonials", detail: "4 orgs, unsolicited" },
  { value: "4", label: "Production AI Systems", detail: "Agent SDK, MCP, microservices" },
  { value: "20K+", label: "Lines Shipped", detail: "Python, TypeScript, React" },
];

export function About() {
  return (
    <section id="about" className="px-8 py-[var(--space-3xl)] max-w-6xl mx-auto">
      {/* Offset two-column layout (anti-AI: visual tension) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-xl)] items-start">
        {/* Left — narrative, pushed down slightly on desktop */}
        <div className="lg:col-span-7">
          <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-cyan mb-[var(--space-2xs)]">
            About
          </p>
          <h2 className="text-[var(--step-3)] font-bold text-text-primary mb-[var(--space-m)]">
            Enterprise sales meets
            <br />
            AI engineering
          </h2>
          <div className="space-y-[var(--space-s)] text-[var(--step-0)] text-text-secondary leading-relaxed">
            <p>
              8+ years on both sides of digital advertising — agency-side
              managing portfolios for AT&amp;T, adidas, and Disney+, then
              vendor-side running the largest enterprise account at a
              programmatic ad platform.
            </p>
            <p>
              When AI tools matured, I didn&apos;t just adopt them — I built
              production systems. Autonomous agents that orchestrate multi-step
              workflows. MCP servers that bridge models to real APIs.
              Event-driven microservices that run 24/7.
            </p>
            <p className="text-text-tertiary text-[var(--step--1)]">
              This portfolio is itself a product of that capability: designed in
              Figma via MCP, built with Next.js, deployed on Vercel — all
              orchestrated through Claude Code.
            </p>
          </div>
        </div>

        {/* Right — metrics, offset up on desktop for tension */}
        <div className="lg:col-span-5 lg:-mt-8 flex flex-col gap-[var(--space-xs)]">
          {highlights.map((item) => (
            <GlassCard key={item.label} hover={false}>
              <div className="flex items-baseline gap-[var(--space-s)]">
                <span className="text-[var(--step-3)] font-bold gradient-text leading-none shrink-0">
                  {item.value}
                </span>
                <div>
                  <p className="text-[var(--step--1)] font-medium text-text-primary">
                    {item.label}
                  </p>
                  <p className="text-[var(--step--2)] text-text-tertiary">
                    {item.detail}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
