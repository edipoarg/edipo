import styles from './Talleres.module.css';
import talleres from '../../data/talleres.json';
import Background from '../Background/Background';

const title = "Talleres / seminarios";
const title2 = "dados por EdIPo";

const subTitle = "En esta sección encontrarás un listado de los talleres y seminarios que hemos ofrecido.";

const getColorClass = (color) => {

    const colores = {
        white: styles.white,
        black: styles.black,
        yellowgreen: styles.yellowgreen,
        blue: styles.blue
    };

    return colores[color] || styles.white;
};


/* =====================================
   FICHA DE TALLER
===================================== */

const Taller = ({ taller, index }) => {

    const numero = String(index + 1).padStart(2, '0');

    return (

        <article
            className={`${styles.taller} ${getColorClass(taller.color)}`}
        >

            <div className={styles.barra}>

                <div className={styles.identificador}>
                    <span className={styles.barras}>///</span>
                    <span>TALLER / {numero}</span>
                </div>

                <div
                    className={styles.controles}
                    aria-hidden="true"
                >
                    <span>−</span>
                    <span>□</span>
                    <span>×</span>
                </div>

            </div>

            <div className={styles.cuerpo}>

                {taller.fecha && (
                    <div className={styles.date}>
                        {taller.fecha}
                    </div>
                )}

                <h2 className={styles.name}>
                    {taller.nombre}
                </h2>

                {taller.contenido && (

                    <div className={styles.contenido}>

                        <p>
                            {taller.contenido}
                        </p>

                    </div>

                )}

            </div>

        </article>

    );

};


/* =====================================
   PÁGINA TALLERES
===================================== */

const Talleres = () => {

    return (

        <Background theme="light">

            <main className={styles.talleres}>

                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div className={styles.etiqueta}>
                        /// FORMACIÓN / ARCHIVO
                    </div>

                    <h1 className={styles.title}>
                        {title}
                    </h1>

                    <h2 className={styles.title2}>
                        {title2}
                    </h2>

                    <p className={styles.subTitle}>
                        {subTitle}
                    </p>

                </header>


                {/* CABECERA DEL ARCHIVO */}

                <div className={styles.archivoBarra}>

                    <h2>
                        /// REGISTRO DE ACTIVIDADES
                    </h2>

                    <span className={styles.cantidad}>
                        {String(talleres.length).padStart(2, '0')}
                        {' '}REGISTROS
                    </span>

                </div>


                {/* LISTADO */}

                <section className={styles.list}>

                    {talleres.map((taller, index) => (

                        <Taller
                            key={index}
                            taller={taller}
                            index={index}
                        />

                    ))}

                </section>


                {/* CIERRE */}

                <div className={styles.cierre}>

                    <span>EDIPO / FORMACIÓN</span>

                    <div className={styles.linea} />

                    <span>///</span>

                </div>

            </main>

        </Background>

    );

};

export default Talleres;