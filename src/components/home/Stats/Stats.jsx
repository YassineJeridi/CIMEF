import React from 'react';
import { motion } from 'framer-motion';
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
    description: 'Leader sur le marché tunisien'
  },
  {
    id: 2,
    icon: <FaApple />,
    number: 6,
    suffix: '',
    label: 'Magasins Apple',
    description: 'Distributeur officiel Apple'
  },
  {
    id: 3,
    icon: <FaTrophy />,
    number: 45,
    suffix: '+',
    label: 'Années d\'expérience',
    description: 'Depuis 1975'
  },
  {
    id: 4,
    icon: <FaSmile />,
    number: 1000,
    suffix: '+',
    label: 'Clients satisfaits',
    description: 'Entreprises et particuliers'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.bgShapes}>
        <motion.div
          className={styles.bgBlob1}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.bgBlob2}
          animate={{ scale: [1, 1.08, 1], x: [0, 16, 0], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.2 }}
        />
        <div className={styles.bgGradient}></div>
      </div>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className={styles.grid}>
          {stats.map(({ id, icon, number, suffix, label, description }) => (
            <motion.article key={id} className={styles.card} variants={itemVariants} whileHover={{ scale: 1.08, boxShadow: '0 12px 48px -18px #85bb6566' }}>
              <div className={styles.icon}>{icon}</div>
              <div className={styles.number}>
                <CountUp end={number} suffix={suffix} duration={2.2} />
              </div>
              <div className={styles.label}>{label}</div>
              <div className={styles.desc}>{description}</div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
