"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EASE_VERCEL: [number, number, number, number] = [0.33, 0.12, 0.15, 1.0];

const highlights = [
  { value: "$50M+", label: "Revenue Generated", detail: "3.5 years, single enterprise account" },
  { value: "7", label: "Client Testimonials", detail: "4 orgs, unsolicited" },
  { value: "4", label: "Production AI Systems", detail: "Agent SDK, MCP, microservices" },
  { value: "20K+", label: "Lines Shipped", detail: "Python, TypeScript, React" },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_VERCEL },
  },
};

export function About() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="about" className="px-8 py-[var(--space-3xl)] max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-xl)] items-start"
        variants={containerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Left — narrative */}
        <motion.div className="lg:col-span-7" variants={itemVariants}>
          <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-cyan mb-[var(--space-2xs)]">
            About
          </p>
          <h2
            className="text-[var(--step-3)] font-bold text-text-primary mb-[var(--space-m)]"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "var(--tracking-heading)",
            }}
          >
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
        </motion.div>

        {/* Right — metrics, offset up on desktop for tension */}
        <div className="lg:col-span-5 lg:-mt-8 flex flex-col gap-[var(--space-xs)]">
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              className="glass-light p-5"
              style={{ borderRadius: 12 }}
              variants={itemVariants}
            >
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
