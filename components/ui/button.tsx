import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  external?: boolean;
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-background hover:opacity-85",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-muted",
  ghost:
    "text-muted-foreground hover:text-foreground",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:bg-whatsapp-hover",
} as const;

export function Button({ href, variant = "primary", external, children, className }: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
