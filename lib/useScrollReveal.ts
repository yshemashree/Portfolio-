"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * Applies a slow, editorial fade-and-rise to every [data-reveal] child of
 * the returned ref once it enters the viewport. One ScrollTrigger per
 * element, staggered slightly by DOM order so groups of text reveal like
 * lines in a printed page rather than all at once.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const targets = ref.current.querySelectorAll<HTMLElement>("[data-reveal]");

    if (prefersReduced) {
      targets.forEach((el) => gsap.set(el, { clearProps: "all" }));
      return;
    }

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: (i % 6) * 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
