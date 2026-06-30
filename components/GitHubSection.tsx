import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personal } from "@/lib/data";
import { Github, ArrowUpRight, GitFork, Star, Code } from "lucide-react";

export default function GitHubSection() {
  return (
    <section id="github" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          command="git remote -v"
          title="On GitHub"
          description="Code, experiments, and project history live here."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="glow-border glass shadow-glass relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div className="animate-float-slow absolute -top-16 -right-16 h-56 w-56 rounded-full bg-purple/20 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                  <Github size={26} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {personal.githubLabel}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Machine Learning, Computer Vision &amp; automation projects
                  </p>
                </div>
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="focus-ring inline-flex flex-none items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-6 py-3 font-medium text-white shadow-glowPurple transition-transform hover:scale-[1.03]"
              >
                Visit Profile
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="relative mt-9 grid grid-cols-3 gap-4 border-t border-line pt-7">
              {[
                { icon: Code, label: "Repositories", value: "Active" },
                { icon: Star, label: "Focus", value: "AI / ML" },
                { icon: GitFork, label: "Stack", value: "Python" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon
                    size={18}
                    className="mx-auto text-purple-glow"
                  />
                  <p className="mt-2 font-display font-semibold">
                    {stat.value}
                  </p>
                  <p className="eyebrow mt-1 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
