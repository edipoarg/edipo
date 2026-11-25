/* eslint-disable react/prop-types */

import styles from './Background.module.css';

const Background = ({ children, theme = 'light' }) => {

    const themes = {
        light: styles.Light,
        dark: styles.Dark,
        grid: styles.Grid,
        white: styles.White
    };

    return (

        <section
            className={`${styles.background} ${themes[theme] || styles.Light}`}
        >
            {children}
        </section>

    );
};

export default Background;