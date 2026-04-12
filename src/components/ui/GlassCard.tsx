interface GlassCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass-card p-6 ${hover ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
