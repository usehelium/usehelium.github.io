// ─── Navigation ───────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Architecture", href: "#architecture" },
  { label: "Security", href: "#security" },
  { label: "Roadmap", href: "#roadmap" },
] as const;

export const GITHUB_URL = "https://github.com/usehelium/helium";
export const DOCS_URL = "/docs";

// ─── Hero Badges ──────────────────────────────────────────────

export const HERO_BADGES = [
  { label: "Open Source", variant: "primary" },
  { label: "Multi-database", variant: "accent" },
  { label: "Self-hostable", variant: "default" },
  { label: "Query Preview", variant: "default" },
  { label: "Read-only Mode", variant: "default" },
  { label: "Adapter-first", variant: "default" },
] as const;

// ─── Trust Bar ────────────────────────────────────────────────

export const TRUST_ITEMS = [
  { label: "MIT Licensed", icon: "Scale" },
  { label: "Multi-database", icon: "Database" },
  { label: "Adapter-first", icon: "Blocks" },
  { label: "Built in Public", icon: "Eye" },
  { label: "Self-hostable", icon: "Server" },
  { label: "Query Preview", icon: "FileCode" },
] as const;

// ─── Problem Points ──────────────────────────────────────────

export const PROBLEMS = [
  {
    title: "Data-rich, analyst-poor",
    description: "Teams have more data than ever but not enough analysts to answer every question.",
    icon: "Users",
  },
  {
    title: "Founders need fast answers",
    description: "Operators cannot wait three days for a report. Decisions move faster than dashboards.",
    icon: "Zap",
  },
  {
    title: "Analysts are the bottleneck",
    description: "Every ad-hoc question becomes a ticket. Analysts become query concierges, not strategists.",
    icon: "Clock",
  },
  {
    title: "Dashboards answer yesterday",
    description: "Pre-built dashboards answer the questions you knew to ask last quarter.",
    icon: "LayoutDashboard",
  },
  {
    title: "AI tools lack context",
    description: "Generic AI chatbots do not understand your schema, joins, metrics, or permissions.",
    icon: "Brain",
  },
  {
    title: "Direct access is risky",
    description: "Without query preview, validation, and read-only controls, database access is dangerous.",
    icon: "ShieldAlert",
  },
] as const;

// ─── Features ─────────────────────────────────────────────────

export type FeatureStatus = "available" | "next" | "planned";

export interface Feature {
  title: string;
  description: string;
  icon: string;
  status: FeatureStatus;
}

export const FEATURES: Feature[] = [
  // ── Current / Core ──
  {
    title: "Natural-language questions",
    description: "Ask questions in plain English and turn them into database queries.",
    icon: "MessageSquare",
    status: "available",
  },
  {
    title: "MySQL adapter",
    description: "Start with a production-quality MySQL adapter.",
    icon: "Database",
    status: "available",
  },
  {
    title: "Query preview",
    description: "See generated queries before anything runs against your database.",
    icon: "FileCode",
    status: "available",
  },
  {
    title: "Read-only execution",
    description: "Encourage safe database credentials and read-only queries.",
    icon: "Lock",
    status: "available",
  },
  {
    title: "Schema understanding",
    description: "Read tables, collections, columns, relationships, and metadata automatically.",
    icon: "TableProperties",
    status: "available",
  },
  {
    title: "Result tables",
    description: "Display clean, structured tabular answers from your data.",
    icon: "Table",
    status: "available",
  },
  {
    title: "Query explanation",
    description: "Explain what the generated query is doing in plain English.",
    icon: "BookOpen",
    status: "available",
  },
  {
    title: "Query validation layer",
    description: "Check queries for correctness and safety before execution.",
    icon: "ShieldCheck",
    status: "available",
  },
  {
    title: "Adapter-first architecture",
    description: "Every database integration follows a clean adapter contract.",
    icon: "Blocks",
    status: "available",
  },
  {
    title: "Self-hosted deployment",
    description: "Keep data and credentials inside your own environment.",
    icon: "Server",
    status: "available",
  },
  // ── Next ──
  {
    title: "PostgreSQL adapter",
    description: "Add Postgres support through the same adapter interface.",
    icon: "Database",
    status: "next",
  },
  {
    title: "Saved questions",
    description: "Save and reuse recurring business questions.",
    icon: "Bookmark",
    status: "next",
  },
  {
    title: "Query history",
    description: "Track past prompts, queries, and results for reference.",
    icon: "History",
    status: "next",
  },
  {
    title: "Chart generation",
    description: "Turn result sets into visual charts automatically.",
    icon: "BarChart3",
    status: "next",
  },
  {
    title: "CSV export",
    description: "Export result tables for downstream analysis.",
    icon: "Download",
    status: "next",
  },
  {
    title: "Semantic metrics",
    description: "Define revenue, churn, active users, GMV, retention, and more.",
    icon: "Target",
    status: "next",
  },
  {
    title: "Business glossary",
    description: "Map business terms to database fields for better accuracy.",
    icon: "BookText",
    status: "next",
  },
  {
    title: "Prompt context memory",
    description: "Remember useful schema and query patterns across sessions.",
    icon: "Brain",
    status: "next",
  },
  {
    title: "Error-aware retries",
    description: "If a query fails, explain the issue and suggest a corrected version.",
    icon: "RotateCcw",
    status: "next",
  },
  {
    title: "Relationship discovery",
    description: "Help the model understand how your tables and collections connect.",
    icon: "GitBranch",
    status: "next",
  },
  // ── Planned ──
  {
    title: "Dashboard builder",
    description: "Create lightweight dashboards from saved questions.",
    icon: "LayoutDashboard",
    status: "planned",
  },
  {
    title: "Role-based access",
    description: "Control who can ask what, at the question and table level.",
    icon: "UserCog",
    status: "planned",
  },
  {
    title: "Audit logs",
    description: "Track questions, queries, execution time, and user activity.",
    icon: "ScrollText",
    status: "planned",
  },
  {
    title: "Approval workflows",
    description: "Require review before running sensitive queries.",
    icon: "CheckSquare",
    status: "planned",
  },
  {
    title: "dbt integration",
    description: "Use dbt models and metrics as trusted context.",
    icon: "Workflow",
    status: "planned",
  },
  {
    title: "Slack / Teams bot",
    description: "Ask database questions from your team chat.",
    icon: "MessageCircle",
    status: "planned",
  },
  {
    title: "API access",
    description: "Use Helium as an analyst API in internal tools.",
    icon: "Code",
    status: "planned",
  },
  {
    title: "PII detection",
    description: "Warn before exposing sensitive columns in results.",
    icon: "AlertTriangle",
    status: "planned",
  },
  {
    title: "Model provider flexibility",
    description: "Support OpenAI, Anthropic, local models, and other LLM providers.",
    icon: "Cpu",
    status: "planned",
  },
  {
    title: "On-prem enterprise mode",
    description: "Run Helium fully inside private infrastructure.",
    icon: "Building",
    status: "planned",
  },
];

// ─── Workflow Steps ───────────────────────────────────────────

export const WORKFLOW_STEPS = [
  { step: 1, title: "Connect database", description: "Point Helium at your database with read-only credentials.", icon: "Plug" },
  { step: 2, title: "Introspect schema", description: "Helium reads your tables, collections, types, and relationships.", icon: "Search" },
  { step: 3, title: "Ask a question", description: "Type a question in plain English about your data.", icon: "MessageSquare" },
  { step: 4, title: "Generate query", description: "The analyst engine creates a native query from your question.", icon: "Sparkles" },
  { step: 5, title: "Preview & validate", description: "Review the generated query before it touches your database.", icon: "Eye" },
  { step: 6, title: "Run read-only query", description: "Execute the validated query safely against your database.", icon: "Play" },
  { step: 7, title: "View results", description: "See clean tabular results with an explanation of the answer.", icon: "Table" },
  { step: 8, title: "Save or export", description: "Save the question, export to CSV, or generate a chart.", icon: "Download" },
] as const;

// ─── Architecture Layers ──────────────────────────────────────

export const ARCHITECTURE_LAYERS = [
  { label: "User Question", icon: "MessageSquare", color: "primary" },
  { label: "Analyst Engine", icon: "Brain", color: "accent" },
  { label: "Schema Context Store", icon: "Database", color: "primary" },
  { label: "Prompt Builder", icon: "FileCode", color: "accent" },
  { label: "Query Generator", icon: "Sparkles", color: "primary" },
  { label: "Query Validator", icon: "ShieldCheck", color: "accent" },
  { label: "Policy / Safety Layer", icon: "Lock", color: "primary" },
  { label: "Database Adapter", icon: "Blocks", color: "accent" },
  { label: "Query Executor", icon: "Play", color: "primary" },
  { label: "Result Formatter", icon: "Table", color: "accent" },
  { label: "Explanation Layer", icon: "BookOpen", color: "primary" },
] as const;

// ─── Adapters ─────────────────────────────────────────────────

export type AdapterStatus = "available" | "next" | "planned" | "experimental";

export interface Adapter {
  name: string;
  status: AdapterStatus;
  statusLabel: string;
}

export const ADAPTERS: Adapter[] = [
  { name: "MySQL", status: "available", statusLabel: "Available now" },
  { name: "PostgreSQL", status: "next", statusLabel: "Next" },
  { name: "SQLite", status: "planned", statusLabel: "Planned" },
  { name: "BigQuery", status: "planned", statusLabel: "Planned" },
  { name: "Snowflake", status: "planned", statusLabel: "Planned" },
  { name: "ClickHouse", status: "planned", statusLabel: "Planned" },
  { name: "DuckDB", status: "planned", statusLabel: "Planned" },
  { name: "MongoDB", status: "experimental", statusLabel: "Experimental" },
];

// ─── Security Principles ──────────────────────────────────────

export const SECURITY_PRINCIPLES = [
  { title: "Self-hostable by design", description: "Run Helium entirely inside your own infrastructure.", icon: "Server", available: true },
  { title: "Credentials stay local", description: "Database credentials never leave your environment.", icon: "KeyRound", available: true },
  { title: "Read-only database users", description: "Designed for read-only database credentials.", icon: "Lock", available: true },
  { title: "Query preview before execution", description: "Every generated query is shown before it runs.", icon: "Eye", available: true },
  { title: "Query validation", description: "Queries are validated for safety before execution.", icon: "ShieldCheck", available: true },
  { title: "No hidden queries", description: "No query runs without explicit user action.", icon: "FileSearch", available: true },
  { title: "No training on your data", description: "Your data is not used for model training by default.", icon: "ShieldOff", available: true },
  { title: "Sensitive column warnings", description: "Detect and warn before exposing sensitive columns.", icon: "AlertTriangle", available: false },
  { title: "Audit logs", description: "Track every question, query, and execution.", icon: "ScrollText", available: false },
  { title: "Role-based access control", description: "Control who can ask what questions.", icon: "UserCog", available: false },
  { title: "Approval workflows", description: "Require review before running sensitive queries.", icon: "CheckSquare", available: false },
] as const;

// ─── Roadmap ──────────────────────────────────────────────────

export const ROADMAP = {
  now: {
    title: "Now",
    description: "Foundation",
    items: [
      "Landing page",
      "MySQL adapter foundation",
      "Schema introspection",
      "Natural language to queries",
      "Query preview",
      "Read-only query execution",
      "Result tables",
    ],
  },
  next: {
    title: "Next",
    description: "Expand & improve",
    items: [
      "PostgreSQL adapter",
      "Saved questions",
      "Query history",
      "CSV export",
      "Chart generation",
      "Semantic metric definitions",
      "Business glossary",
      "Query correction loop",
    ],
  },
  later: {
    title: "Later",
    description: "Scale & enterprise",
    items: [
      "Dashboard builder",
      "Slack / Teams bot",
      "Audit logs",
      "Role-based access",
      "Approval workflows",
      "dbt integration",
      "Multi-tenant workspaces",
      "Adapter marketplace",
      "Evaluation suite",
      "On-prem deployment mode",
    ],
  },
} as const;

// ─── Use Cases ────────────────────────────────────────────────

export const USE_CASES = [
  {
    role: "Founder",
    question: "Which customers, products, or channels are driving revenue?",
    icon: "Rocket",
  },
  {
    role: "Operations",
    question: "Where are orders, payments, refunds, or shipments getting stuck?",
    icon: "Settings",
  },
  {
    role: "Product",
    question: "What features are users adopting, ignoring, or dropping off from?",
    icon: "MousePointerClick",
  },
  {
    role: "Support",
    question: "What customer patterns explain repeated complaints?",
    icon: "Headphones",
  },
  {
    role: "Finance",
    question: "What changed in revenue, refunds, margins, or unpaid invoices?",
    icon: "DollarSign",
  },
  {
    role: "Data Analyst",
    question: "Generate first-draft queries faster, then inspect and improve them.",
    icon: "LineChart",
  },
  {
    role: "Engineering",
    question: "Give internal teams safer access to analytical answers.",
    icon: "Code",
  },
  {
    role: "Growth",
    question: "Find cohorts, conversion drops, and campaign performance insights.",
    icon: "TrendingUp",
  },
] as const;

// ─── Comparison ───────────────────────────────────────────────

export interface ComparisonRow {
  feature: string;
  genericAI: boolean | "partial";
  traditionalBI: boolean | "partial";
  helium: boolean | "partial";
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Understands live schema", genericAI: false, traditionalBI: true, helium: true },
  { feature: "Shows query before running", genericAI: false, traditionalBI: false, helium: true },
  { feature: "Self-hostable", genericAI: false, traditionalBI: "partial", helium: true },
  { feature: "Adapter-based", genericAI: false, traditionalBI: false, helium: true },
  { feature: "Open-source", genericAI: false, traditionalBI: "partial", helium: true },
  { feature: "Good for ad-hoc questions", genericAI: true, traditionalBI: false, helium: true },
  { feature: "Good for recurring dashboards", genericAI: false, traditionalBI: true, helium: "partial" },
  { feature: "Developer-extensible", genericAI: false, traditionalBI: "partial", helium: true },
  { feature: "Safety controls", genericAI: false, traditionalBI: true, helium: true },
];

// ─── Open Source Pillars ──────────────────────────────────────

export const OPEN_SOURCE_PILLARS = [
  { title: "MIT License", description: "Free to use, modify, and distribute.", icon: "Scale" },
  { title: "Built in public", description: "Development happens in the open on GitHub.", icon: "Eye" },
  { title: "Contributor-friendly", description: "Clean adapter interface makes contributing straightforward.", icon: "GitPullRequest" },
  { title: "High code standards", description: "TypeScript-first, tested, linted, formatted.", icon: "CheckCircle" },
  { title: "Clear docs", description: "Architecture and adapter guides for new contributors.", icon: "FileText" },
  { title: "Testable architecture", description: "Modular design that is easy to test and extend.", icon: "FlaskConical" },
  { title: "Roadmap shaped by users", description: "Features prioritized by community feedback.", icon: "Users" },
  { title: "Good first issues", description: "Tagged issues to help new contributors get started.", icon: "Flag" },
] as const;

// ─── Developer Experience ─────────────────────────────────────

export const DX_ITEMS = [
  { title: "Clean TypeScript codebase", description: "Strict typing across the entire project.", icon: "FileCode" },
  { title: "Adapter contracts", description: "Typed interfaces for every database adapter.", icon: "Blocks" },
  { title: "Modular packages", description: "Organized into focused, composable modules.", icon: "Package" },
  { title: "Environment-based config", description: "Configuration through environment variables.", icon: "Settings" },
  { title: "Test-first adapters", description: "Database adapters ship with test coverage.", icon: "FlaskConical" },
  { title: "Seeded demo database", description: "Get started with a pre-populated demo dataset.", icon: "Database" },
  { title: "Local dev setup", description: "Start developing with a single command.", icon: "Terminal" },
  { title: "Docker support", description: "Containerized deployment support on the roadmap.", icon: "Container", roadmap: true },
  { title: "CI checks", description: "Automated testing and linting pipeline planned.", icon: "GitBranch", roadmap: true },
  { title: "Linting & formatting", description: "ESLint and Prettier configured for consistency.", icon: "CheckCircle" },
  { title: "Error boundaries", description: "Graceful error handling across the stack.", icon: "AlertCircle" },
  { title: "Observability hooks", description: "Planned instrumentation for monitoring.", icon: "Activity", roadmap: true },
] as const;

// ─── Product Mockup Data ──────────────────────────────────────

export const MOCKUP_TABLES = [
  { name: "customers", rows: "12,847" },
  { name: "orders", rows: "89,231" },
  { name: "payments", rows: "67,419" },
  { name: "subscriptions", rows: "3,206" },
  { name: "refunds", rows: "1,842" },
] as const;

export const MOCKUP_QUESTION = "Which customers generated the most revenue last month?";

export const MOCKUP_SQL = `SELECT
  c.name,
  SUM(o.total_amount) AS revenue
FROM customers c
JOIN orders o ON o.customer_id = c.id
WHERE o.created_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
GROUP BY c.name
ORDER BY revenue DESC
LIMIT 10;`;

export const MOCKUP_RESULTS = [
  { customer: "Acme Retail", revenue: "$42,830", orders: "128", lastOrder: "Apr 29" },
  { customer: "Northstar Labs", revenue: "$31,420", orders: "96", lastOrder: "Apr 28" },
  { customer: "BluePeak Co.", revenue: "$18,905", orders: "51", lastOrder: "Apr 26" },
] as const;

// ─── Footer ───────────────────────────────────────────────────

export const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Architecture", href: "#architecture" },
      { label: "Security", href: "#security" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "GitHub", href: GITHUB_URL },
      { label: "Docs", href: DOCS_URL },
      { label: "Contribute", href: `${GITHUB_URL}/blob/main/CONTRIBUTING.md` },
      { label: "Adapter Guide", href: `${GITHUB_URL}/blob/main/docs/adapters.md` },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Issues", href: `${GITHUB_URL}/issues` },
      { label: "Discussions", href: `${GITHUB_URL}/discussions` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "MIT License", href: `${GITHUB_URL}/blob/main/LICENSE` },
      { label: "Privacy", href: "#" },
    ],
  },
] as const;

// ─── Adapter Interface Code ───────────────────────────────────

export const ADAPTER_INTERFACE_CODE = `interface DatabaseAdapter {
  connect(config: AdapterConfig): Promise<Connection>
  introspectSchema(): Promise<Schema>
  validateQuery(query: string): ValidationResult
  executeReadOnly(query: string): Promise<ResultSet>
  explainQuery(query: string): Promise<Explanation>
}`;
