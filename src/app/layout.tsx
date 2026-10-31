import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taller Mecánico RD | Mantenimiento, Diagnóstico y Reparación Automotriz en Santo Domingo",
  description:
    "Taller mecánico automotriz en Santo Domingo, República Dominicana. Diagnóstico computarizado con escáner, mantenimiento preventivo, frenos, suspensión, aire acondicionado y reparación de motor.",
  keywords: [
    "taller mecanico santo domingo",
    "mantenimiento automotriz republica dominicana",
    "reparacion de frenos santo domingo",
    "diagnostico computarizado scanner obd2",
    "aire acondicionado vehiculos santo domingo",
    "mecanica general rd",
    "cotizacion taller mecanico whatsapp",
    "qrmoon",
  ],
  authors: [{ name: "QRMOON" }],
  openGraph: {
    title: "Taller Mecánico RD | Centro de Mecánica Automotriz en Santo Domingo",
    description:
      "Tu vehículo en buenas manos. Diagnóstico, mantenimiento y reparación automotriz con atención profesional en Santo Domingo.",
    type: "website",
    locale: "es_DO",
    siteName: "Taller Mecánico RD",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Taller Mecánico RD en Santo Domingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taller Mecánico RD | Mantenimiento y Reparación Automotriz",
    description:
      "Taller mecánico automotriz en Santo Domingo, República Dominicana. Atención y cotización rápida por WhatsApp.",
    images: [
      "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
