// Per-project showcase content — architecture, features, code snippets
// Separated from projects.ts to keep metadata lean

export interface ArchitectureNode {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly type: "service" | "agent" | "data" | "integration";
}

export interface FeatureCard {
  readonly title: string;
  readonly description: string;
  readonly codeSnippet?: string;
  readonly language?: string;
}

export interface ProjectContent {
  readonly slug: string;
  readonly headline: string;
  readonly problemStatement: string;
  readonly solutionNarrative: string;
  readonly architectureNodes: readonly ArchitectureNode[];
  readonly features: readonly FeatureCard[];
  readonly architectureDiagram: string; // ASCII/text diagram
}

export const projectContent: Record<string, ProjectContent> = {
  "approval-engine": {
    slug: "approval-engine",
    headline: "Amazon's #1 LOB said our approvals were too slow. I built the system that fixed it — and it went company-wide.",
    problemStatement:
      "Amazon's largest line of business flagged creative approvals as a bottleneck — too slow, too hard to manage. Static and animated reviews ran in parallel with no dependency chain. Designers were building animated demos for creatives that hadn't even passed static review. SLA deadlines ignored business hours. Every day a creative sat in approval limbo was a day of lost revenue from the campaign flight. This wasn't a technology problem — it was a process problem that no one in my role was expected to solve.",
    solutionNarrative:
      "I took action anyway. I built a two-phase approval system from scratch: static review first (48h SLA), animated review only after static approval (24h SLA per revision). SLA calculations respect business hours (M-F, 9am-6pm EST). Priority grouping by business impact ensures the team works on revenue-critical creatives first. The system turned a client complaint into a competitive advantage — it was rolled out company-wide and became a core part of the white-glove service model that retains enterprise accounts.",
    architectureNodes: [
      { id: "workflow", label: "Approval Workflow", description: "8-state machine: Draft → Review → Approved → Integrated → Active", type: "service" },
      { id: "content-dir", label: "Content Director", description: "Claude Sonnet — generates optimized content from briefs", type: "agent" },
      { id: "compliance", label: "Compliance Agent", description: "Claude Haiku — validates against platform specs and brand safety", type: "agent" },
      { id: "integration-mgr", label: "Integration Manager", description: "Claude Sonnet — orchestrates multi-platform uploads and audit lifecycle", type: "agent" },
      { id: "pipeline-analyst", label: "Pipeline Analyst", description: "Claude Haiku — fee stack analysis and path optimization", type: "agent" },
      { id: "adapters", label: "Platform Adapters", description: "A/B/C/D — abstract base class with per-platform spec validation", type: "integration" },
      { id: "protocol", label: "XML Protocol Engine", description: "Generates spec-compliant XML with compliance wrapping and measurement tags", type: "service" },
      { id: "db", label: "PostgreSQL + RLS", description: "6 tables with row-level security, audit trail on every state transition", type: "data" },
    ],
    features: [
      {
        title: "8-State Approval Workflow",
        description: "Every transition creates an audit event with reviewer, timestamp, and notes. Invalid transitions are rejected at the state machine level.",
        codeSnippet: `class ApprovalWorkflow:
    TRANSITIONS = {
        "DRAFT": ["PENDING_REVIEW"],
        "PENDING_REVIEW": ["APPROVED", "REVISION_REQUESTED"],
        "REVISION_REQUESTED": ["PENDING_REVIEW"],
        "APPROVED": ["INTEGRATED"],
        "INTEGRATED": ["ACTIVE", "PAUSED"],
        "ACTIVE": ["PAUSED", "ARCHIVED"],
        "PAUSED": ["ACTIVE", "ARCHIVED"],
    }

    async def transition(self, item_id, to_status, reviewer, notes):
        current = await self.get_status(item_id)
        if to_status not in self.TRANSITIONS.get(current, []):
            raise InvalidTransition(f"{current} → {to_status}")
        await self.db.insert_event(item_id, current, to_status, reviewer, notes)
        return await self.db.update_status(item_id, to_status)`,
        language: "python",
      },
      {
        title: "Platform Adapter Pattern",
        description: "Abstract base class with per-platform implementations. Each adapter validates specs, formats payloads, and handles audit status polling independently.",
        codeSnippet: `class PlatformAdapter:
    name: str

    async def upload(self, asset_url, protocol_url, metadata) -> UploadResult:
        \"\"\"Validate specs, format payload, submit to platform.\"\"\"
        ...

    async def check_audit(self, item_id: str) -> AuditStatus:
        \"\"\"Poll platform for review status.\"\"\"
        ...

# Platform A — strict specs, certified supply chain
class PlatformA(PlatformAdapter):
    name = "Platform A"
    MAX_DURATION = 30
    MIN_RESOLUTION = (1920, 1080)`,
        language: "python",
      },
      {
        title: "22 MCP Tools",
        description: "Each agent accesses the system through a structured MCP tool server — approval actions, content database queries, protocol generation, and pipeline analysis all exposed as typed tools.",
      },
      {
        title: "Compliance Automation",
        description: "The Compliance Agent validates every submission against platform-specific requirements, measurement vendor configuration, and brand safety rules before allowing state transitions.",
      },
    ],
    architectureDiagram: `┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Content    │────▶│   Approval    │────▶│  Integration │
│   Director   │     │   Workflow    │     │   Manager    │
│  (Sonnet)    │     │  (8 states)   │     │  (Sonnet)    │
└─────────────┘     └──────┬───────┘     └──────┬──────┘
                           │                     │
                    ┌──────▼───────┐     ┌──────▼──────┐
                    │  Compliance   │     │  Platform    │
                    │    Agent      │     │  Adapters    │
                    │  (Haiku)      │     │  A │ B │ C   │
                    └──────────────┘     └─────────────┘
                           │                     │
                    ┌──────▼───────┐     ┌──────▼──────┐
                    │   Protocol    │     │  Pipeline    │
                    │   Engine      │     │  Analyst     │
                    │  (XML gen)    │     │  (Haiku)     │
                    └──────────────┘     └─────────────┘`,
  },

  "retail-dashboard": {
    slug: "retail-dashboard",
    headline: "A retail media agency couldn't see the forest and the trees. I built both views.",
    problemStatement:
      "Executives needed campaign performance at a glance — ROAS, conversion trends, sales lift. Campaign managers needed to drill into individual deal-level creative performance without losing the bigger picture. No single tool served both audiences, so decisions were slow and context was constantly lost.",
    solutionNarrative:
      "I built a dual-mode dashboard. Executives see KPI tiles, conversion charts, and shopper insights. Operators drill through 7 hierarchical levels — agency to creative — with breadcrumb navigation and contextual metrics at every level. Same data source, two cognitive loads. The mode toggle switches the entire interface in one click.",
    architectureNodes: [
      { id: "executive", label: "Executive Mode", description: "KPI scoreboard, conversion charts, AI insight cards, live transaction feed", type: "service" },
      { id: "manager", label: "Operator Mode", description: "7-level drill-down with breadcrumb nav and contextual metrics", type: "service" },
      { id: "charts", label: "9 Chart Components", description: "Recharts: area, line, bar, composed — all with custom tooltips and responsive containers", type: "integration" },
      { id: "insights", label: "Shopper Insights", description: "Category analysis, basket association, loyalty segments, switching behavior, propensity curves", type: "data" },
      { id: "measurement", label: "Sales Lift Engine", description: "Incremental vs. expected vs. observed — multi-metric measurement visualization", type: "service" },
      { id: "feed", label: "Live Transaction Feed", description: "Real-time purchase events with animated entry, retailer badges, and conversion attribution", type: "data" },
    ],
    features: [
      {
        title: "7-Level Hierarchical Drill-Down",
        description: "Click any row to drill into the next level. Breadcrumb navigation preserves context. Each level has contextual KPIs and a detail table.",
        codeSnippet: `// Route structure — nested dynamic segments
/executive                           // KPIs, charts, live feed
/manager                             // Client grid + overview
/manager/:clientId                   // Campaigns for client
/manager/:clientId/:campaignId       // Ad groups
/manager/:clientId/.../:adGroupId    // Packages
/manager/:clientId/.../:packageId    // Deals
/manager/:clientId/.../:dealId       // Creatives
/manager/:clientId/.../:creativeId   // Geo breakdown`,
        language: "typescript",
      },
      {
        title: "Dual Executive/Operator Modes",
        description: "A mode toggle switches the entire interface between high-level executive dashboards and granular operational views — same data, different cognitive load.",
      },
      {
        title: "Composable Chart System",
        description: "9 Recharts components with shared design tokens, custom tooltips, gradient fills, and responsive containers. Dark theme optimized with rgba grid lines.",
      },
      {
        title: "Glassmorphism UI",
        description: "Glass card surfaces, gradient mesh backgrounds, animated count-up metrics, and fade-in transitions throughout the dashboard.",
      },
    ],
    architectureDiagram: `┌─────────────────────────────────────────┐
│          Mode Toggle (Exec / Ops)        │
├────────────────┬────────────────────────┤
│   Executive    │      Operator Mode      │
│     Mode       │                          │
│ ┌────────────┐ │  Agency ▸ Client ▸ ...  │
│ │ KPI Tiles  │ │  ┌─────────────────┐    │
│ │ Charts     │ │  │ Level 1: Client │    │
│ │ AI Cards   │ │  │ Level 2: Campaign│   │
│ │ Live Feed  │ │  │ Level 3: AdGroup │   │
│ └────────────┘ │  │ Level 4: Package │   │
│                │  │ Level 5: Deal    │   │
│  Measurement   │  │ Level 6: Creative│   │
│  Sales Lift    │  │ Level 7: Geo     │   │
│  Insights      │  └─────────────────┘    │
└────────────────┴────────────────────────┘`,
  },

  "march-madness-agent": {
    slug: "march-madness-agent",
    headline: "External API data was inconsistent and unstructured. I built a pipeline that ran for 6 weeks unattended.",
    problemStatement:
      "Real-time data from external APIs arrived with inconsistent entity names, unpredictable update frequencies, and no guaranteed schema. The system needed to resolve entities across sources, track state changes, and serve a live dashboard — autonomously, for 6 weeks, with zero manual intervention.",
    solutionNarrative:
      "I built an automated sync pipeline that polls every 5 minutes via GitHub Actions, resolves entity names using 3-pass fuzzy matching (exact name → last name + team → normalized variants), tracks elimination state, and generates dashboard-ready JSON. 912 autonomous commits over 6 weeks. Zero manual fixes required.",
    architectureNodes: [
      { id: "api", label: "NCAA API Client", description: "Fetches game results and box scores per round", type: "integration" },
      { id: "matcher", label: "Fuzzy Entity Resolver", description: "3-pass name matching: exact → last name + team → normalized (strips Jr/Sr/III)", type: "service" },
      { id: "scorer", label: "Score Engine", description: "Merges round scores, tracks live vs. final, handles elimination detection", type: "service" },
      { id: "feed", label: "Feed Builder", description: "Generates leaderboard.json, games.json, meta.json from raw scores", type: "service" },
      { id: "ci", label: "GitHub Actions CI/CD", description: "5-minute cron sync — 912 autonomous commits over tournament duration", type: "integration" },
      { id: "dashboard", label: "Live Dashboard", description: "Vanilla JS SPA with score flash animations, expandable detail panels, projected finish", type: "service" },
    ],
    features: [
      {
        title: "Fuzzy Entity Resolution",
        description: "NCAA box scores use inconsistent player name formats. A 3-pass matching algorithm resolves entities across sources without manual mapping.",
        codeSnippet: `def match_player(box_name: str, drafted: list[Player]) -> Player | None:
    # Pass 1: Exact full name
    for p in drafted:
        if normalize(p.name) == normalize(box_name):
            return p

    # Pass 2: Last name + team
    box_last = strip_suffix(box_name.split()[-1])  # Jr, Sr, II, III
    for p in drafted:
        p_last = strip_suffix(p.name.split()[-1])
        if box_last == p_last and teams_match(box_team, p.team):
            return p

    # Pass 3: Normalized team variants
    # "Miami (FL)" == "Miami FL" == "Miami"
    return fuzzy_team_match(box_name, box_team, drafted)`,
        language: "python",
      },
      {
        title: "Autonomous CI/CD Pipeline",
        description: "GitHub Actions runs every 5 minutes during tournament windows. 912 commits generated autonomously — zero manual intervention from first tip to championship.",
      },
      {
        title: "Live Score Animations",
        description: "Dashboard detects score changes between fetches and triggers CSS animations — pink highlight flash on update, float-up delta badges (+X points), and projected finish recalculation.",
      },
      {
        title: "Elimination Tracking",
        description: "When a team loses, all drafted players from that team are marked eliminated. The pipeline detects this from game results and updates the leaderboard in real-time.",
      },
    ],
    architectureDiagram: `NCAA API (box scores)
    │
    ▼
┌──────────────┐    ┌──────────────┐
│  Fuzzy Entity │───▶│ Score Engine  │
│   Resolver    │    │ (live/final)  │
└──────────────┘    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ Feed Builder  │
                    │ (JSON gen)    │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        leaderboard    games.json   meta.json
           .json           │
              │            │
              ▼            ▼
        ┌─────────────────────┐
        │   Live Dashboard     │
        │  (score animations)  │
        └─────────────────────┘
              ▲
              │
        GitHub Actions (5-min cron)
        912 autonomous commits`,
  },

  "job-engine": {
    slug: "job-engine",
    headline: "12 data sources, 4 AI models, 6 output systems. No existing tool could coordinate them. So I built one.",
    problemStatement:
      "Running an enterprise-scale workflow across 12 data sources, 4 AI models, and 6 output systems required coordination that no existing tool provided. Each step — research, content generation, outreach, and pipeline tracking — was manual, sequential, and error-prone. The system needed to run autonomously, learn from outcomes, and improve without manual tuning.",
    solutionNarrative:
      "I built an event-driven microservices platform. 5 independent services communicate through an append-only event log with file-level locking. 4 specialized AI agents dispatch in parallel with 5-second target SLA and typed input/output contracts. A 12-source discovery engine aggregates, deduplicates, and scores results — then feeds outcomes back into scoring weights. The system gets smarter every cycle.",
    architectureNodes: [
      { id: "scanner", label: "Scout Scanner", description: "12-source parallel search with ecosystem gating and 9-criteria scoring", type: "service" },
      { id: "sentinel", label: "Gmail Sentinel", description: "Real-time email monitoring with NLP classification and pipeline matching", type: "service" },
      { id: "brief", label: "Morning Brief", description: "Daily aggregator — priority queue generation from overnight events", type: "service" },
      { id: "alerter", label: "Decay Alerter", description: "Pipeline stagnation detection — ghosted, dormant, stale classifications", type: "service" },
      { id: "control", label: "Remote Control", description: "HTTP/WebSocket server for webhook integration and service management", type: "service" },
      { id: "sid", label: "Sid (Research Agent)", description: "Sonnet — company deep-dive, JD analysis, comp benchmarking", type: "agent" },
      { id: "judy", label: "Judy (Content Agent)", description: "Opus — cover letter generation, voice-validated output", type: "agent" },
      { id: "reggie", label: "Reggie (Outreach Agent)", description: "Sonnet — contact research, outreach drafting, follow-up cadence", type: "agent" },
      { id: "hm", label: "HM Researcher", description: "Sonnet — hiring manager identification, org chart mapping", type: "agent" },
      { id: "events", label: "Event Log", description: "Append-only JSONL with fcntl file locking — 8 event types", type: "data" },
      { id: "pipeline", label: "Pipeline State", description: "JSON with lifecycle stages, trajectory signals, outcome tracking", type: "data" },
    ],
    features: [
      {
        title: "Event-Driven Microservices",
        description: "5 independent services communicate through an append-only event log. File-level locking ensures safe concurrent writes. Each service reads events it cares about and writes its own.",
        codeSnippet: `# Append-only event log with file locking
class EventLog:
    def append(self, event_type: str, payload: dict):
        event = {
            "id": uuid4().hex,
            "type": event_type,  # NEW_OPPORTUNITY | EMAIL_CLASSIFIED | STATUS_CHANGED
            "timestamp": datetime.utcnow().isoformat(),
            "payload": payload,
        }
        with FileLock(self.path):
            with open(self.path, "a") as f:
                f.write(json.dumps(event) + "\\n")`,
        language: "python",
      },
      {
        title: "4 Parallel AI Agents",
        description: "Research, content, outreach, and identification agents dispatch simultaneously with 5-second target SLA. Each agent has typed inputs/outputs and domain-specific tools via MCP.",
      },
      {
        title: "12-Source Discovery Engine",
        description: "Aggregates results from Indeed, Dice, LinkedIn, Firecrawl, ATS boards, career pages, industry boards, and more. Deduplicates across sources and applies learned scoring modifiers from outcome feedback.",
      },
      {
        title: "Learned Optimization",
        description: "Outcome signals (which approaches converted, which were ghosted) feed back into scoring weights. The system gets smarter with every cycle — no manual tuning required.",
      },
    ],
    architectureDiagram: `┌─────────────────────────────────────────────────┐
│              12-Source Discovery                  │
│  Indeed │ Dice │ LinkedIn │ Firecrawl │ ATS │ ...│
└────────────────────┬────────────────────────────┘
                     │
              ┌──────▼──────┐
              │ Scout Scanner │──▶ Event Log (JSONL)
              │ (score+dedup) │         │
              └──────────────┘         │
                                ┌──────▼──────┐
    ┌───────────────────────────│  Pipeline    │
    │         Parallel          │   State      │
    │        Agent Dispatch     └──────────────┘
    │                │
┌───▼──┐ ┌────▼───┐ ┌───▼──┐ ┌────▼────┐
│ Sid  │ │  Judy  │ │Reggie│ │   HM    │
│Rsrch │ │Content │ │Outrch│ │Identify │
└──────┘ └────────┘ └──────┘ └─────────┘
    │         │          │         │
    └─────────┴──────────┴─────────┘
              │
       ┌──────▼──────┐    ┌──────────────┐
       │ Gmail       │    │ Decay        │
       │ Sentinel    │    │ Alerter      │
       └─────────────┘    └──────────────┘
              │                   │
              └────────┬──────────┘
                       ▼
               Morning Brief
            (daily priority queue)`,
  },
  "amazon-dsp-showcase": {
    slug: "amazon-dsp-showcase",
    headline: "Premium creatives took 4+ hours to traffic. I built the system that does it in 60 seconds.",
    problemStatement:
      "High-impact creative formats — Runway, Venti, Panorama, Billboard — couldn't use Amazon DSP's standard bulk upload tools. Every campaign required manual tag manipulation (stripping IAS pixels, injecting Amazon macros), vendor-specific viewability wrapping, and error-prone handoffs between creative operations, ad ops, and campaign management teams. A single campaign activation took 3-5 hours across multiple people. At 16 LOBs, this didn't scale.",
    solutionNarrative:
      "I designed a 4-layer integration architecture: a FastAPI creative processing engine handles tag transformation (IAS removal, Amazon macro injection, viewability wrapping). AWS Step Functions orchestrate the pipeline — 5 Lambda stages from Celtra asset retrieval through DSP upload and verification, tracked in DynamoDB with SNS notifications. A React campaign management layer automates deal creation, audience targeting, and bulk upload sheet generation. The result: what took 4+ hours now completes in under 60 seconds. Premium formats traffic with the same ease as standard banners. 97% time reduction, 10x capacity increase.",
    architectureNodes: [
      { id: "celtra", label: "Celtra", description: "Creative asset platform — format detection, approval workflow", type: "integration" },
      { id: "creative-engine", label: "Creative Processing", description: "FastAPI — IAS tag removal, Amazon macro injection, viewability wrapping", type: "service" },
      { id: "orchestrator", label: "Workflow Orchestrator", description: "AWS Step Functions — 5 Lambda stages, DynamoDB state tracking", type: "service" },
      { id: "ssp-seat", label: "SSP DSP Seat", description: "Intermediary platform — creative staging and validation", type: "data" },
      { id: "amazon-dsp", label: "Amazon DSP", description: "Creative upload, deal management, campaign activation via API", type: "integration" },
      { id: "campaign-mgmt", label: "Campaign Management", description: "React UI — bulk operations, audience targeting, reporting", type: "service" },
    ],
    features: [
      {
        title: "Tag Transformation Engine",
        description: "Regex-based pipeline strips IAS tracking pixels, injects Amazon DSP macros (${AMAZON_CLICK_URL}, ${AMAZON_IMPRESSION_URL}), and wraps for Phase 1 (DV-only) or Phase 2 (IAS S2S + DV) viewability.",
        codeSnippet: `// Stage 1: Strip IAS tracking
const IAS_PATTERNS = [
  /pixel\\.adsafeprotected\\.com/,
  /fw\\.adsafeprotected\\.com/
];

// Stage 2: Inject Amazon macros
tag = tag.replace(
  '\${CLICK_URL}',
  '\${AMAZON_CLICK_URL}'
);`,
        language: "javascript",
      },
      {
        title: "Step Functions Pipeline",
        description: "5 Lambda stages execute sequentially: Input Validation → Creative Retrieval (Celtra) → Tag Processing → DSP Upload → Verification. DynamoDB tracks state. SNS notifies on completion.",
      },
      {
        title: "Bulk Upload Generation",
        description: "Auto-generates 4 Excel sheets (ORDERS, DISPLAY LINE ITEMS, VIDEO LINE ITEMS, CREATIVE ASSOCIATIONS) for Amazon DSP bulk upload — one click for an entire campaign across all formats and LOBs.",
      },
      {
        title: "OAuth Token Management",
        description: "Amazon DSP API connector with automatic OAuth2 token refresh. Creative upload, line item association, and audit status monitoring through a single authenticated session.",
      },
    ],
    architectureDiagram: `
┌──────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Celtra   │───▶│  Creative Engine  │───▶│  Orchestrator    │
│ (Assets)  │    │  (Tag Transform)  │    │ (Step Functions) │
└──────────┘    └──────────────────┘    └────────┬─────────┘
                                                  │
                              ┌────────────────────┤
                              ▼                    ▼
                     ┌──────────────┐    ┌──────────────┐
                     │  SSP Seat    │───▶│ Amazon DSP   │
                     │ (Staging)    │    │ (Live)       │
                     └──────────────┘    └──────┬───────┘
                                                │
                                       ┌────────▼────────┐
                                       │  Campaign Mgmt  │
                                       │ (Bulk Ops + UI) │
                                       └─────────────────┘`,
  },
};
