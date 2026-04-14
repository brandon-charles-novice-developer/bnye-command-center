import type { Node, Edge } from "@xyflow/react";

/* ================================================================
   Career System Map — Data Structure
   ================================================================
   Topology: Core → Domains → Skills → Projects
   Boot animation proceeds tier-by-tier from center outward.
   Elliptical layout — wide horizontal spread for desktop viewing.
   Center at (900, 400), X-radius stretched ~1.8x vs Y-radius.
   ================================================================ */

export type MapNodeKind = "core" | "domain" | "skill" | "project";

export interface MapNodeData {
  readonly label: string;
  readonly subtitle?: string;
  readonly kind: MapNodeKind;
  readonly accentColor: string;
  /** Links project nodes to their portfolio page */
  readonly projectSlug?: string;
  /** 0 = core (first), 1 = domains, 2 = skills, 3 = projects */
  readonly bootTier: number;
  [key: string]: unknown;
}

export interface MapEdgeData {
  readonly label?: string;
  readonly bootTier: number;
  [key: string]: unknown;
}

// --- Elliptical position helper ---
const CX = 900;
const CY = 400;
// Aspect ratio: X is 1.8x wider than Y for a landscape oval
const ASPECT = 1.8;

function pos(
  radiusY: number,
  angleDeg: number,
): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.round(CX + radiusY * ASPECT * Math.cos(rad)),
    y: Math.round(CY + radiusY * Math.sin(rad)),
  };
}

// --- Layout radii (Y-axis, X is auto-scaled by ASPECT) ---
const DOMAIN_RADIUS = 220;
const SKILL_RADIUS = 350;
const PROJECT_RADIUS = 480;

// --- Skill fan: ±32° around parent domain angle ---
const SKILL_SPREAD = 32;

export const MAP_NODES: Node<MapNodeData>[] = [
  // ── Tier 0: Core ──
  {
    id: "core",
    type: "mapNode",
    position: { x: CX, y: CY },
    data: {
      label: "Brandon Nye",
      subtitle: "Systems Architecture",
      kind: "core",
      accentColor: "var(--accent-primary)",
      bootTier: 0,
    },
  },

  // ── Tier 1: Knowledge Domains (4 cardinal directions) ──
  {
    id: "adtech",
    type: "mapNode",
    position: pos(DOMAIN_RADIUS, 0), // top
    data: {
      label: "Enterprise AdTech",
      subtitle: "DSP / Programmatic / CTV",
      kind: "domain",
      accentColor: "var(--accent-cyan)",
      bootTier: 1,
    },
  },
  {
    id: "systems",
    type: "mapNode",
    position: pos(DOMAIN_RADIUS, 90), // right
    data: {
      label: "Systems Engineering",
      subtitle: "Full-Stack / Cloud / APIs",
      kind: "domain",
      accentColor: "var(--accent-primary)",
      bootTier: 1,
    },
  },
  {
    id: "ai",
    type: "mapNode",
    position: pos(DOMAIN_RADIUS, 180), // bottom
    data: {
      label: "AI & Automation",
      subtitle: "Agents / Orchestration / MCP",
      kind: "domain",
      accentColor: "var(--accent-purple)",
      bootTier: 1,
    },
  },
  {
    id: "data",
    type: "mapNode",
    position: pos(DOMAIN_RADIUS, 270), // left
    data: {
      label: "Data & Analytics",
      subtitle: "Pipelines / ETL / Resolution",
      kind: "domain",
      accentColor: "var(--accent-teal)",
      bootTier: 1,
    },
  },

  // ── Tier 2: Skills (3 per domain, fanned ±SKILL_SPREAD around parent) ──

  // AdTech skills (around 0° / top)
  {
    id: "skill-dsp",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 0 - SKILL_SPREAD),
    data: {
      label: "DSP Platforms",
      kind: "skill",
      accentColor: "var(--accent-cyan)",
      bootTier: 2,
    },
  },
  {
    id: "skill-trafficking",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 0),
    data: {
      label: "Creative Trafficking",
      kind: "skill",
      accentColor: "var(--accent-cyan)",
      bootTier: 2,
    },
  },
  {
    id: "skill-programmatic",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 0 + SKILL_SPREAD),
    data: {
      label: "Programmatic Strategy",
      kind: "skill",
      accentColor: "var(--accent-cyan)",
      bootTier: 2,
    },
  },

  // Systems skills (around 90° / right)
  {
    id: "skill-react",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 90 - SKILL_SPREAD),
    data: {
      label: "TypeScript / React",
      kind: "skill",
      accentColor: "var(--accent-primary)",
      bootTier: 2,
    },
  },
  {
    id: "skill-python",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 90),
    data: {
      label: "Python / FastAPI",
      kind: "skill",
      accentColor: "var(--accent-primary)",
      bootTier: 2,
    },
  },
  {
    id: "skill-aws",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 90 + SKILL_SPREAD),
    data: {
      label: "AWS / Cloud",
      kind: "skill",
      accentColor: "var(--accent-primary)",
      bootTier: 2,
    },
  },

  // AI skills (around 180° / bottom)
  {
    id: "skill-claude",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 180 - SKILL_SPREAD),
    data: {
      label: "Claude SDK / MCP",
      kind: "skill",
      accentColor: "var(--accent-purple)",
      bootTier: 2,
    },
  },
  {
    id: "skill-agents",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 180),
    data: {
      label: "Agent Orchestration",
      kind: "skill",
      accentColor: "var(--accent-purple)",
      bootTier: 2,
    },
  },
  {
    id: "skill-browser",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 180 + SKILL_SPREAD),
    data: {
      label: "Browser Automation",
      kind: "skill",
      accentColor: "var(--accent-purple)",
      bootTier: 2,
    },
  },

  // Data skills (around 270° / left)
  {
    id: "skill-pipelines",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 270 - SKILL_SPREAD),
    data: {
      label: "Pipeline Engineering",
      kind: "skill",
      accentColor: "var(--accent-teal)",
      bootTier: 2,
    },
  },
  {
    id: "skill-entity",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 270),
    data: {
      label: "Entity Resolution",
      kind: "skill",
      accentColor: "var(--accent-teal)",
      bootTier: 2,
    },
  },
  {
    id: "skill-realtime",
    type: "mapNode",
    position: pos(SKILL_RADIUS, 270 + SKILL_SPREAD),
    data: {
      label: "Real-time Processing",
      kind: "skill",
      accentColor: "var(--accent-teal)",
      bootTier: 2,
    },
  },

  // ── Tier 3: Projects (positioned between the domains they bridge) ──
  {
    id: "proj-dsp",
    type: "mapNode",
    position: pos(PROJECT_RADIUS, 40), // top-right: AdTech + Systems
    data: {
      label: "Amazon DSP Showcase",
      subtitle: "4-Layer Trafficking Pipeline",
      kind: "project",
      accentColor: "var(--accent-warning)",
      projectSlug: "amazon-dsp-showcase",
      bootTier: 3,
    },
  },
  {
    id: "proj-approval",
    type: "mapNode",
    position: pos(PROJECT_RADIUS, 340), // top-left: AdTech + Data
    data: {
      label: "Approval Engine",
      subtitle: "SLA-Driven Creative Workflow",
      kind: "project",
      accentColor: "var(--accent-purple)",
      projectSlug: "approval-engine",
      bootTier: 3,
    },
  },
  {
    id: "proj-job",
    type: "mapNode",
    position: pos(PROJECT_RADIUS, 140), // bottom-right: Systems + AI
    data: {
      label: "Job Engine",
      subtitle: "AI Agent Orchestration",
      kind: "project",
      accentColor: "var(--accent-primary)",
      projectSlug: "job-engine",
      bootTier: 3,
    },
  },
  {
    id: "proj-retail",
    type: "mapNode",
    position: pos(PROJECT_RADIUS, 220), // bottom-left: AI + Data
    data: {
      label: "Retail Dashboard",
      subtitle: "7-Level Enterprise Analytics",
      kind: "project",
      accentColor: "var(--accent-teal)",
      projectSlug: "retail-dashboard",
      bootTier: 3,
    },
  },
  {
    id: "proj-madness",
    type: "mapNode",
    position: pos(PROJECT_RADIUS, 265), // left-bottom: Data-heavy
    data: {
      label: "March Madness Pipeline",
      subtitle: "Autonomous ETL + Fuzzy Matching",
      kind: "project",
      accentColor: "var(--accent-warning)",
      projectSlug: "march-madness-agent",
      bootTier: 3,
    },
  },
];

// --- Edges ---

export const MAP_EDGES: Edge<MapEdgeData>[] = [
  // Core → Domains (tier 1)
  { id: "e-core-adtech", source: "core", target: "adtech", type: "animatedMapEdge", data: { bootTier: 1 } },
  { id: "e-core-systems", source: "core", target: "systems", type: "animatedMapEdge", data: { bootTier: 1 } },
  { id: "e-core-ai", source: "core", target: "ai", type: "animatedMapEdge", data: { bootTier: 1 } },
  { id: "e-core-data", source: "core", target: "data", type: "animatedMapEdge", data: { bootTier: 1 } },

  // Domains → Skills (tier 2)
  { id: "e-adtech-dsp", source: "adtech", target: "skill-dsp", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-adtech-trafficking", source: "adtech", target: "skill-trafficking", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-adtech-programmatic", source: "adtech", target: "skill-programmatic", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-systems-react", source: "systems", target: "skill-react", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-systems-python", source: "systems", target: "skill-python", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-systems-aws", source: "systems", target: "skill-aws", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-ai-claude", source: "ai", target: "skill-claude", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-ai-agents", source: "ai", target: "skill-agents", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-ai-browser", source: "ai", target: "skill-browser", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-data-pipelines", source: "data", target: "skill-pipelines", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-data-entity", source: "data", target: "skill-entity", type: "animatedMapEdge", data: { bootTier: 2 } },
  { id: "e-data-realtime", source: "data", target: "skill-realtime", type: "animatedMapEdge", data: { bootTier: 2 } },

  // Skills → Projects (tier 3, cross-cutting)
  { id: "e-dsp-projdsp", source: "skill-dsp", target: "proj-dsp", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-trafficking-projdsp", source: "skill-trafficking", target: "proj-dsp", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-aws-projdsp", source: "skill-aws", target: "proj-dsp", type: "animatedMapEdge", data: { bootTier: 3 } },

  { id: "e-trafficking-projappr", source: "skill-trafficking", target: "proj-approval", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-react-projappr", source: "skill-react", target: "proj-approval", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-programmatic-projappr", source: "skill-programmatic", target: "proj-approval", type: "animatedMapEdge", data: { bootTier: 3 } },

  { id: "e-claude-projjob", source: "skill-claude", target: "proj-job", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-agents-projjob", source: "skill-agents", target: "proj-job", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-python-projjob", source: "skill-python", target: "proj-job", type: "animatedMapEdge", data: { bootTier: 3 } },

  { id: "e-pipelines-projretail", source: "skill-pipelines", target: "proj-retail", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-react-projretail", source: "skill-react", target: "proj-retail", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-realtime-projretail", source: "skill-realtime", target: "proj-retail", type: "animatedMapEdge", data: { bootTier: 3 } },

  { id: "e-browser-projmad", source: "skill-browser", target: "proj-madness", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-entity-projmad", source: "skill-entity", target: "proj-madness", type: "animatedMapEdge", data: { bootTier: 3 } },
  { id: "e-pipelines-projmad", source: "skill-pipelines", target: "proj-madness", type: "animatedMapEdge", data: { bootTier: 3 } },
];
