import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParallaxEnabled } from "@/hooks/use-parallax-enabled";

type Props = {
  children: ReactNode;
  className?: string;
  /** pixels translated across section progress. Keep small for perf. */
  offset?: number;
};

/**
 * Lightweight scroll-driven parallax. Transform-only (no opacity) to keep on GPU.
 * Disabled automatically on mobile / low-end / reduced-motion devices.
 */
export function Parallax({ children, className, offset = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useParallaxEnabled();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, translateZ: 0 }}
        className="will-change-transform [backface-visibility:hidden]"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Background parallax — slower drift behind content. */
export function ParallaxBg({
  children,
  className,
  speed = 0.2,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useParallaxEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-60 * speed}px`, `${60 * speed}px`],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={enabled ? { y, translateZ: 0 } : undefined}
        className="pointer-events-none absolute inset-0 will-change-transform [backface-visibility:hidden]"
      >
        {children}
      </motion.div>
    </div>
  );
}
