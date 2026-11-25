import styles from './Talleres.module.css';
import talleres from '../../data/talleres.json';
import Background from '../Background/Background';

const title = "Talleres / seminarios";
const title2 = "dados por [EdIPo]";

const subTitle =
    "En esta sección encontrarás un listado de los talleres y seminarios que hemos ofrecido.";


// ========================================
// MARCA GRÁFICA
// ========================================

const MarcaPixeles = () => {
    return (
        <div
            className={styles.marcaPixeles}
            aria-hidden="true"
        >
            <span />
            <span />
        </div>
    );
};


// ========================================
// TICKET
// ========================================

const Taller = ({ taller, index }) => {

    const numero = String(index + 1).padStart(3, '0');

    const descripcion = taller.contenido?.trim() || '';

    const tieneDescripcion = descripcion.length > 0;

    return (

        <article className={styles.taller}>

            <div
                className={styles.barraLateral}
                aria-hidden="true"
            />

            {/* TALÓN */}

            <div className={styles.talon}>

                <div className={styles.talonDatos}>

                    <div className={styles.identificador}>
                        /// TALLER
                    </div>

                    <div className={styles.talonLinea} />

                    <div className={styles.registro}>
                        REG. / {numero}
                    </div>

                    {taller.fecha && (
                        <div className={styles.date}>
                            {taller.fecha}
                        </div>
                    )}

                </div>

                <div className={styles.logo}>
                    [EdIPo]
                </div>

            </div>

            {/* TROQUEL */}

            <div
                className={styles.troquel}
                aria-hidden="true"
            >

                <span className={styles.muescaSuperior} />

                <span className={styles.lineaTroquel} />

                <span className={styles.muescaInferior} />

            </div>

            {/* CONTENIDO */}

            <div
                className={`${styles.cuerpo} ${
                    !tieneDescripcion
                        ? styles.sinDescripcion
                        : ''
                }`}
            >

                <h2 className={styles.name}>
                    {taller.nombre}
                </h2>

                {tieneDescripcion && (

                    <div className={styles.contenido}>

                        <p>{descripcion}</p>

                    </div>

                )}

                <div className={styles.firma}>
                    <MarcaPixeles />
                </div>

            </div>

        </article>

    );
};


// ========================================
// PÁGINA
// ========================================

const Talleres = () => {

    return (

        <Background theme="light">

            <main className={styles.talleres}>

                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div className={styles.etiqueta}>
                        /// FORMACIÓN / ARCHIVO
                    </div>

                    <div className={styles.marcaHeader}>
                        <MarcaPixeles />
                    </div>

                    <h1 className={styles.title}>
                        {title}
                    </h1>

                    <h2 className={styles.title2}>
                        {title2}
                    </h2>

                    <div className={styles.sticker}>

                        <p className={styles.subTitle}>
                            {subTitle}
                        </p>

                    </div>

                </header>

                {/* REGISTRO */}

                <div className={styles.archivo}>

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

                    <section
                        className={styles.list}
                        aria-label="Listado de talleres y seminarios"
                    >

                        {talleres.map((taller, index) => (

                            <Taller
                                key={index}
                                taller={taller}
                                index={index}
                            />

                        ))}

                    </section>

                    {/* CIERRE */}

                    <footer className={styles.cierre}>

                        <span>
                            [EdIPo] / ARCHIVO DE FORMACIÓN
                        </span>

                        <div className={styles.linea} />

                        <span>///</span>

                    </footer>

                </div>

            </main>

        </Background>

    );
};

export default Talleres;