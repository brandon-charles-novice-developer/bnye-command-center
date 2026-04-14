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
          <h4 className="text-[var(--step-0)] font-semibold text-text-primary mb-[var(--space-3xs)]">
            {feature.title}
          </h4>
          <p className="text-[var(--step--1)] text-text-secondary leading-relaxed mb-[var(--space-xs)]">
            {feature.description}
          </p>
          {feature.codeSnippet && (
            <div className="relative">
              <div className="rounded-lg bg-bg-primary/80 border border-white/5 p-[var(--space-xs)] overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
                <pre className="font-mono text-[var(--step--2)] text-text-secondary leading-relaxed whitespace-pre">
                  {feature.codeSnippet}
                </pre>
              </div>
              {/* Scroll hint — right edge gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none rounded-r-lg bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />
            </div>
          )}
        </GlassCard>
      ))}
    </div>
  );
}
