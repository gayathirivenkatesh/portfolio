import { GraduationCap, BadgeCheck, Clock } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { education, certifications } from "@/lib/data";

export function EducationCerts() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              ch.05 — education
            </p>
            <h2 className="font-display font-bold text-3xl text-text">
              Academic foundation.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            {education.map((ed) => (
              <Reveal key={ed.degree} delay={0.1} className="glass bracket rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-text">
                      {ed.degree}
                    </h3>
                    <p className="text-sm text-primary mt-0.5">
                      {ed.institution}
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      {ed.location} · {ed.duration} · CGPA {ed.cgpa}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ed.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-muted"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              ch.05b — certifications
            </p>
            <h2 className="font-display font-bold text-3xl text-text">
              Keeping the toolkit current.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-4">
            {certifications.map((cert) => (
              <Reveal
                key={cert.name}
                delay={0.15}
                className="glass bracket rounded-lg p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    cert.status === "Completed"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  {cert.status === "Completed" ? (
                    <BadgeCheck size={20} />
                  ) : (
                    <Clock size={20} />
                  )}
                </span>
                <div>
                  <p className="text-text font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {cert.issuer} ·{" "}
                    <span
                      className={
                        cert.status === "Completed"
                          ? "text-primary"
                          : "text-secondary"
                      }
                    >
                      {cert.status}
                    </span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
