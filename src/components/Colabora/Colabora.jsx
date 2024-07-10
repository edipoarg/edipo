import styles from './Colabora.module.css';

const Colabora = () => {
  return (
    <section className={styles.colabora}>
      <h2>Apoyanos</h2>
      <p>
        EdIPo es un colectivo que genera herramientas, información y análisis que enriquecen el debate público y fortalecen la convivencia democrática.
      </p>
      <p>
        EdIPo se sostiene con nuestra militancia, con el apoyo de organizaciones sociales y de ciudadanxs como vos.
      </p>

      <h3>Desde Argentina:</h3>
      <p>Alias para transferencias: xxxxx</p>

      <h3>Desde otros países:</h3>
      <a 
        href="https://www.paypal.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.paypalButton}
      >
        Botón de Paypal
      </a>

      <h3>Medios como gelatina o PDB usan botones de pago:</h3>
      <div className={styles.paymentButtons}>
        <h4>Botón de pago mensual</h4>
        <button className={styles.paymentButton}>$3000</button>
        <button className={styles.paymentButton}>$6000</button>
        <button className={styles.paymentButton}>$9000</button>
        <button className={styles.paymentButton}>$12000</button>
        <button className={styles.paymentButton}>$17000</button>
        <button className={styles.paymentButton}>$25000</button>
        
        <h4>Botón de pago único</h4>
        <button className={styles.paymentButton}>$5000</button>
        <button className={styles.paymentButton}>$10000</button>
        <button className={styles.paymentButton}>$15000</button>
        <button className={styles.paymentButton}>$20000</button>
        <button className={styles.paymentButton}>$25000</button>
      </div>
    </section>
  );
};

export default Colabora;
