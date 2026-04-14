import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectContent } from "@/data/project-content";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContentContainer } from "@/components/ui/ContentContainer";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | B.Nye Command Center`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <ContentContainer className="pt-24 pb-16">
      {/* Back link */}
      <Link
        href="/#projects"
        className="link-underline inline-flex items-center gap-2 text-[var(--step--1)] text-text-tertiary hover:text-text-primary transition-colors duration-300 mb-[var(--space-l)]"
      >
        <span>&larr;</span> Back to Projects
      </Link>

      {/* Header — left-aligned, not centered */}
      <div className="mb-[var(--space-xl)]">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-[var(--space-s)]">
          <div>
            <h1 className="heading-display text-[var(--step-4)] font-bold text-text-primary mb-2 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-[var(--step-1)] text-text-secondary">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary btn-spring px-5 py-2.5 rounded-xl text-[var(--step--1)] font-semibold text-white"
              >
                View Live
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-5 py-2.5 text-[var(--step--1)] font-semibold text-text-primary"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Stack + design pattern */}
        <div className="flex flex-wrap items-center gap-2 mb-[var(--space-s)]">
          {project.stack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
          <span className="ml-2 text-[var(--step--2)] text-text-tertiary font-mono">
            {project.designPattern}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--step-0)] text-text-secondary leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[var(--space-xl)]">
        {project.metrics.map((metric) => (
          <GlassCard key={metric.label} hover={false} className="text-center">
            <p className="text-[var(--step-2)] font-bold gradient-text">{metric.value}</p>
            <p className="text-[var(--step--2)] text-text-tertiary mt-1">{metric.label}</p>
          </GlassCard>
        ))}
      </div>

      {/* Project-specific showcase content */}
      {projectContent[project.slug] ? (
        <ProjectShowcase
          project={project}
          content={projectContent[project.slug]}
        />
      ) : (
        <GlassCard hover={false} className="text-center py-[var(--space-3xl)]">
          <p className="text-text-tertiary text-[var(--step-1)]">
            Case Study — Coming Soon
          </p>
        </GlassCard>
      )}
    </ContentContainer>
  );
}
