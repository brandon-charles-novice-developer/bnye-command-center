import { GlassCard } from "@/components/ui/GlassCard";

interface ArchitectureDiagramProps {
  readonly diagram: string;
  readonly accentColor: string;
}

export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  return (
    <GlassCard hover={false} className="overflow-x-auto">
      <pre className="font-mono text-[var(--step--2)] text-text-secondary leading-relaxed whitespace-pre overflow-x-auto">
        {diagram}
      </pre>
    </GlassCard>
  );
}
