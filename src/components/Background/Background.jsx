/* eslint-disable react/prop-types */
import styles from './Background.module.css';

const Background = ({ children, theme }) => {
    return (
        <section className={theme === 'dark' ? styles.Dark : styles.Light}>
            {children}
        </section>
    );
};

export default Background;
