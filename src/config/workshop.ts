export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: "Wrench" | "Cpu" | "Disc" | "Car" | "Wind" | "Cog";
  imageUrl: string;
  whatsappMessage: string;
}

export interface WorkProject {
  id: string;
  name: string;
  category:
    | "Cambio de frenos"
    | "Reparación de motor"
    | "Mantenimiento preventivo"
    | "Diagnóstico electrónico"
    | "Reparación de suspensión"
    | "Aire acondicionado";
  shortDescription: string;
  imageUrl: string;
}

export interface WorkshopConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  address: string;
  zone: string;
  googleMapsUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    instagram: string;
    tiktok: string;
  };
  googleReviews: {
    url: string;
  };
  qrmoon: {
    brandName: string;
    websiteUrl: string;
  };
  services: ServiceItem[];
  completedWorks: WorkProject[];
}

export const workshopConfig: WorkshopConfig = {
  name: "Taller Mecánico RD",
  tagline: "Servicio automotriz integral y confiable en República Dominicana",
  heroHeadline: "Tu vehículo en buenas manos",
  heroSubheadline:
    "Diagnóstico, mantenimiento y reparación automotriz con atención profesional en Santo Domingo.",
  phone: "+1 (829) 499-4321",
  phoneRaw: "+18294994321",
  whatsapp: "+1 (829) 499-4321",
  whatsappNumber: "18294994321",
  defaultWhatsAppMessage:
    "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
  address: "Zona Colonial / Santo Domingo, República Dominicana",
  zone: "Santo Domingo, República Dominicana",
  googleMapsUrl: "https://maps.app.goo.gl/H2rKWwfrzkDnj27Y9",
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábados: 8:00 AM - 2:00 PM",
    sunday: "Domingos: Cerrado",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/qrmoon.rd/",
    tiktok: "https://www.tiktok.com/@gato_colonial",
  },
  googleReviews: {
    url: "https://www.google.com/travel/search?q=google%20map%20gato%20colonial&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076%2C122097177%2C122192361&hl=en-DO&gl=do&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OGVhZjg5MGM0ZDQ5NTBlOToweDM1YmNlMGIwN2MzYzIxYmYSGhIUCgcI6g8QCxgBEgcI6g8QCxgCGAEyAhAA&qs=CAEyE0Nnb0l2OFB3NFllV3VONDFFQUU4AkIJCb8hPHyw4Lw1&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwoM-x6eSXAxUAAAAAHQAAAAAQAw",
  },
  qrmoon: {
    brandName: "QRMOON",
    websiteUrl: "https://qrmoon.com",
  },
  services: [
    {
      id: "mantenimiento-preventivo",
      name: "Mantenimiento preventivo",
      description: "Cambios de aceite, filtros y revisiones generales.",
      iconName: "Wrench",
      imageUrl:
        "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
    {
      id: "diagnostico-computarizado",
      name: "Diagnóstico computarizado",
      description: "Escaneo de sistemas electrónicos e identificación de fallas.",
      iconName: "Cpu",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
    {
      id: "frenos",
      name: "Frenos",
      description: "Inspección y reparación del sistema de frenado.",
      iconName: "Disc",
      imageUrl:
        "https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
    {
      id: "suspension-direccion",
      name: "Suspensión y dirección",
      description: "Evaluación de amortiguadores, terminales y otros componentes.",
      iconName: "Car",
      imageUrl:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
    {
      id: "aire-acondicionado",
      name: "Aire acondicionado automotriz",
      description: "Diagnóstico y mantenimiento del sistema de climatización.",
      iconName: "Wind",
      imageUrl:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
    {
      id: "reparacion-motor",
      name: "Reparación de motor",
      description: "Revisión y corrección de fallas mecánicas.",
      iconName: "Cog",
      imageUrl:
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
      whatsappMessage:
        "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Taller Mecánico RD)",
    },
  ],
  completedWorks: [
    {
      id: "trabajo-1",
      name: "Reemplazo de frenos y rectificación de discos",
      category: "Cambio de frenos",
      shortDescription:
        "Inspección integral de seguridad y montaje de pastillas cerámicas de alta durabilidad.",
      imageUrl:
        "https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trabajo-2",
      name: "Diagnóstico de Check Engine y calibración de sensores",
      category: "Diagnóstico electrónico",
      shortDescription:
        "Escaneo con escáner profesional OBD-II y corrección de lectura en banco de prueba.",
      imageUrl:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trabajo-3",
      name: "Mantenimiento integral de 60,000 km",
      category: "Mantenimiento preventivo",
      shortDescription:
        "Fluidos sintéticos, cambio de bujías de iridio y revisión multipunto de 35 puntos.",
      imageUrl:
        "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trabajo-4",
      name: "Servicio de climatización y detección de fugas",
      category: "Aire acondicionado",
      shortDescription:
        "Prueba de estanqueidad con nitrógeno, reemplazo de filtro de cabina y carga óptima.",
      imageUrl:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trabajo-5",
      name: "Cambio de amortiguadores y terminales de dirección",
      category: "Reparación de suspensión",
      shortDescription:
        "Recuperación del confort de marcha, estabilidad en frenado y alineación computarizada.",
      imageUrl:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trabajo-6",
      name: "Puesta a punto y corrección de fuga en motor",
      category: "Reparación de motor",
      shortDescription:
        "Sustitución técnica de juntas, empaque de tapa de válvulas y prueba de compresión.",
      imageUrl:
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

/**
 * Generates a wa.me URL for the workshop.
 */
export function buildWhatsAppUrl(message?: string): string {
  const cleanNumber = workshopConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const textToSend = message || workshopConfig.defaultWhatsAppMessage;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
}
