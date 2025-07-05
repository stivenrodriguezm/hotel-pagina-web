// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// 1. Importar el nuevo componente
import ScrollToTop from './components/common/ScrollToTop';

// Importando los componentes estructurales
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Importando las páginas
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
      {/* 2. Añadir el componente ScrollToTop aquí */}
      {/* Debe estar dentro de BrowserRouter para que pueda usar el hook useLocation */}
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
    </BrowserRouter>
  );
}

export default App;
