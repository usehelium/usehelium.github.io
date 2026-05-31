import { COMPARISON_ROWS } from "@/lib/constants";
import { Check, X, Minus } from "lucide-react";

function CellValue({ value }: { value: boolean | "partial" }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-success/10">
        <Check className="h-3 w-3 text-success" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-warning/10">
        <Minus className="h-3 w-3 text-warning" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-bg-muted">
      <X className="h-3 w-3 text-text-dim" />
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-text-dim mb-4">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How Helium{" "}
            <span className="gradient-text">fits in.</span>
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Generic AI chat is flexible but unsafe. Traditional BI is great for
            recurring metrics but slow for new questions. Helium is for safe,
            inspectable, open-source ad-hoc analysis.
          </p>
        </div>

        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated/50">
                  <th className="px-5 py-4 text-left text-xs font-medium text-text-dim w-1/4">
                    Capability
                  </th>
                  <th className="px-5 py-4 text-center text-xs font-medium text-text-dim">
                    Generic AI Chat
                  </th>
                  <th className="px-5 py-4 text-center text-xs font-medium text-text-dim">
                    Traditional BI
                  </th>
                  <th className="px-5 py-4 text-center text-xs font-medium text-text-dim">
                    <span className="gradient-text font-semibold">Helium</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/50 ${
                      idx % 2 === 0 ? "bg-transparent" : "bg-bg-subtle/20"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-sm text-text-secondary font-medium">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellValue value={row.genericAI} />
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellValue value={row.traditionalBI} />
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellValue value={row.helium} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
