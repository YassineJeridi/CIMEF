import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', icon, ...rest }) => (
    <button
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        {...rest}
    >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
    </button>
);

export default Button;
