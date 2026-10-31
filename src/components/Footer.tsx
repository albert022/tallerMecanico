"use client";

import React from "react";
import { Wrench, Phone, MessageSquare, MapPin, Instagram, ShieldCheck } from "lucide-react";
import { workshopConfig } from "@/config/workshop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios Mecánicos", href: "#servicios" },
    { label: "Trabajos Realizados", href: "#trabajos" },
    { label: "¿Por qué elegirnos?", href: "#confianza" },
    { label: "Solicitar Cotización", href: "#cotizacion" },
    { label: "Contacto y Ubicación", href: "#contacto" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-950/50">
                <Wrench className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white uppercase">
                TALLER <span className="text-red-500">MECÁNICO</span> RD
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Centro de diagnóstico computarizado, mantenimiento preventivo y reparaciones mecánicas integrales en Santo Domingo. Tu vehículo en buenas manos.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Atención confiable y transparente</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegación Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-red-400 transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Main Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Servicios Destacados
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {workshopConfig.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors duration-150 block truncate"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contacto Directo
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <a
                href={workshopConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{workshopConfig.zone}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={`tel:${workshopConfig.phoneRaw}`} className="hover:text-white">
                  {workshopConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 fill-current" />
                <span className="text-slate-300 font-medium">
                  {workshopConfig.whatsapp}
                </span>
              </div>
            </div>

            {/* Social Media: Clean icon buttons */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Síguenos en Redes:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={workshopConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram oficial"
                  title="Visitar Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all shadow-sm group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={workshopConfig.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok oficial"
                  title="Visitar TikTok"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.88-4.46V8.76a8.2 8.2 0 0 0 4.79 1.54v-3.4c-.3.003-.6-.07-.9-.21Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {workshopConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">
              Desarrollado por <strong className="text-white">QRMOON</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
