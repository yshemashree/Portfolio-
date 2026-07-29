import { CONTACT, SITE } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  return (
    <RevealSection
      id="contact"
      className="border-t border-graphite-line bg-graphite px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p
            data-reveal
            className="font-mono text-[11px] uppercase tracking-widest2 text-signal"
          >
            {CONTACT.eyebrow}
          </p>
          <h2
            data-reveal
            className="mt-6 text-balance font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl lg:text-5xl"
          >
            {CONTACT.title}
          </h2>
        </div>

        <div data-reveal className="flex flex-col items-start gap-4 sm:items-end">
          <Magnetic>
            <a
              href={`mailto:${SITE.email}`}
              className="underline-hover font-display text-xl text-ink transition-colors duration-300 hover:text-signal sm:text-2xl"
            >
              {SITE.email}
            </a>
          </Magnetic>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-mist-dim">
            {CONTACT.cta} — {SITE.location}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
