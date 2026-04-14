interface GlassCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
  readonly style?: React.CSSProperties;
}

export function GlassCard({ children, className = "", hover = true, style }: GlassCardProps) {
  return (
    <div
      className={`glass-card p-[var(--space-s)] md:p-[var(--space-m)] ${hover ? "cursor-pointer" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
