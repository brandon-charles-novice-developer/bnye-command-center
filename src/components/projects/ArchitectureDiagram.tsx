import { GlassCard } from "@/components/ui/GlassCard";

interface ArchitectureDiagramProps {
  readonly diagram: string;
  readonly accentColor: string;
}

export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  return (
    <div className="relative">
      <GlassCard hover={false} className="overflow-x-auto" style={{ scrollbarWidth: "thin" as const }}>
        <pre className="font-mono text-[var(--step--2)] text-text-secondary leading-relaxed whitespace-pre overflow-x-auto">
          {diagram}
        </pre>
      </GlassCard>
      {/* Scroll hint — right edge gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none rounded-r-[inherit] bg-gradient-to-l from-[var(--bg-glass)] to-transparent" />
    </div>
  );
}
