// ==================== src/pages/ContactPage.js (ACTUALIZADO) ====================

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactPage.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AnimatedSection from '../components/common/AnimatedSection';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className={styles.infoIcon} />,
            text: 'Cra. 37 #24-25, Bogotá, Colombia',
        },
        {
            icon: <FaPhone className={styles.infoIcon} />,
            text: '+57 (601) 123-4567',
        },
        {
            icon: <FaEnvelope className={styles.infoIcon} />,
            text: 'reservas@hotelfontanabogota.com',
        },
    ];

    // 1. AÑADIR ESTADO PARA EL CAMPO 'REASON'
    const [reason, setReason] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;
        
        let templateId = '';
        if (reason === 'pregunta') {
            templateId = 'template_da65wrk';
        } else {
            templateId = 'template_i6nov8c';
        }

        const serviceId = 'service_w2gim5e';
        const publicKey = 'c6oUc6aaB0wguGlkm';

        emailjs.sendForm(serviceId, templateId, form, publicKey)
            .then((result) => {
                toast.success('PQRS enviado exitosamente!');
                form.reset();
                setReason(''); // 2. REINICIAR EL ESTADO DESPUÉS DE ENVIAR
            }, (error) => {
                toast.error('Hubo un error, intenta nuevamente o envíanos un correo.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
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
                                {/* 3. CONECTAR EL SELECT AL ESTADO */}
                                <select 
                                    id="reason" 
                                    name="reason" 
                                    className={styles.formSelect} 
                                    value={reason} // El valor del select es controlado por el estado
                                    onChange={(e) => setReason(e.target.value)} // Actualiza el estado al cambiar
                                    required
                                >
                                    <option value="" disabled>-- Elige una opción --</option>
                                    <option value="pregunta">Pregunta</option>
                                    <option value="queja">Queja</option>
                                    <option value="reclamo">Reclamo</option>
                                    <option value="sugerencia">Sugerencia</option>
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