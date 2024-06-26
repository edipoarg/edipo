import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () =>{
    

    return(
        <>
        <section className={styles.landing}>
        <section className={styles.news}>
        <h2 className={styles.title}>Novedades</h2>
        </section>
        <div className={styles.mainBoard}>
        <section className={styles.investigaciones}>
        <h2 className={styles.title}>Investigaciones</h2>
        <div className={styles.boxList}>
            <Link ><h5 className={styles.box}>MAPA DE LA POLICIA</h5></Link>
            <Link > <h5 className={styles.box}>RA-DAR</h5></Link>
            <Link >  <h5 className={styles.box}>Monitor</h5></Link>
            <Link >   <h5 className={styles.box}>A.H.O.R.A.</h5></Link>
            <Link >   <h5 className={styles.box}>OTRAS</h5></Link>
        </div>
        </section>
        <section className={styles.recursos}>
        <h2 className={styles.title}>Recursos</h2>
               <div>
               <Link>    <h5 className={styles.button}>MANUAL DE CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL</h5></Link>
               <Link>    <h5 className={styles.button}>MANUAL INTELIGENCIA ABIERTA</h5></Link>
               <Link>    <h5 className={styles.button}>GUIA MAPA</h5></Link>
        </div>
        </section>
        </div>
        </section>
        </>
    );};
    
    export default Landing;