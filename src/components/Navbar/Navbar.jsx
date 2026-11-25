import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";

const navegacion = [
    { nombre: "PROYECTOS", ruta: "/lista" },
    { nombre: "INVESTIGACIONES", ruta: "/investigaciones" },
    { nombre: "PUBLICACIONES", ruta: "/publicaciones" },
    { nombre: "RECURSOS", ruta: "/recursos" },
    { nombre: "TALLERES", ruta: "/talleres" },
    { nombre: "EQUIPO", ruta: "/equipo" }
];

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const cerrarTodo = () => {
        setMenuOpen(false);
        setSearchOpen(false);
        setBusqueda("");
    };

    const resultados = navegacion.filter(item =>
        item.nombre.toLowerCase().includes(
            busqueda.toLowerCase().trim()
        )
    );

    return (

        <header className={styles.navbar}>

            <div className={styles.contenedor}>

                {/* IDENTIDAD INSTITUCIONAL */}

                <Link
                    to="/"
                    className={styles.identidad}
                    onClick={cerrarTodo}
                >

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

                {/* NAVEGACIÓN PRINCIPAL */}

                <nav className={styles.navegacion}>

                    {navegacion.map(item => (

                        <Link
                            key={item.ruta}
                            to={item.ruta}
                            className={styles.navLink}
                            onClick={cerrarTodo}
                        >
                            <span>/</span>
                            {item.nombre}
                        </Link>

                    ))}

                </nav>

                {/* ACCIONES */}

                <div className={styles.acciones}>

                    <button
                        type="button"
                        className={styles.iconButton}
                        aria-label="Buscar"
                        aria-expanded={searchOpen}
                        onClick={() => {
                            setSearchOpen(!searchOpen);
                            setMenuOpen(false);
                        }}
                    >

                        {searchOpen ? <FiX /> : <FiSearch />}

                    </button>

                    <button
                        type="button"
                        className={styles.iconButton}
                        aria-label="Menú"
                        aria-expanded={menuOpen}
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            setSearchOpen(false);
                        }}
                    >

                        {menuOpen ? <FiX /> : <FiMenu />}

                    </button>

                </div>

            </div>

            {/* MENÚ DESPLEGABLE */}

            {menuOpen && (

                <nav className={styles.menuDesplegable}>

                    {navegacion.map(item => (

                        <Link
                            key={item.ruta}
                            to={item.ruta}
                            onClick={cerrarTodo}
                        >
                            / {item.nombre}
                        </Link>

                    ))}

                    <Link
                        to="/colabora"
                        onClick={cerrarTodo}
                    >
                        / COLABORÁ
                    </Link>

                </nav>

            )}

            {/* BUSCADOR */}

            {searchOpen && (

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
                                onClick={cerrarTodo}
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

        </header>

    );
}

export default Navbar;