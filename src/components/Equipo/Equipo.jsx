import styles from './Equipo.module.css';
import Background from '../Background/Background';


// =====================================
// CONTENIDO INSTITUCIONAL
// =====================================

const tituloPrincipal = "[EdIPo]";

const subtituloPrincipal =
    "Equipo de Investigación Política";

const historiaDescripcion =
    "Surgió en 2018 como un organismo de derechos humanos de nuevo tipo, para continuar el legado de los movimientos que impulsaron la construcción de Memoria, Verdad y Justicia en Argentina a partir de la última dictadura cívico-militar (1976-1983).";

const misionDescripciones = [
    "El Equipo de Investigación Política de la Revista Crisis es un colectivo que explora estrategias innovadoras para la defensa de los derechos humanos a través del desarrollo de plataformas tecnológicas de participación ciudadana bajo las premisas de democratización de información y construcción colaborativa de conocimiento.",

    "Ante el desafío cada vez más urgente de ¿qué hacer ante las violencias contemporáneas?, EdIPo genera herramientas, información y análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.",

    "Ya sea tirando del hilo hacia análisis en profundidad o a través de radiografías más extensas como mapas de poderes, la Investigación Política asume la información como territorio de disputa para dar nombre a una experimentación abierta e interdisciplinaria.",

    "Desarrolla capacidades colectivas y conectivas de investigación, de nombrar, atestiguar y denunciar violencias, de defenderse mediante procesos de construcción social de evidencia, monitoreo colaborativo y construcción de registros independientes para fomentar miradas críticas, narrativas alternativas e intervenciones estratégicas."
];

const internacionalDescripcion =
    "Trabajamos a la par con organizaciones sociales de DDHH y movimientos sociales, como el CELS, Tactical Tech, Correpi, Avci, MTE, Maghweb, Us and Them, Amiga Joven, Movimiento por la Paz";


// =====================================
// GENERADOR DE PATRONES DIGITALES
// =====================================

const generarPatron = (
    columnas,
    filas,
    semilla
) => {

    return Array.from(
        { length: columnas * filas },
        (_, index) => {

            const x = index % columnas;
            const y = Math.floor(index / columnas);

            const ruido =
                Math.sin(
                    (x + 1) * 127.1 +
                    (y + 1) * 311.7 +
                    semilla * 74.7
                ) * 43758.5453;

            const valor =
                ruido - Math.floor(ruido);

            const densidad =
                0.48 + 0.19 * Math.sin(x * 0.38);

            return valor > densidad;

        }
    );

};


// =====================================
// PATRONES FIJOS
// =====================================

const patronSuperior =
    generarPatron(120, 5, 12);

const patronInferior =
    generarPatron(24, 3, 37);


// =====================================
// GUARDA DIGITAL
// =====================================

const Guarda = ({
    patron,
    columnas,
    filas,
    className = ''
}) => {

    return (

        <div
            className={`${styles.guarda} ${className}`}
            aria-hidden="true"
            style={{
                '--columnas': columnas,
                '--filas': filas
            }}
        >

            {patron.map((activo, index) => (

                <span
                    key={index}
                    className={
                        activo
                            ? styles.pixelActivo
                            : styles.pixelInactivo
                    }
                />

            ))}

        </div>

    );

};


// =====================================
// TÍTULO EDITORIAL
// =====================================

const TituloSeccion = ({
    numero,
    titulo
}) => (

    <h2 className={styles.tituloSeccion}>

        <span>{numero}</span>

        <span>/</span>

        <span>{titulo}</span>

    </h2>

);


// =====================================
// EQUIPO
// =====================================

const Equipo = () => {

    return (

        <Background theme="light">

            <main className={styles.equipo}>

                <article className={styles.ficha}>

                    {/* GUARDA SUPERIOR */}

                    <Guarda
                        patron={patronSuperior}
                        columnas={120}
                        filas={5}
                        className={styles.guardaSuperior}
                    />


                    {/* REGISTRO DOCUMENTAL */}

                    <div className={styles.registro}>

                        <span>
                            /// INSTITUCIONAL / EQUIPO
                        </span>

                        <span>
                            FICHA 001 — ARGENTINA
                        </span>

                    </div>


                    {/* IDENTIDAD INSTITUCIONAL */}

                    <header className={styles.encabezado}>

                        <div className={styles.identidad}>

                            <h1 className={styles.titulo}>

                                {tituloPrincipal}

                            </h1>

                            <p className={styles.subtitulo}>

                                {subtituloPrincipal}

                            </p>

                        </div>


                        {/* FUNDACIÓN */}

                        <div className={styles.fundacion}>

                            <span>DESDE</span>

                            <strong>2018</strong>

                            <span>REVISTA CRISIS</span>

                        </div>

                    </header>


                    {/* CONTENIDO PRINCIPAL */}

                    <section className={styles.contenido}>

                        {/* MISIÓN */}

                        <section className={styles.mision}>

                            <TituloSeccion
                                numero="01"
                                titulo="MISIÓN"
                            />

                            {misionDescripciones.map(
                                (desc, index) => (

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

                                )
                            )}

                        </section>


                        {/* COLUMNA SECUNDARIA */}

                        <aside className={styles.columna}>

                            {/* HISTORIA */}

                            <section className={styles.historia}>

                                <TituloSeccion
                                    numero="02"
                                    titulo="HISTORIA"
                                />

                                <p className={styles.parrafo}>

                                    {historiaDescripcion}

                                </p>

                            </section>


                            {/* ARTICULACIONES */}

                            <section
                                className={styles.internacional}
                            >

                                <TituloSeccion
                                    numero="03"
                                    titulo="ARTICULACIONES"
                                />

                                <p className={styles.parrafo}>

                                    {internacionalDescripcion}

                                </p>

                            </section>

                        </aside>

                    </section>


                    {/* CIERRE DOCUMENTAL */}

                    <footer className={styles.cierre}>

                        <span className={styles.firma}>

                            [EdIPo] — ARCHIVO INSTITUCIONAL

                        </span>

                        <span
                            className={styles.lineaCierre}
                            aria-hidden="true"
                        />

                        <Guarda
                            patron={patronInferior}
                            columnas={24}
                            filas={3}
                            className={styles.guardaInferior}
                        />

                        <span className={styles.folio}>

                            001

                        </span>

                    </footer>

                </article>

            </main>

        </Background>

    );

};

export default Equipo;