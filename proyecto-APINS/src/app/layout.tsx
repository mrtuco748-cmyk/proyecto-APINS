import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isla Apipe — Corrientes, Argentina",
  description: "Descubrí la Isla Apipé Grande, una reserva natural de 27,710 hectáreas en el corazón de Corrientes.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans text-tierra-900 bg-tierra-50 antialiased">
        {children}
      </body>
    </html>
  );
}
