import React from 'react';
import styles from './Testimonials.module.css';
import { TESTIMONIALS } from '../../../utils/constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                <h2 className={styles.title}>Ce que disent nos clients</h2>
                <div className={styles.grid}>
                    {TESTIMONIALS.map(({ id, name, position, company, content, avatar }) => (
                        <motion.article
                            key={id}
                            className={styles.card}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className={styles.avatar} aria-hidden="true">
                                <img src={avatar} alt={name} loading="lazy" />
                            </div>
                            <blockquote>{content}</blockquote>
                            <footer>
                                <h3>{name}</h3>
                                <p>{position} - {company}</p>
                            </footer>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
