"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";
import { personal } from "@/lib/data";

function useTypingEffect(words: string[], speed = 65, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 1.6
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(personal.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="eyebrow flex items-center gap-2 text-purple-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-cyan/70" />
              <span className="h-2 w-2 rounded-full bg-cyan" />
            </span>
            open to AI / ML / GenAI / SWE roles
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.name}</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-text/90 sm:text-xl">
            <span className="text-purple-glow">{"> "}</span>
            {typed}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-blink bg-blue-glow" />
          </div>

          <p className="mt-6 max-w-md leading-relaxed text-muted">
            {personal.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor-pointer
              className="glow-border focus-ring relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-6 py-3 font-medium text-white shadow-glowBlue transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={personal.resumeFile}
              download
              data-cursor-pointer
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line2 px-6 py-3 font-medium text-text transition-colors hover:border-blue-glow"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-pointer
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-blue-glow"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-pointer
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-blue-glow"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float-slow absolute -top-10 -left-6 h-40 w-40 rounded-full bg-blue/25 blur-3xl" />
          <div className="animate-float absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-purple/25 blur-3xl" />

          <div className="glass-strong shadow-glass relative rounded-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="eyebrow ml-2 text-muted/70">
                sharan@portfolio:~
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed text-text/90">
              <p>
                <span className="text-purple-glow">$</span> whoami
              </p>
              <p className="text-muted">AI &amp; ML Engineering Graduate</p>
              <p>
                <span className="text-purple-glow">$</span> cat focus.txt
              </p>
              <p className="text-muted">
                Generative AI · Machine Learning · Computer Vision
              </p>
              <p>
                <span className="text-purple-glow">$</span> ./status.sh
              </p>
              <p className="text-cyan">
                ✓ Available for AI Engineer / GenAI / MLE / SWE roles
              </p>
              <p>
                <span className="text-purple-glow">$</span>{" "}
                <span className="animate-blink">▍</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-pointer
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-blue-glow"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
