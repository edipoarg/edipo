import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
    FiMapPin,
    FiZap,
    FiAnchor,
    FiCrosshair,
    FiArrowRight,
    FiChevronLeft,
    FiChevronRight,
    FiShield,
FiSearch,
FiMap
} from "react-icons/fi";

import styles from "./Landing.module.css";
import publicacionesData from "../../data/publicaciones.json";

const proyectos = [
    {
        nombre: "MAPA DE LA POLICÍA",
        ruta: "/mapa",
        color: "#B64EF0",
        Icon: FiMapPin
    },
    {
        nombre: "AHORA",
        ruta: "/ahora",
        color: "#D0F500",
        Icon: FiZap
    },
    {
        nombre: "ÁNCORA",
        ruta: "/ancora",
        color: "#00DCE5",
        Icon: FiAnchor
    },
    {
        nombre: "RADAR",
        ruta: "/radar",
        color: "#0087F0",
        Icon: FiCrosshair
    }
];

const investigaciones = [
    {
        nombre: "Mapa del Comercio",
        descripcion: "Economía, territorio y actores del poder.",
        ruta: "/investigaciones",
        color: "#B64EF0"
    },
    {
        nombre: "Mapa Fiscal",
        descripcion: "Recursos públicos, exenciones y redes.",
        ruta: "/investigaciones",
        color: "#D0F500"
    }
];

const recursos = [
    {
        nombre: "CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL",
        tipo: "MANUAL",
        ruta: "/recursos/autocuidado",
        Icon: FiShield
    },
    {
        nombre: "INTELIGENCIA ABIERTA",
        tipo: "MANUAL",
        ruta: "/recursos/inteligencia_abierta",
        Icon: FiSearch
    },
    {
        nombre: "MAPA DE LA POLICÍA",
        tipo: "GUÍA",
        ruta: null,
        Icon: FiMap
    }
];

// ======================================
// COMPONENTE VENTANA
// ======================================

const Ventana = ({ titulo, className = "", children }) => {
    return (
        <section className={`${styles.ventana} ${className}`}>

            <div className={styles.ventanaBarra}>

                <div className={styles.ventanaTitulo}>
                    <span className={styles.barras}>///</span>
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicaciones, setPublicaciones] = useState([]);

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

    const currentPublicacion = publicaciones[currentIndex];

    const indicadores = Math.min(publicaciones.length, 4);

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
                             Equipo de <mark>investigación política</mark>
                        </h1>

                        <p className={styles.texto}>
                       Ante la pregunta ¿cómo nos defendemos de las violencias contemporáneas? generamos herramientas y recursos para la investigación política, y producimos análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.
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
                                ({ nombre, ruta, color, Icon }) => (

                                    <Link
                                        key={ruta}
                                        to={ruta}
                                        className={styles.proyecto}
                                        style={{ "--acento": color }}
                                    >

                                        <Icon
                                            className={styles.proyectoIcon}
                                        />

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
                                        aria-label={`Publicación ${index + 1}`}
                                        aria-current={
                                            currentIndex % indicadores === index
                                                ? "true"
                                                : undefined
                                        }
                                        onClick={() => setCurrentIndex(index)}
                                        className={
                                            currentIndex % indicadores === index
                                                ? styles.indicadorActivo
                                                : styles.indicador
                                        }
                                    />

                                )
                            )}

                        </div>

                    </Ventana>

                    {/* INVESTIGACIONES */}

                    <Ventana
                        titulo="INVESTIGACIONES"
                        className={styles.investigaciones}
                    >

                        <div className={styles.investigacionesList}>

                            {investigaciones.map(item => (

                                <Link
                                    key={item.nombre}
                                    to={item.ruta}
                                    className={styles.investigacion}
                                    style={{
                                        "--acento": item.color
                                    }}
                                >

                                    <div className={styles.mapaMiniatura} />

                                    <div className={styles.investigacionInfo}>

                                        <h3>{item.nombre}</h3>

                                        <p>{item.descripcion}</p>

                                    </div>

                                    <FiArrowRight
                                        className={styles.investigacionFlecha}
                                    />

                                </Link>

                            ))}

                        </div>

                    </Ventana>

                 {/* RECURSOS */}

<Ventana
    titulo="RECURSOS"
    className={styles.recursos}
>

    <div className={styles.recursosGrid}>

        {recursos.map(({ nombre, tipo, ruta, Icon }) => {

            const contenido = (
                <>
                    <div className={styles.recursoIcon}>
                        <Icon />
                    </div>

                    <div className={styles.recursoInfo}>
                        <span>{tipo}</span>
                        <h3>{nombre}</h3>
                    </div>
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
                    className={styles.recurso}
                >
                    {contenido}
                </div>

            );

        })}

        <Link
            to="/recursos"
            className={`${styles.recurso} ${styles.todosRecursos}`}
        >

            <div className={styles.recursoIcon}>
                <FiArrowRight />
            </div>

            <div className={styles.recursoInfo}>
                <span>ARCHIVO</span>
                <h3>TODOS LOS RECURSOS</h3>
            </div>

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

                    <span>-34.6037 / -58.3816</span>

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