import React from 'react';
import ContactForm from '../../components/contact/ContactForm/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo/ContactInfo';
import Map from '../../components/contact/Map/Map';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contactPage}>
            <div className={styles.heroBanner}>
                <h1>Parlons ensemble !</h1>
                <p>
                    Utilisez le formulaire ci-dessous, trouvez-nous sur la carte ou contactez-nous via les réseaux sociaux.
                    Nous répondons rapidement — votre projet commence ici.
                </p>
            </div>
            <div className={styles.blocks}>
                <div className={styles.leftBlock}>
                    <ContactInfo />
                    <Map />
                </div>
                <div className={styles.rightBlock}>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
