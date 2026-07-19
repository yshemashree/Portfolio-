"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Drifter = {
  id: string;
  kind: "plane" | "page";
  top: string;
  left: string;
  scale: number;
  duration: number;
  travel: { x: number; y: number };
  rotate: number;
  opacity: number;
};

const DRIFTERS: Drifter[] = [
  { id: "p1", kind: "plane", top: "14%", left: "8%", scale: 1, duration: 46, travel: { x: 90, y: -30 }, rotate: 6, opacity: 0.55 },
  { id: "p2", kind: "plane", top: "62%", left: "84%", scale: 0.8, duration: 58, travel: { x: -70, y: 24 }, rotate: -8, opacity: 0.4 },
  { id: "n1", kind: "page", top: "30%", left: "90%", scale: 0.9, duration: 52, travel: { x: -60, y: 40 }, rotate: 10, opacity: 0.35 },
  { id: "n2", kind: "page", top: "42%", left: "2%", scale: 0.7, duration: 64, travel: { x: 50, y: -26 }, rotate: -12, opacity: 0.3 },
];

function PlaneIcon() {
  return (
    <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
      <path
        d="M2 20 L30 6 L18 12 L15 22 Z"
        fill="#FBF8F2"
        stroke="#22335A"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <path d="M18 12 L24 9" stroke="#22335A" strokeWidth="0.8" strokeOpacity="0.4" />
    </svg>
  );
}

function PageIcon() {
  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
      <rect x="1" y="1" width="22" height="28" rx="1.5" fill="#FBF8F2" stroke="#22335A" strokeOpacity="0.35" />
      <line x1="5" y1="9" x2="19" y2="9" stroke="#22335A" strokeOpacity="0.25" />
      <line x1="5" y1="14" x2="19" y2="14" stroke="#22335A" strokeOpacity="0.25" />
      <line x1="5" y1="19" x2="15" y2="19" stroke="#22335A" strokeOpacity="0.25" />
    </svg>
  );
}

export default function PaperPlanes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      DRIFTERS.forEach((d) => {
        gsap.to(`[data-drifter="${d.id}"]`, {
          x: d.travel.x,
          y: d.travel.y,
          rotation: d.rotate,
          duration: d.duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {DRIFTERS.map((d) => (
        <div
          key={d.id}
          data-drifter={d.id}
          className="absolute"
          style={{
            top: d.top,
            left: d.left,
            opacity: d.opacity,
            transform: `scale(${d.scale})`,
          }}
        >
          {d.kind === "plane" ? <PlaneIcon /> : <PageIcon />}
        </div>
      ))}
    </div>
  );
}
