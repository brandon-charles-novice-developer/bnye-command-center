"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   ProjectGrid — Bento layout with visual hierarchy.
   ================================================================
   Tile map (12-column grid):
     Row 1-2:  [Amazon DSP — 8col, 2row]  [Approval — 4col]
                                           [Job Engine — 4col]
     Row 3:    [Retail — 5col]  [March Madness — 7col]
   ================================================================ */

// Bento grid placement per project slug
const gridPlacement: Record<string, string> = {
  "amazon-dsp-showcase": "md:col-span-8 md:row-span-2",
  "approval-engine": "md:col-span-4",
  "job-engine": "md:col-span-4",
  "retail-dashboard": "md:col-span-5",
  "march-madness-agent": "md:col-span-7",
};

// Flagship tile gets heavy glass, others get medium
const glassWeight: Record<string, string> = {
  "amazon-dsp-showcase": "glass-heavy",
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const EASE_VERCEL: [number, number, number, number] = [0.33, 0.12, 0.15, 1.0];

const tileVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_VERCEL,
    },
  },
};

export function ProjectGrid() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="projects" className="px-8 py-[var(--space-3xl)] max-w-7xl mx-auto">
      <div className="mb-[var(--space-xl)]">
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-primary mb-[var(--space-2xs)]">
          Portfolio
        </p>
        <h2
          className="text-[var(--step-3)] font-bold text-text-primary"
          style={{ letterSpacing: "var(--tracking-heading)" }}
        >
          Featured Projects
        </h2>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-12 gap-[var(--space-s)]"
        style={{ gridAutoRows: "minmax(220px, auto)" }}
        variants={staggerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {projects.map((project) => {
          const placement = gridPlacement[project.slug] ?? "md:col-span-6";
          const glass = glassWeight[project.slug] ?? "glass-medium";
          const isFlagship = project.slug === "amazon-dsp-showcase";

          return (
            <motion.div
              key={project.slug}
              className={placement}
              variants={tileVariants}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full group">
                <div
                  className={`${glass} relative h-full p-[var(--space-m)] flex flex-col overflow-hidden`}
                  style={{ borderRadius: "clamp(12px, 1.2vw, 20px)" }}
                >
                  {/* Accent top-edge */}
                  <div
                    className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                      opacity: 0.4,
                    }}
                  />

                  {/* Header */}
                  <div className="mb-auto">
                    <div className="flex items-start justify-between mb-[var(--space-2xs)]">
                      <h3
                        className="text-[var(--step-0)] font-semibold text-text-primary leading-tight"
                        style={{ letterSpacing: "var(--tracking-heading)" }}
                      >
                        {project.title}
                      </h3>
                      {project.demo === "interactive" && (
                        <span className="shrink-0 ml-3 inline-flex items-center gap-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 px-3 py-1 text-[var(--step--2)] font-medium text-accent-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--step--1)] text-text-tertiary mb-[var(--space-s)]">
                      {project.subtitle}
                    </p>

                    {/* Description — flagship only, truncated for others */}
                    {isFlagship && (
                      <p className="text-[var(--step--1)] text-text-secondary leading-relaxed mb-[var(--space-s)] line-clamp-3">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-[var(--space-s)]">
                    {project.stack.slice(0, isFlagship ? 6 : 4).map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>

                  {/* Metrics bar */}
                  <div className="pt-[var(--space-xs)]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className={`grid gap-3 ${isFlagship ? "grid-cols-4" : "grid-cols-2"}`}>
                      {project.metrics.slice(0, isFlagship ? 4 : 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="text-[var(--step-0)] font-bold text-text-primary leading-none mb-0.5">
                            {metric.value}
                          </p>
                          <p className="text-[var(--step--2)] text-text-tertiary">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow — subtle accent wash */}
                  <div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity group-hover:opacity-[0.06]"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${project.accentColor} 0%, transparent 70%)`,
                      transitionDuration: "var(--duration-slow)",
                      transitionTimingFunction: "var(--ease-out)",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
