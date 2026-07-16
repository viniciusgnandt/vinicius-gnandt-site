import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto mb-16 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
