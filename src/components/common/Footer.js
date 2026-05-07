// src/components/common/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Habitaciones', path: '/habitaciones' },
    { title: 'Comodidades', path: '/comodidades' },
    { title: 'Contacto', path: '/contacto' },
    { title: 'Reglamento Interno', path: '/reglamento-interno' },
    { title: 'Reserva por Booking', path: 'https://www.booking.com/hotel/co/fontana-bogota.es.html', external: true },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://www.instagram.com/hotelfontanabogota/', label: 'Instagram' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerColumn} ${styles.contactInfo}`}>
          <h3>Hotel Fontana</h3>
          <p>
            <FaMapMarkerAlt />
            AK 40 #22B-27 barrio quinta paredes, Bogota
          </p>
          <p>
            <FaPhone />
            601 300 1074 / 601 466 1745 <br />
            WhatsApp: 322 258 5951
          </p>
          <p>
            <FaEnvelope />
            recepcion@fontanabogota.com
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Enlaces Rápidos</h3>
          <ul className={styles.quickLinks}>
            {quickLinks.map(link => (
              <li key={link.title}>
                {link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer">{link.title}</a>
                ) : (
                  <Link to={link.path}>{link.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Síguenos</h3>
          <div className={styles.socialIcons}>
            {socialLinks.map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Hotel Fontana. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
