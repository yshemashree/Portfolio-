import { PROJECTS } from "@/lib/constants";
import Reveal, { RevealItem } from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function Work() {
  return (
    <Reveal
      id="work"
      className="border-t border-graphite-line bg-canvas px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            Proof, Not a Project List
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Hard AI problems, ending as decisions someone outside the field can make.
          </h2>
        </RevealItem>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <RevealItem key={project.id}>
              <Spotlight className="group h-full overflow-hidden rounded-2xl border border-graphite-line bg-graphite-raised/40 transition-colors duration-500 hover:border-signal/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-graphite-line bg-[radial-gradient(circle_at_30%_20%,#1a2530_0%,#0d0f12_75%)]">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-precise group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(242,244,246,0.05) 0px, rgba(242,244,246,0.05) 1px, transparent 1px, transparent 24px)",
                        }}
                      />
                      <span className="absolute bottom-4 right-5 font-display text-6xl font-medium text-ink/10 sm:text-7xl">
                        {project.index}
                      </span>
                      <span className="absolute left-5 top-4 font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
                        UI screenshot pending
                      </span>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-medium text-ink transition-colors duration-500 group-hover:text-signal">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
                      {project.index}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-signal/80">
                    {project.tag}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-graphite-line pt-4">
                    <p className="text-xs font-medium text-ink/90">{project.outcome}</p>
                    <p className="text-right font-mono text-[10px] leading-relaxed text-mist-dim">
                      {project.stack}
                    </p>
                  </div>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
