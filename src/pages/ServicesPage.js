// src/pages/ServicesPage.js
import React from 'react';
import styles from './ServicesPage.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import AnimatedSection from '../components/common/AnimatedSection';

const ServicesPage = () => {
  const serviceCategories = [
    {
      category: 'Comodidades más populares',
      items: [
        { name: 'Desayuno', imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675213/DSC04550_o9tpwl.jpg' },
        { name: 'Parking Privado', imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675245/DSC04600_czjgjf.jpg' },
        { name: 'Zona de Cardio', imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675211/DSC04545_zxcsvm.jpg' },
        { name: 'Recepción 24 horas', imageUrl: 'https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675248/DSC04614_jv5dsd.jpg' },
      ],
    },
    {
      category: 'Baño',
      items: ['Agua caliente', 'Espejo', 'Bañera (según tipo de habitación)', 'Artículos de aseo', 'Toallas', 'Secador de pelo'],
    },
    {
      category: 'Dormitorio',
      items: ['Escritorio', 'Minibar', 'Ganchos de ropa', 'Cobija adicional', 'Espejo de cuerpo entero', 'Servicio de limpieza', 'Señal DirecTv', 'Llave digital de seguridad'],
    },
    {
      category: 'Seguridad',
      items: ['Sensores de humo', 'Salida de emergencia', 'Caja fuerte', 'Personal 24 horas'],
    },
    {
      category: 'General',
      items: ['Baños públicos', 'Zona de cardio', 'Desayuno', 'Sala de juntas (de pago)', 'Recepción 24 horas', 'Parking privado (según disponibilidad)'],
    },
    {
      category: 'Comida y bebida',
      items: ['Desayuno', 'Carta y domicilio de restaurantes cercanos', 'Minibar'],
    },
    {
      category: 'Información Importante',
      items: ['No somos Pet Friendly (no se admiten mascotas)', 'No contamos con Room Service', 'No contamos con restaurante', 'No contamos con aire acondicionado', 'Establecimiento 100% libre de humo (Prohibido fumar)'],
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <AnimatedSection>
        <h1 className={styles.pageTitle}>Nuestras Comodidades e Instalaciones</h1>
      </AnimatedSection>
      <AnimatedSection>
        <p className={styles.pageSubtitle}>
          En todas nuestras habitaciones encontrará TV de pantalla plana, caja fuerte, minibar y un baño privado con ducha y secador de pelo para su comodidad, además, cada reserva incluye desayuno. El Hotel Fontana cuenta con una sala de juntas y una recepción abierta las 24 horas. También ofrecemos consigna de equipaje. Nuestra ubicación es ideal: Corferias se encuentra a solo 100 metros, la embajada americana a 500 metros, mientras que el Aeropuerto Internacional El Dorado está a 15 minutos en auto, facilitando todos sus traslados.
        </p>
      </AnimatedSection>
      
      {serviceCategories.map((category, index) => (
        <AnimatedSection key={index}>
          <section className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            
            {category.category === 'Comodidades más populares' ? (
              <div className={styles.popularServicesGrid}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.popularServiceCard}>
                    <img
                      src={item.imageUrl}
                      alt={`[Imagen de ${item.name}]`}
                      className={styles.cardImage}
                      onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/cccccc/ffffff?text=Imagen`; }}
                    />
                    <div className={styles.cardName}>{item.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.otherServicesGrid}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.serviceItem}>
                    <FaCheckCircle className={styles.serviceIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ServicesPage;
