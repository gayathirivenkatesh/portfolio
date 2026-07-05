import { Reveal } from "@/components/common/Reveal";
import { TimelineAnimation } from "@/components/ui/TimelineAnimation";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3">
            ch.03 — experience
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
            Where I've shipped code.
          </h2>
        </Reveal>

        <TimelineAnimation>
          <div className="relative mt-16">

            {/* Timeline Line */}

            <div className="absolute left-4 top-0 h-full w-px bg-border" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <Reveal
                  key={`${job.company}-${index}`}
                  delay={index * 0.15}
                >
                  <div className="relative pl-14">

                    {/* Timeline Dot */}

                    <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card border border-border shadow-lg">

                      <Briefcase
                        size={15}
                        className="text-primary"
                      />

                    </div>

                    {/* Card */}

                    <div className="glass rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">

                      <p className="text-xs font-mono text-muted">
                        {job.duration}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-text">
                        {job.role}
                      </h3>

                      <p className="mt-1 text-primary">
                        {job.company} • {job.location}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="relative pl-5 text-muted leading-relaxed"
                          >
                            <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-background"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </TimelineAnimation>
      </div>
    </section>
  );
}