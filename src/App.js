// ==================== src/App.js (ACTUALIZADO) ====================

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// 1. IMPORTACIONES DE REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import ContactPage from './pages/ContactPage';
import RegulationsPage from './pages/RegulationsPage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/habitaciones" element={<RoomsPage />} />
            <Route path="/habitaciones/:id" element={<RoomDetailPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/reglamento-interno" element={<RegulationsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>

      {/* 2. AÑADIR EL CONTENEDOR DE NOTIFICACIONES AQUÍ */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;