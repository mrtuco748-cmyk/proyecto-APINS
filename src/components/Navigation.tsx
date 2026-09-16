"use client";

export default function Navigation() {
  const links = [
    { href: "#geografia", label: "Geografía" },
    { href: "#historia", label: "Historia" },
    { href: "#naturaleza", label: "Naturaleza" },
    { href: "#cultura", label: "Cultura" },
  ];

  return (
    <nav className="mobile-nav">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-verde-400 transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
