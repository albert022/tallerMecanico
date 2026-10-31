"use client";

import React, { useState, useEffect } from "react";
import { Wrench, Menu, X, Phone, MessageSquare } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos Realizados", href: "#trabajos" },
    { label: "¿Por qué elegirnos?", href: "#confianza" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const ctaWhatsAppUrl = buildWhatsAppUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3"
          : "bg-slate-900/85 backdrop-blur-sm border-b border-slate-800/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
            aria-label="Ir al inicio de Taller Mecánico RD"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-md shadow-red-900/30 group-hover:scale-105 transition-transform duration-200">
              <Wrench className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-wider text-white uppercase font-sans">
                  TALLER <span className="text-red-500">MECÁNICO</span> RD
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                Centro Automotriz Especializado
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA - Clearly separated with divider and generous spacing */}
          <div className="hidden lg:flex items-center gap-4 ml-6 xl:ml-8 pl-6 xl:pl-8 border-l border-slate-700/70 flex-shrink-0">
            <a
              href={`tel:${workshopConfig.phoneRaw}`}
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              <div className="w-6 h-6 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] text-slate-400 font-normal">Llámanos</span>
                <span className="font-bold">{workshopConfig.phone}</span>
              </div>
            </a>

            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs xl:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-red-950/40 hover:shadow-red-900/50 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
              aria-label="Cotizar por WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Cotizar</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Clear visual separation between Contact link and Call button */}
          <div className="pt-4 border-t border-slate-800/90 flex flex-col gap-3">
            <a
              href={`tel:${workshopConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl border border-slate-700 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Llamar al {workshopConfig.phone}</span>
            </a>
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
