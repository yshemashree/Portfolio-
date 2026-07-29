import { ABOUT_PARAGRAPH, ABOUT_STATEMENT, FOCUS_AREAS } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";

export default function About() {
  return (
    <RevealSection
      id="about"
      className="border-t border-graphite-line bg-canvas px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-5xl">
        <p
          data-reveal
          className="font-mono text-[11px] uppercase tracking-widest2 text-signal"
        >
          Statement
        </p>

        <h2
          data-reveal
          className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl lg:text-5xl"
        >
          {ABOUT_STATEMENT.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p
          data-reveal
          className="mt-10 max-w-2xl text-balance text-base leading-relaxed text-mist sm:text-lg"
        >
          {ABOUT_PARAGRAPH}
        </p>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-graphite-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area) => (
            <div key={area.index} data-reveal>
              <span className="font-mono text-xs text-mist-dim">
                {area.index}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
