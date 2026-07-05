import { Reveal } from "@/components/common/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { profile } from "@/lib/data";

const highlights = [
  {
    label: "Fusion accuracy",
    value: 85,
    detail: "Adaptive audio-visual emotion recognition",
    suffix: "%",
  },
  {
    label: "API endpoints shipped",
    value: 18,
    detail: "Across two production platforms",
    prefix: "",
    suffix: "+",
  },
  {
    label: "Manual effort reduced",
    value: 60,
    detail: "NLP-driven mentor matching",
    prefix: "~",
    suffix: "%",
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

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <Reveal delay={0.1}>
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              {profile.summary}
            </p>
            <p className="mt-4 text-muted leading-relaxed text-base sm:text-lg">
              Currently based in {profile.location}, open to full-stack and
              AI/ML engineering roles where shipping production-grade
              features matters more than chasing trends.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-1 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="glass bracket rounded-lg p-5 hover:border-primary/40 transition-colors"
              >
                <div className="font-display font-bold text-3xl gradient-text">
                  <AnimatedCounter
                    from={0}
                    to={h.value}
                    duration={2.5}
                    prefix={h.prefix || ""}
                    suffix={h.suffix || ""}
                  />
                </div>
                <p className="text-sm text-text mt-1">{h.label}</p>
                <p className="text-xs text-muted mt-0.5">{h.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
