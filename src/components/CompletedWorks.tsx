"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl, WorkProject } from "@/config/workshop";

export default function CompletedWorks() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Cambio de frenos",
    "Reparación de motor",
    "Mantenimiento preventivo",
    "Diagnóstico electrónico",
    "Reparación de suspensión",
    "Aire acondicionado",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? workshopConfig.completedWorks
      : workshopConfig.completedWorks.filter(
          (project) => project.category === selectedCategory
        );

  const quoteSimilarUrl = buildWhatsAppUrl();

  return (
    <section id="trabajos" className="py-20 bg-white text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Trabajos Realizados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Galería de servicios realizados
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
            Muestra de intervenciones mecánicas frecuentes realizadas bajo altos estándares de diagnóstico y precisión técnica.
          </p>
        </div>

        {/* Category Filters (Mobile Horizontal Scroll / Desktop Flex Wrap) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar sm:flex-wrap sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((work: WorkProject) => (
            <div
              key={work.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={work.imageUrl}
                  alt={work.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-sm border border-slate-700/60 shadow-sm">
                    {work.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Inspección certificada
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-red-600 transition-colors">
                    {work.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal">
                    {work.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="text-slate-500">Control de calidad e inspección</span>
                  <a
                    href="#cotizacion"
                    className="text-red-600 font-bold hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Cotizar <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Completed Works */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-6 bg-slate-900 rounded-2xl text-white shadow-xl max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">
                ¿Necesitas un servicio similar para tu auto?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Pide tu cotización previa sin compromiso describiendo tu vehículo.
              </p>
            </div>
            <a
              href={quoteSimilarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Cotiza un servicio similar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
