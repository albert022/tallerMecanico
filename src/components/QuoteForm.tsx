"use client";

import React, { useState } from "react";
import { MessageSquare, AlertCircle, CheckCircle, Car, User, Phone, Wrench, FileEdit } from "lucide-react";
import { workshopConfig, buildWhatsAppUrl } from "@/config/workshop";

interface FormData {
  fullName: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  service: string;
  problem: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  brand?: string;
  model?: string;
  service?: string;
  problem?: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    service: "Mantenimiento preventivo",
    problem: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    "Mantenimiento preventivo",
    "Diagnóstico computarizado",
    "Frenos",
    "Suspensión y dirección",
    "Aire acondicionado automotriz",
    "Reparación de motor",
    "Otro diagnóstico / Revisión general",
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Por favor ingresa tu nombre completo.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Por favor ingresa tu número de teléfono.";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Ingresa un número de contacto válido (ej: 829-499-4321).";
    }

    if (!formData.brand.trim()) {
      newErrors.brand = "Indica la marca de tu vehículo (ej: Toyota, Honda, Hyundai).";
    }

    if (!formData.model.trim()) {
      newErrors.model = "Indica el modelo de tu vehículo (ej: Corolla, Civic, Tucson).";
    }

    if (!formData.service) {
      newErrors.service = "Selecciona el servicio requerido.";
    }

    if (!formData.problem.trim()) {
      newErrors.problem = "Describe brevemente la falla o necesidad de tu vehículo.";
    } else if (formData.problem.trim().length < 5) {
      newErrors.problem = "Por favor brinda un poco más de detalle sobre el problema.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (): string => {
    const vehicleText = [
      formData.brand.trim(),
      formData.model.trim(),
      formData.year.trim() ? formData.year.trim() : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      `¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)\n\n` +
      `Nombre: ${formData.fullName.trim()}\n` +
      `Teléfono: ${formData.phone.trim()}\n` +
      `Vehículo: ${vehicleText}\n` +
      `Servicio: ${formData.service}\n` +
      `Problema: ${formData.problem.trim()}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const message = constructWhatsAppMessage();
    const whatsappUrl = buildWhatsAppUrl(message);

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="cotizacion" className="py-20 bg-slate-100 text-slate-900 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            Atención Inmediata
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Solicita tu cotización
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Completa los datos de tu vehículo y se generará una solicitud lista para enviar directamente por WhatsApp a nuestro equipo técnico.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-10">
            {isSubmitted && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-emerald-800">
                  <p className="font-bold">¡Solicitud preparada exitosamente!</p>
                  <p>
                    Se ha abierto WhatsApp con tu mensaje formateado. Si no abrió automáticamente, puedes volver a pulsar el botón o revisar los datos.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Contact info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500 bg-red-50/30"
                          : "border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Número de teléfono <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. 829-499-4321"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500 bg-red-50/30"
                          : "border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Vehicle info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="brand" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Marca del vehículo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Car className="w-4 h-4" />
                    </div>
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      required
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Ej. Toyota, Honda"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.brand
                          ? "border-red-500 focus:border-red-500 bg-red-50/30"
                          : "border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                      }`}
                    />
                  </div>
                  {errors.brand && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.brand}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="model" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Modelo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="model"
                    name="model"
                    type="text"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Ej. Corolla, CR-V"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.model
                        ? "border-red-500 focus:border-red-500 bg-red-50/30"
                        : "border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    }`}
                  />
                  {errors.model && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.model}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="year" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Año <span className="text-slate-400 font-normal lowercase">(opcional)</span>
                  </label>
                  <input
                    id="year"
                    name="year"
                    type="text"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="Ej. 2018"
                    maxLength={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm text-slate-900 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service Selector */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Servicio requerido <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {availableServices.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 4: Problem description */}
              <div>
                <label htmlFor="problem" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Descripción del problema o requerimiento <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="problem"
                    name="problem"
                    rows={4}
                    required
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué síntomas presenta el vehículo (ej. se encendió la luz de Check Engine, ruidos en frenado, pérdida de fuerza...)"
                    className={`w-full p-4 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.problem
                        ? "border-red-500 focus:border-red-500 bg-red-50/30"
                        : "border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    }`}
                  />
                </div>
                {errors.problem && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.problem}
                  </p>
                )}
              </div>

              {/* Message Preview Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <FileEdit className="w-3.5 h-3.5 text-slate-600" />
                  <span>Previsualización del mensaje para WhatsApp:</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-line leading-relaxed">
                  {constructWhatsAppMessage()}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-emerald-900/30 transition-all duration-200 text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Enviar solicitud por WhatsApp</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2.5">
                  Al pulsar el botón se abrirá WhatsApp con el mensaje listo para ser enviado a nuestro número oficial (+1 829 499 4321).
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
