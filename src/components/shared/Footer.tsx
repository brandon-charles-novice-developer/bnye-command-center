import { ContentContainer } from "@/components/ui/ContentContainer";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-[var(--space-m)]">
      <ContentContainer className="flex flex-col sm:flex-row items-center justify-between gap-[var(--space-xs)]">
        <p className="text-sm text-text-tertiary">
          Built by Brandon Nye with Claude Code, Figma MCP, and Next.js
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/brandon-charles-novice-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-nye-adtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </ContentContainer>
    </footer>
  );
}
