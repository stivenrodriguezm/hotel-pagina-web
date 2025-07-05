// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Página no encontrada</p>
      <Link to="/" className={styles.backLink}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
