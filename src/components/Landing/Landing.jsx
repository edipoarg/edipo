import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Landing.module.css";
import AppBar from "../AppBar/AppBar";

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
                        <section className={styles.header}> <h1 className={styles.edipo}>[EdIPo]</h1><h3 className={styles.name}>Equipo de Investigación Política</h3> <h6 className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet commodi incidunt nisi quaerat vero a hic eum unde ipsum nulla eos nemo consectetur, voluptatum nihil enim provident veniam odio. Non?</h6> </section>
                        {currentPublicacion && (

                            <section className={styles.news}>
                                <section className={styles.newsContainer}>

                                    <button onClick={handlePrevious} className={styles.botonNews}>{"<"}</button>
                                    <div className={styles.newsData}>
                                        <h2 className={styles.newsTitle}>{currentPublicacion.titulo}</h2>
                                        <h4 className={styles.newsBajada}>{currentPublicacion.anio}</h4>

                                        <Link to={currentPublicacion.link}><h3 className={styles.leer}>Leer</h3></Link>
                                    </div>
                                    <button onClick={handleNext} className={styles.botonNews}>{">"}</button>
                                </section>
                            </section>

                        )}
                        <section className={styles.investigaciones}>
                            <h2 className={styles.title}>PROYECTOS <br /> / TECNOPOLÍTICAS</h2>
                            {/* <div className={styles.boxList}>
            <Link ><div className={styles.box}><h5 className={styles.lightBox}>MAPA DE LA POLICIA</h5></div></Link>
            <Link > <div className={styles.box}><h5 className={styles.lightBox}>RA-DAR</h5></div></Link>
            <Link >  <div className={styles.box}><h5 className={styles.lightBox}>MONITOR</h5></div></Link>
            <Link >   <div className={styles.box}><h5 className={styles.lightBox}>A.H.O.R.A.</h5></div></Link>
        </div>*/}
                        </section>
                        <section className={styles.recursos}>
                            <h2 className={styles.recursosTitle}>RECURSOS</h2>
                            <div className={styles.recursosList}>
                                <Link>    <h5 className={styles.button1}>d</h5></Link>
                                <Link>    <h5 className={styles.button2}>i</h5></Link>
                                <Link>    <h5 className={styles.button3}>gm</h5></Link>
                            </div>
                        </section>
                    </div>

                </section>

            </section>
        </>
    );
};

export default Landing;