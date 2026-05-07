// src/pages/RoomDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import roomsData from '../data/roomData';
import styles from './RoomDetailPage.module.css';
import { FaCheckCircle, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import BookingForm from '../components/BookingForm';

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === parseInt(id));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? room.imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const isLastSlide = currentIndex === room.imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isModalOpen, room]);

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

  return (
    <div className={styles.pageContainer}>
      {/* --- Galería con Modal --- */}
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageWrapper}>
          {room.imageUrls.map((url, index) => (
            <div
              key={index}
              className={`${styles.gallerySlide} ${index === currentIndex ? styles.active : ''}`}
              onClick={openModal}
              style={{ cursor: 'pointer' }}
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

          <div className={styles.bookingFormContainer}>
            <h2 className={styles.bookingFormTitle}>Cotizar o Reservar</h2>
            <BookingForm preSelectedRoom={room.name} />
          </div>
        </div>
      </div>

      {/* --- Modal de la Galería --- */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalImageWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModalBtn} onClick={closeModal}>
              <FaTimes />
            </button>
            <img
              src={room.imageUrls[currentIndex]}
              alt={`[Imagen ampliada de ${room.name}]`}
              className={styles.modalImage}
            />
            <button className={`${styles.modalArrow} ${styles.modalPrevArrow}`} onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className={`${styles.modalArrow} ${styles.modalNextArrow}`} onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetailPage;
