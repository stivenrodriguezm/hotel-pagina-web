// src/components/BookingForm.js
import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkin || !checkout) {
      alert("Por favor, selecciona las fechas de llegada y salida.");
      return;
    }

    const baseUrl = 'https://www.booking.com/hotel/co/fontana-bogota.es.html';
    const params = new URLSearchParams({
      ss: 'Hotel Fontana Bogotá, Bogotá, Colombia',
      checkin: checkin,
      checkout: checkout,
      group_adults: adults,
      group_children: children,
      no_rooms: 1,
      req_adults: adults,
      req_children: children,
    });
    const finalUrl = `${baseUrl}?${params.toString()}`;
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
      <button type="submit" className={`btn btn-brand ${styles.submitButton}`}>
        Reservar
      </button>
    </form>
  );
};

export default BookingForm;