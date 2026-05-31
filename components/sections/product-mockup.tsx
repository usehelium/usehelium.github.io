import {
  Database,
  Table,
  CheckCircle,
  Play,
  Eye,
  Lock,
  ChevronRight,
  Circle,
} from "lucide-react";
import {
  MOCKUP_TABLES,
  MOCKUP_QUESTION,
  MOCKUP_SQL,
  MOCKUP_RESULTS,
} from "@/lib/constants";

function SqlHighlighted({ sql }: { sql: string }) {
  const keywords =
    /\b(SELECT|FROM|JOIN|ON|WHERE|GROUP BY|ORDER BY|LIMIT|AS|DESC|SUM|DATE_SUB|CURDATE|INTERVAL)\b/g;

  const parts = sql.split(keywords);

  return (
    <pre className="code-block text-xs leading-relaxed overflow-x-auto whitespace-pre">
      {parts.map((part, i) => {
        if (
          /^(SELECT|FROM|JOIN|ON|WHERE|GROUP BY|ORDER BY|LIMIT|DESC|INTERVAL)$/i.test(
            part
          )
        ) {
          return (
            <span key={i} className="code-keyword">
              {part}
            </span>
          );
        }
        if (/^(SUM|DATE_SUB|CURDATE)$/i.test(part)) {
          return (
            <span key={i} className="code-function">
              {part}
            </span>
          );
        }
        if (/^AS$/i.test(part)) {
          return (
            <span key={i} className="code-keyword">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </pre>
  );
}

export function ProductMockup() {
  return (
    <section className="relative px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="glass rounded-2xl overflow-hidden glow-primary border border-border">
          {/* Window Chrome */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-bg-elevated/50">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-danger/60" />
              <span className="h-3 w-3 rounded-full bg-warning/60" />
              <span className="h-3 w-3 rounded-full bg-success/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-text-dim font-mono">
                helium — localhost:3000
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-60 border-b md:border-b-0 md:border-r border-border bg-bg-subtle/50 p-4">
              <div className="space-y-4">
                {/* Data Sources */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    <Database className="h-3 w-3" />
                    Data Sources
                  </div>
                  <div className="glass rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Circle className="h-2 w-2 fill-success text-success" />
                      <span className="text-sm font-medium text-text">
                        MySQL
                      </span>
                      <span className="ml-auto text-[10px] font-mono text-success border border-success/20 bg-success/5 rounded px-1.5 py-0.5">
                        Connected
                      </span>
                    </div>
                    <div className="text-xs text-text-dim font-mono pl-4">
                      production_db
                    </div>
                  </div>
                </div>

                {/* Tables */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    <Table className="h-3 w-3" />
                    Tables
                  </div>
                  <div className="space-y-1">
                    {MOCKUP_TABLES.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-center justify-between rounded-md px-2 py-1.5 text-xs hover:bg-bg-muted/50 transition-colors cursor-default"
                      >
                        <span className="font-mono text-text-secondary">
                          {t.name}
                        </span>
                        <span className="text-text-dim text-[10px]">
                          {t.rows}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adapter Status */}
                <div className="glass rounded-lg p-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-text-dim">Adapter</span>
                    <span className="ml-auto font-mono text-primary text-[10px] border border-primary/20 bg-primary/5 rounded px-1.5 py-0.5">
                      MySQL v1
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mt-1.5">
                    <span className="text-text-dim">Status</span>
                    <span className="ml-auto flex items-center gap-1 text-success text-[10px]">
                      <Circle className="h-1.5 w-1.5 fill-current" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Panel */}
            <main className="flex-1 p-5 md:p-6 space-y-5">
              {/* Question */}
              <div className="glass rounded-xl p-4">
                <div className="text-xs text-text-dim mb-2 font-medium">
                  Your question
                </div>
                <p className="text-sm md:text-base text-text font-medium">
                  {MOCKUP_QUESTION}
                </p>
              </div>

              {/* Query Preview */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated/30">
                  <div className="flex items-center gap-2">
                    <Eye className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-text-secondary">
                      Generated Query
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-success border border-success/20 bg-success/5 rounded px-1.5 py-0.5">
                      Validated
                    </span>
                    <span className="text-[10px] font-mono text-primary border border-primary/20 bg-primary/5 rounded px-1.5 py-0.5">
                      Read-only
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-bg-subtle/30">
                  <SqlHighlighted sql={MOCKUP_SQL} />
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 border-t border-border bg-bg-elevated/30">
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text hover:border-border-hover transition-all cursor-default">
                    <CheckCircle className="h-3 w-3" />
                    Validate Query
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-default">
                    <Play className="h-3 w-3" />
                    Run read-only query
                  </button>
                  <div className="ml-auto flex gap-1.5">
                    <span className="text-[10px] font-mono text-text-dim border border-border rounded px-1.5 py-0.5">
                      MySQL
                    </span>
                    <span className="text-[10px] font-mono text-text-dim border border-border rounded px-1.5 py-0.5">
                      Query Preview
                    </span>
                  </div>
                </div>
              </div>

              {/* Result Table */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated/30">
                  <Table className="h-3.5 w-3.5 text-accent" />
                  <span className="text-xs font-medium text-text-secondary">
                    Results
                  </span>
                  <span className="text-[10px] text-text-dim">
                    3 rows · 12ms
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-bg-subtle/30">
                        <th className="px-4 py-2.5 text-left text-xs font-medium text-text-dim uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-4 py-2.5 text-right text-xs font-medium text-text-dim uppercase tracking-wider">
                          Revenue
                        </th>
                        <th className="px-4 py-2.5 text-right text-xs font-medium text-text-dim uppercase tracking-wider">
                          Orders
                        </th>
                        <th className="px-4 py-2.5 text-right text-xs font-medium text-text-dim uppercase tracking-wider">
                          Last Order
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCKUP_RESULTS.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border/50 hover:bg-bg-muted/30 transition-colors"
                        >
                          <td className="px-4 py-2.5 font-medium text-text">
                            {row.customer}
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono text-primary">
                            {row.revenue}
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono text-text-secondary">
                            {row.orders}
                          </td>
                          <td className="px-4 py-2.5 text-right text-text-dim">
                            {row.lastOrder}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Explanation */}
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-3.5 w-3.5 text-text-dim" />
                  <span className="text-xs font-medium text-text-dim">
                    Explanation
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  This query joins the <code className="font-mono text-primary px-1 py-0.5 bg-primary/5 rounded text-[11px]">customers</code> and{" "}
                  <code className="font-mono text-primary px-1 py-0.5 bg-primary/5 rounded text-[11px]">orders</code> tables,
                  filters for orders created in the last month, groups by customer name,
                  sums the total amount as revenue, and returns the top 10 customers
                  sorted by revenue descending.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
