import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import styles from "./Recursos.module.css";
import Background from "../Background/Background";

import portadaCuidado from "../../svg/mapa.svg";
import portadaInteligencia from "../../svg/Inteligencia.svg";
import portadaMapa from "../../svg/portadaMapa.svg";


// =========================================
// RECURSOS
// =========================================

const recursos = [
    {
        id: "01",
        tipo: "MANUAL",
        titulo: "Manual de cuidado colectivo y autodefensa digital",
        imagen: portadaCuidado,
        descripcion:
            "Herramientas y estrategias para fortalecer la seguridad digital y los procesos de cuidado colectivo.",
        link: "/recursos/autocuidado",

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
        id: "02",
        tipo: "MANUAL",
        titulo: "Manual de inteligencia abierta",
        imagen: portadaInteligencia,
        descripcion:
            "Metodologías y herramientas para la recolección, el procesamiento y el análisis de información.",
        link: "/recursos/inteligencia_abierta",

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
        id: "03",
        tipo: "GUÍA",
        titulo: "Guía del Mapa de la Policía",
        imagen: portadaMapa,
        descripcion:
            "Guía de consulta para el uso de las herramientas del Mapa de la Policía.",
        link: null,

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


// =========================================
// PATRÓN GRÁFICO 6 X 6
// =========================================

const PatronPixeles = ({ pixeles }) => {

    const valores = pixeles.join("").split("");

    return (

        <div
            className={styles.patronPixeles}
            aria-hidden="true"
        >

            {valores.map((pixel, index) => (

                <span
                    key={index}
                    className={
                        pixel === "1"
                            ? styles.pixelActivo
                            : styles.pixelInactivo
                    }
                />

            ))}

        </div>

    );

};


// =========================================
// PORTADA DEL CUADERNO
// =========================================

const Portada = ({ recurso }) => {

    return (

        <div className={styles.portada}>

            <div className={styles.portadaSuperior}>

                <strong>[EdIPo]</strong>

                <span>
                    {recurso.tipo} / {recurso.id}
                </span>

            </div>


            <div className={styles.ilustracion}>

                <img
                    src={recurso.imagen}
                    alt=""
                    loading="lazy"
                    decoding="async"
                />

            </div>


            <div className={styles.portadaInferior}>

                {recurso.titulo}

            </div>

        </div>

    );

};


// =========================================
// RECURSO EDITORIAL
// =========================================

const Recurso = ({ recurso }) => {

    return (

        <article className={styles.recurso}>

            {/* IDENTIFICACIÓN */}

            <div className={styles.recursoMeta}>

                <span>
                    /// {recurso.tipo}
                </span>

                <span>
                    {recurso.id}
                </span>

            </div>


            {/* SOPORTE EDITORIAL */}

            <div className={styles.escenario}>

                <div
                    className={styles.reticula}
                    aria-hidden="true"
                />


                {/* IDENTIFICADOR GRÁFICO */}

                <div
                    className={styles.identificador}
                    aria-hidden="true"
                >

                    <PatronPixeles
                        pixeles={recurso.pixeles}
                    />

                </div>


                {/* PORTADA CLICKEABLE */}

                {recurso.link ? (

                    <Link
                        to={recurso.link}
                        className={styles.accesoPortada}
                        aria-label={`Consultar ${recurso.titulo}`}
                    >

                        <Portada recurso={recurso} />

                    </Link>

                ) : (

                    <div className={styles.portadaInactiva}>

                        <Portada recurso={recurso} />

                    </div>

                )}


                <span
                    className={styles.marcaPortada}
                    aria-hidden="true"
                >
                    ////
                </span>

            </div>


            {/* INFORMACIÓN */}

            <div className={styles.informacion}>

                <h2 className={styles.item}>

                    {recurso.titulo}

                </h2>

                <p className={styles.descripcion}>

                    {recurso.descripcion}

                </p>

            </div>


            {/* BOTÓN DE ACCESO */}

            <div className={styles.acciones}>

                {recurso.link ? (

                    <Link
                        to={recurso.link}
                        className={styles.boton}
                        aria-label={`Consultar ${recurso.titulo}`}
                    >

                        CONSULTAR {recurso.tipo}

                        <FiArrowRight aria-hidden="true" />

                    </Link>

                ) : (

                    <span className={styles.noDisponible}>

                        GUÍA NO DISPONIBLE

                        <span aria-hidden="true">—</span>

                    </span>

                )}

            </div>

        </article>

    );

};


// =========================================
// PÁGINA PRINCIPAL
// =========================================

const Recursos = () => {

    return (

        <Background>

            <section className={styles.pagina}>

                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div
                        className={styles.puntos}
                        aria-hidden="true"
                    />

                    <div className={styles.identidad}>

                        <span className={styles.etiqueta}>

                            /// BIBLIOTECA DE HERRAMIENTAS

                        </span>

                        <h1 className={styles.titulo}>

                            Recursos

                        </h1>

                        <p className={styles.subtitulo}>

                            Hacer investigación política en el presente
                            tiene desafíos metodológicos sobre la
                            recolección de los datos y su análisis,
                            así como desafíos vinculados a la seguridad
                            de los datos y las personas involucradas
                            en el proceso de investigación.

                        </p>

                    </div>


                    {/* CONTADOR */}

                    <div className={styles.contador}>

                        <strong>

                            {String(recursos.length).padStart(2, "0")}

                        </strong>

                        <span>

                            RECURSOS

                            <br />

                            DE CONSULTA

                        </span>

                    </div>

                </header>


                {/* BIBLIOTECA */}

                <section
                    className={styles.recursos}
                    aria-label="Biblioteca de recursos"
                >

                    {recursos.map(recurso => (

                        <Recurso
                            key={recurso.id}
                            recurso={recurso}
                        />

                    ))}

                </section>


                {/* PIE GRÁFICO */}

                <footer className={styles.cierre}>

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

                        EDIPO / RECURSOS

                    </strong>

                </footer>

            </section>

        </Background>

    );

};

export default Recursos;