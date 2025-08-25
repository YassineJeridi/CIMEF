import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';
import { sendTelegramMessage } from '../../../utils/apiTelegram';

const variants = {
    hidden: { opacity: 0, y: 32, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function ContactForm() {
    const [fields, setFields] = useState({ name: '', company: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    function handleChange(e) {
        setFields(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Envoi en cours...');

        try {
            const result = await sendTelegramMessage(fields);
            console.log('Telegram response:', result);

            if (result.ok) {
                setStatus('✅ Message envoyé avec succès!');
                setFields({ name: '', company: '', email: '', message: '' });
            } else {
                setStatus(`❌ Erreur: ${result.error_code} - ${result.description}`);
            }
        } catch (error) {
            console.error('Network Error:', error);
            setStatus("❌ Erreur réseau. Vérifiez votre connexion.");
        }
    }

    return (
        <motion.form
            className={styles.form}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={handleSubmit}
        >
            <h2>🚀 Lancez votre projet</h2>
            <input
                name="name"
                type="text"
                placeholder="👤 Votre nom"
                value={fields.name}
                onChange={handleChange}
                required
            />
            <input
                name="company"
                type="text"
                placeholder="🏢 Société / Entreprise (optionnel)"
                value={fields.company}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="📧 Email"
                value={fields.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                rows={5}
                placeholder="💭 Votre demande"
                value={fields.message}
                onChange={handleChange}
                required
            />
            <motion.button whileTap={{ scale: .97 }} type="submit" className={styles.submit}>
                📤 Démarrer la conversation
            </motion.button>
            {status && <span className={styles.status}>{status}</span>}
        </motion.form>
    );
}
