// src/components/common/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedSection.css'; // Importando la hoja de estilos

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecuta solo una vez cuando el elemento entra en la vista
    threshold: 0.1,    // La animación se activa cuando al menos el 10% del componente es visible
    rootMargin: '0px 0px -50px 0px', // Activa la animación un poco antes de que llegue al borde
  });

  return (
    // Se aplica la clase 'is-visible' solo cuando el componente está a la vista
    <div ref={ref} className={`animated-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
