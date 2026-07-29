"use client";

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

export default function AvatarGlow({ src }: { src?: string }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-graphite-line bg-graphite-raised">
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
            className="relative h-[78%] w-[58%] rounded-t-[42%] bg-graphite-line/70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 6px, transparent 6px, transparent 12px)",
            }}
          />
          <p className="pointer-events-none absolute bottom-4 left-1/2 w-4/5 -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
            Avatar placeholder — drop your image in
          </p>
        </div>
      )}

      {/* ember glow rising from the shoulders */}
      <div
        className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-signal/40 blur-3xl animate-pulseGlow"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[20%] h-24 w-24 rounded-full bg-signal-deep/40 blur-2xl animate-pulseGlow"
        style={{ mixBlendMode: "screen", animationDelay: "1.2s" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[18%] h-24 w-24 rounded-full bg-signal-ember/25 blur-2xl animate-pulseGlow"
        style={{ mixBlendMode: "screen", animationDelay: "2.1s" }}
      />

      {/* eye-glow accent — reposition once the real portrait's eye coordinates are known */}
      <div
        className="pointer-events-none absolute left-1/2 top-[30%] h-3 w-10 -translate-x-1/2 rounded-full bg-signal-soft/80 blur-md animate-pulseGlow"
        style={{ mixBlendMode: "screen" }}
      />

      {/* floating voxel embers */}
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

      <div className="grain-overlay" />
    </div>
  );
}
