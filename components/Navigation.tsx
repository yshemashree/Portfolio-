"use client";

import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9 lg:px-14">
        <a
          href="#top"
          className="font-display text-sm tracking-[0.18em] text-ink"
        >
          {SITE.shortName}
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-hover font-mono text-[11px] uppercase tracking-widest2 text-mist transition-colors duration-500 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-graphite-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-mist transition-colors duration-500 hover:border-signal/50 hover:text-signal sm:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
