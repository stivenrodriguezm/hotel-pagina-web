// src/components/BookingForm.js
import React, { useState } from 'react';
import styles from './BookingForm.module.css';
import roomsData from '../data/roomData';

const BookingForm = ({ preSelectedRoom }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState(preSelectedRoom || roomsData[0]?.name || 'Habitación Estándar');

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T00:00:00');
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return `${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkin || !checkout) {
      alert("Por favor, selecciona las fechas de llegada y salida.");
      return;
    }

    const totalPersons = parseInt(adults) + parseInt(children);
    
    const message = `Buen día, me gustaría cotizar esta reserva: \n\nFecha entrada: ${formatDate(checkin)}\nFecha salida: ${formatDate(checkout)}\nPersonas: ${totalPersons}\nTipo de habitacion: ${roomType}\n\nCuentan con disponibilidad?`;

    const finalUrl = `https://wa.me/573222585951?text=${encodeURIComponent(message)}`;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="checkin">Llegada</label>
        <input
          type="date"
          id="checkin"
          value={checkin}
          min={today}
          onChange={(e) => setCheckin(e.target.value)}
          className={styles.formInput}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="checkout">Salida</label>
        <input
          type="date"
          id="checkout"
          value={checkout}
          min={checkin || today}
          onChange={(e) => setCheckout(e.target.value)}
          className={styles.formInput}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="adults">Adultos</label>
        <input
          type="number"
          id="adults"
          value={adults}
          min="1"
          onChange={(e) => setAdults(e.target.value)}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="children">Niños</label>
        <input
          type="number"
          id="children"
          value={children}
          min="0"
          onChange={(e) => setChildren(e.target.value)}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="roomType">Tipo de habitación</label>
        <select
          id="roomType"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className={styles.formInput}
        >
          {roomsData.map(room => (
            <option key={room.id} value={room.name}>{room.name}</option>
          ))}
          <option value="Cualquiera">Cualquiera / No estoy seguro</option>
        </select>
      </div>
      <button type="submit" className={`btn btn-brand ${styles.submitButton}`}>
        Reservar
      </button>
    </form>
  );
};

export default BookingForm;