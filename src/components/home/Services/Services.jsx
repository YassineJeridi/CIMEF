import React from 'react';
import { motion } from 'framer-motion';
import { FaPrint, FaLaptop, FaClock, FaTools } from 'react-icons/fa';
import styles from './Services.module.css';

const services = [
    {
        id: 1,
        icon: <FaPrint />,
        title: "Équipements Bureautiques",
        desc: "Distribution et maintenance d'équipements de bureau dernière génération."
    },
    {
        id: 2,
        icon: <FaLaptop />,
        title: "Solutions Informatiques",
        desc: "Vente et support de matériel informatique professionnel, Apple inclus."
    },
    {
        id: 3,
        icon: <FaClock />,
        title: "Location Longue Durée",
        desc: "Location flexible d'imprimantes et équipements avec maintenance incluse."
    },
    {
        id: 4,
        icon: <FaTools />,
        title: "Maintenance & Support",
        desc: "Service technique expert pour assurer le bon fonctionnement de vos équipements."
    }
];

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Services() {
    return (
        <section className={styles.services} id="services">
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className={styles.title}>Nos Services</h2>
                <div className={styles.grid}>
                    {services.map(({ id, icon, title, desc }) => (
                        <motion.article key={id} className={styles.card} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
                            <div className={styles.icon} aria-hidden="true">{icon}</div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
