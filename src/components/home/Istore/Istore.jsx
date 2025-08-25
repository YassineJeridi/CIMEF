import React from 'react';
import { motion } from 'framer-motion';
import styles from './Istore.module.css';

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Istore() {
    return (
        <section className={styles.istore}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className={styles.imageWrapper}>
                    <img src="/assets/istore-lac-2.png" alt="Istore" />
                </motion.div>
                <motion.div variants={itemVariants} className={styles.content}>
                    <h2>À propos d&apos;Istore</h2>
                    <p>
                        Istore est un revendeur officiel Apple en Tunisie spécialisé dans la vente et le support des produits Apple, offrant des solutions personnalisées pour les particuliers et les entreprises.
                    </p>
                    <ul>
                        <li>Produits Apple authentiques et garantis</li>
                        <li>Service client dédié et support technique expert</li>
                        <li>Programmes de formation et ateliers</li>
                        <li>Solutions adaptées aux besoins professionnels</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
