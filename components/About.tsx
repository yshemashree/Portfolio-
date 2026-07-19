import { ABOUT_PARAGRAPH, ABOUT_STATEMENT } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";

export default function About() {
  return (
    <RevealSection
      id="about"
      className="border-t border-navy/10 bg-ivory px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <p
          data-reveal
          className="font-sans text-[11px] uppercase tracking-[0.32em] text-navy/45"
        >
          Statement
        </p>

        <h2
          data-reveal
          className="mt-6 max-w-4xl text-balance font-serif text-3xl font-medium leading-[1.15] text-navy sm:text-4xl lg:text-5xl"
        >
          {ABOUT_STATEMENT.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p
          data-reveal
          className="mt-10 max-w-2xl text-balance font-sans text-base leading-relaxed text-navy/70 sm:text-lg"
        >
          {ABOUT_PARAGRAPH}
        </p>
      </div>
    </RevealSection>
  );
}
