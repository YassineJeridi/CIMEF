import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.25, delayChildren: 0.1 }
    }
};
const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.bgAccent} />
            <motion.div
                className={styles.content}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                <motion.h2 variants={item} className={styles.title}>
                    <span className={styles.gradientText}>À propos de CIMEF</span>
                </motion.h2>
                <motion.p variants={item} className={styles.lead}>
                    <strong>45+ ans</strong> d’innovation, d’engagement et de confiance.<br />
                    <span className={styles.highlight}>CIMEF Tunisie</span> est leader en solutions bureautiques, informatiques et impression pour les entreprises de tous secteurs en Tunisie.
                </motion.p>
                <motion.ul variants={item} className={styles.list}>
                    <li>
                        <span>🌱</span> Engagement envers le service et la qualité.
                    </li>
                    <li>
                        <span>💡</span> Conseils sur-mesure pour chaque client.
                    </li>
                    <li>
                        <span>🤝</span> Partenariats solides avec les plus grandes marques (Apple, Ricoh, etc.).
                    </li>
                </motion.ul>
                <motion.div variants={item} className={styles.quote}>
                    <em>
                        « Chez CIMEF, votre performance et votre satisfaction sont notre priorité. »
                    </em>
                </motion.div>
            </motion.div>
        </section>
    );
}
