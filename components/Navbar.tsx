"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certificates", label: "certificates" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled ? "glass shadow-glass py-2.5 mx-4" : "py-1"
        }`}
      >
        <a
          href="#home"
          data-cursor-pointer
          className="font-display font-semibold text-lg tracking-tight focus-ring"
        >
          <span className="text-gradient">Sharan</span>
          <span className="text-muted">.r</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-pointer
              className={`eyebrow rounded-full px-3.5 py-2 transition-colors focus-ring ${
                active === link.href
                  ? "text-text bg-white/5"
                  : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-pointer
          className="hidden md:inline-flex eyebrow items-center gap-2 rounded-full border border-line2 px-4 py-2 text-text transition-all hover:border-blue-glow hover:shadow-glowBlue focus-ring"
        >
          let&apos;s talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          data-cursor-pointer
          className="md:hidden p-2 text-text focus-ring rounded-lg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-4 mt-2 flex flex-col rounded-2xl p-4 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="eyebrow rounded-lg px-3 py-3 text-text/80 hover:text-text hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
