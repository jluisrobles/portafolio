import React from "react";
import Layout from "../Layout.js";
import HeroSection from "../Components/portfolio/HeroSection.jsx";
import AboutSection from "../Components/portfolio/AboutSection.jsx";
import ProjectsSection from "../Components/portfolio/ProjectsSection.jsx";
import ContactSection from "../Components/portfolio/ContactSection.jsx";
import SkillsSection from "../Components/portfolio/SkillsSection.jsx";
import TestimonialsSection from "../Components/portfolio/TestimonialsSection.jsx";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

