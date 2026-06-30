import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certificates } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="cat certificates.json"
          title="Certificates"
          description="Courses and programs completed along the way."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <div className="glow-border glass flex items-center gap-4 rounded-2xl p-6 shadow-glass transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="eyebrow mt-1 text-cyan">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
