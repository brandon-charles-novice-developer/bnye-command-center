import type { ArchitectureNode } from "@/data/project-content";
import { GlassCard } from "@/components/ui/GlassCard";

const typeColors: Record<string, string> = {
  service: "text-accent-primary",
  agent: "text-accent-purple",
  data: "text-accent-teal",
  integration: "text-accent-warning",
};

const typeLabels: Record<string, string> = {
  service: "Service",
  agent: "AI Agent",
  data: "Data Store",
  integration: "Integration",
};

interface ComponentGridProps {
  readonly nodes: readonly ArchitectureNode[];
}

export function ComponentGrid({ nodes }: ComponentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xs)]">
      {nodes.map((node) => (
        <GlassCard key={node.id} hover={false} className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[var(--step--2)] font-mono font-medium ${typeColors[node.type]}`}>
              {typeLabels[node.type]}
            </span>
          </div>
          <h4 className="text-[var(--step--1)] font-semibold text-text-primary mb-1">
            {node.label}
          </h4>
          <p className="text-[var(--step--2)] text-text-tertiary leading-relaxed">
            {node.description}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}
