import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Header drifts up faster; content drifts up slightly → parallax depth
  const headerY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.4]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <motion.div
        style={reduce ? undefined : { y: headerY, opacity }}
        className="mb-12 will-change-transform md:mb-16"
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
        style={reduce ? undefined : { y: contentY }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}
