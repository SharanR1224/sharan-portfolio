"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personal } from "@/lib/data";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          command="./contact --me"
          title="Let's Build Something"
          description="Open to AI Engineer, Generative AI, ML Engineer, Data Scientist, and Software Engineer roles."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          <Reveal className="space-y-4 md:col-span-2">
            <a
              href={`mailto:${personal.email}`}
              data-cursor-pointer
              className="glow-border glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                <Mail size={18} />
              </div>
              <div>
                <p className="eyebrow text-muted">Email</p>
                <p className="text-sm text-text/90">{personal.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personal.phone}`}
              data-cursor-pointer
              className="glow-border glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                <Phone size={18} />
              </div>
              <div>
                <p className="eyebrow text-muted">Phone</p>
                <p className="text-sm text-text/90">{personal.phone}</p>
              </div>
            </a>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-purple/20 text-blue-glow">
                <MapPin size={18} />
              </div>
              <div>
                <p className="eyebrow text-muted">Location</p>
                <p className="text-sm text-text/90">{personal.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="glow-border glass flex h-11 w-11 items-center justify-center rounded-xl text-text/80 transition-colors hover:text-blue-glow"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                className="glow-border glass flex h-11 w-11 items-center justify-center rounded-xl text-text/80 transition-colors hover:text-blue-glow"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass shadow-glass space-y-4 rounded-2xl p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="focus-ring mt-2 w-full rounded-xl border border-line2 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-blue-glow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="focus-ring mt-2 w-full rounded-xl border border-line2 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-blue-glow"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="focus-ring mt-2 w-full resize-none rounded-xl border border-line2 bg-white/5 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-blue-glow"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button
                type="submit"
                data-cursor-pointer
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-purple px-6 py-3 font-medium text-white shadow-glowBlue transition-transform hover:scale-[1.03]"
              >
                <Send size={16} />
                {sent ? "Opening mail client..." : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
