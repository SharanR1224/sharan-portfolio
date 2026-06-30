import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";
import { Code2, Wrench, BrainCircuit, Cloud, Sparkles } from "lucide-react";

const ICONS: Record<string, typeof Code2> = {
  Languages: Code2,
  "Frameworks & Tools": Wrench,
  "AI / ML": BrainCircuit,
  "Cloud Platforms": Cloud,
  "Core Strengths": Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="pip list --skills"
          title="Skills & Tools"
          description="The languages, frameworks, and strengths I bring to a team."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => {
            const Icon = ICONS[category] ?? Sparkles;
            return (
              <Reveal key={category} delay={i * 0.07}>
                <div className="glow-border glass shadow-glass group h-full rounded-2xl p-6 transition-transform hover:-translate-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold">
                      {category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="eyebrow rounded-full border border-line2 px-3 py-1.5 text-text/80 transition-colors group-hover:border-blue-glow/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
