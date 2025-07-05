// src/components/LocationSection.js
import React from 'react';
import styles from './LocationSection.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from './common/AnimatedSection'; // Importar el componente de animación

const LocationSection = () => {
  const pointsOfInterest = [
    'Corferias (Centro de Convenciones) - a 0.5 km',
    'Embajada de Estados Unidos - a 2.5 km',
    'Centro Comercial Gran Estación - a 1.5 km',
    'Parque Simón Bolívar - a 4 km',
    'Aeropuerto El Dorado - a 10 km',
  ];

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.820148281313!2d-74.0958195257375!3d4.626490843603408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b5a5a095007%3A0x5d6c8ba788c0a860!2sHotel%20Fontana%20Bogot%C3%A1!5e0!3m2!1sen!2sus!4v1720125488109!5m2!1sen!2sus";

  return (
    <section className={styles.locationSection}>
      <div className={styles.contentWrapper}>
        <AnimatedSection>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>Una Ubicación Privilegiada</h2>
            <p className={styles.sectionText}>
              Nos encontramos en una zona estratégica de Bogotá, ideal para viajeros de negocios y turistas. A pocos pasos de Corferias y con fácil acceso a las principales vías de la ciudad.
            </p>
            <ul className={styles.poiList}>
              {pointsOfInterest.map((point, index) => (
                <li key={index} className={styles.poiItem}>
                  <FaMapMarkerAlt className={styles.poiIcon} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.mapContainer}>
            <iframe
              src={mapSrc}
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Hotel Fontana"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationSection;