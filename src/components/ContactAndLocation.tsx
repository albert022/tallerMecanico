"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Navigation,
  Instagram,
  Compass,
} from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

export default function ContactAndLocation() {
  const whatsappDirectUrl = buildWhatsAppUrl();

  return (
    <section id="contacto" className="py-20 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            Canales Directos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contacto y ubicación
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos disponibles para atender tus consultas, programar revisiones y brindarte asesoramiento técnico automotriz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                Comunicación Inmediata
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${workshopConfig.phoneRaw}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">
                      Llamada Telefónica
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {workshopConfig.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">
                      WhatsApp Oficial
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {workshopConfig.whatsapp}
                    </span>
                    <span className="block text-[11px] text-emerald-600 font-medium">
                      Respuesta rápida en horario laboral
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Horario de Atención
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700 divide-y divide-slate-200/60">
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span className="font-semibold text-slate-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-medium">Sábados</span>
                  <span className="font-semibold text-slate-900">8:00 AM - 2:00 PM</span>
                </div>
                <div className="pt-2 flex justify-between items-center text-slate-400">
                  <span className="font-medium">Domingos</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Redes Sociales Oficiales
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={workshopConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-pink-400 hover:text-pink-600 text-slate-700 text-xs font-bold transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@qrmoon.rd</span>
                </a>
                <a
                  href={workshopConfig.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-800 hover:text-slate-900 text-slate-700 text-xs font-bold transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.88-4.46V8.76a8.2 8.2 0 0 0 4.79 1.54v-3.4c-.3.003-.6-.07-.9-.21Z" />
                  </svg>
                  <span>@gato_colonial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Location & Google Map Action Block */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
              {/* Top Banner */}
              <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                      Ubicación Principal
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {workshopConfig.zone}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {workshopConfig.address}
                  </p>
                </div>

                <a
                  href={workshopConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-sm flex-shrink-0"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Cómo llegar</span>
                </a>
              </div>

              {/* Map Preview Container linking directly to Google Maps */}
              <a
                href={workshopConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-80 sm:h-96 w-full bg-slate-950 overflow-hidden flex items-center justify-center group cursor-pointer"
                aria-label="Abrir mapa en Google Maps"
              >
                {/* Stylized Vector Map Grid */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Stylized Road Network Graphic */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35 stroke-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="40" x2="100%" y2="80" strokeWidth="6" stroke="#334155" />
                  <line x1="0" y1="200" x2="100%" y2="180" strokeWidth="8" stroke="#475569" />
                  <line x1="120" y1="0" x2="160" y2="100%" strokeWidth="6" stroke="#334155" />
                  <line x1="380" y1="0" x2="420" y2="100%" strokeWidth="10" stroke="#64748b" />
                  <circle cx="400" cy="190" r="14" fill="#dc2626" />
                </svg>

                {/* Center Pin Card */}
                <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-sm bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500 text-red-500 flex items-center justify-center mb-3 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <h4 className="text-white font-bold text-sm mb-1">
                    Zona Colonial, Santo Domingo
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Haz clic aquí para abrir la ubicación satelital y ruta directa en Google Maps.
                  </p>

                  <span className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-red-600 group-hover:bg-red-700 text-white text-xs font-semibold transition-colors">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Abrir en Google Maps</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
