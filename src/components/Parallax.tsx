import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** pixels translated from section entry to exit. Negative = upward drift */
  offset?: number;
  /** fade in/out at edges */
  fade?: boolean;
};

/**
 * Wraps content in a scroll-driven parallax layer.
 * Uses the element's own viewport progress so it works for any section.
 */
export function Parallax({ children, className, offset = 60, fade = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={fade ? { y, opacity } : { y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Background parallax — moves slower than content (classic depth effect).
 */
export function ParallaxBg({
  children,
  className,
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-100 * speed}px`, `${100 * speed}px`]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
