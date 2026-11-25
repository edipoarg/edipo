import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
    FiArrowLeft,
    FiArrowRight
} from "react-icons/fi";

import Background from "../Background/Background";

import InvestigacionesList from "./InvestigacionesList.js";

import styles from "./InvestigacionFicha.module.css";


// =========================================
// PATRÓN GRÁFICO
// =========================================

const PatronPixeles = ({ pixeles }) => {

    if (!pixeles) return null;

    const matriz = (
        Array.isArray(pixeles)
            ? pixeles.flat(Infinity)
            : [pixeles]
    ).flatMap(pixel => {

        if (typeof pixel === "string") {

            return pixel
                .replace(/\s/g, "")
                .split("");

        }

        return [pixel];

    });

    return (

        <div
            className={styles.pixeles}
            aria-hidden="true"
        >

            {matriz.map((pixel, i) => (

                <span
                    key={i}
                    className={
                        pixel === 1 ||
                        pixel === "1" ||
                        pixel === true
                            ? styles.pixelNegro
                            : styles.pixelBlanco
                    }
                />

            ))}

        </div>

    );

};


// =========================================
// FICHA DE INVESTIGACIÓN
// =========================================

const InvestigacionFicha = () => {

    const { id } = useParams();

    const indice = InvestigacionesList.findIndex(
        item => String(item.id) === id
    );

    const investigacion = InvestigacionesList[indice];

    const anterior = InvestigacionesList[indice - 1];
    const siguiente = InvestigacionesList[indice + 1];


    // =====================================
    // SCROLL AL CAMBIAR DE INVESTIGACIÓN
    // =====================================

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [id]);


    // =====================================
    // INVESTIGACIÓN NO ENCONTRADA
    // =====================================

    if (!investigacion) {

        return (

            <Background>

                <main className={styles.pagina}>

                    <Link
                        to="/investigaciones"
                        className={styles.volver}
                    >
                        <FiArrowLeft />
                        VOLVER A INVESTIGACIONES
                    </Link>

                    <h1 className={styles.titulo}>
                        Investigación no encontrada
                    </h1>

                </main>

            </Background>

        );

    }


    // =====================================
    // DATOS
    // =====================================

    const {
        titulo,
        tituloCompleto,
        hipotesis,
        descripcion,
        pixeles
    } = investigacion;

    const numero = String(indice + 1).padStart(2, "0");

    const parrafos = Array.isArray(descripcion)
        ? descripcion
        : (descripcion || "")
            .split(/\n\s*\n/)
            .filter(parrafo => parrafo.trim());


    return (

        <Background>

            <main className={styles.pagina}>

                {/* NAVEGACIÓN SUPERIOR */}

                <nav className={styles.navegacion}>

                    <Link
                        to="/investigaciones"
                        className={styles.volver}
                    >

                        <FiArrowLeft />

                        INVESTIGACIONES

                    </Link>

                    <span className={styles.referencia}>

                        EDIPO / INV-{numero}

                    </span>

                </nav>


                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div
                        className={styles.puntos}
                        aria-hidden="true"
                    />

                    <span className={styles.etiqueta}>

                        /// INVESTIGACIÓN POLÍTICA / {numero}

                    </span>

                    <h1 className={styles.titulo}>

                        {titulo}

                    </h1>

                    <p className={styles.bajada}>

                        {tituloCompleto}

                    </p>

                </header>


                {/* CUERPO DE LA INVESTIGACIÓN */}

                <div className={styles.contenedor}>


                    {/* COLUMNA LATERAL */}

                    <aside className={styles.lateral}>


                        {/* EXPEDIENTE */}

                        <div className={styles.indice}>

                            <div className={styles.indiceHeader}>

                                /// EXPEDIENTE

                            </div>

                            <div className={styles.indiceContenido}>

                                <span className={styles.numero}>

                                    {numero}

                                </span>

                                <span className={styles.indiceEtiqueta}>

                                    INVESTIGACIÓN

                                </span>

                                <div className={styles.separador} />


                                {/* PATRÓN DE PÍXELES */}

                                <PatronPixeles pixeles={pixeles} />


                                <div className={styles.separador} />

                                <strong>

                                    EQUIPO DE INVESTIGACIÓN POLÍTICA

                                </strong>

                                <span className={styles.indiceEtiqueta}>

                                    EDIPO

                                </span>

                            </div>

                        </div>


                        {/* NAVEGACIÓN LATERAL */}

                        <div className={styles.otras}>

                            <span className={styles.otrasTitulo}>

                                /// INVESTIGACIONES

                            </span>

                            {InvestigacionesList.map(item => (

                                <Link
                                    key={item.id}
                                    to={`/investigaciones/${item.id}`}
                                    className={
                                        String(item.id) === id
                                            ? styles.enlaceActivo
                                            : styles.enlace
                                    }
                                    aria-current={
                                        String(item.id) === id
                                            ? "page"
                                            : undefined
                                    }
                                >

                                    <span>

                                        {item.titulo}

                                    </span>

                                    <FiArrowRight />

                                </Link>

                            ))}

                        </div>

                    </aside>


                    {/* DOCUMENTO PRINCIPAL */}

                    <article className={styles.documento}>


                        {/* BARRA DE VENTANA */}

                        <div className={styles.barra}>

                            <span>

                                /// DOCUMENTO DE INVESTIGACIÓN

                            </span>

                            <div
                                className={styles.controles}
                                aria-hidden="true"
                            >

                                <span>−</span>
                                <span>□</span>
                                <span>×</span>

                            </div>

                        </div>


                        {/* CONTENIDO */}

                        <div className={styles.documentoContenido}>


                            {/* HIPÓTESIS */}

                            {hipotesis && (

                                <section className={styles.hipotesis}>

                                    <h2 className={styles.seccionTitulo}>

                                        /// HIPÓTESIS

                                    </h2>

                                    <p>

                                        {hipotesis}

                                    </p>

                                </section>

                            )}


                            {/* DESCRIPCIÓN COMPLETA */}

                            <section className={styles.descripcion}>

                                <h2 className={styles.seccionTitulo}>

                                    /// DESCRIPCIÓN

                                </h2>

                                {parrafos.map((parrafo, i) => (

                                    <p key={i}>

                                        {parrafo}

                                    </p>

                                ))}

                            </section>


                            {/* CIERRE DEL DOCUMENTO */}

                            <div className={styles.documentoCierre}>

                                <span>

                                    [EdIPo]

                                </span>

                                <div className={styles.linea} />

                                <span
                                    className={styles.trama}
                                    aria-hidden="true"
                                />

                            </div>

                        </div>

                    </article>

                </div>


                {/* NAVEGACIÓN ENTRE INVESTIGACIONES */}

                <nav
                    className={styles.paginacion}
                    aria-label="Otras investigaciones"
                >

                    {anterior ? (

                        <Link
                            to={`/investigaciones/${anterior.id}`}
                            className={styles.paginaAnterior}
                        >

                            <FiArrowLeft />

                            <div>

                                <span>ANTERIOR</span>

                                <strong>

                                    {anterior.titulo}

                                </strong>

                            </div>

                        </Link>

                    ) : <div />}


                    {siguiente ? (

                        <Link
                            to={`/investigaciones/${siguiente.id}`}
                            className={styles.paginaSiguiente}
                        >

                            <div>

                                <span>SIGUIENTE</span>

                                <strong>

                                    {siguiente.titulo}

                                </strong>

                            </div>

                            <FiArrowRight />

                        </Link>

                    ) : <div />}

                </nav>


                {/* PIE GRÁFICO */}

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
                        className={styles.barras}
                        aria-hidden="true"
                    >

                        /////////

                    </span>

                    <span className={styles.linea} />

                    <strong>

                        EDIPO / INVESTIGACIONES

                    </strong>

                </footer>

            </main>

        </Background>

    );

};

export default InvestigacionFicha;