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
      "An enterprise-scale workflow required coordinating 12 data sources, 4 AI models, and 6 output systems with zero manual handoffs. I built an event-driven platform where 5 microservices and 4 specialized agents dispatch in parallel — research, content, outreach, and identification — completing full cycles in under 60 seconds.",
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
    title: "B.Nye Design Approval System",
    subtitle: "Two-Phase Creative Workflow with SLA Tracking",
    description:
      "Creative approval cycles were taking 3+ days because static and animated reviews happened in parallel, compliance was manual, and SLA deadlines had no business-hours awareness. I built a two-phase workflow — static review first (48h SLA), then animated review (24h SLA) — with role-based dashboards, priority-grouped workloads, and platform-agnostic integration adapters.",
    demo: "showcase",
    stack: ["React", "TypeScript", "Tailwind", "React Flow"],
    repoUrl: "https://github.com/brandon-charles-novice-developer/bnye-design-approval",
    liveUrl: "https://bnye-design-approval.vercel.app",
    metrics: [
      { label: "Workflow Phases", value: "2" },
      { label: "Platform Adapters", value: "4" },
      { label: "SLA Engine", value: "48/24h" },
      { label: "Environments", value: "3" },
    ],
    accentColor: "var(--accent-purple)",
    designPattern: "Ethical UX / SLA-Driven Workflow",
  },
  {
    slug: "retail-dashboard",
    title: "B.Nye Retail Media Dashboard",
    subtitle: "7-Level Enterprise Analytics",
    description:
      "A retail media agency managing 8 clients across 23 campaigns had no way to see both the executive summary and deal-level detail in one system. I built a dual-mode dashboard — executives see KPI tiles and conversion trends, operators drill through 7 hierarchical levels from agency to creative — with 9 composable chart components and real-time transaction feeds.",
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
    title: "B.Nye Real-Time Data Pipeline",
    subtitle: "Autonomous ETL + Fuzzy Entity Resolution",
    description:
      "Real-time data from external APIs arrives with inconsistent entity names, unpredictable update frequencies, and no guaranteed schema. I built an autonomous pipeline that resolves entities via 3-pass fuzzy matching, syncs every 5 minutes via GitHub Actions, and ran for 6 weeks with zero manual intervention — 912 autonomous commits, 95% test coverage.",
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
