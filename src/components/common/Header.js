// ==================== src/components/common/Header.js (CORREGIDO) ====================

import React, { useState, useEffect } from 'react'; // << LÍNEA CORREGIDA
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { FaBars, FaTimes, FaHome, FaBed, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const bookingUrl = `https://www.booking.com/hotel/co/fontana-bogota.es.html`;
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoClick = (e) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => setIsScrolled(window.scrollY > 80);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setIsScrolled(false);
        }
    }, [isHomePage]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navLinks = [
        { title: 'Inicio', path: '/', icon: <FaHome /> },
        { title: 'Habitaciones', path: '/habitaciones', icon: <FaBed /> },
        { title: 'Servicios', path: '/servicios', icon: <FaConciergeBell /> },
        { title: 'Contacto', path: '/contacto', icon: <FaEnvelope /> },
    ];

    const isSolid = !isHomePage || isScrolled;
    const headerClasses = `${styles.header} ${isSolid ? styles.solid : ''} ${isMenuOpen ? styles.menuOpen : ''}`;
    const navigationClasses = `${styles.navigation} ${isMenuOpen ? styles.active : ''}`;

    return (
        <header className={headerClasses}>
            <div className={styles.logoContainer}>
                <NavLink to="/" onClick={handleLogoClick}>
                    <Logo className={styles.logo} />
                </NavLink>
            </div>
            
            <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Abrir menú">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            <div className={navigationClasses}>
                <h3 className={styles.menuTitle}>Menú</h3>
                <nav>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.title} className={styles.navLink}>
                                <NavLink 
                                    to={link.path} 
                                    onClick={handleLinkClick}
                                    className={({ isActive }) => isActive ? styles.activeLink : undefined}
                                >
                                    {link.icon} <span>{link.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.bookingButton}`}>
                    Reserva Ahora
                </a>
            </div>
        </header>
    );
};

export default Header;