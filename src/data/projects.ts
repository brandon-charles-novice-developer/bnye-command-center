export type ProjectDemo = "interactive" | "showcase";

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly demo: ProjectDemo;
  readonly stack: readonly string[];
  readonly repoUrl: string;
  readonly liveUrl: string;
  readonly metrics: readonly { readonly label: string; readonly value: string }[];
  readonly accentColor: string;
  readonly designPattern: string;
}

export const projects: readonly Project[] = [
  {
    slug: "job-engine",
    title: "B.Nye Job Engine",
    subtitle: "AI Agent Orchestration Platform",
    description:
      "End-to-end event-driven orchestration platform with 5 microservices, 4 specialized AI agents, and a 12-source parallel discovery engine. Coordinates research, content generation, and multi-system integration in under 60 seconds.",
    demo: "interactive",
    stack: ["Python", "Claude SDK", "MCP", "React", "Playwright"],
    repoUrl: "https://github.com/brandon-charles-novice-developer/bnye-pipeline-intelligence",
    liveUrl: "https://bnye-pipeline-intelligence.vercel.app",
    metrics: [
      { label: "Lines of Code", value: "20K+" },
      { label: "AI Agents", value: "4" },
      { label: "Data Sources", value: "12" },
      { label: "Test Files", value: "25" },
    ],
    accentColor: "var(--accent-primary)",
    designPattern: "Generative UI + Agentic AI",
  },
  {
    slug: "approval-engine",
    title: "B.Nye Approval Engine",
    subtitle: "Multi-Stage Workflow Orchestration",
    description:
      "Full-stack approval orchestration engine with an 8-state workflow, 4 autonomous Claude Agent SDK workers, XML protocol generation with compliance wrapping, and a platform-agnostic adapter pattern supporting multi-system integration.",
    demo: "showcase",
    stack: ["Python", "Claude SDK", "React", "Supabase", "Docker"],
    repoUrl: "https://github.com/brandon-charles-novice-developer/bnye-approval-engine",
    liveUrl: "https://bnye-approval-engine.vercel.app",
    metrics: [
      { label: "Workflow States", value: "8" },
      { label: "Platform Adapters", value: "4" },
      { label: "MCP Tools", value: "22" },
      { label: "Agent Workers", value: "4" },
    ],
    accentColor: "var(--accent-purple)",
    designPattern: "Agentic AI / AX Design",
  },
  {
    slug: "retail-dashboard",
    title: "B.Nye Retail Media Dashboard",
    subtitle: "7-Level Enterprise Analytics",
    description:
      "Enterprise analytics dashboard with 7-level hierarchical drill-down, dual executive/operator modes, real-time transaction feeds, and 9 composable chart components spanning agency, client, campaign, and creative dimensions.",
    demo: "showcase",
    stack: ["React", "Recharts", "Tailwind", "Vite"],
    repoUrl: "https://github.com/brandon-charles-novice-developer/bnye-retail-dashboard",
    liveUrl: "https://bnye-retail-dashboard.vercel.app",
    metrics: [
      { label: "Drill-Down Levels", value: "7" },
      { label: "Chart Components", value: "9" },
      { label: "View Modes", value: "2" },
      { label: "Data Dimensions", value: "12" },
    ],
    accentColor: "var(--accent-teal)",
    designPattern: "Semantic Zoom + Progressive Disclosure",
  },
  {
    slug: "march-madness-agent",
    title: "B.Nye March Madness Agent",
    subtitle: "Real-Time Data Pipeline & Autonomous CI/CD",
    description:
      "Automated real-time data pipeline with live API integration, fuzzy entity resolution for name matching, GitHub Actions-driven 5-minute autonomous sync cycles, and an interactive dashboard with live score animations.",
    demo: "showcase",
    stack: ["Python", "Playwright", "GitHub Actions", "NCAA API"],
    repoUrl: "https://github.com/brandon-charles-novice-developer/bnye-march-madness",
    liveUrl: "https://bnye-march-madness.vercel.app",
    metrics: [
      { label: "Auto Commits", value: "912" },
      { label: "Sync Interval", value: "5 min" },
      { label: "Entity Pool", value: "80+" },
      { label: "Test Coverage", value: "95%" },
    ],
    accentColor: "var(--accent-warning)",
    designPattern: "Real-Time Data + Functional Micro-Interactions",
  },
] as const;
