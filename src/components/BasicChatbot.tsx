"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Wrench,
  FileText,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Bot,
  RotateCcw,
} from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

interface PredefinedQnA {
  id: string;
  question: string;
  icon: React.ComponentType<{ className?: string }>;
  answer: string;
  actionText?: string;
  actionHref?: string;
  actionIsExternal?: boolean;
}

export default function BasicChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<
    Array<{
      sender: "bot" | "user";
      text: string;
      action?: { text: string; href: string; isExternal?: boolean };
      isNew?: boolean;
    }>
  >([
    {
      sender: "bot",
      text: "¡Hola! Bienvenido al asistente de Taller Mecánico RD. ¿En qué podemos ayudarte hoy? Elige una consulta frecuente para ver la respuesta inmediata:",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const questions: PredefinedQnA[] = [
    {
      id: "servicios",
      question: "¿Qué servicios ofrecen?",
      icon: Wrench,
      answer:
        "Ofrecemos mantenimiento preventivo, diagnóstico computarizado con escáner OBD-II, frenos, suspensión y dirección, aire acondicionado automotriz y reparación de motor.",
      actionText: "Ver listado de servicios",
      actionHref: "#servicios",
    },
    {
      id: "cotizacion",
      question: "¿Cómo solicito una cotización?",
      icon: FileText,
      answer:
        "Puedes solicitarla completando nuestro formulario en la web o escribiéndonos directamente por WhatsApp. Te preparamos el presupuesto con rapidez.",
      actionText: "Ir al formulario de cotización",
      actionHref: "#cotizacion",
    },
    {
      id: "ubicacion",
      question: "¿Dónde están ubicados?",
      icon: MapPin,
      answer:
        "Estamos ubicados en Santo Domingo (Zona Colonial), República Dominicana. Puedes consultar la ruta satelital exacta en Google Maps.",
      actionText: "Abrir mapa en Google Maps",
      actionHref: workshopConfig.googleMapsUrl,
      actionIsExternal: true,
    },
    {
      id: "horario",
      question: "¿Cuál es el horario?",
      icon: Clock,
      answer:
        "Laboramos de Lunes a Viernes de 8:00 AM a 6:00 PM, y Sábados de 8:00 AM a 2:00 PM. Los domingos permanecemos cerrados.",
      actionText: "Ver sección de contacto",
      actionHref: "#contacto",
    },
    {
      id: "contacto",
      question: "¿Cómo contacto al taller?",
      icon: Phone,
      answer:
        `Puedes llamarnos al ${workshopConfig.phone} o escribirnos directamente a nuestro WhatsApp oficial ${workshopConfig.whatsapp}.`,
      actionText: "Escribir a WhatsApp",
      actionHref: buildWhatsAppUrl(),
      actionIsExternal: true,
    },
  ];

  const handleSelectQuestion = (q: PredefinedQnA) => {
    setHasInteracted(true);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: q.question },
      {
        sender: "bot",
        text: q.answer,
        action:
          q.actionText && q.actionHref
            ? { text: q.actionText, href: q.actionHref, isExternal: q.actionIsExternal }
            : undefined,
        isNew: true,
      },
    ]);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: "bot",
        text: "¡Hola! ¿En qué más podemos orientarte sobre tu vehículo?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button (Bottom Left) */}
      <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-2xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer select-none"
            aria-label="Abrir asistente de preguntas frecuentes"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <Bot className="w-4 h-4" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight group-hover:text-red-400 transition-colors">
                Preguntas Frecuentes
              </span>
              <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors">
                Atención inmediata
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chatbot Window (Bottom Left) */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Asistente de preguntas frecuentes"
          className="fixed bottom-20 sm:bottom-24 left-4 sm:left-6 z-50 w-[92vw] sm:w-[390px] h-[520px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Asistente Taller Mecánico RD</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-slate-300 font-medium">En línea ahora</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {hasInteracted && (
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reiniciar conversación"
                  aria-label="Reiniciar conversación"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Cerrar asistente"
                aria-label="Cerrar asistente"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container with Auto-Scroll Focus */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Respuesta:
                  </span>
                )}

                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white rounded-br-none shadow-sm font-medium"
                      : "bg-white text-slate-900 border border-slate-200/90 rounded-bl-none shadow-md font-normal ring-1 ring-slate-900/5"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Direct Action Link button if present in bot answer */}
                {msg.action && (
                  <div className="mt-2.5 pl-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <a
                      href={msg.action.href}
                      target={msg.action.isExternal ? "_blank" : undefined}
                      rel={msg.action.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (!msg.action?.isExternal) {
                          setIsOpen(false);
                        }
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-red-600 px-3.5 py-2 rounded-xl shadow-sm transition-all duration-150"
                    >
                      <span>{msg.action.text}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
            {/* Scroll Anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Predefined Questions List */}
          <div className="p-3 bg-white border-t border-slate-200 flex-shrink-0">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
              Haz clic para consultar:
            </span>
            <div className="flex flex-col gap-1.5 max-h-[140px] overflow-y-auto pr-1">
              {questions.map((q) => {
                const IconComponent = q.icon;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleSelectQuestion(q)}
                    className="flex items-center gap-2.5 text-left p-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-slate-200/80 transition-all duration-150 group cursor-pointer active:scale-95"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 flex-shrink-0" />
                    <span className="flex-1 truncate">{q.question}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
