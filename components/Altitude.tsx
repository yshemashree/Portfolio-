import { ALTITUDE } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";

export default function Altitude() {
  return (
    <RevealSection
      id="proof"
      className="border-t border-graphite-line bg-graphite px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-4xl">
        <p
          data-reveal
          className="font-mono text-[11px] uppercase tracking-widest2 text-signal"
        >
          Altitude
        </p>
        <h2
          data-reveal
          className="mt-6 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl"
        >
          Trusted in rooms most people my stage haven&rsquo;t reached yet.
        </h2>

        <div className="mt-16 flex flex-col gap-14">
          {ALTITUDE.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="border-l border-graphite-line pl-6 sm:pl-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-mist-dim">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-balance font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
