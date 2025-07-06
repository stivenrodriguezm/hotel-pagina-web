// ==================== src/components/RoomsSection.js (CORREGIDO) ====================

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomsSection.module.css';
import roomsData from '../data/roomData.js';
import AnimatedSection from './common/AnimatedSection';

const RoomsSection = () => {
  const featuredRooms = roomsData.slice(0, 3);

  return (
    <section className={styles.roomsSection}>
      {/* El título y subtítulo pueden aparecer juntos */}
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Nuestras Habitaciones</h2>
        <p className={styles.sectionSubtitle}>
          Espacios diseñados para tu confort y descanso. Elige la opción perfecta para ti.
        </p>
      </AnimatedSection>

      {/* MODIFICADO: Se elimina el <AnimatedSection> que envolvía a cardsContainer */}
      <div className={styles.cardsContainer}>
        {featuredRooms.map((room) => (
          // NUEVO: Se añade <AnimatedSection> aquí para envolver CADA tarjeta.
          // Usamos el room.id como key para la animación.
          <AnimatedSection key={room.id}>
            <div className={styles.roomCard}>
              <img
                src={room.imageUrl}
                alt={`[Imagen de ${room.name}]`}
                className={styles.cardImage}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x600/cccccc/ffffff?text=Imagen+no+disponible`; }}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{room.name}</h3>
                <p className={styles.cardDescription}>{room.description}</p>
                <Link to={`/habitaciones/${room.id}`} className={`btn btn-brand ${styles.cardButton}`}>
                  Ver Detalles
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* El botón ya estaba correctamente envuelto, así que se mantiene igual */}
      <AnimatedSection>
        <div className={styles.viewAllContainer}>
          <Link to="/habitaciones" className="btn btn-brand">
            Ver todas las habitaciones
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default RoomsSection;