import { Link } from "react-router-dom";
import styles from "./Recursos.module.css"
const Recursos = () =>{

return(
    <>
    <section className={styles.header}>
    <h2>recursos</h2>
    </section>
    <section className={styles.recursos}>
    <Link to='./autocuidado'>
    <div className={styles.seguridad}>  <h3 className={styles.item}>MANUAL DE CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL</h3></div>
    
    </Link>
    <Link>
       <div className={styles.busqueda}><h3 className={styles.item}>MANUAL INTELIGENCIA ABIERTA</h3></div> 
        </Link>
        <Link>
        <div className={styles.guiaMapa}><h3 className={styles.item}>Guia mapa</h3></div>
        </Link>
    </section>


    </>
);};

export default Recursos;