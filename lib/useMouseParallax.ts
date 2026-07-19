"use client";

import { useEffect, useRef } from "react";

export type ParallaxPoint = { x: number; y: number };

/**
 * Tracks pointer position normalised to [-1, 1] around the viewport centre,
 * smoothed with a lerp so motion reads as drifting rather than tracking.
 * Returns a ref that always holds the latest smoothed value — read it inside
 * a rAF loop rather than subscribing to re-renders, so parallax never
 * triggers React work on every mouse move.
 */
export function useMouseParallax(smoothing = 0.06) {
  const target = useRef<ParallaxPoint>({ x: 0, y: 0 });
  const smoothed = useRef<ParallaxPoint>({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.current = { x: nx, y: ny };
    };

    const tick = () => {
      smoothed.current.x +=
        (target.current.x - smoothed.current.x) * smoothing;
      smoothed.current.y +=
        (target.current.y - smoothed.current.y) * smoothing;
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [smoothing]);

  return smoothed;
}
