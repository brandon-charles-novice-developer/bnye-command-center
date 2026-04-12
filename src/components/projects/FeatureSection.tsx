import type { FeatureCard } from "@/data/project-content";
import { GlassCard } from "@/components/ui/GlassCard";

interface FeatureSectionProps {
  readonly features: readonly FeatureCard[];
}

export function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <div className="space-y-[var(--space-m)]">
      {features.map((feature) => (
        <GlassCard key={feature.title} hover={false}>
          <h4 className="text-[var(--step-0)] font-semibold text-text-primary mb-2">
            {feature.title}
          </h4>
          <p className="text-[var(--step--1)] text-text-secondary leading-relaxed mb-4">
            {feature.description}
          </p>
          {feature.codeSnippet && (
            <div className="rounded-lg bg-bg-primary/80 border border-white/5 p-4 overflow-x-auto">
              <pre className="font-mono text-[var(--step--2)] text-text-secondary leading-relaxed whitespace-pre">
                {feature.codeSnippet}
              </pre>
            </div>
          )}
        </GlassCard>
      ))}
    </div>
  );
}
