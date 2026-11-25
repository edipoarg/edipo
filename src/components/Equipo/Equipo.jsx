import styles from './Equipo.module.css';
import Background from '../Background/Background';

const tituloPrincipal = "EdIPo";
const subtituloPrincipal = "Equipo de Investigación Política";

const historiaDescripcion = "Surgió en 2018 como un organismo de derechos humanos de nuevo tipo, para continuar el legado de los movimientos que impulsaron la construcción de Memoria, Verdad y Justicia en Argentina a partir de la última dictadura cívico-militar (1976-1983).";

const misionDescripciones = [
    "El Equipo de Investigación Política de la Revista Crisis es un colectivo que explora estrategias innovadoras para la defensa de los derechos humanos a través del desarrollo de plataformas tecnológicas de participación ciudadana bajo las premisas de democratización de información y construcción colaborativa de conocimiento.",
    "Ante el desafío cada vez más urgente de ¿qué hacer ante las violencias contemporáneas?, EdIPo genera herramientas, información y análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.",
    "Ya sea tirando del hilo hacia análisis en profundidad o a través de radiografías más extensas como mapas de poderes, la Investigación Política asume la información como territorio de disputa para dar nombre a una experimentación abierta e interdisciplinaria.",
    "Desarrolla capacidades colectivas y conectivas de investigación, de nombrar, atestiguar y denunciar violencias, de defenderse mediante procesos de construcción social de evidencia, monitoreo colaborativo y construcción de registros independientes para fomentar miradas críticas, narrativas alternativas e intervenciones estratégicas."
];

const internacionalDescripcion = "Trabajamos a la par con organizaciones sociales de DDHH y movimientos sociales, como el CELS, Tactical Tech, Correpi, Avci, MTE, Maghweb, Us and Them, Amiga Joven, Movimiento por la Paz ";


/* =====================================
   VENTANA EDITORIAL
===================================== */

const Ventana = ({
    numero,
    titulo,
    children,
    className = ''
}) => {

    return (

        <article className={`${styles.ventana} ${className}`}>

            <div className={styles.ventanaBarra}>

                <h2 className={styles.ventanaTitulo}>
                    <span className={styles.barras}>///</span>
                    <span>{numero} — {titulo}</span>
                </h2>

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

        </article>

    );

};


/* =====================================
   EQUIPO
===================================== */

const Equipo = () => {

    return (

        <Background theme="light">

            <main className={styles.equipo}>

                {/* IDENTIDAD INSTITUCIONAL */}

                <header className={styles.encabezado}>

                    <div className={styles.identidad}>

                        <div className={styles.etiqueta}>
                            /// INSTITUCIONAL / EQUIPO
                        </div>

                        <h1 className={styles.titulo}>
                            {tituloPrincipal}
                        </h1>

                        <p className={styles.subtitulo}>
                            {subtituloPrincipal}
                        </p>

                    </div>

                    <div className={styles.fundacion}>

                        <span>DESDE</span>

                        <strong>2018</strong>

                        <span>ARGENTINA</span>

                    </div>

                </header>


                {/* CONTENIDO PRINCIPAL */}

                <section className={styles.contenido}>

                    {/* MISIÓN */}

                    <Ventana
                        numero="01"
                        titulo="MISIÓN"
                        className={styles.mision}
                    >

                        {misionDescripciones.map((desc, index) => (

                            <p
                                key={index}
                                className={
                                    index === 0
                                        ? styles.introduccion
                                        : styles.parrafo
                                }
                            >
                                {desc}
                            </p>

                        ))}

                    </Ventana>


                    {/* COLUMNA SECUNDARIA */}

                    <aside className={styles.columna}>

                        {/* HISTORIA */}

                        <Ventana
                            numero="02"
                            titulo="HISTORIA"
                            className={styles.historia}
                        >

                            <div className={styles.fechaHistoria}>

                                <strong>2018</strong>

                                <div className={styles.lineaFecha} />

                            </div>

                            <p className={styles.parrafo}>
                                {historiaDescripcion}
                            </p>

                        </Ventana>


                        {/* ARTICULACIONES */}

                        <Ventana
                            numero="03"
                            titulo="ARTICULACIONES"
                            className={styles.internacional}
                        >

                            <p className={styles.parrafo}>
                                {internacionalDescripcion}
                            </p>

                        </Ventana>

                    </aside>

                </section>


                {/* CIERRE GRÁFICO */}

                <div className={styles.cierre}>

                    <span>EDIPO / INSTITUCIONAL</span>

                    <div className={styles.lineaCierre} />

                    <span>///</span>

                </div>

            </main>

        </Background>

    );

};

export default Equipo;