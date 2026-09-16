"use client";

import HorizontalScroll from "@/components/HorizontalScroll";
import ProgressBar from "@/components/ProgressBar";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <ProgressBar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 blur-up loaded">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=75&fit=crop"
            alt="Isla Apipe — Rio Parana"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tierra-900/60 via-tierra-900/30 to-tierra-900/80" />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <p className="text-verde-400 text-sm tracking-[0.3em] uppercase mb-4">
            Reserva Natural · Corrientes · Argentina
          </p>
          <h1 className="font-display text-5xl md:text-8xl text-tierra-50 mb-4">
            Isla Apipe
          </h1>
          <p className="text-lg md:text-xl text-tierra-200 max-w-xl mb-8">
            27,710 hectareas de biodiversidad sobre el Rio Parana
          </p>
          <a
            href="#scroll-sections"
            className="px-8 py-3 bg-verde-600 text-tierra-50 rounded-full hover:bg-verde-500 transition-all duration-300 text-lg"
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

      {/* Horizontal Scroll Sections */}
      <div id="scroll-sections">
        <HorizontalScroll />
      </div>

      <Navigation />
    </main>
  );
}
