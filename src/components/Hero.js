// src/components/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import BookingForm from './BookingForm'; // 1. Importar el nuevo componente

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Tu Hogar Estratégico en el Corazón de Bogotá
        </h1>
        <p className={styles.heroSubtitle}>
          A pasos de Corferias, con la comodidad y el servicio que mereces.
        </p>
        <br />
        <br />
        <BookingForm />
      </div>
    </section>
  );
};

export default Hero;