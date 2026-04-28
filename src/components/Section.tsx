import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParallaxEnabled } from "@/hooks/use-parallax-enabled";

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
  const ref = useRef<HTMLElement>(null);
  const enabled = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform-only parallax, small offsets → no opacity repaint, GPU-friendly.
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <motion.div
        style={enabled ? { y: headerY, translateZ: 0 } : undefined}
        className="mb-12 md:mb-16 will-change-transform [backface-visibility:hidden]"
      >
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
      </motion.div>
      <motion.div
        style={enabled ? { y: contentY, translateZ: 0 } : undefined}
        className="will-change-transform [backface-visibility:hidden]"
      >
        {children}
      </motion.div>
    </section>
  );
}
