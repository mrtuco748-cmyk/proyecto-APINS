"use client";

export default function HorizontalScroll() {
  const sections = [
    {
      id: "geografia",
      title: "Geografia",
      subtitle: "27,710 hectareas sobre el Rio Parana",
      color: "#1a4d2e",
      shape: "leaf",
      description: "Una isla rodeada de aguas, palmerales y biodiversidad. Ubicada en Corrientes, Argentina, entre la Reserva Natural y la Represa Yacyreta."
    },
    {
      id: "historia",
      title: "Historia",
      subtitle: "Capital Provincial de Bienes Intangibles",
      color: "#5a401c",
      shape: "book",
      description: "Declarada Capital de los Bienes Intangibles en 2018. Tradiciones orales, chamame, y una cultura islenha que se resiste al tiempo."
    },
    {
      id: "naturaleza",
      title: "Naturaleza",
      subtitle: "Flora y fauna del litoral",
      color: "#0a3d3d",
      shape: "wave",
      description: "Aves, ecosistemas ribereos, palmerales y el ritmo eterno del Parana. Avistaje de fauna, senderos y aguas cristalinas."
    },
    {
      id: "cultura",
      title: "Cultura",
      subtitle: "Arte, gastronomia y tradicion",
      color: "#8a6030",
      shape: "music",
      description: "Artesanias, cabalgatas, chamame y la calidez de su gente. Un lugar donde el tiempo se mide en atardeceres sobre el rio."
    }
  ];

  return (
    <div className="horizontal-scroll h-screen snap-x snap-mandatory overflow-x-auto">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="w-screen h-screen flex-shrink-0 snap-start flex flex-col items-center justify-center px-8 relative"
          style={{ backgroundColor: section.color }}
        >
          <div className="glass-card rounded-3xl p-8 max-w-md text-center">
            <div className="mb-6 text-white/40">{getShape(section.shape)}</div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              {section.title}
            </h2>
            <p className="text-white/50 text-sm tracking-wider uppercase mb-4">
              {section.subtitle}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {section.description}
            </p>
            <a
              href={`#${section.id}`}
              className="inline-block px-8 py-3 border-2 border-white/40 text-white rounded-full text-sm hover:bg-white/10 transition-all glass"
            >
              Explorar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function getShape(shape: string): React.ReactNode {
  const shapeStyles: Record<string, React.ReactNode> = {
    leaf: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    book: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    wave: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s3.5-1 5.5-1 3.5 1 5.5 1 1.9-.5 2.5-1" />
        <path d="M2 16.5c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s3.5 2 5.5 1 1.9-.5 2.5-1" />
        <path d="M2 7.5c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s3.5 2 5.5 1 1.9-.5 2.5-1" />
      </svg>
    ),
    music: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  };
  return shapeStyles[shape] || null;
}
