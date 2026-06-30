import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, languages } from "@/lib/data";
import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="cat education.log"
          title="Education"
          description="Academic background and languages spoken."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <div className="space-y-5 md:col-span-3">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.1}>
                <div className="glow-border glass shadow-glass flex gap-4 rounded-2xl p-6">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-blue-glow">{edu.school}</p>
                    <p className="eyebrow mt-2 text-muted">
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="glass shadow-glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                  <LanguagesIcon size={18} />
                </div>
                <h3 className="font-display font-semibold">Languages</h3>
              </div>
              <div className="mt-5 space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between border-b border-line pb-2.5 last:border-none"
                  >
                    <span className="text-sm text-text/85">{lang.name}</span>
                    <span className="eyebrow text-muted">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
