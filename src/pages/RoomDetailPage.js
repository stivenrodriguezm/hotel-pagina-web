// src/pages/RoomDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import roomsData from '../data/roomData';
import styles from './RoomDetailPage.module.css';
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === parseInt(id));
  
  // Estado para manejar la imagen actual de la galería
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reiniciar el índice si se cambia de habitación
  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  // --- Lógica de la Galería ---
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? room.imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === room.imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // --- Fin de la Lógica de la Galería ---

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!room) {
    return (
      <div className={`${styles.pageContainer} ${styles.notFound}`}>
        <h2>Habitación no encontrada</h2>
        <p>La habitación que buscas no existe o no está disponible.</p>
        <Link to="/habitaciones" className={styles.backLink}>
          Volver a todas las habitaciones
        </Link>
      </div>
    );
  }
  
  const phoneNumber = "573222585951";
  const message = `Hola, estoy interesado en reservar la ${room.name}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.pageContainer}>
      {/* --- Nueva Galería Funcional --- */}
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageWrapper}>
          {/* Mapea todas las imágenes para transiciones suaves, pero solo la activa es visible */}
          {room.imageUrls.map((url, index) => (
            <div
              key={index}
              className={`${styles.gallerySlide} ${index === currentIndex ? styles.active : ''}`}
            >
              <img
                src={url}
                alt={`[Imagen de ${room.name} ${index + 1}]`}
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
          {room.imageUrls.map((url, index) => (
            <div
              key={index}
              className={`${styles.thumbnailWrapper} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={url}
                alt={`[Miniatura de ${room.name} ${index + 1}]`}
                className={styles.thumbnail}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/80x60/cccccc/ffffff?text=Error`; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Contenido de la Habitación --- */}
      <div className={styles.roomContent}>
        <div className={styles.detailsWrapper}>
          <h1 className={styles.roomName}>{room.name}</h1>
          <p className={styles.roomDescription}>{room.description}</p>
          
          <div className={styles.amenitiesSection}>
            <h2 className={styles.amenitiesTitle}>Comodidades de la habitación</h2>
            <ul className={styles.amenitiesList}>
              {room.amenities.map((amenity, index) => (
                <li key={index} className={styles.amenityItem}>
                  <FaCheckCircle className={styles.amenityIcon} />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.priceAndButton}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.bookingButton}>
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
