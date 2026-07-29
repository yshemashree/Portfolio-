import { ALTITUDE } from "@/lib/constants";
import Reveal, { RevealItem } from "@/components/Reveal";

export default function Altitude() {
  return (
    <Reveal
      id="proof"
      className="border-t border-graphite-line bg-graphite px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-4xl">
        <RevealItem>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            Altitude
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Trusted in rooms most people my stage haven&rsquo;t reached yet.
          </h2>
        </RevealItem>

        <div className="mt-16 flex flex-col gap-14">
          {ALTITUDE.map((item) => (
            <RevealItem key={item.title}>
              <div className="group border-l border-graphite-line pl-6 transition-all duration-500 ease-precise hover:translate-x-1 hover:border-signal sm:pl-8">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-mist-dim transition-colors duration-500 group-hover:text-signal">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-balance font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
