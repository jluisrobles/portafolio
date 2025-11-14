import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card } from "../ui/card.jsx";

export default function TestimonialsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const testimonials = [
   
    {
      name: "Guillermo Brugos Muñiz",
      role: "Marketing Director",
      company: "José Luis",
      avatar: "https://ui-avatars.com/api/?name=Guillermo+Brugge&background=00C896&color=fff&size=128",
      text: `
        Tuve el placer de supervisar a José Luis durante su etapa en SDi Digital Group como Market Research. José Luis demostró ser un profesional excepcionalmente analítico y proactivo, desempeñando un papel crucial en la identificación y enriquecimiento de nuestras bases de datos.

        Además, demostró ser un profesional inquieto e inconformista, participando activamente en algunos proyectos piloto de IA y DATA dentro de la compañía.`,
      rating: 5,
    },
    {
      name: "Abel Nicolás Sáenz",
      role: "Responsable de IA y Automatizaciones",
      company: "José Luis",
      avatar: "https://ui-avatars.com/api/?name=Abel+Nicolas&background=007BFF&color=fff&size=128",
      text: " He tenido la oportunidad de trabajar con José Luis Robles en AEDIA S.L. durante 1 mes. Durante este tiempo, fui testigo de su excepcional capacidad para analizar datos, identificar áreas de mejora y proponer soluciones innovadoras.",
      rating: 5,
    },
   
    {
      name: "Pablo Talavante",
      role: "Co-founder at Aitenea Biotech",
      company: "José Luis",
      avatar: "https://ui-avatars.com/api/?name=Pablo+Teijoane&background=007BFF&color=fff&size=128",
      text: " Tuve el placer de dar clase a José Luis en materias relacionadas con Python, Análisis de Datos, Estadística y Machine Learning. Durante todo el curso José Luis se mostró altamente participativo, preguntando dudas acerca del temario, sacando temas a debate, estableciendo analogías y haciendo la clase mucho más participativa.",
      rating: 5,
    },
    {
      name: "Guillermo Yuste Durán",
      role: "Business Intelligence Consultant",
      company: "José Luis",
      avatar: "https://ui-avatars.com/api/?name=Guillermo+Nieto&background=00C896&color=fff&size=128",
      text: " Desde un primer momento formó parte activa de un grupo dinámico, inteligente y con muchas ganas de aprender en serio, lo que finalmente me hizo también aprender de él.",
      rating: 5,
    },
    
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#007BFF] rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50], y: [-50, 50, -50] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#00C896] rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [50, -50, 50], y: [50, -50, 50] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Lo que dicen de <span className="gradient-text">mi Trabajo</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios de colegas y clientes con los que he colaborado
          </p>
          <p className="text-sm text-[#007BFF] mt-4">
            Más testimonios disponibles en mi{" "}
            <a
              href="https://linkedin.com/in/joserobles-data-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#00C896] transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-[#007BFF] relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#007BFF]/10 to-[#00C896]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <Quote className="w-10 h-10 text-[#007BFF] opacity-20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#007BFF] text-[#007BFF]" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-[#007BFF]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <h4 className="font-bold text-[#222222]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

