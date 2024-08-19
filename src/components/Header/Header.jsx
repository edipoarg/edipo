import styles from './Header.module.css';

const Header = ({ title, title2, subTitle, theme = 'solid' }) => {
    return (
        <section className={`${styles.header} ${styles[theme]}`}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {title2 && <h1 className={styles.title2}>{title2}</h1>}
            {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
        </section>
    );
};

export default Header;
