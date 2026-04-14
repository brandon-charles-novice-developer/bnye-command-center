import type { Project } from "@/data/projects";
import type { ProjectContent } from "@/data/project-content";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { FeatureSection } from "./FeatureSection";
import { ComponentGrid } from "./ComponentGrid";

interface ProjectShowcaseProps {
  readonly project: Project;
  readonly content: ProjectContent;
}

export function ProjectShowcase({ project, content }: ProjectShowcaseProps) {
  return (
    <div className="space-y-[var(--space-2xl)]">
      {/* Problem / Solution — equal split for balanced reading */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-l)]">
        <div className="lg:col-span-6">
          <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-primary mb-[var(--space-2xs)]">
            Problem
          </p>
          <p className="text-[var(--step-0)] text-text-secondary leading-relaxed">
            {content.problemStatement}
          </p>
        </div>
        <div className="lg:col-span-6">
          <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-accent-teal mb-[var(--space-2xs)]">
            Solution
          </p>
          <p className="text-[var(--step-0)] text-text-primary leading-relaxed font-medium">
            {content.solutionNarrative}
          </p>
        </div>
      </section>

      <div className="section-divider max-w-[80%] mx-auto" />

      {/* Architecture Diagram */}
      <section>
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-text-tertiary mb-[var(--space-s)]">
          Architecture
        </p>
        <ArchitectureDiagram
          diagram={content.architectureDiagram}
          accentColor={project.accentColor}
        />
      </section>

      {/* System Components */}
      <section>
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-text-tertiary mb-[var(--space-s)]">
          System Components
        </p>
        <ComponentGrid nodes={content.architectureNodes} />
      </section>

      <div className="section-divider max-w-[80%] mx-auto" />

      {/* Features + Code Snippets */}
      <section>
        <p className="text-[var(--step--2)] font-semibold tracking-[0.25em] uppercase text-text-tertiary mb-[var(--space-s)]">
          Key Engineering
        </p>
        <FeatureSection features={content.features} />
      </section>
    </div>
  );
}
