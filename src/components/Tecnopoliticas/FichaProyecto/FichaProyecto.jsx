import styles from './FichaProyecto.module.css';

import { Link, useParams } from 'react-router-dom';
import { proyectosData } from '../ProyectosList';

import Background from '../../Background/Background';

import LogoMapa from '../../../svg/LogoMapa.svg';
import LogoAhora from '../../../svg/LogoAhora.svg';
import LogoAncora from '../../../svg/LogoAncora.svg';
import LogoRadar from '../../../svg/LogoRadar.svg';

import {
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaEnvelope
} from 'react-icons/fa';

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiArrowRight,
    FiGlobe
} from 'react-icons/fi';


/* =========================================
   RUTAS
========================================= */

const RUTA_PROYECTOS = '/tecnopoliticas/proyectos';

const rutaProyecto = (dominio) =>
    `${RUTA_PROYECTOS}/${dominio}`;


/* =========================================
   CONFIGURACIÓN DE PROYECTOS
========================================= */

const configuracion = {

    mapa: {
        color: '#b64ef0',
        preview: 'mapa.webp',
        logo: LogoMapa,
        numero: '01'
    },

    ahora: {
        color: '#d5fa00',
        preview: 'ahora.webp',
        logo: LogoAhora,
        numero: '02'
    },

    ancora: {
        color: '#00dce5',
        preview: 'ancora.webp',
        logo: LogoAncora,
        numero: '03'
    },

    radar: {
        color: '#0087ef',
        preview: 'radar.webp',
        logo: LogoRadar,
        numero: '04'
    }

};


/* =========================================
   LOGO DEL PROYECTO
========================================= */

const LogoProyecto = ({ dominio, config }) => {

    return (

        <div
            className={styles.logoProyecto}
            data-proyecto={dominio}
            aria-hidden="true"
        >

            {config?.logo ? (

                <img
                    src={config.logo}
                    alt=""
                    className={styles.logoImagen}
                    decoding="async"
                />

            ) : (

                <FiGlobe />

            )}

        </div>

    );

};


/* =========================================
   FICHA DEL PROYECTO
========================================= */

const FichaProyecto = () => {

    const { dominio } = useParams();

    const proyecto = proyectosData.find(
        proyecto => proyecto.dominio === dominio
    );


    /* PROYECTO NO ENCONTRADO */

    if (!proyecto) {

        return (

            <Background>

                <main className={styles.noEncontrado}>

                    <span>/// ERROR 404</span>

                    <h1>Proyecto no encontrado</h1>

                    <Link to={RUTA_PROYECTOS}>

                        <FiArrowLeft />

                        Volver a proyectos

                    </Link>

                </main>

            </Background>

        );

    }


    /* DATOS DEL PROYECTO */

    const {
        titulo,
        bajada,
        descripcion,
        enlace,
        año,
        ig,
        tw,
        fb,
        mail
    } = proyecto;


    const config = configuracion[dominio] || {
        color: '#d5fa00',
        numero: '00'
    };


    /* REDES SOCIALES */

    const redes = [

        {
            nombre: 'Instagram',
            url: ig,
            icono: FaInstagram
        },

        {
            nombre: 'Twitter / X',
            url: tw,
            icono: FaTwitter
        },

        {
            nombre: 'Facebook',
            url: fb,
            icono: FaFacebook
        },

        {
            nombre: 'Correo electrónico',

            url: mail
                ? mail.startsWith('mailto:')
                    ? mail
                    : `mailto:${mail}`
                : null,

            icono: FaEnvelope
        }

    ].filter(red => red.url);


    /* PROYECTOS RELACIONADOS */

    const otrosProyectos = proyectosData.filter(
        proyecto => proyecto.dominio !== dominio
    );


    return (

        <Background>

            <main
                className={styles.pagina}
                style={{ '--acento': config.color }}
            >

                {/* NAVEGACIÓN */}

                <Link
                    to={RUTA_PROYECTOS}
                    className={styles.volver}
                >

                    <FiArrowLeft />

                    TODOS LOS PROYECTOS

                </Link>


                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div className={styles.identidad}>

                        <span className={styles.etiqueta}>

                            /// TECNOPOLÍTICAS / {config.numero}

                        </span>

                        <h1 className={styles.titulo}>

                            {titulo}

                        </h1>

                        {bajada && (

                            <p className={styles.bajada}>

                                {bajada}

                            </p>

                        )}

                    </div>


                    {/* IDENTIDAD VISUAL */}

                    <div className={styles.marca}>

                        <LogoProyecto
                            dominio={dominio}
                            config={config}
                        />

                        {año && (

                            <span>{año}</span>

                        )}

                    </div>

                </header>


                {/* CONTENIDO PRINCIPAL */}

                <section className={styles.contenido}>

                    {/* VENTANA DE PREVISUALIZACIÓN */}

                    <div className={styles.ventana}>

                        <div className={styles.ventanaBarra}>

                            <span>

                                /// PLATAFORMA

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


                        <div className={styles.ventanaContenido}>

                            <div className={styles.navegador}>

                                {/* BARRA DE DIRECCIÓN */}

                                <div className={styles.direccion}>

                                    <div className={styles.puntos}>

                                        <span />
                                        <span />
                                        <span />

                                    </div>

                                    <span className={styles.url}>

                                        {enlace
                                            ? enlace.replace(
                                                /^https?:\/\//,
                                                ''
                                            )
                                            : titulo}

                                    </span>

                                    <FiGlobe />

                                </div>


                                {/* CAPTURA DE LA PLATAFORMA */}

                                <div className={styles.preview}>

                                    <div className={styles.fallback}>

                                        <LogoProyecto
                                            dominio={dominio}
                                            config={config}
                                        />

                                        <strong>

                                            {titulo}

                                        </strong>

                                    </div>


                                    {config.preview && (

                                        <img
                                            key={config.preview}
                                            className={styles.previewImage}
                                            src={`${import.meta.env.BASE_URL}previews/${config.preview}`}
                                            alt={`Previsualización de ${titulo}`}
                                            decoding="async"
                                            onError={event => {
                                                event.currentTarget.style.display = 'none';
                                            }}
                                        />

                                    )}


                                    {enlace && (

                                        <a
                                            href={enlace}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.previewLink}
                                            aria-label={`Explorar ${titulo}`}
                                        >

                                            <span>

                                                EXPLORAR

                                                <FiArrowUpRight />

                                            </span>

                                        </a>

                                    )}

                                </div>

                            </div>


                            {/* BOTÓN EXPLORAR */}

                            {enlace && (

                                <a
                                    href={enlace}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.explorar}
                                >

                                    EXPLORAR PLATAFORMA

                                    <FiArrowUpRight />

                                </a>

                            )}

                        </div>

                    </div>


                    {/* INFORMACIÓN DEL PROYECTO */}

                    <article className={styles.informacion}>

                        <h2 className={styles.seccionTitulo}>

                            /// SOBRE EL PROYECTO

                        </h2>

                        <div className={styles.descripcion}>

                            {descripcion}

                        </div>


                        {/* CONTACTO Y REDES */}

                        {redes.length > 0 && (

                            <section className={styles.contacto}>

                                <h3>

                                    CONECTÁ CON EL PROYECTO

                                </h3>

                                <div className={styles.redes}>

                                    {redes.map(red => {

                                        const RedIcono = red.icono;

                                        return (

                                            <a
                                                key={red.nombre}
                                                href={red.url}
                                                target={
                                                    red.nombre === 'Correo electrónico'
                                                        ? undefined
                                                        : '_blank'
                                                }
                                                rel="noopener noreferrer"
                                                aria-label={red.nombre}
                                                title={red.nombre}
                                            >

                                                <RedIcono />

                                            </a>

                                        );

                                    })}

                                </div>

                            </section>

                        )}

                    </article>

                </section>


                {/* OTROS PROYECTOS */}

                {otrosProyectos.length > 0 && (

                    <section className={styles.relacionados}>

                        <h2 className={styles.seccionTitulo}>

                            /// OTRAS TECNOPOLÍTICAS

                        </h2>

                        <div className={styles.otrosProyectos}>

                            {otrosProyectos.map(otroProyecto => {

                                const otraConfig =
                                    configuracion[otroProyecto.dominio];

                                return (

                                    <Link
                                        key={otroProyecto.dominio}
                                        to={rutaProyecto(otroProyecto.dominio)}
                                        className={styles.otroProyecto}
                                        style={{
                                            '--otroAcento':
                                                otraConfig?.color || '#d5fa00'
                                        }}
                                    >

                                        <div className={styles.otroIcono}>

                                            <LogoProyecto
                                                dominio={otroProyecto.dominio}
                                                config={otraConfig}
                                            />

                                        </div>

                                        <strong>

                                            {otroProyecto.titulo}

                                        </strong>

                                        <FiArrowRight
                                            className={styles.flecha}
                                        />

                                    </Link>

                                );

                            })}

                        </div>

                    </section>

                )}


                {/* PIE GRÁFICO */}

                <footer className={styles.cierre}>

                    <span className={styles.cuadrado} />

                    <span>

                        Equipo de investigación Política

                    </span>

                    <span className={styles.linea} />

                    <span className={styles.barras}>

                        /////////

                    </span>

                    <span className={styles.linea} />

                    <strong>

                        EDIPO / PROYECTOS

                    </strong>

                </footer>

            </main>

        </Background>

    );

};

export default FichaProyecto;