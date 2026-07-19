"use client";

import { useEffect, useRef } from "react";
import { useMouseParallax } from "@/lib/useMouseParallax";

/**
 * Full-bleed hand-painted sky. Three depth layers of soft, turbulence-
 * displaced cloud forms drift a few pixels with the pointer so the sky reads
 * as alive rather than static. A near-invisible web of dots and lines is
 * woven through the cloud centres — a quiet, unlabelled nod to neural
 * networks that only reveals itself on close inspection.
 */
export default function BackgroundClouds() {
  const far = useRef<SVGGElement>(null);
  const mid = useRef<SVGGElement>(null);
  const near = useRef<SVGGElement>(null);
  const parallax = useMouseParallax(0.045);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      const { x, y } = parallax.current;
      if (far.current)
        far.current.style.transform = `translate3d(${x * 6}px, ${y * 4}px, 0)`;
      if (mid.current)
        mid.current.style.transform = `translate3d(${x * 14}px, ${y * 9}px, 0)`;
      if (near.current)
        near.current.style.transform = `translate3d(${x * 24}px, ${y * 15}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [parallax]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E5B85" />
            <stop offset="32%" stopColor="#5C7FA6" />
            <stop offset="62%" stopColor="#9AB3CC" />
            <stop offset="100%" stopColor="#E8E0CE" />
          </linearGradient>

          <filter id="paintTexture" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="34"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter id="paintTextureSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.014"
              numOctaves="2"
              seed="3"
              result="noise2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise2"
              scale="46"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="11"
              result="grainNoise"
            />
            <feColorMatrix
              in="grainNoise"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0"
            />
          </filter>

          <radialGradient id="cloudSoft" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#FDFCF9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FDFCF9" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1600" height="1000" fill="url(#skyGradient)" />

        {/* far layer — large, low-contrast cloud masses */}
        <g ref={far} style={{ willChange: "transform" }}>
          <g filter="url(#paintTextureSoft)" opacity="0.55">
            <ellipse cx="220" cy="180" rx="360" ry="120" fill="#FDFCF9" opacity="0.5" />
            <ellipse cx="1260" cy="130" rx="420" ry="140" fill="#FDFCF9" opacity="0.45" />
            <ellipse cx="780" cy="90" rx="300" ry="90" fill="#EFEAE0" opacity="0.4" />
          </g>
        </g>

        {/* mid layer — the large brush-painted cloud forms that give the sky its character */}
        <g ref={mid} style={{ willChange: "transform" }}>
          <g filter="url(#paintTexture)">
            <path
              d="M -50 340 Q 120 250 320 300 Q 460 200 640 280 Q 820 210 980 300 Q 1180 240 1360 320 Q 1520 280 1650 350 L 1650 520 Q 1400 460 1150 500 Q 900 450 650 500 Q 400 460 150 510 Q 20 480 -50 500 Z"
              fill="#FBF8F2"
              opacity="0.92"
            />
            <path
              d="M -50 420 Q 200 370 420 410 Q 620 350 860 405 Q 1080 355 1300 410 Q 1480 380 1650 430 L 1650 600 Q 1350 560 1050 590 Q 750 550 450 590 Q 200 570 -50 590 Z"
              fill="#EDE7DA"
              opacity="0.55"
            />
          </g>
        </g>

        {/* near layer — smaller, crisper cloud accents drifting closest to the viewer */}
        <g ref={near} style={{ willChange: "transform" }}>
          <g filter="url(#paintTexture)" opacity="0.85">
            <ellipse cx="260" cy="470" rx="180" ry="46" fill="#FDFCF9" />
            <ellipse cx="1180" cy="520" rx="220" ry="52" fill="#FDFCF9" opacity="0.9" />
            <ellipse cx="700" cy="560" rx="150" ry="40" fill="#F4EFE4" opacity="0.75" />
            <ellipse cx="1420" cy="600" rx="130" ry="36" fill="#FDFCF9" opacity="0.7" />
          </g>

          {/* quiet neural-network suggestion, woven into the cloud field at very low opacity */}
          <g stroke="#22335A" strokeWidth="1" opacity="0.045" fill="none">
            <line x1="260" y1="470" x2="700" y2="560" />
            <line x1="700" y1="560" x2="1180" y2="520" />
            <line x1="1180" y1="520" x2="1420" y2="600" />
            <line x1="260" y1="470" x2="220" y2="180" />
            <line x1="700" y1="560" x2="780" y2="90" />
            <line x1="1180" y1="520" x2="1260" y2="130" />
            <circle cx="260" cy="470" r="3" fill="#22335A" />
            <circle cx="700" cy="560" r="3" fill="#22335A" />
            <circle cx="1180" cy="520" r="3" fill="#22335A" />
            <circle cx="1420" cy="600" r="3" fill="#22335A" />
            <circle cx="220" cy="180" r="3" fill="#22335A" />
            <circle cx="780" cy="90" r="3" fill="#22335A" />
            <circle cx="1260" cy="130" r="3" fill="#22335A" />
          </g>
        </g>

        <rect x="0" y="0" width="1600" height="1000" filter="url(#grain)" opacity="0.5" />
      </svg>
    </div>
  );
}
