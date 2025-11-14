import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PlayIcon, UploadIcon, EyeIcon } from "lucide-react";
import { Card } from "../ui/card.jsx";
import { Badge } from "../ui/badge.jsx";
import Button from "../ui/button.jsx";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function ProjectsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // === Intersection Observer para animaciones ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // === Cargar proyectos simulados ===
  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: "ÁLISIS PREDICTIVO DE MERCADO AUTOMOTRIZ",
          description: "Visualización con Power BI",
          category: "DATA ANALYSIS / MACHINE LEARNING / VISUALIZATION / AUTOMATION",
          technologies: ["Python / Machine Learning (scikit-learn) / Visualización de datos / Dashboards interactivos"],
          thumbnail_url:
            "https://raw.githubusercontent.com/jluisrobles/portfolio-assets/main/car%20prediction.png",
          video_url: "https://youtu.be/y3R9gTR_sSg",
        },
        {
          id: 2,
          title: "AUTOMATIZACIÓN Y PROSPECCIÓN COMERCIAL",
          description: "Visualización interactiva con Streamlit a partir de datos enriquecidos",
          category: "DATA EXTRACTION / TRANSFORMATION / VISUALIZATION / APP DEPLOYMENT",
          technologies: ["Python / Streamlit / Excel avanzado / Sales Navigator / Skrapp / Datagma / Limpieza de datos"],
          thumbnail_url: "https://raw.githubusercontent.com/jluisrobles/portfolio-assets/main/tecnolog%C3%ADas.png",
          video_url: "https://youtu.be/GV9s4c6_M4g",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // === Colores de categorías ===
  const categoryColors = {
    data_analysis: "bg-blue-100 text-blue-800",
    automation: "bg-green-100 text-green-800",
    ai_agent: "bg-purple-100 text-purple-800",
    integration: "bg-orange-100 text-orange-800",
  };

  // === Función para obtener URL de embed (YouTube / Drive) ===
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // --- YouTube ---
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId =
        url.split("v=")[1]?.split("&")[0] ||
        url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1`;
    }

    // --- Google Drive ---
    if (url.includes("drive.google.com")) {
      let fileId = null;
      if (url.includes("/file/d/")) {
        fileId = url.split("/file/d/")[1].split("/")[0];
      } else if (url.includes("id=")) {
        fileId = url.split("id=")[1].split("&")[0];
      }
      if (fileId) return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    return url;
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* === Título principal === */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Algunos <span className="gradient-text">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00C896] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora mi trabajo en análisis de datos, automatización e inteligencia artificial
          </p>
        </motion.div>

        {/* === Skeleton Loading === */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          // === Sin proyectos ===
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <UploadIcon className="w-12 h-12 text-[#007BFF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#222222] mb-4">
              Próximamente: Proyectos en Camino
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Estoy preparando videos explicativos de mis mejores proyectos. Pronto podrás verlos aquí.
            </p>
            <Link to={createPageUrl("ProjectManager")}>
              <Button className="bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white hover:shadow-xl">
                Administrar Proyectos
              </Button>
            </Link>
          </motion.div>
        ) : (
          <>
            {/* === Lista de proyectos === */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* === Imagen o placeholder === */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-100 to-emerald-100 overflow-hidden">
                      {project.thumbnail_url ? (
                        <img
                          src={project.thumbnail_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <PlayIcon className="w-16 h-16 text-[#007BFF] opacity-50" />
                        </div>
                      )}

                      {/* === Botón de play sobre la imagen === */}
                      {project.video_url && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                          >
                            <PlayIcon className="w-10 h-10 text-[#007BFF] ml-1" />
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* === Detalles del proyecto === */}
                    <div className="p-6 flex-1 flex flex-col">
                      {project.category && (
                        <Badge
                          className={`${
                            categoryColors[project.category] || "bg-gray-100"
                          } mb-3`}
                        >
                          {project.category.replace(/_/g, " ").toUpperCase()}
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold text-[#222222] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {project.description}
                      </p>
                      {project.technologies?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {project.video_url && (
                        <Button
                          onClick={() => setSelectedProject(project)}
                          className="w-full bg-gradient-to-r from-[#007BFF] to-[#00C896] text-white hover:shadow-xl group"
                        >
                          <EyeIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Ver Video Explicativo
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* === Botón inferior === */}
            <div className="text-center mt-12">
              <Link to={createPageUrl("ProjectManager")}>
                <Button
                  variant="outline"
                  className="border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                >
                  Administrar Proyectos
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* === Modal de video === */}
      {selectedProject?.video_url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-14 right-0 text-white hover:bg-white/20 text-2xl w-10 h-10"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </Button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#007BFF] to-[#00C896] p-4">
                <h3 className="text-white font-bold text-xl">{selectedProject.title}</h3>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src={getEmbedUrl(selectedProject.video_url)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
