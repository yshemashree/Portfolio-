"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { GAP } from "@/lib/constants";

// Fixed placement so noise fragments scatter deterministically (no
// Math.random at render — keeps SSR/CSR markup identical).
const LAYOUT = [
  { left: "8%", top: "18%", rotate: -8 },
  { left: "72%", top: "14%", rotate: 6 },
  { left: "20%", top: "68%", rotate: 4 },
  { left: "60%", top: "72%", rotate: -5 },
  { left: "42%", top: "10%", rotate: 3 },
  { left: "84%", top: "50%", rotate: -6 },
  { left: "6%", top: "46%", rotate: 7 },
  { left: "34%", top: "82%", rotate: -3 },
  { left: "56%", top: "38%", rotate: 5 },
  { left: "14%", top: "84%", rotate: -4 },
];

function NoiseFragment({
  progress,
  index,
  text,
}: {
  progress: MotionValue<number>;
  index: number;
  text: string;
}) {
  const layout = LAYOUT[index % LAYOUT.length];
  const start = 0.04 + (index % LAYOUT.length) * 0.018;
  const end = start + 0.26;
  const opacity = useTransform(progress, [0, start, end], [0.5, 0.5, 0]);
  const y = useTransform(progress, [start, end], [0, -30]);
  const scale = useTransform(progress, [start, end], [1, 0.9]);

  return (
    <motion.span
      className="absolute whitespace-nowrap font-mono text-xs text-mist-dim sm:text-sm"
      style={{
        left: layout.left,
        top: layout.top,
        rotate: layout.rotate,
        opacity,
        y,
        scale,
      }}
    >
      {text}
    </motion.span>
  );
}

/**
 * The one set-piece of the site: a scroll-linked sequence where dense,
 * noisy technical fragments resolve into a single legible statement.
 * Driven by Framer Motion's useScroll + a damped useSpring, so the
 * resolve visibly trails the raw scroll position instead of snapping to
 * it — that spring lag is the whole point.
 */
export default function Gap() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.6,
  });

  const resolvedOpacity = useTransform(progress, [0.4, 0.6], [0, 1]);
  const resolvedScale = useTransform(progress, [0.4, 0.6], [0.94, 1]);
  const bodyOpacity = useTransform(progress, [0.58, 0.78], [0, 1]);
  const bodyY = useTransform(progress, [0.58, 0.78], [16, 0]);

  return (
    <section ref={sectionRef} id="gap" className="relative h-[220vh] bg-canvas">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        <p className="absolute top-24 font-mono text-[11px] uppercase tracking-widest2 text-signal">
          {GAP.eyebrow}
        </p>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {GAP.noise.map((fragment, i) => (
            <NoiseFragment key={fragment} progress={progress} index={i} text={fragment} />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-3xl text-center"
          style={{ opacity: resolvedOpacity, scale: resolvedScale }}
        >
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            {GAP.resolved}
          </h2>
          <motion.p
            className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg"
            style={{ opacity: bodyOpacity, y: bodyY }}
          >
            {GAP.body}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
