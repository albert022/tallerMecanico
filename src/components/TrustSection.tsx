import React from "react";
import { MessageSquare, Users, Search, FileText, Send, ArrowRight } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

export default function TrustSection() {
  const whatsappUrl = buildWhatsAppUrl();

  const trustPoints = [
    {
      icon: MessageSquare,
      title: "Comunicación clara antes de reparar",
      description:
        "Te explicamos el estado de tu vehículo y el trabajo requerido antes de iniciar cualquier reparación o sustitución de piezas.",
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description:
        "Cada caso es atendido con dedicación por técnicos automotrices que entienden las necesidades específicas de tu vehículo.",
    },
    {
      icon: Search,
      title: "Evaluación rigurosa del problema",
      description:
        "No adivinamos: inspeccionamos y diagnosticamos metódicamente la raíz del fallo para ofrecer soluciones efectivas y duraderas.",
    },
    {
      icon: FileText,
      title: "Información detallada sobre servicios",
      description:
        "Conocerás de antemano los procedimientos que se aplicarán, repuestos necesarios y tiempos estimados de entrega.",
    },
    {
      icon: Send,
      title: "Facilidad para solicitar cotizaciones",
      description:
        "Solicita cotizaciones directamente por WhatsApp o completando nuestro formulario en menos de 2 minutos sin complicaciones.",
    },
  ];

  return (
    <section id="confianza" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-12">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            Compromiso y Transparencia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            ¿Por qué elegir nuestro taller automotriz?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Construimos relaciones de confianza con cada cliente basadas en diagnósticos honestos, comunicación fluida y profesionalidad.
          </p>
        </div>

        {/* 5 Key Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustPoints.slice(0, 3).map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustPoints.slice(3).map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call To Action Box */}
        <div className="bg-gradient-to-r from-red-900/90 via-slate-900 to-slate-900 border border-red-700/50 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">
                Atención rápida en Santo Domingo
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                ¿Tu vehículo necesita una revisión?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Escríbenos y cuéntanos qué sucede. Evaluamos los síntomas de tu auto y te asesoramos sobre el mejor procedimiento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>Escríbenos por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#cotizacion"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-600 transition-colors"
              >
                Llenar formulario
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
