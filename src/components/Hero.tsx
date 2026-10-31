import React from "react";
import Image from "next/image";
import { MessageSquare, ArrowDown, ShieldCheck, Stethoscope, UserCheck } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl();

  const keyAdvantages = [
    {
      icon: UserCheck,
      title: "Atención personalizada",
      description: "Trato directo con mecánicos expertos que escuchan tus dudas.",
    },
    {
      icon: Stethoscope,
      title: "Diagnóstico profesional",
      description: "Equipos de escaneo y revisión exhaustiva de cada sistema.",
    },
    {
      icon: ShieldCheck,
      title: "Servicio confiable",
      description: "Transparencia en repuestos, mano de obra y cotizaciones.",
    },
  ];

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=2000&q=85"
          alt="Mecánico profesional trabajando en el motor de un vehículo en taller mecánico"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 filter brightness-90 contrast-110"
        />
        {/* Gradients to ensure text contrast and automotive aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">Santo Domingo</span>
            <span className="text-slate-500">•</span>
            <span>Taller Mecánico Especializado</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Tu vehículo en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">buenas manos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {workshopConfig.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-red-950/50 hover:shadow-red-900/60 transition-all duration-200 hover:-translate-y-0.5 text-base"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Solicitar cotización</span>
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200 text-base backdrop-blur-sm"
            >
              <span>Conocer nuestros servicios</span>
              <ArrowDown className="w-4 h-4 text-red-400" />
            </a>
          </div>

          {/* 3 Visual Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
            {keyAdvantages.map((adv) => {
              const IconComponent = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="flex flex-col p-4 rounded-xl bg-slate-900/60 border border-slate-800/70 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-800/50 flex items-center justify-center text-red-400 mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
