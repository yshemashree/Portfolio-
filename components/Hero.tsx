"use client";

import { motion, Variants } from "framer-motion";
import SignalField from "@/components/SignalField";
import AvatarGlow from "@/components/AvatarGlow";
import Navigation from "@/components/Navigation";
import { HERO } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.9 },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: "easeOut" } },
};

const avatarIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16, mass: 1 },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-canvas"
    >
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <SignalField />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,#08090B_78%)]" />
      </motion.div>

      <motion.div initial="hidden" animate="show" variants={fadeIn}>
        <Navigation />
      </motion.div>

      <motion.div
        className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-14 px-6 pt-28 pb-16 sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-14 lg:pt-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="lg:w-[58%]">
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-widest2 text-signal"
          >
            {HERO.eyebrow}
          </motion.p>

          <h1 className="mt-6 text-balance font-display text-[11vw] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4vw]">
            {HERO.headlineLines.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg text-balance text-base leading-relaxed text-mist sm:text-lg"
          >
            {HERO.sub}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-mist-dim"
          >
            {HERO.role}
          </motion.p>
        </div>

        <motion.div
          variants={avatarIn}
          className="mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:w-[34%] lg:max-w-[380px]"
        >
          <AvatarGlow />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center">
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-mist-dim to-transparent" />
      </div>
    </section>
  );
}
