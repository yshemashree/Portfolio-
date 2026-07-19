import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 px-6 py-10 sm:px-10 lg:px-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-serif text-lg tracking-wide text-navy">
          {SITE.shortName}
        </p>
        <div className="flex flex-col gap-1 text-left sm:text-right">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy/50">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-navy/50">
            Designed &amp; built by hand
          </p>
        </div>
      </div>
    </footer>
  );
}
