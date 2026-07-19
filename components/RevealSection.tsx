"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function RevealSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
