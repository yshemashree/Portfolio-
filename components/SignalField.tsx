"use client";

import { useEffect, useRef } from "react";
import { useMouseParallax } from "@/lib/useMouseParallax";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * A faint drifting node graph behind the hero — signal resolving out of
 * noise, the visual thesis of the whole site. Deliberately low-contrast:
 * it should read as texture, not as a hero animation competing with type.
 */
export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallax = useMouseParallax(0.04);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;

    const NODE_COUNT = 46;
    const LINK_DIST = 150;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const px = parallax.current.x * 14;
      const py = parallax.current.y * 14;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16;
            ctx!.strokeStyle = `rgba(63, 224, 245, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x + px, a.y + py);
            ctx!.lineTo(b.x + px, b.y + py);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = "rgba(155, 163, 173, 0.45)";
        ctx!.beginPath();
        ctx!.arc(n.x + px, n.y + py, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    seed();

    if (prefersReduced) {
      draw();
      cancelAnimationFrame(raf);
      // draw a single static frame, no loop
      raf = 0;
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
