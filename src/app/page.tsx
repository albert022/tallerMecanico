import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CompletedWorks from "@/components/CompletedWorks";
import TrustSection from "@/components/TrustSection";
import QuoteForm from "@/components/QuoteForm";
import ContactAndLocation from "@/components/ContactAndLocation";
import QrMoonAndReviews from "@/components/QrMoonAndReviews";
import Footer from "@/components/Footer";
import BasicChatbot from "@/components/BasicChatbot";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <Navbar />

      {/* 1. Hero / Inicio */}
      <Hero />

      {/* 2. Servicios Mecánicos */}
      <Services />

      {/* 3. Trabajos Realizados */}
      <CompletedWorks />

      {/* 4. Sección de Confianza */}
      <TrustSection />

      {/* 5. Formulario de Cotización */}
      <QuoteForm />

      {/* 6. Contacto y Ubicación */}
      <ContactAndLocation />

      {/* 7. QRMOON V-Card y Reseñas de Google */}
      <QrMoonAndReviews />

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Floating Utilities */}
      <BasicChatbot />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </main>
  );
}
