import Link from "next/link";
import { projects } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export function ProjectGrid() {
  return (
    <section id="projects" className="px-8 py-[var(--space-3xl)] max-w-6xl mx-auto">
      <div className="mb-[var(--space-xl)]">
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-primary mb-[var(--space-2xs)]">
          Portfolio
        </p>
        <h2 className="text-[var(--step-3)] font-bold text-text-primary">
          Featured Projects
        </h2>
      </div>

      {/* Asymmetric grid: 7/5 → 5/7 pattern */}
      <div className="project-grid">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
            <GlassCard className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-[var(--space-s)]">
                <div>
                  <h3 className="text-[var(--step-1)] font-semibold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[var(--step--1)] text-text-tertiary">
                    {project.subtitle}
                  </p>
                </div>
                {project.demo === "interactive" && (
                  <span className="shrink-0 ml-3 inline-flex items-center gap-1.5 rounded-full bg-accent-primary/15 border border-accent-primary/30 px-3 py-1 text-[var(--step--2)] font-medium text-accent-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    Live Demo
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[var(--step--1)] text-text-secondary mb-[var(--space-s)] flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-[var(--space-s)]">
                {project.stack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>

              {/* Metrics — directional underline divider instead of hard border */}
              <div className="pt-[var(--space-s)]">
                <div className="section-divider !my-0 !mb-[var(--space-s)]" />
                <div className="grid grid-cols-4 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[var(--step-1)] font-bold text-text-primary leading-none mb-1">
                        {metric.value}
                      </p>
                      <p className="text-[var(--step--2)] text-text-tertiary">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
