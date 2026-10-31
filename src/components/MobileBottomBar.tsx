"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

export default function MobileBottomBar() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <aside
      aria-label="Acciones rápidas de contacto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl safe-area-pb"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${workshopConfig.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 active:bg-slate-700 text-white text-xs font-bold border border-slate-700 shadow-sm transition-colors"
        >
          <Phone className="w-4 h-4 text-red-400" />
          <span>Llamar</span>
        </a>

        {/* WhatsApp Quote Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 active:from-emerald-700 active:to-emerald-800 text-white text-xs font-extrabold shadow-lg shadow-emerald-950/30 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Cotizar por WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
