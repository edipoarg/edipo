import styles from './Talleres.module.css';
import talleres from '../../data/talleres.json';

const title = "Talleres";
const subTitle = "Talleres/seminarios dados por EdIPo";
const info = "En esta sección encontrarás un listado de los talleres y seminarios que hemos ofrecido. Cada uno incluye detalles sobre el contenido, fechas, y enlaces a videos y recursos adicionales.";

const Talleres = () => {
    return (
        <div className={styles.talleres}>
            <section className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subTitle}>{subTitle}</h2>
                <p className={styles.info}>{info}</p>
            </section>
            <div className={styles.list}>
                {talleres.map((taller, index) => (
                    <div key={index} className={styles.taller}>
                        <h3 className={styles.name}>{taller.nombre}</h3>
                        <p className={styles.date}><strong>Fecha:</strong> {taller.fecha}</p>
                        {taller.contenido && (
                            <div className={styles.contenido}>
                                <strong>Contenido:</strong>
                                <p>{taller.contenido}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Talleres;
