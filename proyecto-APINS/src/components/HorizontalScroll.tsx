"use client";

export default function HorizontalScroll() {
  const sections = [
    {
      id: "geografia",
      title: "Geografia",
      subtitle: "27,710 hectareas",
      color: "#1a4d2e",
      shape: "leaf",
      description: "Rodeada por el Rio Parana. Entre la Reserva Natural y la Represa Yacyreta, en plena provincia de Corrientes."
    },
    {
      id: "historia",
      title: "Historia",
      subtitle: "Capital Intangible",
      color: "#5a401c",
      shape: "book",
      description: "Capital Provincial de Bienes Intangibles desde 2018. Tradiciones orales, chamame y cultura islenha."
    },
    {
      id: "naturaleza",
      title: "Naturaleza",
      subtitle: "Flora y fauna",
      color: "#0a3d3d",
      shape: "wave",
      description: "Aves, palmerales, ecosistemas ribereos. Avistaje de fauna y senderos entre la selva y el agua."
    },
    {
      id: "cultura",
      title: "Cultura",
      subtitle: "Tradicion y arte",
      color: "#8a6030",
      shape: "music",
      description: "Artesanias, cabalgatas, gastronomia local y la calidez de su gente islenha."
    }
  ];

  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="glass-card"
          >
            <div className="card-icon">{getShape(section.shape)}</div>
            <h3 className="card-title">{section.title}</h3>
            <p className="card-subtitle">{section.subtitle}</p>
            <p className="card-description">{section.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function getShape(shape: string): React.ReactNode {
  const shapeStyles: Record<string, React.ReactNode> = {
    leaf: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    book: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    wave: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11s3.5-1 5.5-1 3.5 1 5.5 1 1.9-.5 2.5-1" />
        <path d="M2 16.5c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s3.5 2 5.5 1 1.9-.5 2.5-1" />
        <path d="M2 7.5c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s3.5 2 5.5 1 1.9-.5 2.5-1" />
      </svg>
    ),
    music: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  };
  return shapeStyles[shape] || null;
}
