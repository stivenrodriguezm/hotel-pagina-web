// src/pages/HomePage.js
import React from 'react';

// Ya no se necesita AnimatedSection aquí
// import AnimatedSection from '../components/common/AnimatedSection';

// Importando todos los componentes de las secciones
import Hero from '../components/Hero';
import RoomsSection from '../components/RoomsSection';
import HomeGallery from '../components/HomeGallery';
import ServicesSection from '../components/ServicesSection';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      {/* El componente Hero ya tiene su propia animación de entrada */}
      <Hero />

      {/* Cada componente de sección ahora maneja su propia animación interna */}
      <RoomsSection />
      <HomeGallery />
      <ServicesSection />
      <LocationSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;

