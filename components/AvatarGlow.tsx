"use client";

import { useRef, useState } from "react";

type Particle = {
  left: string;
  bottom: string;
  size: number;
  color: string;
  delay: string;
  duration: string;
  driftX: string;
};

// Fixed, hand-placed so SSR/CSR markup matches (no Math.random at render time).
const PARTICLES: Particle[] = [
  { left: "18%", bottom: "38%", size: 5, color: "#3FE0F5", delay: "0s", duration: "5.5s", driftX: "8px" },
  { left: "62%", bottom: "30%", size: 4, color: "#7FEBFA", delay: "0.8s", duration: "6.2s", driftX: "-10px" },
  { left: "40%", bottom: "20%", size: 6, color: "#1F8FE0", delay: "1.6s", duration: "5.8s", driftX: "6px" },
  { left: "75%", bottom: "42%", size: 4, color: "#FF8A4C", delay: "2.4s", duration: "6.6s", driftX: "-6px" },
  { left: "28%", bottom: "48%", size: 3, color: "#3FE0F5", delay: "0.4s", duration: "5.2s", driftX: "-8px" },
  { left: "55%", bottom: "16%", size: 5, color: "#7FEBFA", delay: "3.1s", duration: "6.9s", driftX: "10px" },
  { left: "85%", bottom: "22%", size: 4, color: "#1F8FE0", delay: "1.2s", duration: "5.9s", driftX: "-4px" },
  { left: "10%", bottom: "24%", size: 3, color: "#FF8A4C", delay: "2.8s", duration: "6.1s", driftX: "5px" },
  { left: "48%", bottom: "52%", size: 4, color: "#3FE0F5", delay: "0.2s", duration: "6.4s", driftX: "-7px" },
  { left: "68%", bottom: "12%", size: 3, color: "#7FEBFA", delay: "3.6s", duration: "5.4s", driftX: "9px" },
];

// Extra embers that only exist while the avatar is being touched/hovered —
// the "ignite" burst on top of the ambient drift above.
const BURST_PARTICLES: Particle[] = [
  { left: "30%", bottom: "44%", size: 6, color: "#7FEBFA", delay: "0s", duration: "1.4s", driftX: "18px" },
  { left: "70%", bottom: "40%", size: 5, color: "#3FE0F5", delay: "0.08s", duration: "1.6s", driftX: "-16px" },
  { left: "50%", bottom: "18%", size: 7, color: "#1F8FE0", delay: "0.15s", duration: "1.5s", driftX: "10px" },
  { left: "20%", bottom: "26%", size: 4, color: "#FF8A4C", delay: "0.22s", duration: "1.7s", driftX: "-14px" },
  { left: "80%", bottom: "28%", size: 4, color: "#FF8A4C", delay: "0.3s", duration: "1.3s", driftX: "14px" },
  { left: "42%", bottom: "56%", size: 5, color: "#7FEBFA", delay: "0.1s", duration: "1.6s", driftX: "-8px" },
];

export default function AvatarGlow({ src }: { src?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [ignited, setIgnited] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 12 });
  }

  function ignite() {
    setIgnited(true);
  }

  function release() {
    setIgnited(false);
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div
      ref={frameRef}
      onMouseEnter={ignite}
      onMouseMove={handleMove}
      onMouseLeave={release}
      onTouchStart={ignite}
      onTouchEnd={release}
      className="group relative aspect-[3/4] w-full cursor-pointer select-none [perspective:1000px]"
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-500 ease-precise"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${ignited ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          borderColor: ignited ? "rgba(63,224,245,0.55)" : "#22262C",
          boxShadow: ignited
            ? "0 0 60px -12px rgba(63,224,245,0.45)"
            : "0 0 0px rgba(63,224,245,0)",
          backgroundColor: "#14171B",
        }}
      >
        {/* base portrait — swap in the real voxel-avatar file via `src` once uploaded */}
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="Y S Hemashree"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,#1a2530_0%,#0d0f12_70%)]">
            <div
              className="relative h-[78%] w-[58%] rounded-t-[42%] bg-graphite-line/70 transition-transform duration-700 ease-precise"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 6px, transparent 6px, transparent 12px)",
                transform: ignited ? "translateY(-4px)" : "translateY(0)",
              }}
            />
            <p className="pointer-events-none absolute bottom-4 left-1/2 w-4/5 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
              {ignited ? "Signal live" : "Avatar placeholder — drop your image in"}
            </p>
          </div>
        )}

        {/* ambient ember glow, always drifting */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-signal/40 blur-3xl transition-all duration-500"
          style={{
            mixBlendMode: "screen",
            animation: ignited
              ? "pulseGlowFast 1.1s ease-in-out infinite"
              : "pulseGlow 4s ease-in-out infinite",
            opacity: ignited ? 1 : undefined,
            transform: ignited ? "scale(1.4)" : undefined,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[20%] h-24 w-24 rounded-full bg-signal-deep/40 blur-2xl"
          style={{
            mixBlendMode: "screen",
            animation: ignited
              ? "pulseGlowFast 1.3s ease-in-out infinite"
              : "pulseGlow 4s ease-in-out infinite",
            animationDelay: ignited ? "0.1s" : "1.2s",
            transform: ignited ? "scale(1.35)" : undefined,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-[18%] h-24 w-24 rounded-full bg-signal-ember/25 blur-2xl"
          style={{
            mixBlendMode: "screen",
            animation: ignited
              ? "pulseGlowFast 1.5s ease-in-out infinite"
              : "pulseGlow 4s ease-in-out infinite",
            animationDelay: ignited ? "0.2s" : "2.1s",
            transform: ignited ? "scale(1.3)" : undefined,
          }}
        />

        {/* eye-glow accent — reposition once the real portrait's eye coordinates are known */}
        <div
          className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 rounded-full bg-signal-soft/80 transition-all duration-500"
          style={{
            mixBlendMode: "screen",
            width: ignited ? 56 : 40,
            height: ignited ? 14 : 12,
            filter: ignited ? "blur(6px)" : "blur(4px)",
            animation: "eyeFlicker 0.6s ease-in-out infinite",
            boxShadow: ignited ? "0 0 40px 10px rgba(127,235,250,0.6)" : "none",
          }}
        />

        {/* ambient floating voxel embers */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-[2px]"
            style={
              {
                left: p.left,
                bottom: p.bottom,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                animation: `emberRise ${p.duration} ease-in infinite`,
                animationDelay: p.delay,
                "--drift-x": p.driftX,
              } as React.CSSProperties
            }
          />
        ))}

        {/* ignite burst — only while touched/hovered */}
        {ignited && (
          <>
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/70"
              style={{ animation: "ringBurst 0.9s cubic-bezier(0.16,1,0.3,1) forwards" }}
            />
            {BURST_PARTICLES.map((p, i) => (
              <span
                key={`burst-${i}`}
                className="pointer-events-none absolute rounded-[2px]"
                style={
                  {
                    left: p.left,
                    bottom: p.bottom,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                    animation: `emberRise ${p.duration} ease-out infinite`,
                    animationDelay: p.delay,
                    "--drift-x": p.driftX,
                  } as React.CSSProperties
                }
              />
            ))}
          </>
        )}

        <div className="grain-overlay" />
      </div>

      <p className="pointer-events-none mt-4 text-center font-mono text-[10px] uppercase tracking-widest2 text-mist-dim opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        touch to ignite
      </p>
    </div>
  );
}
