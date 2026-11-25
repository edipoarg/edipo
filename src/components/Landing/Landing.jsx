import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
    FiArrowRight,
    FiChevronLeft,
    FiChevronRight
} from "react-icons/fi";

import LogoAhora from "../../svg/LogoAhora.svg";
import LogoAncora from "../../svg/LogoAncora.svg";
import LogoMapa from "../../svg/LogoMapa.svg";
import LogoRadar from "../../svg/LogoRadar.svg";

import InvestigacionesList from "../Investigaciones/InvestigacionesList.js";

import styles from "./Landing.module.css";
import publicacionesData from "../../data/publicaciones.json";


// ======================================
// PROYECTOS TECNOPOLÍTICOS
// ======================================

const proyectosData = [
    {
        nombre: "MAPA DE LA POLICÍA",
        ruta: "/tecnopoliticas/proyectos/mapa",
        color: "#B64EF0",
        logo: LogoMapa
    },
    {
        nombre: "AHORA",
        ruta: "/tecnopoliticas/proyectos/ahora",
        color: "#D0F500",
        logo: LogoAhora
    },
    {
        nombre: "ÁNCORA",
        ruta: "/tecnopoliticas/proyectos/ancora",
        color: "#00DCE5",
        logo: LogoAncora
    },
    {
        nombre: "RADAR",
        ruta: "/tecnopoliticas/proyectos/radar",
        color: "#0087F0",
        logo: LogoRadar
    }
];


// ======================================
// RECURSOS
// ======================================

const recursos = [
    {
        nombre: "CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL",
        tipo: "MANUAL",
        ruta: "/recursos/autocuidado",
        pixeles: [
            "101001",
            "001010",
            "110001",
            "000100",
            "101010",
            "010011"
        ]
    },
    {
        nombre: "INTELIGENCIA ABIERTA",
        tipo: "MANUAL",
        ruta: "/recursos/inteligencia_abierta",
        pixeles: [
            "010110",
            "100001",
            "001010",
            "101100",
            "010001",
            "100100"
        ]
    },
    {
        nombre: "MAPA DE LA POLICÍA",
        tipo: "GUÍA",
        ruta: null,
        pixeles: [
            "100010",
            "011001",
            "000100",
            "110010",
            "001001",
            "010110"
        ]
    }
];


// ======================================
// ORDEN ALEATORIO
// ======================================

const mezclarProyectos = (datos) => {

    const lista = [...datos];

    for (let i = lista.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [lista[i], lista[j]] = [lista[j], lista[i]];

    }

    return lista;
};


// ======================================
// PATRONES DE PÍXELES
// ======================================

const PatronPixeles = ({
    pixeles = [],
    columnas = 3,
    className = ""
}) => {

    const valores = (
        Array.isArray(pixeles)
            ? pixeles.flat(Infinity)
            : [pixeles]
    ).flatMap(valor => {

        if (typeof valor === "string") {

            return valor
                .replace(/\s/g, "")
                .split("");

        }

        return [valor];

    });

    return (

        <div
            className={`${styles.patronPixeles} ${className}`}
            style={{ "--columnas": columnas }}
            aria-hidden="true"
        >

            {valores.map((valor, index) => (

                <span
                    key={index}
                    className={
                        valor === 1 ||
                        valor === "1" ||
                        valor === true
                            ? styles.pixelActivo
                            : styles.pixelInactivo
                    }
                />

            ))}

        </div>

    );
};


// ======================================
// COMPONENTE VENTANA
// ======================================

const Ventana = ({
    titulo,
    className = "",
    children
}) => {

    return (

        <section
            className={`${styles.ventana} ${className}`}
        >

            <div className={styles.ventanaBarra}>

                <div className={styles.ventanaTitulo}>

                    <span className={styles.barras}>
                        ///
                    </span>

                    <h2>{titulo}</h2>

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

            <div className={styles.ventanaContenido}>

                {children}

            </div>

        </section>

    );

};


// ======================================
// LANDING
// ======================================

const Landing = () => {

    const [proyectos] = useState(
        () => mezclarProyectos(proyectosData)
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    const [publicaciones, setPublicaciones] = useState([]);


    // ==================================
    // CARGAR PUBLICACIONES
    // ==================================

    useEffect(() => {

        const publicacionesArray =
            Object.values(publicacionesData).flat();

        publicacionesArray.sort((a, b) => {

            const dateA = a.anio
                .split("/")
                .reverse()
                .join("-");

            const dateB = b.anio
                .split("/")
                .reverse()
                .join("-");

            return new Date(dateB) - new Date(dateA);

        });

        setPublicaciones(publicacionesArray);

    }, []);


    const handlePrevious = () => {

        if (!publicaciones.length) return;

        setCurrentIndex(prev =>
            (prev - 1 + publicaciones.length)
            % publicaciones.length
        );

    };


    const handleNext = () => {

        if (!publicaciones.length) return;

        setCurrentIndex(prev =>
            (prev + 1) % publicaciones.length
        );

    };


    const currentPublicacion =
        publicaciones[currentIndex];

    const indicadores =
        Math.min(publicaciones.length, 4);


    return (

        <div className={styles.pagina}>

            <main className={styles.landing}>


                {/* =========================
                    SECCIÓN SUPERIOR
                ========================= */}

                <div className={styles.superior}>


                    {/* PRESENTACIÓN */}

                    <section className={styles.header}>

                        <span className={styles.headerBarras}>
                            ///
                        </span>

                        <h1 className={styles.tituloPrincipal}>

                            Equipo de{" "}
                            <mark>investigación política</mark>

                        </h1>

                        <p className={styles.texto}>

                            Ante la pregunta ¿cómo nos defendemos
                            de las violencias contemporáneas?
                            generamos herramientas y recursos para
                            la investigación política, y producimos
                            análisis que enriquezcan el debate
                            público y fortalezcan las respuestas
                            comunitarias.

                        </p>

                        <Link
                            to="/equipo"
                            className={styles.conocer}
                        >

                            <FiArrowRight />

                            CONOCÉ MÁS SOBRE EDIPO

                        </Link>

                    </section>


                    {/* PROYECTOS TECNOPOLÍTICOS */}

                    <Ventana
                        titulo="PROYECTOS TECNOPOLÍTICOS"
                        className={styles.proyectos}
                    >

                        <div className={styles.proyectosGrid}>

                            {proyectos.map(
                                ({ nombre, ruta, color, logo }) => (

                                    <Link
                                        key={ruta}
                                        to={ruta}
                                        className={styles.proyecto}
                                        data-proyecto={
                                            ruta.split("/").pop()
                                        }
                                        style={{
                                            "--acento": color
                                        }}
                                    >

                                        <div
                                            className={styles.proyectoLogo}
                                        >

                                            <img
                                                src={logo}
                                                alt=""
                                                className={styles.proyectoIcon}
                                                decoding="async"
                                            />

                                        </div>

                                        <h3>{nombre}</h3>

                                        <div
                                            className={styles.proyectoColor}
                                        />

                                        <FiArrowRight
                                            className={styles.proyectoFlecha}
                                        />

                                    </Link>

                                )
                            )}

                        </div>

                    </Ventana>

                </div>


                {/* =========================
                    SECCIÓN INFERIOR
                ========================= */}

                <div className={styles.inferior}>


                    {/* PUBLICACIONES */}

                    <Ventana
                        titulo="PUBLICACIONES"
                        className={styles.publicaciones}
                    >

                        {currentPublicacion ? (

                            <div className={styles.newsContainer}>

                                <button
                                    onClick={handlePrevious}
                                    className={styles.botonNews}
                                    aria-label="Publicación anterior"
                                >

                                    <FiChevronLeft />

                                </button>


                                <div className={styles.newsData}>

                                    <time className={styles.newsFecha}>

                                        {currentPublicacion.anio}

                                    </time>

                                    <h3 className={styles.newsTitle}>

                                        {currentPublicacion.titulo}

                                    </h3>

                                    <Link
                                        to={currentPublicacion.link}
                                        className={styles.leer}
                                    >

                                        LEER

                                        <FiArrowRight />

                                    </Link>

                                </div>


                                <button
                                    onClick={handleNext}
                                    className={styles.botonNews}
                                    aria-label="Publicación siguiente"
                                >

                                    <FiChevronRight />

                                </button>

                            </div>

                        ) : (

                            <p>No hay publicaciones disponibles.</p>

                        )}


                        <div className={styles.indicadores}>

                            {Array.from(
                                { length: indicadores },
                                (_, index) => (

                                    <button
                                        key={index}
                                        aria-label={
                                            `Publicación ${index + 1}`
                                        }
                                        aria-current={
                                            currentIndex === index
                                                ? "true"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setCurrentIndex(index)
                                        }
                                        className={
                                            currentIndex === index
                                                ? styles.indicadorActivo
                                                : styles.indicador
                                        }
                                    />

                                )
                            )}

                        </div>


                        <Link
                            to="/publicaciones"
                            className={styles.todasPublicaciones}
                        >

                            <span>
                                /// TODAS LAS PUBLICACIONES
                            </span>

                            <FiArrowRight />

                        </Link>

                    </Ventana>


                 {/* INVESTIGACIONES */}

<Ventana
    titulo="INVESTIGACIONES"
    className={styles.investigaciones}
>

    <div className={styles.investigacionesList}>

        {InvestigacionesList.map(item => {

            const palabras = item.titulo.trim().split(/\s+/);

            const primeraPalabra = palabras[0];

            const restoTitulo = palabras.slice(1).join(" ");

            return (

                <Link
                    key={item.id}
                    to={`/investigaciones/${item.id}`}
                    className={styles.investigacion}
                >

                    <div className={styles.investigacionPatron}>

                        <PatronPixeles
                            pixeles={item.pixeles}
                            columnas={3}
                        />

                    </div>

                    <div className={styles.investigacionInfo}>

                        <h3>

                            <span className={styles.investigacionTituloPrimero}>
                                {primeraPalabra}
                            </span>

                            <span className={styles.investigacionTituloSegundo}>
                                {restoTitulo}
                            </span>

                        </h3>

                    </div>

                    <FiArrowRight
                        className={styles.investigacionFlecha}
                    />

                </Link>

            );

        })}

    </div>

    <Link
        to="/investigaciones"
        className={styles.todasInvestigaciones}
    >

        <span>
            /// TODAS LAS INVESTIGACIONES
        </span>

        <FiArrowRight />

    </Link>

</Ventana>


                    {/* RECURSOS */}

                    <Ventana
                        titulo="RECURSOS"
                        className={styles.recursos}
                    >

                        <div className={styles.recursosList}>

                            {recursos.map(
                                ({ nombre, tipo, ruta, pixeles }) => {

                                    const contenido = (

                                        <>

                                            <div
                                                className={
                                                    styles.recursoPatron
                                                }
                                            >

                                                <PatronPixeles
                                                    pixeles={pixeles}
                                                    columnas={6}
                                                />

                                            </div>


                                            <div
                                                className={
                                                    styles.recursoInfo
                                                }
                                            >

                                                <span>{tipo}</span>

                                                <h3>{nombre}</h3>

                                            </div>


                                            {ruta ? (

                                                <FiArrowRight
                                                    className={
                                                        styles.recursoFlecha
                                                    }
                                                />

                                            ) : (

                                                <span
                                                    className={
                                                        styles.proximamente
                                                    }
                                                >

                                                    PRÓX.

                                                </span>

                                            )}

                                        </>

                                    );


                                    return ruta ? (

                                        <Link
                                            key={nombre}
                                            to={ruta}
                                            className={styles.recurso}
                                        >

                                            {contenido}

                                        </Link>

                                    ) : (

                                        <div
                                            key={nombre}
                                            className={
                                                `${styles.recurso} ${styles.recursoInactivo}`
                                            }
                                        >

                                            {contenido}

                                        </div>

                                    );

                                }
                            )}

                        </div>


                        <div className={styles.recursosPie}>

                            <Link
                                to="/recursos"
                                className={styles.todosRecursos}
                            >

                                <span>

                                    TODOS LOS

                                    <br />

                                    RECURSOS

                                </span>

                                <FiArrowRight />

                            </Link>

                        </div>

                    </Ventana>

                </div>


                {/* =========================
                    PIE DE PÁGINA
                ========================= */}

                <footer className={styles.footer}>

                    <span className={styles.cuadrado} />

                    <span className={styles.footerLinea} />

                    <span>
                        Equipo de investigación Política
                    </span>

                    <span className={styles.footerLinea} />

                    <span className={styles.footerBarras}>
                        //////////
                    </span>

                    <span className={styles.footerLinea} />

                    <span>
                        EDIPO / {new Date().getFullYear()}
                    </span>

                </footer>

            </main>

        </div>

    );

};

export default Landing;