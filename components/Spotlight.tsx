"use client";

import { useRef, useState } from "react";

/**
 * Cursor-tracked glow that fades in behind its children on hover —
 * the Linear/Stripe card treatment. Keeps content in its own stacking
 * layer so the glow never washes out text contrast.
 */
export default function Spotlight({
  children,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(63,224,245,0.09), transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
