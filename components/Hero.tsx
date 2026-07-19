"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BackgroundClouds from "@/components/BackgroundClouds";
import PaperPlanes from "@/components/PaperPlanes";
import Navigation from "@/components/Navigation";
import RightSidebar from "@/components/RightSidebar";
import Artwork from "@/components/Artwork";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const cloudsWrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const els = [
      cloudsWrapRef.current,
      frameRef.current,
      eyebrowRef.current,
      nameRef.current,
      captionRef.current,
      sidebarRef.current,
      navRef.current,
    ];

    if (prefersReduced || els.some((el) => !el)) {
      els.forEach((el) => {
        if (el) gsap.set(el, { clearProps: "all" });
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(cloudsWrapRef.current, {
      opacity: 1,
      duration: 1.4,
      ease: "sine.out",
    })
      .to(
        frameRef.current,
        { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
        0.35
      )
      .to(navRef.current, { opacity: 1, duration: 0.9 }, 0.6)
      .to(
        eyebrowRef.current,
        { opacity: 1, y: 0, duration: 0.9 },
        1.15
      )
      .to(
        nameRef.current,
        { opacity: 1, y: 0, duration: 1.0 },
        1.3
      )
      .to(
        captionRef.current,
        { opacity: 1, y: 0, duration: 0.9 },
        1.55
      )
      .to(sidebarRef.current, { opacity: 1, duration: 1.0 }, 1.85);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ivory"
    >
      <div ref={cloudsWrapRef} className="absolute inset-0 opacity-0">
        <BackgroundClouds />
        <PaperPlanes />
      </div>

      <div ref={navRef} className="opacity-0">
        <Navigation />
      </div>

      <div className="relative z-20 flex flex-1 flex-col px-6 pb-8 pt-24 sm:px-10 sm:pt-28 lg:px-16">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex justify-center lg:w-[60%] lg:justify-start">
            <div
              ref={frameRef}
              className="w-full max-w-[300px] scale-[1.05] border border-navy/15 bg-warmwhite p-2 opacity-0 shadow-[0_40px_90px_-45px_rgba(19,28,46,0.45)] sm:max-w-[380px] sm:p-3 lg:ml-[6%] lg:max-w-[430px]"
            >
              <div className="relative aspect-[620/820] w-full overflow-hidden bg-sky">
                <Artwork />
              </div>
            </div>
          </div>

          <div
            ref={sidebarRef}
            className="flex justify-center opacity-0 lg:w-[28%] lg:justify-end"
          >
            <RightSidebar />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center lg:mt-6 lg:items-start lg:pl-[6%] lg:text-left">
          <p
            ref={eyebrowRef}
            className="translate-y-3 font-sans text-[10px] uppercase tracking-[0.42em] text-navy/50 opacity-0 sm:text-[11px]"
          >
            Portfolio &mdash; No. 001
          </p>
          <h1
            ref={nameRef}
            className="mt-3 translate-y-4 text-balance font-serif text-[13vw] font-medium uppercase leading-[0.92] tracking-tight text-navy opacity-0 sm:text-[9vw] lg:text-[5.6vw]"
          >
            {SITE.name}
          </h1>
          <p
            ref={captionRef}
            className="mt-4 translate-y-3 font-sans text-xs uppercase tracking-[0.34em] text-navy/55 opacity-0 sm:text-sm"
          >
            {SITE.caption}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center lg:hidden">
        <span className="h-8 w-px animate-pulse bg-navy/25" />
      </div>
    </section>
  );
}
