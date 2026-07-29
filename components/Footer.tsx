import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-line bg-canvas px-6 py-10 sm:px-10 lg:px-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-display text-sm tracking-wide text-ink">
          {SITE.shortName}
        </p>
        <div className="flex flex-col gap-1 text-left sm:text-right">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-mist-dim">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
