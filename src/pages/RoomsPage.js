// src/pages/RoomsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import roomsData from '../data/roomData';
import styles from './RoomsPage.module.css';
import AnimatedSection from '../components/common/AnimatedSection'; // Importar animación

const RoomsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <AnimatedSection>
        <h1 className={styles.pageTitle}>Explora Nuestras Habitaciones</h1>
      </AnimatedSection>
      <AnimatedSection>
        <p className={styles.pageSubtitle}>
          Encuentra el espacio perfecto que se adapte a tus necesidades de confort y estilo.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.gridContainer}>
          {roomsData.map((room) => (
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
                <Link to={`/habitaciones/${room.id}`} className={styles.cardButton}>
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default RoomsPage;
