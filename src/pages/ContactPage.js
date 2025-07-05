// src/pages/ContactPage.js
import React from 'react';
import styles from './ContactPage.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AnimatedSection from '../components/common/AnimatedSection'; // Importar animación

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className={styles.infoIcon} />,
      text: 'Cra. 37 #24-25, Bogotá, Colombia',
    },
    {
      icon: <FaPhone className={styles.infoIcon} />,
      text: '+57 (601) 123-4567',
    },
    {
      icon: <FaEnvelope className={styles.infoIcon} />,
      text: 'reservas@hotelfontanabogota.com',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className={styles.pageContainer}>
      <AnimatedSection>
        <h1 className={styles.pageTitle}>Contáctanos</h1>
      </AnimatedSection>
      <div className={styles.contentWrapper}>
        <AnimatedSection>
          <div className={styles.infoContainer}>
            <h3>Información de Contacto</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className={styles.infoItem}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" className={styles.formTextarea} required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
