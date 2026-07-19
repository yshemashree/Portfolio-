import { FOCUS_AREAS, RECOGNITION } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";

export default function Work() {
  return (
    <RevealSection
      id="work"
      className="border-t border-navy/10 bg-cream px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p
          data-reveal
          className="font-sans text-[11px] uppercase tracking-[0.32em] text-navy/45"
        >
          Fields of Work
        </p>

        <div className="mt-10 divide-y divide-navy/10 border-t border-navy/10">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.index}
              data-reveal
              className="group grid grid-cols-[auto,1fr] items-baseline gap-x-6 gap-y-2 py-8 sm:grid-cols-[64px,1fr,1.4fr] sm:items-start sm:py-10"
            >
              <span className="font-serif text-sm text-navy/40">
                {area.index}
              </span>
              <h3 className="font-serif text-2xl text-navy transition-colors duration-500 sm:text-3xl">
                {area.title}
              </h3>
              <p className="col-span-2 max-w-md font-sans text-sm leading-relaxed text-navy/60 sm:col-span-1 sm:text-base">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="mt-20 flex flex-col gap-6 border-t border-navy/10 pt-16 sm:mt-24 sm:flex-row sm:items-end sm:justify-between sm:pt-20"
        >
          <div className="max-w-xl">
            <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-tabbydeep">
              {RECOGNITION.eyebrow}
            </p>
            <h3 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight text-navy sm:text-4xl">
              {RECOGNITION.title}
            </h3>
            <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-navy/60 sm:text-base">
              {RECOGNITION.description}
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
