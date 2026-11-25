import { useState, useMemo } from 'react';
import {
    FiSearch,
    FiArrowRight,
    FiFileText
} from 'react-icons/fi';

import publicacionesData from '../../data/publicaciones.json';
import styles from './Publicaciones.module.css';
import Background from '../Background/Background';

const normalizar = (texto = '') =>
    String(texto)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

const obtenerFecha = (fecha) => {
    const partes = String(fecha || '').split('/');

    if (partes.length === 3) {
        const [dia, mes, anio] = partes;
        return new Date(+anio, +mes - 1, +dia).getTime();
    }

    return Date.parse(fecha) || 0;
};

const publicaciones = Object.entries(publicacionesData)
    .flatMap(([year, items]) =>
        items.map((pub, index) => ({
            ...pub,
            year,
            id: `${year}-${index}`
        }))
    )
    .sort((a, b) =>
        obtenerFecha(b.anio) - obtenerFecha(a.anio)
    );

const obtenerGrupo = (year) => {
    const numero = Number(year);

    return numero >= 2018 && numero <= 2020
        ? '2018–20'
        : year;
};

const grupos = [
    ...new Set(
        publicaciones.map(pub => obtenerGrupo(pub.year))
    )
];


// =========================================
// ESTRUCTURA TRIDIMENSIONAL DEL FICHERO
// =========================================

const EstructuraFichero = () => (
    <svg
        className={styles.estructura}
        viewBox="0 0 660 560"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        {/* Profundidad lateral */}

        <path
            d="
                M 615 12
                Q 650 12 650 48
                L 650 405
                Q 650 420 638 440
                L 583 535
                Q 570 555 545 555
                L 40 555
                Q 12 555 12 525
                L 12 420
                Z
            "
            fill="#101010"
        />

        {/* Marco exterior */}

        <path
            d="
                M 68 5
                L 620 5
                Q 645 5 638 34
                L 572 404
                L 15 404
                L 47 32
                Q 50 5 68 5
                Z
            "
            fill="#f7f3e8"
            stroke="#101010"
            strokeWidth="3"
        />

        {/* Cavidad interior */}

        <path
            d="
                M 72 16
                L 620 16
                Q 632 16 628 33
                L 560 394
                L 25 394
                L 58 32
                Q 60 16 72 16
                Z
            "
            fill="#101010"
        />

        {/* Pared interna */}

        <path
            d="
                M 83 18
                L 612 18
                L 547 390
                L 39 390
                Z
            "
            fill="#d9d1bf"
        />

        {/* Documentos secundarios de fondo */}

        <path
            d="
                M 84 60
                L 590 60
                L 540 391
                L 47 391
                Z
            "
            fill="#c3bbaa"
            stroke="#101010"
            strokeWidth="2"
        />

        <path
            d="
                M 98 70
                L 600 70
                L 547 391
                L 60 391
                Z
            "
            fill="#eee8db"
            stroke="#101010"
            strokeWidth="2"
        />
    </svg>
);


// =========================================
// PUBLICACIONES
// =========================================

const Publicaciones = () => {

    const [grupo, setGrupo] = useState(grupos[0] || '');
    const [busqueda, setBusqueda] = useState('');
    const [seleccion, setSeleccion] = useState(
        publicaciones[0]?.id || null
    );

    const filtradas = useMemo(() => {

        const consulta = normalizar(busqueda.trim());

        return publicaciones.filter(pub => {

            const coincideGrupo =
                obtenerGrupo(pub.year) === grupo;

            const coincideBusqueda = normalizar(
                `${pub.titulo} ${pub.resumen || ''} ${pub.anio}`
            ).includes(consulta);

            return consulta
                ? coincideBusqueda
                : coincideGrupo;
        });

    }, [grupo, busqueda]);

    const activa =
        filtradas.find(pub => pub.id === seleccion)
        || filtradas[0]
        || null;

    const indiceActivo = filtradas.findIndex(
        pub => pub.id === activa?.id
    );

    // Cuatro documentos visibles por grupo.
    const pagina = Math.max(
        0,
        Math.floor(indiceActivo / 4)
    );

    const documentosVisibles = filtradas.slice(
        pagina * 4,
        pagina * 4 + 4
    );

    // El documento seleccionado siempre pasa al frente.
    const documentosOrdenados = [
        ...documentosVisibles.filter(
            pub => pub.id !== activa?.id
        ).reverse(),
        ...documentosVisibles.filter(
            pub => pub.id === activa?.id
        )
    ];

    const cantidadPaginas = Math.ceil(
        filtradas.length / 4
    );

    const cambiarGrupo = (nuevoGrupo) => {
        setGrupo(nuevoGrupo);
        setBusqueda('');

        const primera = publicaciones.find(
            pub => obtenerGrupo(pub.year) === nuevoGrupo
        );

        setSeleccion(primera?.id || null);
    };

    const cambiarPagina = (nuevaPagina) => {
        const documento = filtradas[nuevaPagina * 4];

        if (documento) {
            setSeleccion(documento.id);
        }
    };

    const navegar = (direccion) => {

        if (!filtradas.length) return;

        const siguiente =
            (indiceActivo + direccion + filtradas.length)
            % filtradas.length;

        setSeleccion(filtradas[siguiente].id);
    };

    return (
        <Background>

            <section className={styles.publicaciones}>

                {/* DECORACIONES */}

                <div
                    className={styles.diagonal}
                    aria-hidden="true"
                />

                <div
                    className={styles.retícula}
                    aria-hidden="true"
                />

                <div
                    className={styles.puntos}
                    aria-hidden="true"
                />


                {/* ENCABEZADO */}

                <header className={styles.encabezado}>

                    <div className={styles.identidad}>

                        <div className={styles.etiqueta}>
                            /// ARCHIVO EDITORIAL
                        </div>

                        <h1 className={styles.titulo}>
                            Publicaciones
                        </h1>

                        <p className={styles.subtitulo}>
                            Explora nuestras publicaciones recientes.
                        </p>

                    </div>

                    <form
                        className={styles.buscador}
                        onSubmit={event => {
                            event.preventDefault();

                            if (filtradas[0]) {
                                setSeleccion(filtradas[0].id);
                            }
                        }}
                    >

                        <FiSearch />

                        <input
                            type="search"
                            aria-label="Buscar en el archivo"
                            placeholder="Buscar en el archivo..."
                            value={busqueda}
                            onChange={event =>
                                setBusqueda(event.target.value)
                            }
                        />

                        <button
                            type="submit"
                            aria-label="Buscar"
                        >
                            <FiArrowRight />
                        </button>

                    </form>

                </header>


                {/* COMPOSICIÓN PRINCIPAL */}

                <main className={styles.main}>

                    {/* FICHERO */}

                    <section
                        className={styles.archivo}
                        aria-label="Fichero de publicaciones"
                    >

                        {/* PESTAÑAS */}

                        <div className={styles.pestanas}>

                            {grupos.map(year => (

                                <button
                                    key={year}
                                    type="button"
                                    aria-pressed={
                                        grupo === year && !busqueda
                                    }
                                    className={`
                                        ${styles.pestana}
                                        ${
                                            grupo === year && !busqueda
                                                ? styles.pestanaActiva
                                                : ''
                                        }
                                    `}
                                    onClick={() => cambiarGrupo(year)}
                                >
                                    <span>{year}</span>
                                </button>

                            ))}

                        </div>


                        {/* CAJÓN */}

                        <div className={styles.fichero}>

                            <EstructuraFichero />


                            {/* DOCUMENTOS */}

                            <div className={styles.documentos}>

                                {documentosOrdenados.map(
                                    (pub, index) => {

                                        const posicion =
                                            4 -
                                            documentosOrdenados.length +
                                            index;

                                        return (

                                            <button
                                                type="button"
                                                key={pub.id}
                                                aria-pressed={
                                                    activa?.id === pub.id
                                                }
                                                className={`
                                                    ${styles.documento}
                                                    ${
                                                        activa?.id === pub.id
                                                            ? styles.documentoActivo
                                                            : ''
                                                    }
                                                `}
                                                style={{
                                                    '--orden': posicion
                                                }}
                                                onClick={() =>
                                                    setSeleccion(pub.id)
                                                }
                                            >

                                                <div
                                                    className={
                                                        styles.documentoInfo
                                                    }
                                                >

                                                    <span
                                                        className={
                                                            styles.documentoFecha
                                                        }
                                                    >
                                                        {pub.anio}
                                                    </span>

                                                    <h3
                                                        className={
                                                            styles.documentoTitulo
                                                        }
                                                    >
                                                        {pub.titulo}
                                                    </h3>

                                                </div>

                                                <FiFileText
                                                    className={
                                                        styles.documentoIcon
                                                    }
                                                />

                                            </button>

                                        );
                                    }
                                )}

                                {!filtradas.length && (

                                    <div className={styles.sinResultados}>
                                        <FiFileText />
                                        <p>No se encontraron documentos.</p>
                                    </div>

                                )}

                            </div>


                            {/* FRENTE FÍSICO DEL CAJÓN */}

                            <div className={styles.frente}>

                                <span className={`${styles.remache} ${styles.remache1}`} />
                                <span className={`${styles.remache} ${styles.remache2}`} />
                                <span className={`${styles.remache} ${styles.remache3}`} />
                                <span className={`${styles.remache} ${styles.remache4}`} />

                                <div className={styles.frenteTitulo}>
                                    /// FICHERO DE DOCUMENTOS
                                </div>

                                <div
                                    className={styles.tirador}
                                    aria-hidden="true"
                                />

                                <div className={styles.frenteBarras}>
                                    //////
                                </div>

                            </div>

                        </div>


                        {/* PAGINACIÓN DEL FICHERO */}

                        {cantidadPaginas > 1 && (

                            <div className={styles.paginasArchivo}>

                                <button
                                    type="button"
                                    disabled={pagina === 0}
                                    onClick={() =>
                                        cambiarPagina(pagina - 1)
                                    }
                                    aria-label="Página anterior"
                                >
                                    ←
                                </button>

                                <span>
                                    {pagina + 1} / {cantidadPaginas}
                                </span>

                                <button
                                    type="button"
                                    disabled={
                                        pagina >= cantidadPaginas - 1
                                    }
                                    onClick={() =>
                                        cambiarPagina(pagina + 1)
                                    }
                                    aria-label="Página siguiente"
                                >
                                    →
                                </button>

                            </div>

                        )}

                    </section>


                    {/* GLOBO DE DOCUMENTO */}

                    <article className={styles.ventana}>

                        <div className={styles.ventanaBarra}>

                            <h2>
                                <span>///</span>
                                DOCUMENTO
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

                        <div className={styles.dialogo}>

                            {activa ? (

                                <>

                                    {/* Imagen editorial opcional */}

                                    {activa.imagen && (

                                        <div className={styles.recorte}>

                                            <img
                                                src={activa.imagen}
                                                alt=""
                                            />

                                            <span>////</span>

                                        </div>

                                    )}

                                    <div
                                        key={activa.id}
                                        className={styles.postContenido}
                                    >

                                        <div className={styles.postMeta}>

                                            <span className={styles.marcaFecha} />

                                            <time className={styles.postDate}>
                                                {activa.anio}
                                            </time>

                                        </div>

                                        <h2 className={styles.postTitle}>
                                            {activa.titulo}
                                        </h2>

                                        <div className={styles.separador} />

                                        <p className={styles.postText}>
                                            {activa.resumen}
                                        </p>

                                    </div>

                                    <div className={styles.postFooter}>

                                        {activa.link && (

                                            <a
                                                className={styles.postLink}
                                                href={activa.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LEER NOTA
                                                <FiArrowRight />
                                            </a>

                                        )}

                                        <div className={styles.indicadores}>

                                            {documentosVisibles.map(pub => (

                                                <button
                                                    key={pub.id}
                                                    type="button"
                                                    aria-label={pub.titulo}
                                                    aria-pressed={
                                                        pub.id === activa.id
                                                    }
                                                    className={
                                                        pub.id === activa.id
                                                            ? styles.indicadorActivo
                                                            : styles.indicador
                                                    }
                                                    onClick={() =>
                                                        setSeleccion(pub.id)
                                                    }
                                                />

                                            ))}

                                        </div>

                                    </div>

                                </>

                            ) : (

                                <div className={styles.vacio}>
                                    <FiFileText />
                                    <p>No hay documentos disponibles.</p>
                                </div>

                            )}

                        </div>

                        {/* Cola del globo */}

                        <svg
                            className={styles.cola}
                            viewBox="0 0 100 80"
                            aria-hidden="true"
                        >
                            <path
                                d="M 15 5 L 100 5 L 15 80 Z"
                                fill="#101010"
                            />
                            <path
                                d="M 2 0 L 88 0 L 2 65 Z"
                                fill="#f7f3e8"
                                stroke="#101010"
                                strokeWidth="3"
                            />
                            <path
                                d="M 9 0 L 79 0 L 9 53 Z"
                                fill="#101010"
                            />
                        </svg>

                    </article>

                </main>


                {/* PIE GRÁFICO */}

                <footer className={styles.cierre}>

                    <span className={styles.cuadrado} />

                    <span>-34.6037 / -58.3816</span>

                    <span className={styles.linea} />

                    <span className={styles.cierreBarras}>
                        /////////
                    </span>

                    <span className={styles.linea} />

                    <strong>EDIPO / PUBLICACIONES</strong>

                </footer>

            </section>

        </Background>
    );
};

export default Publicaciones;