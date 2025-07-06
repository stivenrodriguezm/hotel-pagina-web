// ==================== src/components/ServicesSection.js (CORREGIDO) ====================

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import { FaWifi, FaDumbbell, FaUserClock, FaParking } from 'react-icons/fa';
import AnimatedSection from './common/AnimatedSection';

const ServicesSection = () => {
    const services = [
        { icon: <FaWifi />, name: 'WiFi de Alta Velocidad' },
        { icon: <FaDumbbell />, name: 'Zona de cardio' },
        { icon: <FaUserClock />, name: 'Recepción 24 Horas' },
        { icon: <FaParking />, name: 'Parking Privado Gratis' },
    ];

    return (
        <section className={styles.servicesSection}>
            {/* 1. El título se anima por separado */}
            <AnimatedSection>
                <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
            </AnimatedSection>
            
            {/* 2. Cada tarjeta de servicio se anima individualmente */}
            <div className={styles.gridContainer}>
                {services.map((service, index) => (
                    <AnimatedSection key={index}>
                        <div className={styles.serviceItem}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.serviceName}>{service.name}</h3>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            
            <div className={styles.detailsModule}>
                {/* 3. La imagen del módulo de detalles se anima por separado */}
                <AnimatedSection>
                    <div className={styles.imageContainer}>
                        <img
                            src="https://res.cloudinary.com/dgn1mpqsc/image/upload/v1751675246/DSC04604_nmxq5b.jpg"
                            alt="[Interior del Hotel Fontana]"
                            className={styles.detailsImage}
                        />
                    </div>
                </AnimatedSection>

                <div className={styles.textContainer}>
                    {/* 4. Cada párrafo se anima individualmente */}
                    <AnimatedSection>
                        <p className={styles.detailsText}>
                            ¡Bienvenido al Hotel Fontana, tu puerta de entrada al corazón de los negocios y la cultura en la vibrante Bogotá! Con habitaciones acogedoras, estamos estratégicamente ubicados a solo 1 minuto a pie del Centro Internacional de Negocios y Exposiciones - Corferias.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className={styles.detailsText}>
                            Nuestro hotel brinda comodidades de primer nivel, como gimnasio, parqueadero privado y una sala de juntas para 20 personas, perfecta para eventos y reuniones. Disfruta de una estancia sin preocupaciones con recepción 24 horas, servicio de habitaciones, televisión por cable Directv y wifi de alta velocidad en todo el alojamiento.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className={styles.detailsText}>
                            Empieza tus días con un delicioso desayuno americano y disfruta de una vista panorámica de la ciudad. Estamos cerca de lugares emblemáticos como la Plaza de Bolívar, Monserrate, el centro histórico (a 5.1 km), el Estadio El Campín y Movistar Arena (a 4.5 km), la Embajada Americana (a 0.8 km), y el centro comercial Gran Estación (a 2.7 km). El Aeropuerto Internacional de El Dorado se encuentra a solo 8 km de distancia.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <p className={styles.detailsText}>
                            Haz de tu estadía en Bogotá una experiencia memorable en Hotel Fontana. ¡Te esperamos con los brazos abiertos para hacer de tu visita una experiencia única!
                        </p>
                    </AnimatedSection>
                    <br />
                    {/* 5. El botón final también se anima por separado */}
                    <AnimatedSection>
                        <Link to="/servicios" className={styles.detailsButton}>
                            Ver todos nuestros servicios
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;