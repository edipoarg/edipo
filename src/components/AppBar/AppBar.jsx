import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

import styles from "./AppBar.module.css";

const navegacion = [
    {
        nombre: "INVESTIGACIONES",
        ruta: "/investigaciones"
    },
    {
        nombre: "PROYECTOS",
        ruta: "/lista"
    },
    {
        nombre: "PUBLICACIONES",
        ruta: "/publicaciones"
    },
    {
        nombre: "RECURSOS",
        ruta: "/recursos"
    },
    {
        nombre: "TALLERES",
        ruta: "/talleres"
    },
    {
        nombre: "EQUIPO",
        ruta: "/equipo"
    }
];

const AppBar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);
    const [busquedaAbierta, setBusquedaAbierta] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const resultados = navegacion.filter(item =>
        item.nombre.toLowerCase().includes(
            busqueda.toLowerCase().trim()
        )
    );

    return (

        <header className={styles.appBar}>

            <div className={styles.contenedor}>

                {/* IDENTIDAD */}

                <Link to="/" className={styles.identidad}>

                    <span className={styles.logo}>
                        [EdIPo]
                    </span>

                    <span className={styles.separador} />

                    <span className={styles.nombre}>
                        EQUIPO DE
                        <br />
                        INVESTIGACIÓN
                        <br />
                        POLÍTICA
                    </span>

                </Link>

                {/* NAVEGACIÓN */}

                <nav className={styles.navegacion}>

                    {navegacion.map(item => (

                        <Link
                            key={item.ruta}
                            to={item.ruta}
                            className={styles.navLink}
                        >

                            <span>/</span>
                            {item.nombre}

                        </Link>

                    ))}

                </nav>

                {/* ACCIONES */}

                <div className={styles.acciones}>

                    <button
                        className={styles.iconButton}
                        aria-label="Buscar sección"
                        aria-expanded={busquedaAbierta}
                        onClick={() => {
                            setBusquedaAbierta(prev => !prev);
                            setMenuAbierto(false);
                        }}
                    >
                        <FiSearch />
                    </button>

                    <button
                        className={styles.iconButton}
                        aria-label="Abrir o cerrar menú"
                        aria-expanded={menuAbierto}
                        onClick={() => {
                            setMenuAbierto(prev => !prev);
                            setBusquedaAbierta(false);
                        }}
                    >

                        {menuAbierto ? <FiX /> : <FiMenu />}

                    </button>

                </div>

            </div>

            {/* BUSCADOR DE SECCIONES */}

            {busquedaAbierta && (

                <div className={styles.buscador}>

                    <input
                        type="search"
                        placeholder="Buscar sección..."
                        aria-label="Buscar sección"
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                        autoFocus
                    />

                    <div className={styles.resultados}>

                        {resultados.map(item => (

                            <Link
                                key={item.ruta}
                                to={item.ruta}
                                onClick={() => {
                                    setBusquedaAbierta(false);
                                    setBusqueda("");
                                }}
                            >
                                / {item.nombre}
                            </Link>

                        ))}

                        {!resultados.length && (
                            <p>Sin resultados.</p>
                        )}

                    </div>

                </div>

            )}

            {/* MENÚ DESPLEGABLE */}

            {menuAbierto && (

                <nav className={styles.menuDesplegable}>

                    {navegacion.map(item => (

                        <Link
                            key={item.ruta}
                            to={item.ruta}
                            onClick={() => setMenuAbierto(false)}
                        >
                            / {item.nombre}
                        </Link>

                    ))}

                </nav>

            )}

        </header>
    );
};

export default AppBar;