const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  Python: { bg: "bg-accent-purple/15", border: "border-accent-purple/40", text: "text-accent-purple" },
  React: { bg: "bg-accent-primary/15", border: "border-accent-primary/40", text: "text-accent-primary" },
  "Claude SDK": { bg: "bg-accent-cyan/15", border: "border-accent-cyan/40", text: "text-accent-cyan" },
  Tailwind: { bg: "bg-accent-teal/15", border: "border-accent-teal/40", text: "text-accent-teal" },
  TypeScript: { bg: "bg-accent-warning/15", border: "border-accent-warning/40", text: "text-accent-warning" },
  MCP: { bg: "bg-accent-cyan/15", border: "border-accent-cyan/40", text: "text-accent-cyan" },
  Vite: { bg: "bg-accent-purple/15", border: "border-accent-purple/40", text: "text-accent-purple" },
  Supabase: { bg: "bg-accent-teal/15", border: "border-accent-teal/40", text: "text-accent-teal" },
  Docker: { bg: "bg-accent-primary/15", border: "border-accent-primary/40", text: "text-accent-primary" },
  Playwright: { bg: "bg-accent-teal/15", border: "border-accent-teal/40", text: "text-accent-teal" },
  Recharts: { bg: "bg-accent-cyan/15", border: "border-accent-cyan/40", text: "text-accent-cyan" },
  "GitHub Actions": { bg: "bg-accent-warning/15", border: "border-accent-warning/40", text: "text-accent-warning" },
  "NCAA API": { bg: "bg-accent-error/15", border: "border-accent-error/40", text: "text-accent-error" },
};

const defaultColor = { bg: "bg-white/10", border: "border-white/20", text: "text-text-secondary" };

interface BadgeProps {
  readonly label: string;
}

export function Badge({ label }: BadgeProps) {
  const color = colorMap[label] ?? defaultColor;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${color.bg} ${color.border} ${color.text}`}
    >
      {label}
    </span>
  );
}
