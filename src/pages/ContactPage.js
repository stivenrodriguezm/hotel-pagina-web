// ==================== src/pages/ContactPage.js (ACTUALIZADO) ====================

import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AnimatedSection from '../components/common/AnimatedSection';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className={styles.infoIcon} />,
            text: 'AK 40 #22B-27 barrio quinta paredes, Bogota',
        },
        {
            icon: <FaPhone className={styles.infoIcon} />,
            text: '601 300 1074 / 601 466 1745 | WA: 322 258 5951',
        },
        {
            icon: <FaEnvelope className={styles.infoIcon} />,
            text: 'recepcion@fontanabogota.com',
        },
        {
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" alt="Booking.com" style={{ width: '24px', verticalAlign: 'middle' }} />,
            text: <a href="https://www.booking.com/hotel/co/fontana-bogota.es.html" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Reserva por Booking.com</a>,
        },
    ];

    const [reason, setReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;
        const formData = new FormData(form);
        
        // Convertimos FormData a un objeto simple para enviarlo vía JSON
        const data = Object.fromEntries(formData.entries());

        try {
            // Usamos formsubmit.co para enviar el correo directamente a recepción
            const response = await fetch("https://formsubmit.co/ajax/recepcion@fontanabogota.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success('¡Mensaje enviado exitosamente!');
                form.reset();
                setReason('');
            } else {
                toast.error('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
            }
        } catch (error) {
            console.error("Error enviando el formulario:", error);
            toast.error('Error de conexión. Intenta nuevamente o envíanos un correo directo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <AnimatedSection>
                <h1 className={styles.pageTitle}>Contáctanos</h1>
            </AnimatedSection>
            <div className={styles.contentWrapper}>
                <AnimatedSection>
                    <div className={styles.infoContainer}>
                        <h3>Información de Contacto</h3>
                        {contactInfo.map((item, index) => (
                            <div key={index} className={styles.infoItem}>
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className={styles.formContainer}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            {/* Campos ocultos para FormSubmit */}
                            <input type="hidden" name="_subject" value={`Nuevo contacto: ${reason || 'General'}`} />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" className={styles.formInput} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className={styles.formInput} required />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="reason">Motivo de Contacto</label>
                                <select 
                                    id="reason" 
                                    name="reason" 
                                    className={styles.formSelect} 
                                    value={reason} 
                                    onChange={(e) => setReason(e.target.value)} 
                                    required
                                >
                                    <option value="" disabled>-- Elige una opción --</option>
                                    <option value="Pregunta">Pregunta</option>
                                    <option value="Queja">Queja</option>
                                    <option value="Reclamo">Reclamo</option>
                                    <option value="Sugerencia">Sugerencia</option>
                                </select>
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" name="message" className={styles.formTextarea} required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactPage;