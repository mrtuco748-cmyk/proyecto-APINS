"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProgressBar from "@/components/ProgressBar";
import Navigation from "@/components/Navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    gsap.from(iconRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
    });

    gsap.from("section", {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "body",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main>
      <ProgressBar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=75&fit=crop"
            alt="Isla Apipe — Rio Parana"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tierra-900/70 via-tierra-900/40 to-tierra-900/90" />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <div ref={iconRef} className="mb-6">
            <img
              src="/images/icono-APINS.png"
              alt="Icono Isla Apipe"
              className="w-20 h-20 mx-auto"
              style={{ filter: "drop-shadow(0 0 20px rgba(96,179,96,0.5))" }}
            />
          </div>
          <h1 ref={titleRef} className="font-display text-5xl md:text-8xl text-tierra-50 mb-4">
            Isla Apipe
          </h1>
          <p ref={textRef} className="text-lg md:text-xl text-tierra-200 max-w-xl mb-8">
            27,710 hectareas de biodiversidad sobre el Rio Parana
          </p>
          <a
            href="#scroll-sections"
            className="px-8 py-3 bg-verde-600 text-tierra-50 rounded-full hover:bg-verde-500 transition-all duration-300 text-lg glass"
          >
            Explorar
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="w-6 h-10 border-2 border-tierra-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-tierra-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* Glassmorphism Info Section */}
      <section className="section-padding bg-tierra-900 text-tierra-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-center">
            Conocé la isla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-verde-400 text-xl font-bold mb-3">🧭 Geografia</h3>
              <p className="text-tierra-200">
                27,710 hectareas rodeadas por el Rio Parana. Ubicada en la Provincia de Corrientes, 
                entre la Reserva Natural y la Represa Yacyreta.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-rio-400 text-xl font-bold mb-3">📜 Historia</h3>
              <p className="text-tierra-200">
                Capital Provincial de Bienes Intangibles desde 2018. Tradiciones orales, chamame, 
                y una cultura islenha que resiste el tiempo.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-arena-400 text-xl font-bold mb-3">🌿 Naturaleza</h3>
              <p className="text-tierra-200">
                Flora y fauna del litoral argentino. Aves, palmerales, senderos y aguas cristalinas 
                esperan al visitante.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-tierra-300 text-xl font-bold mb-3">🎭 Cultura</h3>
              <p className="text-tierra-200">
                Artesanias, cabalgatas, gastronomia local y la calidez de su gente. 
                Un rincón del Parana que invita a quedarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Sections */}
      <div id="scroll-sections">
        <HorizontalScroll />
      </div>

      <Navigation />
    </main>
  );
}
