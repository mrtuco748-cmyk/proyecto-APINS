"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with blur-up */}
      <div
        ref={imgRef}
        className={`absolute inset-0 transition-all duration-1500 ease-out ${loaded ? "blur-up loaded" : "blur-up"}`}
      >
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=75&fit=crop"
          alt="Isla Apipe — Río Paraná"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-tierra-900/60 via-tierra-900/30 to-tierra-900/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <p className="text-verde-400 text-sm tracking-[0.3em] uppercase mb-4 reveal">
          Reserva Natural · Corrientes · Argentina</p>
        <h1 className="font-display text-5xl md:text-8xl text-tierra-50 mb-4 reveal">
          Isla Apipe
        </h1>
        <p className="text-lg md:text-xl text-tierra-200 max-w-xl mb-8 reveal">
          27,710 hectáreas de biodiversidad sobre el Río Paraná
        </p>
        <a
          href="#geografia"
          className="px-8 py-3 bg-verde-600 text-tierra-50 rounded-full hover:bg-verde-500 transition-all duration-300 text-lg reveal"
          style={{ animationDelay: "0.5s" }}
        >
          Explorar
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tierra-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-tierra-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
