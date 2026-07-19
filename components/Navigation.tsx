"use client";

import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navigation() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
      <div className="flex items-start justify-between px-6 pt-7 sm:px-10 sm:pt-9 lg:px-14">
        <a
          href="#top"
          className="pointer-events-auto font-serif text-lg tracking-[0.18em] text-navy sm:text-xl"
        >
          {SITE.shortName}
        </a>

        <nav className="pointer-events-auto hidden flex-col items-end gap-1 text-right sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-hover font-sans text-[11px] uppercase tracking-[0.24em] text-navy/70 transition-colors duration-500 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#work"
          className="pointer-events-auto font-sans text-[11px] uppercase tracking-[0.24em] text-navy/70 sm:hidden"
        >
          Menu
        </a>
      </div>
    </header>
  );
}
