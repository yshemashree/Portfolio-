"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SignalField from "@/components/SignalField";
import AvatarGlow from "@/components/AvatarGlow";
import Navigation from "@/components/Navigation";
import { HERO } from "@/lib/constants";

export default function Hero() {
  const navRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const els = [
      navRef.current,
      eyebrowRef.current,
      ...lineRefs.current,
      subRef.current,
      roleRef.current,
      avatarRef.current,
      fieldRef.current,
    ];

    if (prefersReduced || els.some((el) => !el)) {
      els.forEach((el) => el && gsap.set(el, { clearProps: "all" }));
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(fieldRef.current, { opacity: 1, duration: 1.6, ease: "sine.out" })
      .to(navRef.current, { opacity: 1, duration: 0.8 }, 0.3)
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
      .to(
        lineRefs.current,
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
        0.65
      )
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .to(roleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .to(avatarRef.current, { opacity: 1, scale: 1, duration: 1.1 }, 0.7);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-canvas"
    >
      <div ref={fieldRef} className="absolute inset-0 opacity-0">
        <SignalField />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,#08090B_78%)]" />
      </div>

      <div ref={navRef} className="opacity-0">
        <Navigation />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-14 px-6 pt-28 pb-16 sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-14 lg:pt-24">
        <div className="lg:w-[58%]">
          <p
            ref={eyebrowRef}
            className="translate-y-3 font-mono text-[11px] uppercase tracking-widest2 text-signal opacity-0"
          >
            {HERO.eyebrow}
          </p>

          <h1 className="mt-6 text-balance font-display text-[11vw] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4vw]">
            {HERO.headlineLines.map((line, i) => (
              <span
                key={line}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="block translate-y-6 opacity-0"
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            ref={subRef}
            className="mt-8 max-w-lg translate-y-4 text-balance text-base leading-relaxed text-mist opacity-0 sm:text-lg"
          >
            {HERO.sub}
          </p>

          <p
            ref={roleRef}
            className="mt-6 translate-y-3 font-mono text-[11px] uppercase tracking-widest2 text-mist-dim opacity-0"
          >
            {HERO.role}
          </p>
        </div>

        <div
          ref={avatarRef}
          className="mx-auto w-full max-w-[300px] scale-95 opacity-0 sm:max-w-[340px] lg:w-[34%] lg:max-w-[380px]"
        >
          <AvatarGlow />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center">
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-mist-dim to-transparent" />
      </div>
    </section>
  );
}
