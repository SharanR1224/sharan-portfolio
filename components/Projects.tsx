import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects, personal } from "@/lib/data";
import { Folder, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="ls ./projects"
          title="Featured Projects"
          description="Academic and personal builds spanning ML, computer vision, and applied engineering."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="glow-border glass shadow-glass group flex h-full flex-col rounded-2xl p-7 transition-transform hover:-translate-y-1.5">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                    <Folder size={20} />
                  </div>
                  <span className="eyebrow rounded-full bg-white/5 px-3 py-1 text-cyan">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-text/75"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-purple-glow" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="eyebrow rounded-full border border-line2 px-2.5 py-1 text-text/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-pointer
                  className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-glow transition-colors hover:text-purple-glow"
                >
                  View on GitHub
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
