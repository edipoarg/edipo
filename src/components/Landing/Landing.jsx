import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import AppBar from "../AppBar/AppBar";

const Landing = () => {


    return (
        <>

            <section className={styles.background}>
                <AppBar></AppBar>
                <section className={styles.landing}>
                    <div className={styles.mainBoard}>
                        <section className={styles.header}> <h1 className={styles.edipo}>[EdIPo]</h1><h3 className={styles.name}>Equipo de Investigación Política</h3> <h6 className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet commodi incidunt nisi quaerat vero a hic eum unde ipsum nulla eos nemo consectetur, voluptatum nihil enim provident veniam odio. Non?</h6> </section>
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
                    <Link to={'../publicaciones'}>
                        <section className={styles.news}>
                            <h2 className={styles.newsTitle}>¿Quién mató a Facundo?</h2>
                            <h4 className={styles.newsBajada}>10/05/</h4>

                        </section>
                    </Link>
                </section>

            </section>
        </>
    );
};

export default Landing;