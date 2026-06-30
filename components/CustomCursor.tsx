"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-pointer]"));
    };

    let raf: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[200] hidden md:block transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-glow"
      />
      <div
        ref={ringRef}
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
          isPointer
            ? "h-10 w-10 border-purple-glow bg-purple/10"
            : "h-7 w-7 border-blue-glow/60"
        }`}
      />
    </div>
  );
}
