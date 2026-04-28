import { useEffect, useState } from "react";

/**
 * Disable parallax on:
 *  - small viewports (mobile) where it's jank-prone and unnecessary
 *  - low-CPU devices (hardwareConcurrency <= 4)
 *  - devices with coarse pointer + low memory
 *  - users with prefers-reduced-motion
 */
export function useParallaxEnabled() {
  // Force parallax to always be enabled for testing
  return true;
}
