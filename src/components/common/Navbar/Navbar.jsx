import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaCog, FaUsers, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
    { to: '/', label: 'Accueil', icon: <FaHome /> },
    { to: '/#services', label: 'Services', icon: <FaCog /> },
    { to: '/#partners', label: 'Partenaires', icon: <FaUsers /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> }
];

const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const mobileMenuVariants = {
    hidden: {
        x: '100%',
        opacity: 0,
        scale: 0.95
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
    exit: {
        x: '100%',
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
};

const mobileItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <>
            <motion.header
                className={styles.navbarAlt}
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <div className={styles.brandArea}>
                    <Link to="/" className={styles.brandLogo}>
                        <img src="/CIMEF/assets/images/LOGO-GREEN.svg" alt="CIMEF Logo" />
                        <span className={styles.brandText}>CIMEF</span>
                    </Link>
                </div>

                <nav className={styles.navLinks}>
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`${styles.link} ${location.pathname === to ? styles.active : ''
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.userArea}>
                    <motion.button
                        className={styles.menuToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                        animate={{ rotate: menuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            className={styles.overlay}
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMenuOpen(false)}
                        />
                        <motion.div
                            className={styles.mobileMenuAlt}
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className={styles.mobileHeader}>
                                <img src="/CIMEF/assets/images/LOGO-GREEN.svg" alt="CIMEF" />
                                <h3>Navigation</h3>
                            </div>

                            <nav className={styles.mobileNav}>
                                {navLinks.map(({ to, label, icon }, index) => (
                                    <motion.div key={to} variants={mobileItemVariants}>
                                        <Link
                                            to={to}
                                            className={`${styles.mobileLink} ${location.pathname === to ? styles.activeMobile : ''
                                                }`}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className={styles.linkIcon}>{icon}</span>
                                            <span className={styles.linkText}>{label}</span>
                                            <span className={styles.linkArrow}>→</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                className={styles.mobileFooter}
                                variants={mobileItemVariants}
                            >
                                <p>© 2025 CIMEF Tunisie</p>
                                <div className={styles.socialLinks}>
                                    <a href="#" aria-label="Facebook">📘</a>
                                    <a href="#" aria-label="LinkedIn">💼</a>
                                    <a href="#" aria-label="Instagram">📷</a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
