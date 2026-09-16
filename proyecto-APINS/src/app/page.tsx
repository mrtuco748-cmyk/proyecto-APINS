import Hero from "@/components/Hero";
import SectionReveal from "@/components/SectionReveal";
import ProgressBar from "@/components/ProgressBar";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <Hero />

      <SectionReveal id="geografia" label="GEOGRAFIA">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          27,710 hectáreas de naturaleza
        </h2>
        <p className="text-lg text-tierra-700 max-w-2xl">
          Una isla rodeada por el Río Paraná, entre la Represa Yacyretá y el verde infinito del litoral correntino.
        </p>
      </SectionReveal>

      <SectionReveal id="historia" label="HISTORIA">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Capital de los Bienes Intangibles
        </h2>
        <p className="text-lg text-tierra-700 max-w-2xl">
          Declarada Capital Provincial de los Bienes Intangibles en 2018. Tradiciones orales, chamamé, y una cultura isleña única.
        </p>
      </SectionReveal>

      <SectionReveal id="naturaleza" label="NATURALEZA">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Flora y fauna del Paraná
        </h2>
        <p className="text-lg text-tierra-700 max-w-2xl">
          Aves, palmerales, ecosistemas ribereños y el sonido eterno del río acompañan cada paso por la reserva.
        </p>
      </SectionReveal>

      <SectionReveal id="cultura" label="CULTURA">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          La cultura isleña
        </h2>
        <p className="text-lg text-tierra-700 max-w-2xl">
          Artesanías, gastronomía, cabalgatas y el ritmo del chamamé definen la vida en San Antonio de Apipé.
        </p>
      </SectionReveal>

      <Navigation />
    </main>
  );
}
