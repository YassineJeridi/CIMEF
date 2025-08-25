import React from 'react';
import { motion } from 'framer-motion';
import styles from './Map.module.css';

const variants = {
    hidden: { opacity: 0, y: 16, scale: 0.93 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } }
};

export default function Map() {
    return (
        <motion.div
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={variants}
        >
            <h3>🗺️ Trouvez-nous</h3>
            <div className={styles.mapContainer}>
                <iframe
                    title="CIMEF Location - Rue 8300, Belvédère, Tunis"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12944.183!2d10.1857!3d36.8122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b3b4d5e6c789%3A0x12345!2sRue%208300%2C%20Belv%C3%A9d%C3%A8re%2C%20Tunis%2C%20Tunisia!5e0!3m2!1sfr!2stn!4v1756120000000!5m2!1sfr!2stn"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: "16px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className={styles.mapInfo}>
                <div className={styles.address}>
                    <span className={styles.addressIcon}>📍</span>
                    <div>
                        <strong>CIMEF Tunisie</strong><br />
                        Rue 8300, Belvédère<br />
                        Tunis, Tunisia
                    </div>
                </div>
                <a
                    href="https://maps.app.goo.gl/G3gam2SXXcoS2Ggk6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.directionsBtn}
                >
                    🧭 Ouvrir dans Google Maps
                </a>
            </div>
        </motion.div>
    );
}
