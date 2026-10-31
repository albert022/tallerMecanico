"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/workshop";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="fixed bottom-24 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>¿Necesitas ayuda? Escríbenos</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar al taller por WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 relative group"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
}
