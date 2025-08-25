import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const bgVariants = {
    animate: {
        scale: [1, 1.06, 1],
        rotate: [0, 12, 0],
        opacity: [0.9, 1, 0.9],
        transition: { repeat: Infinity, duration: 8, ease: 'easeInOut' }
    }
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.bgShapes}>
                <motion.div
                    className={styles.bgBlob1}
                    variants={bgVariants}
                    animate="animate"
                />
                <motion.div
                    className={styles.bgBlob2}
                    variants={bgVariants}
                    animate="animate"
                />
                <div className={styles.bgGradient}></div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.brandCol}>
                    <img
                        src="/CIMEF/assets/images/LOGO-GREEN.svg"
                        alt="CIMEF"
                        className={styles.logo}
                    />
                    <p className={styles.brand}>CIMEF Tunisie</p>
                    <span className={styles.tagline}>
                        L’innovation bureau depuis 1975
                    </span>
                </div>
                <div className={styles.linksCol}>
                    <h4>Navigation</h4>
                    <nav>
                        <a href="/CIMEF/">Accueil</a>
                        <a href="/CIMEF/#services">Services</a>
                        <a href="/CIMEF/#partners">Partenaires</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
                <div className={styles.contactsCol}>
                    <h4>Contact</h4>
                    <a href="tel:+21671280110">+216 71 280 110</a>
                    <a href="mailto:commercial@cimef.com">commercial@cimef.com</a>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <motion.div
                className={styles.copyright}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.1 }}
            >
                &copy; {new Date().getFullYear()} CIMEF Tunisie. Tous droits réservés.
            </motion.div>
        </footer>
    );
}
