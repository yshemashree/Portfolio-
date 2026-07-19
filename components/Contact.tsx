import { CONTACT, SITE } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";

export default function Contact() {
  return (
    <RevealSection
      id="contact"
      className="border-t border-navy/10 bg-navy px-6 py-24 text-ivory sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            data-reveal
            className="font-sans text-[11px] uppercase tracking-[0.32em] text-ivory/45"
          >
            {CONTACT.eyebrow}
          </p>
          <h2
            data-reveal
            className="mt-6 text-balance font-serif text-3xl font-medium leading-[1.15] sm:text-4xl lg:text-5xl"
          >
            {CONTACT.title}
          </h2>
        </div>

        <div data-reveal className="flex flex-col items-start gap-4 sm:items-end">
          <a
            href={`mailto:${SITE.email}`}
            className="underline-hover font-serif text-xl italic text-ivory sm:text-2xl"
          >
            {SITE.email}
          </a>
          <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-ivory/45">
            {CONTACT.cta}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
