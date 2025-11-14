import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  SparklesIcon,
  BrainIcon,
  DatabaseIcon,
  CodeIcon,
  CpuIcon,
  ZapIcon,
  BarChartIcon,
} from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const techIcons = [
    { Icon: BrainIcon, delay: 0, x: 10, y: 15 },
    { Icon: DatabaseIcon, delay: 0.5, x: 85, y: 20 },
    { Icon: CodeIcon, delay: 1, x: 15, y: 75 },
    { Icon: CpuIcon, delay: 1.5, x: 80, y: 70 },
    { Icon: ZapIcon, delay: 2, x: 50, y: 10 },
    { Icon: BarChartIcon, delay: 2.5, x: 45, y: 85 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF9] via-blue-50 to-emerald-50">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #007BFF 1px, transparent 1px),
                linear-gradient(to bottom, #007BFF 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          >
            <motion.div
              className="w-full h-full"
              animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `
                  linear-gradient(to right, #00C896 1px, transparent 1px),
                  linear-gradient(to bottom, #00C896 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        {/* Íconos flotantes */}
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#007BFF]/20 to-[#00C896]/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-white/20">
              <item.Icon className="w-6 h-6 text-[#007BFF]" />
            </div>
          </motion.div>
        ))}

        {/* Orbes animados */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#007BFF] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, mousePosition.x * 2, 0],
            y: [0, mousePosition.y * 2, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#00C896] rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -mousePosition.x * 2, 0],
            y: [0, -mousePosition.y * 2, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-lg rounded-full mb-6 shadow-xl border border-white/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <SparklesIcon className="w-5 h-5 text-[#007BFF]" />
          </motion.div>
          <span className="text-base font-medium text-[#222222]">
            Data Science & AI Professional
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-[#222222] mb-6"
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 20px rgba(0,123,255,0.3)",
                "0 0 40px rgba(0,200,150,0.3)",
                "0 0 20px rgba(0,123,255,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            José Luis Robles
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-10 max-w-4xl mx-auto"
        >
          Transformando{" "}
          <span className="gradient-text font-bold">datos</span> en{" "}
          <span className="gradient-text font-bold">decisiones estratégicas</span>{" "}
          con <span className="gradient-text font-bold">IA</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-10 py-5 bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white rounded-full font-semibold text-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={false}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative flex items-center gap-2">
              <BrainIcon className="w-6 h-6" />
              Ver Proyectos
            </span>
          </motion.button>

          <motion.button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-5 bg-white/90 backdrop-blur-lg text-[#222222] rounded-full font-semibold text-xl hover:shadow-2xl transition-all border-2 border-gray-200"
            whileHover={{ scale: 1.05, borderColor: "#007B"}}
            whileTap={{ scale: 0.95 }}
          >
            Contáctame
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-[#007BFF] hover:text-[#00C896] transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDownIcon className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
