"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

/**
 * The one set-piece of the site: a scroll-scrubbed sequence where dense,
 * noisy technical fragments resolve into a single legible statement.
 * Sticky-positioned viewport + scrub timeline, no GSAP pin — avoids
 * pin-spacer edge cases with Lenis smooth scroll.
 */
export default function Gap() {
  const sectionRef = useRef<HTMLElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const resolvedRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const fragmentRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReduced ||
      !sectionRef.current ||
      !noiseRef.current ||
      !resolvedRef.current
    ) {
      gsap.set(fragmentRefs.current, { opacity: 0.5 });
      gsap.set(resolvedRef.current, { opacity: 1, scale: 1 });
      gsap.set(bodyRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.to(fragmentRefs.current, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        stagger: 0.03,
        ease: "power1.in",
        duration: 0.4,
      })
        .to(
          resolvedRef.current,
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        )
        .to(
          bodyRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.15"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gap"
      className="relative h-[220vh] bg-canvas"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        <p className="absolute top-24 font-mono text-[11px] uppercase tracking-widest2 text-signal">
          {GAP.eyebrow}
        </p>

        <div
          ref={noiseRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {GAP.noise.map((fragment, i) => (
            <span
              key={fragment}
              ref={(el) => {
                fragmentRefs.current[i] = el;
              }}
              className="absolute whitespace-nowrap font-mono text-xs text-mist-dim sm:text-sm"
              style={{
                left: LAYOUT[i % LAYOUT.length].left,
                top: LAYOUT[i % LAYOUT.length].top,
                transform: `rotate(${LAYOUT[i % LAYOUT.length].rotate}deg)`,
                opacity: 0.5,
              }}
            >
              {fragment}
            </span>
          ))}
        </div>

        <div
          ref={resolvedRef}
          className="relative z-10 max-w-3xl text-center opacity-0"
          style={{ transform: "scale(0.94)" }}
        >
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            {GAP.resolved}
          </h2>
          <p
            ref={bodyRef}
            className="mx-auto mt-8 max-w-xl translate-y-3 text-balance text-base leading-relaxed text-mist opacity-0 sm:text-lg"
          >
            {GAP.body}
          </p>
        </div>
      </div>
    </section>
  );
}
