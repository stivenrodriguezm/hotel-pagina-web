// src/components/common/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente no renderiza nada visualmente.
// Su único propósito es hacer scroll hacia arriba cada vez que la ruta cambia.
const ScrollToTop = () => {
  // Extrae el pathname (ej. "/", "/habitaciones") del objeto de ubicación actual.
  const { pathname } = useLocation();

  // useEffect se ejecuta cada vez que el valor de 'pathname' cambia.
  useEffect(() => {
    // Hace scroll de la ventana a la posición (0, 0) - la parte superior de la página.
    window.scrollTo(0, 0);
  }, [pathname]); // El array de dependencias asegura que el efecto solo se ejecute cuando la URL cambie.

  return null; // No se renderiza ningún elemento en el DOM.
};

export default ScrollToTop;
