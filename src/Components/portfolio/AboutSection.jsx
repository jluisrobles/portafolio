import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "Análisis de Datos",
      description: "Python/ R/ SQL/ Excel avanzado",
    },
    {
      icon: Zap,
      title: "Automatización IA",
      description: "GPT agents/ N8N/ Power Automate",
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Sales Navigator/ Datagma/ Skrapp/ Apollo",
    },
    {
      icon: TrendingUp,
      title: "Visualización",
      description: "Power BI/ Streamlit/ Tableau/ Matplotlib/ Plotly",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Soy profesional en <strong>Administración de Empresas</strong>, con especialización en <strong>Ciencia de Datos</strong> y una sólida trayectoria en <strong>gestión estratégica</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mi mayor fortaleza radica en transformar <strong>datos masivos</strong> en conocimiento útil para la toma de decisiones, desarrollando <strong>automatizaciones inteligentes</strong> que mejoran la eficiencia operativa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Gracias al manejo de diversas herramientas de análisis y visualización, combino tecnología y visión de negocio para impulsar la <strong className="gradient-text">eficiencia</strong>, la <strong className="gradient-text">innovación</strong> y el logro de objetivos organizacionales.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <item.icon className="w-7 h-7 text-[#007BFF] mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-sm text-[#222222] mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00C896]/20 to-[#007BFF]/20 rounded-full blur-2xl" />

              {/* Image container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 mix-blend-overlay" />
                <img
                    src="https://raw.githubusercontent.com/jluisrobles/portfolio-assets/main/portada.png"
                    alt="José Luis Robles"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00C896] rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Especialista en</p>
                    <p className="text-sm font-bold text-[#222222]">Data Science & IA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
