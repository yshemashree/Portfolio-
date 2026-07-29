import { CONTACT, SITE } from "@/lib/constants";
import Reveal, { RevealItem } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  return (
    <Reveal
      id="contact"
      className="border-t border-graphite-line bg-graphite px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <RevealItem>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
              {CONTACT.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl lg:text-5xl">
              {CONTACT.title}
            </h2>
          </RevealItem>
        </div>

        <RevealItem className="flex flex-col items-start gap-4 sm:items-end">
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
        </RevealItem>
      </div>
    </Reveal>
  );
}
