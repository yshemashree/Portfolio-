"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMouseParallax } from "@/lib/useMouseParallax";

/**
 * The centrepiece: an original painterly illustration of a young woman in
 * an indigo handloom chudidhar, eyes closed, a sleeping orange tabby cat
 * curled on her lap. Built as layered inline SVG so brush-texture filters,
 * gradients and individually animatable strands (hair, tail) stay crisp at
 * any size and can be nudged by GSAP without raster assets.
 */
export default function Artwork() {
  const rootRef = useRef<SVGSVGElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const hairRefs = useRef<(SVGPathElement | null)[]>([]);
  const tailRef = useRef<SVGPathElement>(null);
  const catRef = useRef<SVGGElement>(null);
  const glintRefs = useRef<(SVGPathElement | null)[]>([]);
  const planeRef = useRef<SVGGElement>(null);
  const parallax = useMouseParallax(0.05);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // hair drifting in a slow breeze
      hairRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          rotation: i % 2 === 0 ? 2.4 : -2.1,
          transformOrigin: "top center",
          duration: 4.2 + i * 0.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // sleeping cat tail, tiny flicks
      if (tailRef.current) {
        gsap.to(tailRef.current, {
          rotation: 3.5,
          transformOrigin: "20% 80%",
          duration: 3.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // gentle breathing on the cat
      if (catRef.current) {
        gsap.to(catRef.current, {
          scaleY: 1.012,
          scaleX: 1.006,
          transformOrigin: "50% 100%",
          duration: 2.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // glasses catching a sliver of sky
      glintRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.15 },
          {
            opacity: 0.55,
            duration: 3.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.8 + 1,
          }
        );
      });

      // paper plane drifting quietly through the frame
      if (planeRef.current) {
        gsap.to(planeRef.current, {
          x: 60,
          y: -26,
          rotation: 4,
          duration: 26,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf: number;
    const loop = () => {
      const { x, y } = parallax.current;
      if (groupRef.current) {
        groupRef.current.style.transform = `translate3d(${x * 5}px, ${
          y * 4
        }px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [parallax]);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 620 820"
      className="h-full w-full"
      role="img"
      aria-label="Painterly illustration of a young woman in an indigo handloom chudidhar, eyes closed, gently petting an orange tabby cat asleep on her lap, seated before a vast painted sky."
    >
      <defs>
        <linearGradient id="artSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B5678" />
          <stop offset="38%" stopColor="#5C7FA6" />
          <stop offset="68%" stopColor="#A7BFD6" />
          <stop offset="100%" stopColor="#E7DFCC" />
        </linearGradient>

        <linearGradient id="robeGradient" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#2B3B63" />
          <stop offset="55%" stopColor="#20304F" />
          <stop offset="100%" stopColor="#171F38" />
        </linearGradient>

        <linearGradient id="skinGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C68A5E" />
          <stop offset="100%" stopColor="#A96C46" />
        </linearGradient>

        <linearGradient id="hairGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B2420" />
          <stop offset="100%" stopColor="#100D0C" />
        </linearGradient>

        <linearGradient id="catGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DE9455" />
          <stop offset="100%" stopColor="#B6702F" />
        </linearGradient>

        <radialGradient id="lightPool" cx="38%" cy="18%" r="65%">
          <stop offset="0%" stopColor="#FFF3DD" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFF3DD" stopOpacity="0" />
        </radialGradient>

        <filter id="brush" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014 0.02"
            numOctaves="2"
            seed="5"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="brushSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.016"
            numOctaves="2"
            seed="9"
            result="n2"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n2"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="canvasGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="4"
            result="g"
          />
          <feColorMatrix
            in="g"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"
          />
        </filter>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="620" height="820" fill="url(#artSky)" />

      {/* distant painted clouds inside the frame, echoing the surrounding sky */}
      <g filter="url(#brushSoft)" opacity="0.85">
        <ellipse cx="120" cy="150" rx="170" ry="52" fill="#FDFCF9" opacity="0.8" />
        <ellipse cx="470" cy="110" rx="150" ry="44" fill="#FDFCF9" opacity="0.7" />
        <ellipse cx="300" cy="200" rx="130" ry="34" fill="#F2ECDF" opacity="0.55" />
        <ellipse cx="60" cy="260" rx="110" ry="30" fill="#FDFCF9" opacity="0.6" />
        <ellipse cx="560" cy="240" rx="100" ry="28" fill="#FDFCF9" opacity="0.55" />
      </g>

      {/* a single drifting paper plane, a quiet nod to hackathons and half-finished ideas */}
      <g ref={planeRef} opacity="0.75">
        <path
          d="M 470 168 L 520 178 L 486 186 L 478 200 Z"
          fill="#FBF8F2"
          stroke="#22335A"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path d="M 486 186 L 500 180" stroke="#22335A" strokeWidth="0.8" strokeOpacity="0.3" />
      </g>

      {/* distant hills / ground, thin strip to keep the sky dominant */}
      <g filter="url(#brush)">
        <path
          d="M -10 700 Q 120 660 260 690 Q 400 650 560 685 Q 610 675 630 690 L 630 830 L -10 830 Z"
          fill="#5C6B4D"
          opacity="0.85"
        />
        <path
          d="M -10 730 Q 160 700 320 725 Q 480 695 630 720 L 630 830 L -10 830 Z"
          fill="#48583C"
          opacity="0.9"
        />
      </g>
      <g opacity="0.55" filter="url(#brush)">
        <ellipse cx="90" cy="700" rx="20" ry="30" fill="#3F4E33" />
        <ellipse cx="540" cy="695" rx="24" ry="34" fill="#3F4E33" />
        <ellipse cx="330" cy="712" rx="16" ry="24" fill="#465735" />
      </g>

      {/* ===== figure ===== */}
      <g ref={groupRef} style={{ willChange: "transform" }}>
        {/* hair mass — one continuous flowing shape, crown to shoulders */}
        <path
          d="M 318 132
             Q 380 130 402 186
             Q 416 224 404 268
             Q 414 300 410 344
             Q 406 388 388 422
             Q 378 392 376 358
             Q 366 396 356 428
             Q 342 400 338 366
             Q 328 398 316 430
             Q 302 398 300 364
             Q 288 396 276 426
             Q 262 396 264 358
             Q 250 384 240 414
             Q 226 380 234 340
             Q 222 300 230 262
             Q 218 220 234 184
             Q 254 132 318 132 Z"
          fill="url(#hairGradient)"
          filter="url(#brush)"
        />
        <path
          d="M 260 160 Q 318 118 378 158 Q 400 176 402 206 Q 384 168 340 150 Q 296 134 260 160 Z"
          fill="#3A2F27"
          opacity="0.4"
          filter="url(#brushSoft)"
        />

        {/* shoulders + robe (indigo handloom chudidhar) */}
        <path
          d="M 240 392
             Q 244 360 300 348
             Q 340 340 380 350
             Q 428 362 432 396
             Q 466 430 478 500
             Q 494 560 486 620
             Q 500 660 470 690
             Q 400 716 320 714
             Q 234 716 168 686
             Q 142 656 156 610
             Q 148 540 168 490
             Q 178 430 210 400
             Q 224 392 240 392 Z"
          fill="url(#robeGradient)"
          filter="url(#brushSoft)"
        />

        {/* fabric folds — light and dark strokes for a handloom drape */}
        <g
          stroke="#0F1830"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        >
          <path d="M 260 410 Q 250 500 230 600" />
          <path d="M 330 400 Q 336 500 330 640" />
          <path d="M 400 415 Q 412 500 428 610" />
        </g>
        <g
          stroke="#7C93B8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        >
          <path d="M 288 402 Q 280 480 268 560" />
          <path d="M 372 408 Q 380 490 384 580" />
        </g>

        {/* minimal embroidery line at the collar */}
        <path
          d="M 268 366 Q 310 384 372 364"
          stroke="#C9A876"
          strokeWidth="2"
          strokeDasharray="1 7"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />

        {/* far arm, resting */}
        <path
          d="M 420 400 Q 458 430 462 490 Q 464 540 440 570 Q 420 550 418 500 Q 410 450 420 400 Z"
          fill="url(#robeGradient)"
          filter="url(#brushSoft)"
        />

        {/* neck */}
        <path
          d="M 288 330 Q 288 366 296 386 Q 320 396 344 386 Q 352 366 350 330 Z"
          fill="url(#skinGradient)"
        />

        {/* head */}
        <ellipse
          cx="318"
          cy="262"
          rx="70"
          ry="82"
          fill="url(#skinGradient)"
          filter="url(#brush)"
        />

        {/* ears */}
        <ellipse cx="250" cy="268" rx="10" ry="16" fill="#B77A50" opacity="0.9" />
        <ellipse cx="386" cy="268" rx="10" ry="16" fill="#B77A50" opacity="0.9" />

        {/* individually animated wind-blown strands */}
        <path
          ref={(el) => { hairRefs.current[0] = el; }}
          d="M 250 240 Q 220 270 214 320 Q 210 350 226 372"
          stroke="#171310"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.92"
        />
        <path
          ref={(el) => { hairRefs.current[1] = el; }}
          d="M 260 226 Q 232 250 224 292"
          stroke="#201A16"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <path
          ref={(el) => { hairRefs.current[2] = el; }}
          d="M 388 238 Q 414 268 418 314 Q 420 344 406 366"
          stroke="#171310"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.92"
        />
        <path
          ref={(el) => { hairRefs.current[3] = el; }}
          d="M 378 224 Q 402 246 410 286"
          stroke="#201A16"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* soft warm light pooling over the face */}
        <ellipse cx="300" cy="230" rx="80" ry="90" fill="url(#lightPool)" />

        {/* eyebrows, calm */}
        <path d="M 274 236 Q 288 230 302 236" stroke="#2A2118" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M 334 236 Q 348 230 362 236" stroke="#2A2118" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* glasses */}
        <g stroke="#171310" strokeWidth="3.4" fill="none" strokeLinecap="round">
          <circle cx="288" cy="266" r="30" fill="#EFE7D6" fillOpacity="0.12" />
          <circle cx="350" cy="266" r="30" fill="#EFE7D6" fillOpacity="0.12" />
          <path d="M 318 264 Q 319 258 318 264" />
          <path d="M 258 268 Q 245 264 236 270" />
          <path d="M 380 268 Q 393 264 402 270" />
        </g>
        {/* tiny reflection of the sky in each lens */}
        <path
          ref={(el) => { glintRefs.current[0] = el; }}
          d="M 276 254 L 296 258"
          stroke="#DCE9F5"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          ref={(el) => { glintRefs.current[1] = el; }}
          d="M 338 254 L 358 258"
          stroke="#DCE9F5"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* closed, peaceful eyes beneath the glasses */}
        <path d="M 276 266 Q 288 272 300 266" stroke="#241C14" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <path d="M 338 266 Q 350 272 362 266" stroke="#241C14" strokeWidth="2.6" fill="none" strokeLinecap="round" />

        {/* nose, minimal */}
        <path d="M 318 268 Q 314 288 320 296" stroke="#8E5A38" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />

        {/* calm, closed-mouth smile */}
        <path d="M 300 312 Q 319 320 338 312" stroke="#7A4530" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* near arm, sleeve tapering toward the wrist */}
        <path
          d="M 246 398 Q 214 432 210 482 Q 207 526 224 558
             Q 238 578 264 584
             Q 278 580 282 566
             Q 264 558 252 540
             Q 240 512 244 478
             Q 248 440 264 408 Z"
          fill="url(#robeGradient)"
          filter="url(#brushSoft)"
        />
        {/* wrist + hand, resting gently on the cat's back */}
        <path
          d="M 246 552 Q 250 538 268 534 Q 288 530 302 542
             Q 314 552 310 566
             Q 302 578 320 588
             Q 302 596 282 592
             Q 260 586 250 572
             Q 242 562 246 552 Z"
          fill="url(#skinGradient)"
          filter="url(#brushSoft)"
        />
        <g stroke="#8E5A38" strokeWidth="1.6" opacity="0.45" strokeLinecap="round" fill="none">
          <path d="M 268 578 Q 276 588 274 598" />
          <path d="M 284 582 Q 292 592 288 602" />
          <path d="M 300 580 Q 306 588 302 596" />
        </g>

        {/* ===== sleeping orange tabby, curled on her lap ===== */}
        <g ref={catRef} style={{ transformBox: "fill-box" }}>
          {/* tail, curling away from the body and animated independently */}
          <path
            ref={tailRef}
            d="M 448 656 Q 500 646 522 674 Q 538 696 518 714 Q 505 724 490 714"
            stroke="url(#catGradient)"
            strokeWidth="19"
            strokeLinecap="round"
            fill="none"
            filter="url(#brush)"
            style={{ transformBox: "fill-box" }}
          />
          <g stroke="#8C5423" strokeWidth="2.6" opacity="0.4" strokeLinecap="round">
            <path d="M 466 650 L 472 662" />
            <path d="M 494 650 L 498 664" />
          </g>

          {/* curled body — one continuous rounded stroke reads as a sleeping curl */}
          <path
            d="M 314 614 Q 382 580 436 602 Q 462 616 458 646"
            stroke="url(#catGradient)"
            strokeWidth="86"
            strokeLinecap="round"
            fill="none"
            filter="url(#brush)"
          />

          {/* tucked head, slightly smaller, defining the curl's front */}
          <circle cx="310" cy="610" r="34" fill="url(#catGradient)" filter="url(#brush)" />
          <path d="M 288 588 L 280 572 L 298 584 Z" fill="#D6874A" />
          <path d="M 328 586 L 340 570 L 320 580 Z" fill="#D6874A" />

          {/* tabby stripes following the curl */}
          <g stroke="#8C5423" strokeWidth="4" opacity="0.42" strokeLinecap="round" fill="none">
            <path d="M 352 592 Q 358 604 350 614" />
            <path d="M 388 586 Q 396 598 388 610" />
            <path d="M 422 594 Q 430 606 422 618" />
            <path d="M 446 616 Q 454 626 448 638" />
          </g>
          <g stroke="#B6702F" strokeWidth="3" opacity="0.3" strokeLinecap="round" fill="none">
            <path d="M 296 596 Q 302 606 296 616" />
          </g>

          {/* sleeping face */}
          <path d="M 298 612 Q 304 617 310 612" stroke="#3A2210" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.75" />
          <path d="M 316 610 Q 323 605 330 610" stroke="#3A2210" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.65" />
          <path d="M 306 624 Q 309 627 312 624" stroke="#7A4020" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
          <g stroke="#7A4020" strokeWidth="1" opacity="0.35" strokeLinecap="round">
            <path d="M 284 622 L 266 618" />
            <path d="M 284 628 L 266 630" />
          </g>
        </g>
      </g>

      {/* soft vignette to hold focus on the figure */}
      <rect x="0" y="0" width="620" height="820" fill="url(#lightPool)" opacity="0.15" />
      <rect x="0" y="0" width="620" height="820" filter="url(#canvasGrain)" opacity="0.6" />
    </svg>
  );
}
