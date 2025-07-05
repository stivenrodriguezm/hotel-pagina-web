// src/components/ServicesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { FaWifi, FaDumbbell, FaUserClock, FaParking } from 'react-icons/fa';
import AnimatedSection from './common/AnimatedSection'; // Importar el componente de animación

const ServicesSection = () => {
  const services = [
    {
      icon: <FaWifi />,
      name: 'WiFi de Alta Velocidad',
    },
    {
      icon: <FaDumbbell />,
      name: 'Zona de cardio',
    },
    {
      icon: <FaUserClock />,
      name: 'Recepción 24 Horas',
    },
    {
      icon: <FaParking />,
      name: 'Parking Privado Gratis',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.gridContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceName}>{service.name}</h3>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.detailsModule}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675246/DSC04604_nmxq5b.jpg"
              alt="[Interior del Hotel Fontana]"
              className={styles.detailsImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.detailsText}>
              ¡Bienvenido al Hotel Fontana, tu puerta de entrada al corazón de los negocios y la cultura en la vibrante Bogotá! Con habitaciones acogedoras, estamos estratégicamente ubicados a solo 1 minuto a pie del Centro Internacional de Negocios y Exposiciones - Corferias.
            </p> <br />
            <p className={styles.detailsText}>
              Nuestro hotel brinda comodidades de primer nivel, como gimnasio, parqueadero privado y una sala de juntas para 20 personas, perfecta para eventos y reuniones. Disfruta de una estancia sin preocupaciones con recepción 24 horas, servicio de habitaciones, televisión por cable Directv y wifi de alta velocidad en todo el alojamiento.
            </p><br />
            <p className={styles.detailsText}>
              Empieza tus días con un delicioso desayuno americano y disfruta de una vista panorámica de la ciudad. Estamos cerca de lugares emblemáticos como la Plaza de Bolívar, Monserrate, el centro histórico (a 5.1 km), el Estadio El Campín y Movistar Arena (a 4.5 km), la Embajada Americana (a 0.8 km), y el centro comercial Gran Estación (a 2.7 km). El Aeropuerto Internacional de El Dorado se encuentra a solo 8 km de distancia.
            </p><br />
            <p className={styles.detailsText}>
              Haz de tu estadía en Bogotá una experiencia memorable en Hotel Fontana. ¡Te esperamos con los brazos abiertos para hacer de tu visita una experiencia única!
            </p>
            <br />
            <Link to="/servicios" className={styles.detailsButton}>
              Ver todos nuestros servicios
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ServicesSection;
