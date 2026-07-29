"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 20, mass: 0.9 },
  },
};

/**
 * Framer Motion replacement for the old GSAP/[data-reveal] system.
 * Wrap a section in <Reveal>, wrap each direct child that should animate
 * in <RevealItem>. Springs give the settle a slight, deliberate lag
 * instead of a linear ease.
 */
export function Reveal({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

export function RevealItem({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export default Reveal;
