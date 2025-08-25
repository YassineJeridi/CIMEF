import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import styles from './Hero.module.css';

const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgShapes}>
                <motion.div
                    className={styles.bgCircle}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: [0, 0.7, 1]
                    }}
                    transition={{
                        duration: 1.2,
                        ease: 'backOut'
                    }}
                />
                <motion.div
                    className={styles.bgGradient}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                />
            </div>
            <motion.div
                className={styles.content}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.span variants={item} className={styles.badge}>
                    Leader Tunisien · Depuis 1975
                </motion.span>
                <motion.h1 variants={item} className={styles.title}>
                    <span className={styles.gradientText}>CIMEF Tunisie</span>
                    <br />
                    <span className={styles.subtitleText}>
                        Solutions bureautiques & informatiques ultra performantes
                    </span>
                </motion.h1>
                <motion.p variants={item} className={styles.slogan}>
                    Plus de 45 ans d’expertise, des équipements et services sur mesure
                    pour les professionnels de tous secteurs.
                </motion.p>
                <motion.div variants={item} className={styles.actions}>
                    <Button variant="primary" icon={<FaArrowRight />}>
                        Découvrir nos services
                    </Button>
                    <Button variant="secondary" icon={<FaPlay />}>
                        Voir la vidéo
                    </Button>
                </motion.div>
            </motion.div>
            <motion.div
                className={styles.imageWrap}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                <img
                    src="/assets/images/hero-img-1024x859-2.png"
                    alt="CIMEF Solutions"
                    className={styles.heroImg}
                />
            </motion.div>
        </section>
    );
}
