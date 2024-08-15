import styles from './Talleres.module.css';
import talleres from '../../data/talleres.json';

const title = "Talleres / seminarios";
const title2 = "dados por EdIPo";
const subTitle = "En esta sección encontrarás un listado de los talleres y seminarios que hemos ofrecido.";

// Función para determinar la clase del color
const getColorClass = (color) => {
    switch (color) {
        case 'white':
            return styles.white;
        case 'black':
            return styles.black;
        case 'yellowgreen':
            return styles.yellowgreen;
        case 'blue':
            return styles.blue;
        default:
            return ''; // Por defecto no aplicar clase
    }
};

const Talleres = () => {
    return (
        <section className={styles.background}>
            <div className={styles.talleres}>
                <section className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    <h1 className={styles.title2}>{title2}</h1>
                    <h2 className={styles.subTitle}>{subTitle}</h2>
                </section>
                <div className={styles.list}>
                    {talleres.map((taller, index) => (
                        <div
                            key={index}
                            className={`${styles.taller} ${getColorClass(taller.color)}`}
                        >
                            <h3 className={styles.name}>{taller.nombre}</h3>
                            <p className={styles.date}>{taller.fecha}</p>
                            {taller.contenido && (
                                <div className={styles.contenido}>
                                    <p>{taller.contenido}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Talleres;
