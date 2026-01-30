import { cn } from "@/lib/utils";

interface SpecsTableProps {
  specs: Record<string, string>;
  className?: string;
}

export function SpecsTable({ specs, className }: SpecsTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-ink/10", className)}>
      <table className="w-full text-sm">
        <tbody>
          {Object.entries(specs).map(([label, value]) => (
            <tr key={label} className="border-b border-ink/10 last:border-none">
              <td className="bg-smoke/50 px-4 py-3 font-medium text-ink">
                {label.replace(/([A-Z])/g, " $1").trim()}
              </td>
              <td className="px-4 py-3 text-slate">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
