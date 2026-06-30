import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personal } from "@/lib/data";
import { FileDown, Eye } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          command="curl -O resume.pdf"
          title="Resume"
          description="The full breakdown of my experience, projects, and skills in one file."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="glow-border glass shadow-glass flex flex-col items-center gap-6 rounded-2xl p-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
              <FileDown size={28} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">
                {personal.name} — Resume
              </h3>
              <p className="mt-2 text-sm text-muted">
                AI &amp; Machine Learning Engineering · Updated 2025
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={personal.resumeFile}
                download
                data-cursor-pointer
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-6 py-3 font-medium text-white shadow-glowBlue transition-transform hover:scale-[1.03]"
              >
                <FileDown size={16} /> Download PDF
              </a>
              <a
                href={personal.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-line2 px-6 py-3 font-medium text-text transition-colors hover:border-blue-glow"
              >
                <Eye size={16} /> Preview
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
