import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactInfo.module.css';

const variants = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function ContactInfo() {
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      <h2>Nos coordonnées</h2>
      <address>
        <span>📍 Rue 8300, Belvédère, Tunis</span>
        <span>📞 <a href="tel:+21671280110">+216 71 280 110</a></span>
        <span>✉️ <a href="mailto:commercial@cimef.tn">commercial@cimef.tn</a></span>
      </address>
      <div className={styles.socials}>
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </motion.div>
  );
}
