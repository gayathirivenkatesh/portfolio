import { Reveal } from "@/components/common/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { profile, experience, projects, skills } from "@/lib/data";

const highlights = [
  {
    label: "Projects delivered",
    value: projects.length,
    detail: "Real applications using full stack and AI workflows",
  },
  {
    label: "Internship experience",
    value: experience.length,
    detail: "Hands-on engineering internships and production delivery",
  },
  {
    label: "Technologies mastered",
    value: Object.values(skills).flat().length,
    detail: "Languages, frameworks, databases, and tooling",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            ch.01 — about
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text max-w-2xl">
            Building real, working systems — end to end.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.45fr_0.95fr]">
          <Reveal delay={0.1}>
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              {profile.summary}
            </p>
            <p className="mt-5 text-muted leading-relaxed text-base sm:text-lg">
              Based in {profile.location}, I focus on premium full-stack and
              AI-driven applications that are performant, accessible, and built
              for real users.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="space-y-4">
            <div className="glass bracket rounded-3xl border border-border p-6 shadow-[0_24px_80px_rgba(79,156,249,0.08)]">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary">
                Core strength
              </p>
              <p className="mt-3 text-xl font-semibold text-text">
                Experienced in building data-driven platforms, API-first
                services, and AI-enhanced user experiences.
              </p>
            </div>
            <div className="glass bracket rounded-3xl border border-border p-6 shadow-[0_24px_80px_rgba(124,58,237,0.08)]">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary">
                What I bring
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Full-stack system design with clear API contracts.</li>
                <li>AI / ML integration into production workflows.</li>
                <li>Responsive interfaces with motion, polish, and accessibility.</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={0.15 + index * 0.08}>
              <div className="glass bracket rounded-3xl border border-border p-6 hover:border-primary/40 transition-colors">
                <div className="text-4xl font-display font-bold text-text">
                  <AnimatedCounter from={0} to={item.value} duration={2.2} />
                </div>
                <p className="mt-3 text-sm font-semibold text-text">{item.label}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
