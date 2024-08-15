import { Link } from "react-router-dom";
import styles from "./Recursos.module.css"


const Recursos = () => {

    return (
        <>


            <section className={styles.header}>
                <h2 className={styles.title}>RECURSOS</h2>
                <h4 className={styles.subTitle}>Hacer investigación política en el presente tiene desafíos metodológicos sobre la recolección de los datos y su análisis, así como desafíos vinculados a la seguridad de los datos y las personas involucradas en el proceso de investigación. 
                </h4>
            </section>
            <section className={styles.recursos}>
                <Link to='./autocuidado'>
                    <div className={styles.seguridad}>  <h3 className={styles.item}>MANUAL DE CUIDADO COLECTIVO Y AUTODEFENSA DIGITAL</h3></div>

                </Link>
                <Link to='./inteligencia_abierta'>
                    <div className={styles.busqueda}><h3 className={styles.item}>MANUAL DE INTELIGENCIA ABIERTA</h3></div>
                </Link>
                <Link>
                    <div className={styles.guiaMapa}><h3 className={styles.item}>Guia mapa</h3></div>
                </Link>
            </section>



        </>
    );
};

export default Recursos;