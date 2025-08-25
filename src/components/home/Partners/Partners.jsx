import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';
import { PARTNERS } from '../../../utils/constants';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className={styles.partners} id="partners">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.heading}>
          <motion.h2 className={styles.title} variants={itemVariants}>
            Nos Partenaires
          </motion.h2>
          <motion.span className={styles.subtitle} variants={itemVariants}>
            Des leaders qui font confiance à CIMEF depuis 45 ans
          </motion.span>
        </div>

        <motion.div
          className={styles.carouselWrapper}
          variants={itemVariants}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`${styles.carousel} ${isPaused ? styles.paused : ''}`}
            ref={carouselRef}
          >
            {/* Duplicate partners for seamless loop */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map(({ name, logo }, i) => (
              <motion.div
                className={styles.logoWrap}
                key={`${name}-${i}`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={logo}
                  alt={name}
                  title={name}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {isMobile && (
          <motion.div className={styles.mobileIndicator} variants={itemVariants}>
            <p>← Faites défiler pour voir plus →</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
