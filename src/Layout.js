import React, { useState, useEffect } from "react";
import Button from "./Components/ui/button.jsx";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <style>
        {`
          :root {
            --primary-blue: #007BFF;
            --primary-green: #00C896;
            --dark: #222222;
            --light-bg: #FAFAF9;
          }

          * {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .gradient-text {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-green) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .glow-effect {
            box-shadow: 0 0 30px rgba(0, 123, 255, 0.3);
          }
        `}
      </style>

      {/* Encabezado */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-xl font-bold text-[#222222] hover:opacity-80 transition-opacity"
              >
                José Luis <span className="gradient-text">Robles</span>
              </button>
            </div>

            {/* Navegación escritorio */}
            <nav className="hidden md:flex items-center gap-8 justify-end flex-1">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                Contacto
              </button>
            </nav>

            {/* Menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#222222]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navegación móvil */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-[#222222] hover:text-[#007BFF] transition-colors"
              >
                Contacto
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-20">{children}</main>

      {/* Pie de página */}
      <footer className="bg-[#222222] text-white py-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} José Luis Robles — Data Science & AI Professional
          </p>
        </div>
      </footer>
    </div>
  );
}
