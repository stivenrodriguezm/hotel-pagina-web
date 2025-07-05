// ==================== src/components/common/Header.js ====================

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const bookingUrl = `https://www.booking.com/hotel/co/fontana-bogota.es.html`;
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 80);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsScrolled(false);
    }
  }, [isHomePage]);

  // Función para cerrar el menú
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Habitaciones', path: '/habitaciones' },
    { title: 'Servicios', path: '/servicios' },
    { title: 'Contacto', path: '/contacto' },
  ];

  // ===================== LÍNEA CORREGIDA =====================
  // Esta es la línea que faltaba. Define si el header es sólido.
  const isSolid = !isHomePage || isScrolled;
  // =========================================================

  // Se añade la clase .menuOpen al header cuando el menú está abierto
  const headerClasses = `${styles.header} ${isSolid ? styles.solid : ''} ${isMenuOpen ? styles.menuOpen : ''}`;
  const navigationClasses = `${styles.navigation} ${isMenuOpen ? styles.active : ''}`;

  return (
    <header className={headerClasses}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>
      
      {/* Botón único que abre y cierra, cambiando el ícono */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={navigationClasses}>
        <nav>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.title} className={styles.navLink}>
                <Link to={link.path} onClick={handleLinkClick}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.bookingButton}`}>
          Reserva Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;