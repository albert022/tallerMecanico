"use client";

import React from "react";
import { Star, Award, ExternalLink, ThumbsUp } from "lucide-react";
import { workshopConfig } from "@/config/workshop";

export default function QrMoonAndReviews() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>Google Business Reviews</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                Tu opinión nos ayuda a seguir brindando el mejor servicio
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                En Taller Mecánico RD nos esforzamos por ofrecerte máxima transparencia, diagnóstico certero y el mejor trato automotriz. Comparte tu experiencia con nosotros en Google.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-emerald-400" />
                  <span>Atención 100% personalizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-400" />
                  <span>Repuestos de calidad garantizada</span>
                </div>
              </div>
            </div>

            {/* Google Review Action Card */}
            <div className="bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center max-w-sm w-full flex-shrink-0 shadow-lg">
              <div className="flex items-center gap-1.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span className="text-xl font-extrabold text-white mb-1">
                Califica tu experiencia
              </span>

              <p className="text-xs text-slate-400 mb-6">
                Déjanos tu reseña y comentario en nuestro perfil oficial de Google.
              </p>

              <a
                href={workshopConfig.googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm"
              >
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Dejar una reseña en Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
