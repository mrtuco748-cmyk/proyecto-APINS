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
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(iconRef.current, {
        opacity: 0,
        scale: 0.3,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <main>
      <ProgressBar />

      {/* Hero */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80&fit=crop"
            alt="Isla Apipe"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div ref={iconRef} className="hero-icon">
            <img
              src="/images/icono-APINS.png"
              alt="Isla Apipe"
              className="w-24 h-24"
            />
          </div>
          <h1 ref={titleRef} className="hero-title">
            Isla Apipe
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Corrientes, Argentina
          </p>
          <p className="hero-description">
            27,710 hectareas de biodiversidad sobre el Rio Parana
          </p>
          <a
            ref={ctaRef}
            href="#secciones"
            className="hero-cta"
          >
            Descubrir
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="reveal-section about-section">
        <div className="max-w-lg mx-auto px-6 text-center">
          <span className="section-tag">Conocenos</span>
          <h2 className="about-title">Un rincon del Parana</h2>
          <p className="about-text">
            Isla Apipé Grande es una reserva natural de 27,710 hectareas en la 
            Provincia de Corrientes, Argentina. Rodeada por el Rio Parana, 
            entre la Represa Yacyreta y la ciudad de Ituzaingo.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">27,710</span>
              <span className="stat-label">Hectareas</span>
            </div>
            <div className="stat">
              <span className="stat-number">1994</span>
              <span className="stat-label">Reserva desde</span>
            </div>
            <div className="stat">
              <span className="stat-number">2018</span>
              <span className="stat-label">Capital Intangible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Cards */}
      <section id="secciones" className="reveal-section sections-section">
        <div className="max-w-lg mx-auto px-6 text-center mb-8">
          <span className="section-tag">Explorar</span>
          <h2 className="about-title">Temas principales</h2>
        </div>
        <HorizontalScroll />
      </section>

      {/* Footer CTA */}
      <section className="reveal-section cta-section">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="cta-title">Ven a conocernos</h2>
          <p className="cta-text">
            Un lugar donde el tiempo se mide en atardeceres sobre el rio.
          </p>
          <a href="https://corrientes.tur.ar/experiencia/reserva-natural-apipe-grande/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Ver mas informacion
          </a>
        </div>
      </section>

      <Navigation />
    </main>
  );
}
