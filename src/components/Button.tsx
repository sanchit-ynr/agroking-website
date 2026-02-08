import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-gold bg-gold text-ink hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border-ink/15 bg-smoke text-ink hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "border-transparent bg-transparent text-ink hover:bg-ink/5",
};

const sizeStyles = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-2.5",
  lg: "text-base px-7 py-3",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
