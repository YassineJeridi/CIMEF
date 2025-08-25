import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/#services', label: 'Services' },
    { to: '/#partners', label: 'Partenaires' },
    { to: '/contact', label: 'Contact' }
];

const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Close menu on route change
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <motion.header
            className={styles.navbarAlt}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className={styles.brandArea}>
                <Link to="/" className={styles.brandLogo}>
                    <img src="/assets/images/LOGO-GREEN.svg" alt="CIMEF Logo" />
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
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenuAlt}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                    >
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`${styles.mobileLink} ${location.pathname === to ? styles.activeMobile : ''
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
