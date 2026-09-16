"use client";

import { useEffect, useRef, useState } from "react";

interface SectionRevealProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function SectionReveal({ id, label, children }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding scroll-mt-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <span className="text-verde-600 text-xs tracking-[0.3em] uppercase font-medium">
        {label}
      </span>
      <div className="mt-6">{children}</div>
    </section>
  );
}
