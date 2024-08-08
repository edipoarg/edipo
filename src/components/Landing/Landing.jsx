import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Landing.module.css";
import AppBar from "../AppBar/AppBar";
import { GoPlay } from "react-icons/go";


import publicacionesData from "../../data/publicaciones.json"; // Asegúrate de que la ruta sea correcta


const Landing = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        // Convertir el JSON en un array de publicaciones ordenado por fecha
        const publicacionesArray = [];
        Object.values(publicacionesData).forEach(yearPublicaciones => {
            publicacionesArray.push(...yearPublicaciones);
        });

        // Ordenar las publicaciones por fecha correcta
        publicacionesArray.sort((a, b) => {
            const dateA = a.anio.split('/').reverse().join('-'); // Convierte "dd/mm/yyyy" a "yyyy-mm-dd"
            const dateB = b.anio.split('/').reverse().join('-');
            return new Date(dateB) - new Date(dateA);
        });

        setPublicaciones(publicacionesArray);
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : publicaciones.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < publicaciones.length - 1 ? prevIndex + 1 : 0));
    };

    const currentPublicacion = publicaciones[currentIndex];


    return (
        <>
            <AppBar></AppBar>

            <section className={styles.background}>
                <section className={styles.landing}>
                    <div className={styles.mainBoard}>
                        <section className={styles.header}> <h1 className={styles.edipo}>[EdIPo]</h1><h3 className={styles.name}>Equipo de Investigación Política</h3> <h6 className={styles.texto}>Ante la pregunta ¿cómo nos defendemos de las violencias contemporáneas? generamos herramientas y recursos para la investigación política, y producimos análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.</h6> </section>
                        {currentPublicacion && (

                            <section className={styles.news}>
                                <section className={styles.newsContainer}>



                                    <div className={styles.newsData}>
                                        <h4 className={styles.newsBajada}>{currentPublicacion.anio}</h4>
                                        <h2 className={styles.newsTitle}>{currentPublicacion.titulo}</h2>


                                        <Link to={currentPublicacion.link}><h3 className={styles.leer}>Leer</h3></Link>


                                    </div>
                                </section>
                                <section className={styles.newsButtons}><button onClick={handlePrevious} className={styles.botonNews}>{"<"}</button>
                                    <button onClick={handleNext} className={styles.botonNews}>{">"}</button></section>
                            </section>

                        )}
                        <section className={styles.investigaciones}>
                            <h2 className={styles.title}>PROYECTOS <br /> / TECNOPOLÍTICAS</h2>
                            <h4 className={styles.bajada}>Bajo la premisa de la información como autodefensa desarrollamos plataformas de monitoreo ciudadano y experiencias de periodismo abierto en red con diversos actores de la sociedad civil.
                            </h4>
                            <div className={styles.playContainer}>
                                <Link to='/lista' ><GoPlay className={styles.play} /></Link>
                            </div>
                            {/* <div className={styles.boxList}>
            <Link ><div className={styles.box}><h5 className={styles.lightBox}>MAPA DE LA POLICIA</h5></div></Link>
            <Link > <div className={styles.box}><h5 className={styles.lightBox}>RA-DAR</h5></div></Link>
            <Link >  <div className={styles.box}><h5 className={styles.lightBox}>MONITOR</h5></div></Link>
            <Link >   <div className={styles.box}><h5 className={styles.lightBox}>A.H.O.R.A.</h5></div></Link>
        </div>*/}
                        </section>
                        <section className={styles.recursos}>
                            <h2 className={styles.recursosTitle}>RECURSOS</h2>
                            <h4 className={styles.bajada2}>Hacer investigación política en el presente tiene desafíos metodológicos sobre la recolección de los datos y su análisis, así como desafíos vinculados a la seguridad de los datos y las personas involucradas en el proceso de investigación. </h4>

                            <div className={styles.recursosList}>
                                <Link to='/recursos/autocuidado'>   <h5 className={styles.button1}></h5><h5 className={styles.recursoName}>CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL</h5> </Link>
                                <Link to='/recursos/inteligencia_abierta'>  <h5 className={styles.button2}></h5> <h5 className={styles.recursoName}>MANUAL DE INTELIGENCIA ABIERTA</h5> </Link>
                                <Link>    <h5 className={styles.button3}></h5> <h5 className={styles.recursoName}>MANUAL DEL MAPA DE LA POLICÍA</h5> </Link>
                            </div>

                        </section>
                    </div>

                </section>

            </section>
        </>
    );
};

export default Landing;