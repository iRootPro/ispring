import React from 'react';
import styles from './styles.module.css'

const Header = ({title}: { title: string }) => {
    return (
        <span className={styles.title}>{title}</span>
    );
};

export default Header;
