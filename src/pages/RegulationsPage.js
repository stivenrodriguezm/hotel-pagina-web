// ==================== src/pages/RegulationsPage.js (ACTUALIZADO) ====================

import React from 'react';
import styles from './RegulationsPage.module.css';
import pdfFile from '../assets/RIT.pdf';

const RegulationsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Reglamento Interno de Trabajo</h1>
      
      {/* NUEVO: Texto de la fecha de actualización */}
      <p className={styles.lastUpdated}>
        Ultima actualización el 6 de julio del 2025
      </p>
      
      <div className={styles.pdfContainer}>
        <embed 
          src={pdfFile} 
          type="application/pdf" 
          className={styles.pdfEmbed}
        />
      </div>
      
      <div className={styles.downloadLinkContainer}>
        <p>
          Si no puedes ver el documento, puedes&nbsp;
          <a href={pdfFile} download="Reglamento_Interno_Hotel_Fontana.pdf">
            descargarlo aquí
          </a>.
        </p>
      </div>
    </div>
  );
};

export default RegulationsPage;