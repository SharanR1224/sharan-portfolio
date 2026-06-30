import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          command="git log --internships"
          title="Experience"
          description="Where I've applied AI and engineering skills in real teams."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue via-purple to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1}>
                <div className="relative flex gap-6 sm:pl-0">
                  <div className="relative z-10 hidden h-10 w-10 flex-none items-center justify-center rounded-full border border-line2 bg-surface text-blue-glow sm:flex">
                    <Briefcase size={16} />
                  </div>

                  <div className="glass shadow-glass glow-border w-full rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-blue-glow">{job.company}</p>
                        <p className="eyebrow mt-1 text-cyan">{job.track}</p>
                      </div>
                      <div className="text-right">
                        <p className="eyebrow text-muted">{job.period}</p>
                        <p className="eyebrow mt-1 text-muted/70">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-text/80"
                        >
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-purple-glow" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="eyebrow rounded-full bg-white/5 px-3 py-1 text-text/70"
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
      </div>
    </section>
  );
}
