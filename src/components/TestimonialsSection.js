// ==================== src/components/TestimonialsSection.js (CORREGIDO) ====================

import React from 'react';
import styles from './TestimonialsSection.module.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from './common/AnimatedSection';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
        );
    }
    return <div className={styles.stars}>{stars}</div>;
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "El servicio fue impecable y la ubicación es inmejorable, justo al lado de Corferias. Hizo mi viaje de negocios mucho más sencillo. ¡Volveré sin duda!",
            author: "Carlos Mendoza",
            rating: 5,
        },
        {
            quote: "Habitaciones muy cómodas y limpias. El personal de recepción fue extremadamente amable y servicial. Una excelente opción en Bogotá.",
            author: "Ana Sofía Restrepo",
            rating: 5,
        },
        {
            quote: "Buena relación calidad-precio. El gimnasio estaba bien equipado y el WiFi funcionaba perfectamente. Ideal para una estancia corta.",
            author: "Javier Correa",
            rating: 4,
        },
    ];

    return (
        <section className={styles.testimonialsSection}>
            {/* 1. Título principal animado */}
            <AnimatedSection>
                <h2 className={styles.mainTitle}>Calificación de 9,1/10: Fantástico</h2>
            </AnimatedSection>
            
            {/* 2. Subtítulo animado */}
            <AnimatedSection>
                <p className={styles.mainSubtitle}>Basado en más de 700 comentarios reales</p>
            </AnimatedSection>
            
            {/* 3. Título de las tarjetas animado */}
            <AnimatedSection>
                <h3 className={styles.cardsTitle}>Lo que dicen nuestros huéspedes</h3>
            </AnimatedSection>
            
            {/* 4. Cada tarjeta de testimonio animada individualmente */}
            <div className={styles.cardsContainer}>
                {testimonials.map((testimonial, index) => (
                    <AnimatedSection key={index}>
                        <div className={styles.testimonialCard}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <p className={styles.quote}>"{testimonial.quote}"</p>
                            <div className={styles.cardFooter}>
                                <StarRating rating={testimonial.rating} />
                                <p className={styles.author}>- {testimonial.author}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;