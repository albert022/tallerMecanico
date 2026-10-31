"use client";

import React from "react";
import { Wrench, Phone, MessageSquare, MapPin, Instagram, ShieldCheck, ExternalLink } from "lucide-react";
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

            <div className="pt-2">
              <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Redes Sociales:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={workshopConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>@qrmoon.rd</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={workshopConfig.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>@gato_colonial</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QRMOON Ecosystem / Related Pages */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Soluciones QRMOON:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {workshopConfig.qrmoon.relatedPages.map((page) => (
              <a
                key={page.title}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <span>{page.title}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {currentYear} {workshopConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">
              Desarrollado para <strong className="text-white">QRMOON</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
