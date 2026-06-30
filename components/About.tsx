import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { personal, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="cat about.md"
          title="About Me"
          description="A quick profile, straight from the resume."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-5 md:gap-12">
          <Reveal className="md:col-span-3">
            <div className="glass shadow-glass rounded-2xl p-8">
              <p className="eyebrow text-purple-glow">// profile</p>
              <p className="mt-4 text-lg leading-relaxed text-text/90">
                {personal.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Generative AI",
                  "Machine Learning",
                  "Computer Vision",
                  "Automation Workflows",
                  "Python",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="eyebrow rounded-full border border-line2 px-3 py-1.5 text-text/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="grid h-full grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-border glass flex flex-col items-center justify-center rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                >
                  <span className="text-gradient text-3xl font-semibold sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </span>
                  <span className="eyebrow mt-2 text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
