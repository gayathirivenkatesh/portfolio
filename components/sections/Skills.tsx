"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { skills, type SkillCategory } from "@/lib/data";

const categories = Object.keys(skills) as SkillCategory[];

type SkillEntry = {
  name: string;
  category: SkillCategory;
};

const descriptions: Record<string, string> = {
  Java: "Object-oriented backend development.",
  JavaScript: "Interactive web applications.",
  Python: "Automation, AI & backend services.",
  C: "Core programming fundamentals.",
  SQL: "Relational database management.",

  "React.js": "Modern component-based UI.",
  HTML5: "Semantic web development.",
  CSS3: "Responsive user interfaces.",
  "Tailwind CSS": "Utility-first styling.",

  "Node.js": "Scalable backend runtime.",
  "Express.js": "RESTful API development.",
  FastAPI: "High-performance Python APIs.",
  "RESTful API Design": "Clean API architecture.",
  Microservices: "Distributed applications.",
  "JWT Authentication": "Secure authentication.",

  TensorFlow: "Deep learning models.",
  Keras: "Neural network development.",
  OpenCV: "Computer vision.",
  LangChain: "LLM applications.",
  RAG: "Retrieval Augmented Generation.",
  HuggingFace: "AI model ecosystem.",
  "Generative AI": "AI-powered applications.",

  MongoDB: "NoSQL database.",
  MySQL: "Relational database.",

  Docker: "Containerized deployment.",
  Git: "Version control.",
  Vercel: "Frontend deployment.",
  Render: "Backend hosting.",
  "GitHub Actions (CI/CD)": "Continuous deployment.",

  GitHub: "Code collaboration.",
  "VS Code": "Development environment.",
  Antigravity: "Developer productivity.",
};

export function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");
  const [query, setQuery] = useState("");

  const skillEntries = useMemo(() => {
    return Object.entries(skills).flatMap(([category, items]) =>
      items.map((skill) => ({
        name: skill,
        category: category as SkillCategory,
      }))
    );
  }, []);

  const visible = useMemo(() => {
    return skillEntries.filter((item) => {
      const matchesCategory =
        active === "All" || item.category === active;

      const matchesQuery = item.name
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [active, query, skillEntries]);

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-text max-w-3xl">
            Technologies I use to build scalable applications.
          </h2>

          <p className="mt-4 max-w-2xl text-muted">
            My everyday toolkit for frontend, backend, AI, databases,
            deployment and cloud development.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >

          <div className="flex flex-wrap gap-2">

            <button
              onClick={() => setActive("All")}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                active === "All"
                  ? "bg-primary text-background"
                  : "glass border border-border hover:border-primary"
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active === category
                    ? "bg-primary text-background"
                    : "glass border border-border hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              size={18}
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search technologies..."
              className="glass w-full rounded-full py-3 pl-11 pr-4 outline-none border border-border focus:border-primary transition"
            />

          </div>

        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {visible.length ? (
            visible.map((entry, index) => (
              <motion.div
                key={`${entry.name}-${entry.category}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-border glass p-6 transition-all duration-300 hover:border-primary/40"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between">

                  <div>

                    <h3 className="text-xl font-semibold text-text">
                      {entry.name}
                    </h3>

                    <span className="mt-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                      {entry.category}
                    </span>

                    <p className="mt-5 text-sm leading-7 text-muted">
                      {descriptions[entry.name] ??
                        "Modern software development technology."}
                    </p>

                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-primary/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </motion.div>
            ))
          ) : (
            <div className="glass rounded-3xl border border-border p-10 text-center text-muted md:col-span-2 lg:col-span-3">
              No technologies found for{" "}
              <span className="text-primary font-medium">
                "{query}"
              </span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}