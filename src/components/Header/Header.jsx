import styles from './Header.module.css';

const Header = ({
    title,
    title2,
    subTitle,
    theme = 'solid'
}) => {

    return (

        <section
            className={`${styles.header} ${styles[theme] || styles.solid}`}
        >

            <div className={styles.barras}>
                ///
            </div>

            <div className={styles.titulos}>

                {title && (
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                )}

                {title2 && (
                    <h2 className={styles.title2}>
                        {title2}
                    </h2>
                )}

            </div>

            {subTitle && (
                <p className={styles.subTitle}>
                    {subTitle}
                </p>
            )}

        </section>

    );
};

export default Header;