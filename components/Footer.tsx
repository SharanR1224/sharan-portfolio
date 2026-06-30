import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="eyebrow">
          © {new Date().getFullYear()} {personal.name} — built with Next.js
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-blue-glow focus-ring rounded"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-pointer
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-blue-glow focus-ring rounded"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            data-cursor-pointer
            aria-label="Email"
            className="text-muted transition-colors hover:text-blue-glow focus-ring rounded"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="eyebrow text-muted/70">{personal.location}</p>
      </div>
    </footer>
  );
}
