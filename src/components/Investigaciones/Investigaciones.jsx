import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../Background/Background';
import InvestigacionesList from './InvestigacionesList.js';

import styles from './Investigaciones.module.css';


// =========================================
// FRAGMENTOS DE TEXTO
// =========================================

const resumirTexto = (texto = '', limite) => {

    if (texto.length <= limite) {
        return texto;
    }

    const fragmento = texto.slice(0, limite);
    const ultimoEspacio = fragmento.lastIndexOf(' ');

    return (
        ultimoEspacio > 0
            ? fragmento.slice(0, ultimoEspacio)
            : fragmento
    ) + '…';

};


// =========================================
// IDENTIFICACIÓN GRÁFICA
// =========================================

const Pixeles = ({ patron }) => (

    <div
        className={styles.pixeles}
        aria-hidden="true"
    >

        {patron.join('').split('').map((pixel, index) => (

            <span
                key={index}
                className={
                    pixel === '1'
                        ? styles.pixelNegro
                        : styles.pixelBlanco
                }
            />

        ))}

    </div>

);


// =========================================
// TARJETA DE INVESTIGACIÓN
// =========================================

const TarjetaInvestigacion = ({ investigacion }) => {

    const {
        id,
        titulo,
        hipotesis,
        descripcion,
        pixeles
    } = investigacion;

    return (

        <article className={styles.ficha}>

            {/* BARRA SUPERIOR */}

            <header className={styles.fichaHeader}>

                <span
                    className={styles.barras}
                    aria-hidden="true"
                >
                    ///
                </span>

                <h2>{titulo}</h2>

                <div
                    className={styles.controles}
                    aria-hidden="true"
                >
                    <span>−</span>
                    <span>□</span>
                    <span>×</span>
                </div>

            </header>


            {/* CONTENIDO DE LA VENTANA */}

            <div className={styles.fichaContenido}>

                {/* IDENTIFICACIÓN DE PÍXELES */}

                <div className={styles.codigo}>

                    <Pixeles patron={pixeles} />

                </div>


                {/* INFORMACIÓN BREVE */}

                <div className={styles.informacion}>

                    <div className={styles.hipotesis}>

                        <h3>HIPÓTESIS ///</h3>

                        <p>
                            {resumirTexto(hipotesis, 140)}
                        </p>

                    </div>

                    <div className={styles.descripcion}>

                        <h3>DESCRIPCIÓN ///</h3>

                        <p>
                            {resumirTexto(descripcion, 120)}
                        </p>

                    </div>

                </div>


                {/* ACCESO A LA INVESTIGACIÓN */}

                <div className={styles.acciones}>

                    <Link
                        to={`/investigaciones/${id}`}
                        className={styles.boton}
                        aria-label={`Ver investigación: ${titulo}`}
                    >

                        <span
                            className={styles.flecha}
                            aria-hidden="true"
                        >
                            →
                        </span>

                        <span>
                            VER{' '}
                            <br />
                            INVESTIGACIÓN
                        </span>

                    </Link>

                    <div
                        className={styles.trama}
                        aria-hidden="true"
                    />

                </div>

            </div>

        </article>

    );

};


// =========================================
// INVESTIGACIONES
// =========================================

const Investigaciones = () => {

    return (

        <Background>

            <section className={styles.investigaciones}>

                <div className={styles.contenedor}>

                    {/* =========================
                        COLUMNA IZQUIERDA
                    ========================= */}

                    <aside className={styles.introduccion}>

                        <span
                            className={styles.marca}
                            aria-hidden="true"
                        >
                            ///
                        </span>

                        <h1>Investigaciones</h1>


                        {/* BAJADA DESTACADA */}

                        <h2 className={styles.bajada}>

                            <mark>
                                Procesos, actores{' '}
                                <br />
                                y estructuras{' '}
                                <br />
                                del poder.
                            </mark>

                        </h2>


                        {/* TEXTO INTRODUCTORIO */}

                        <p className={styles.textoIntro}>

                            Investigaciones políticas sobre cómo
                            se organizan, operan y sostienen los
                            poderes en el territorio.

                        </p>


                        {/* METODOLOGÍA */}

                        <Link
                            to="/investigaciones/metodologia"
                            className={styles.botonMetodologia}
                        >

                            <span aria-hidden="true">
                                →
                            </span>

                            METODOLOGÍA

                        </Link>

                    </aside>


                    {/* =========================
                        COLUMNA DERECHA
                    ========================= */}

                    <section
                        className={styles.fichas}
                        aria-label="Líneas de investigación"
                    >

                        {InvestigacionesList.map(investigacion => (

                            <TarjetaInvestigacion
                                key={investigacion.id}
                                investigacion={investigacion}
                            />

                        ))}

                    </section>

                </div>


                {/* =========================
                    PIE GRÁFICO
                ========================= */}

                <footer className={styles.footer}>

                    <span
                        className={styles.cuadrado}
                        aria-hidden="true"
                    />

                    <span>
                        Equipo de investigación Política
                    </span>

                    <span className={styles.linea} />

                    <span
                        className={styles.footerBarras}
                        aria-hidden="true"
                    >
                        /////////
                    </span>

                    <span className={styles.linea} />

                    <strong>
                        EDIPO / INVESTIGACIONES
                    </strong>

                </footer>

            </section>

        </Background>

    );

};

export default Investigaciones;