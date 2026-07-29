import { PROJECTS } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";
import Spotlight from "@/components/Spotlight";

export default function Work() {
  return (
    <RevealSection
      id="work"
      className="border-t border-graphite-line bg-canvas px-6 py-24 sm:px-10 sm:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <p
          data-reveal
          className="font-mono text-[11px] uppercase tracking-widest2 text-signal"
        >
          Proof, Not a Project List
        </p>
        <h2
          data-reveal
          className="mt-6 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl"
        >
          Each one starts as a hard AI problem and ends as a decision someone outside the field can make.
        </h2>

        <div className="mt-16 divide-y divide-graphite-line border-t border-graphite-line">
          {PROJECTS.map((project) => (
            <Spotlight key={project.id} data-reveal className="group">
              <div className="grid grid-cols-1 gap-8 rounded-2xl px-4 py-12 transition-colors duration-500 hover:bg-graphite-raised/40 sm:py-14 lg:grid-cols-[minmax(0,280px)_1fr] lg:px-6">
                <div>
                  <span className="font-mono text-xs text-mist-dim">
                    {project.index}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink transition-colors duration-500 group-hover:text-signal sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-signal/80">
                    {project.tag}
                  </p>
                  <p className="mt-5 max-w-xs text-xs leading-relaxed text-mist-dim">
                    {project.stack}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
                      The problem
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
                      The translation
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {project.translation}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-mist-dim">
                      The outcome
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/90">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
