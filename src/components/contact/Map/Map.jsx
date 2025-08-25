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
            <h3>Trouvez-nous</h3>
            <iframe
                title="CIMEF Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.959106319145!2d10.18316241561436!3d36.81220407995247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302071f6666801b%3A0xaa3fe890e531d2e9!2sCIMEF%20Tunisie!5e0!3m2!1sfr!2stn!4v1692879907028!5m2!1sfr!2stn"
                width="100%"
                height="190"
                style={{ border: 0, borderRadius: "22px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div>
    );
}
