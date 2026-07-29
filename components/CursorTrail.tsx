"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft glow that trails the cursor with spring damping — deliberately
 * behind the raw pointer position, not locked to it. Desktop/fine-pointer
 * only; skipped entirely for touch devices and reduced-motion users.
 */
export default function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 60, damping: 18, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 60, damping: 18, mass: 0.7 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || prefersReduced) return;

    setEnabled(true);
    const handle = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-16 w-16 rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(63,224,245,0.25) 0%, rgba(63,224,245,0) 70%)",
      }}
    />
  );
}
