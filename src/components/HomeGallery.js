// src/components/HomeGallery.js
import React, { useState } from 'react';
import styles from './HomeGallery.module.css';
import galleryData from '../data/galleryData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimatedSection from './common/AnimatedSection'; // Importar el componente de animación

const HomeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === galleryData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className={styles.gallerySection}>
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Galería de fotos</h2>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.galleryContainer}>
          <div className={styles.mainImageWrapper}>
            {galleryData.map((image, index) => (
              <div
                key={image.id}
                className={`${styles.gallerySlide} ${index === currentIndex ? styles.active : ''}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={styles.mainImage}
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/900x500/cccccc/ffffff?text=Imagen+no+disponible`; }}
                />
              </div>
            ))}
            <button className={`${styles.navArrow} ${styles.prevArrow}`} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className={`${styles.navArrow} ${styles.nextArrow}`} onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
          <div className={styles.thumbnailContainer}>
            {galleryData.map((image, index) => (
              <div
                key={image.id}
                className={`${styles.thumbnailWrapper} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={image.url}
                  alt={`Miniatura de ${image.alt}`}
                  className={styles.thumbnail}
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/80x60/cccccc/ffffff?text=Error`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HomeGallery;
