import type { ReactNode } from "react";

export function Section({
  id,
  tag,
  title,
  subtitle,
  children,
}: {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12 md:mb-16">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-neon">
          <span className="h-px w-8 bg-neon" />
          {tag}
        </div>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
