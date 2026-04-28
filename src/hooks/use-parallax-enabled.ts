import { useEffect, useState } from "react";

/**
 * Disable parallax on:
 *  - small viewports (mobile) where it's jank-prone and unnecessary
 *  - low-CPU devices (hardwareConcurrency <= 4)
 *  - devices with coarse pointer + low memory
 *  - users with prefers-reduced-motion
 */
export function useParallaxEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqSmall = window.matchMedia("(max-width: 768px)");

    const compute = () => {
      if (mqReduce.matches) return false;
      if (mqSmall.matches) return false;
      const nav = navigator as Navigator & { deviceMemory?: number };
      if ((nav.hardwareConcurrency ?? 8) <= 4) return false;
      if ((nav.deviceMemory ?? 8) <= 4) return false;
      return true;
    };

    setEnabled(compute());

    const onChange = () => setEnabled(compute());
    mqReduce.addEventListener?.("change", onChange);
    mqSmall.addEventListener?.("change", onChange);
    return () => {
      mqReduce.removeEventListener?.("change", onChange);
      mqSmall.removeEventListener?.("change", onChange);
    };
  }, []);

  return enabled;
}
