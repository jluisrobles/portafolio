import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import Button from "../ui/button.jsx";

export default function ContactSection() {
  const [inView, setInView] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/joserobles-data-ai",
      color: "#0077B5",
      description: "Conecta conmigo profesionalmente",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jluisrobles",
      color: "#333",
      description: "Explora mi código",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#007BFF] rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C896] rounded-full opacity-10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Soluciones <span className="gradient-text">analíticas</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Datos procesados, automatización inteligente y visualización clara para decisiones con impacto.
          </p>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon className="w-8 h-8" style={{ color: link.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#222222] mb-1">
                    {link.name}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
                <Send className="w-5 h-5 text-gray-400 group-hover:text-[#007BFF] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Botón de correo junto al texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-10 rounded-2xl shadow-xl text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-2xl font-bold text-[#222222]">
              ¿Prefieres email?
            </h3>
            <Button
              onClick={() => setShowEmail(true)}
              className="bg-[#007BFF] hover:bg-[#00C896] p-3 rounded-full transition-all"
            >
              <Mail className="w-6 h-6 text-white" />
            </Button>
          </div>

          <p className="text-gray-600 mb-4">
            Haz clic en el sobre para ver mi dirección de correo electrónico
          </p>

          {showEmail && (
            <p className="mt-4 text-lg font-semibold text-[#007BFF]">
              roblesjose.mail@gmail.com
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

