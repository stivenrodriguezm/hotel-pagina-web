// src/components/RoomsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomsSection.module.css';
import roomsData from '../data/roomData.js';
import AnimatedSection from './common/AnimatedSection';

const RoomsSection = () => {
  const featuredRooms = roomsData.slice(0, 3);

  return (
    <section className={styles.roomsSection}>
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Nuestras Habitaciones</h2>
      </AnimatedSection>
      <AnimatedSection>
        <p className={styles.sectionSubtitle}>
          Espacios diseñados para tu confort y descanso. Elige la opción perfecta para ti.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.cardsContainer}>
          {featuredRooms.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <img
                src={room.imageUrl}
                alt={`[Imagen de ${room.name}]`}
                className={styles.cardImage}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x600/cccccc/ffffff?text=Imagen+no+disponible`; }}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{room.name}</h3>
                <p className={styles.cardDescription}>{room.description}</p>
                {/* Aplicando las nuevas clases al botón de la tarjeta */}
                <Link to={`/habitaciones/${room.id}`} className={`btn btn-brand ${styles.cardButton}`}>
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className={styles.viewAllContainer}>
           {/* Aplicando las nuevas clases al botón 'Ver todas' */}
          <Link to="/habitaciones" className="btn btn-brand">
            Ver todas las habitaciones
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default RoomsSection;