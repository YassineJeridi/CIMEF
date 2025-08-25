import React from 'react';
import styles from './Partners.module.css';
import { PARTNERS } from '../../../utils/constants';

export default function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <div className={styles.heading}>
        <h2 className={styles.title}>Nos Partenaires</h2>
        <span className={styles.subtitle}>
          Des leaders qui font confiance à CIMEF depuis 45 ans
        </span>
      </div>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {PARTNERS.concat(PARTNERS).map(({ name, logo }, i) => (
            <div className={styles.logoWrap} key={name + i}>
              <img src={logo} alt={name} title={name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
