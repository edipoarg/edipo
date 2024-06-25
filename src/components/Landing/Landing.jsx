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
        </section>
        <section className={styles.recursos}>
        <h2 className={styles.title}>Recursos</h2>
        </section>
        </div>
        </section>
        </>
    );};
    
    export default Landing;