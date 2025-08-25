import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
    <div className={styles.loading}>
        <span className={styles.dots}>Chargement...</span>
    </div>
);

export default Loading;
