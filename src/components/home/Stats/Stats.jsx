import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import styles from './Stats.module.css';
import { FaChartBar, FaApple, FaTrophy, FaSmile } from 'react-icons/fa';

const stats = [
  {
    id: 1,
    icon: <FaChartBar />,
    number: 65,
    suffix: '%',
    label: 'Part de marché',
    description: 'Leader sur le marché tunisien',
    color: '#4A90A4'
  },
  {
    id: 2,
    icon: <FaApple />,
    number: 6,
    suffix: '',
    label: 'Magasins Apple',
    description: 'Distributeur officiel Apple',
    color: '#85BB65'
  },
  {
    id: 3,
    icon: <FaTrophy />,
    number: 45,
    suffix: '+',
    label: 'Années d\'expérience',
    description: 'Depuis 1975',
    color: '#F59E0B'
  },
  {
    id: 4,
    icon: <FaSmile />,
    number: 1000,
    suffix: '+',
    label: 'Clients satisfaits',
    description: 'Entreprises et particuliers',
    color: '#10B981'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const bgVariants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function Stats() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.stats} id="stats">
      <div className={styles.bgShapes}>
        <motion.div
          className={styles.bgBlob1}
          variants={bgVariants}
          animate="animate"
        />
        <motion.div
          className={styles.bgBlob2}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
            delay: 1.5
          }}
        />
        <motion.div
          className={styles.bgBlob3}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: 'easeInOut',
            delay: 3
          }}
        />
        <div className={styles.bgGradient}></div>
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>Nos Performances</h2>
          <p className={styles.sectionSubtitle}>
            Des chiffres qui témoignent de notre excellence
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map(({ id, icon, number, suffix, label, description, color }, index) => (
            <motion.article
              key={id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{
                scale: isMobile ? 1.02 : 1.05,
                y: isMobile ? -2 : -8,
                boxShadow: `0 ${isMobile ? '8px 25px' : '12px 48px'} -18px ${color}40`
              }}
              whileTap={{ scale: 0.98 }}
              style={{ '--card-color': color }}
            >
              <div className={styles.cardInner}>
                <motion.div
                  className={styles.icon}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {icon}
                </motion.div>

                <motion.div
                  className={styles.number}
                  initial={{ scale: 0 }}
                  animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8, type: "spring" }}
                >
                  <CountUp
                    end={number}
                    suffix={suffix}
                    duration={2.5}
                    delay={0.8 + index * 0.3}
                    preserveValue
                  />
                </motion.div>

                <div className={styles.content}>
                  <h3 className={styles.label}>{label}</h3>
                  <p className={styles.desc}>{description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
