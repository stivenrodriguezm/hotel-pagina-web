// ==================== src/components/common/FloatingWhatsApp.js (ACTUALIZADO) ====================

import React from 'react';
import styles from './FloatingWhatsApp.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  // MODIFICADO: Se actualiza el número de teléfono.
  const phoneNumber = "573222585951"; 
  const message = "Hola, me gustaría obtener más información sobre las reservas.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;