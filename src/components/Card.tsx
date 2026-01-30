import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink/10 bg-white p-6 shadow-soft transition-transform hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
