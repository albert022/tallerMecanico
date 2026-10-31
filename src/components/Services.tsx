import React from "react";
import Image from "next/image";
import { Wrench, Cpu, Disc, Car, Wind, Cog, ArrowRight, MessageSquare } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl, ServiceItem } from "@/config/workshop";

const iconMap = {
  Wrench,
  Cpu,
  Disc,
  Car,
  Wind,
  Cog,
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-slate-50 text-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluciones automotrices integrales
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Diagnóstico preciso y mantenimiento preventivo y correctivo para mantener tu vehículo en óptimas condiciones de funcionamiento y seguridad.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopConfig.services.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const whatsappUrl = buildWhatsAppUrl();

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Service Card Image */}
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Category / Icon Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-white/95 uppercase tracking-wide drop-shadow-sm">
                      Servicio Técnico
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Consult CTA Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-sm font-semibold transition-colors duration-200 shadow-sm group/btn"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400 group-hover/btn:text-white" />
                      <span>Consultar por WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
