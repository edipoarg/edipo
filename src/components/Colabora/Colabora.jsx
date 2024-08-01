import styles from './Colabora.module.css';

const titulo = "Apoyanos";
const descripcion1 = "EdIPo es un colectivo que genera herramientas, información y análisis que enriquecen el debate público y fortalecen la convivencia democrática.";
const descripcion2 = "EdIPo se sostiene con nuestra militancia, con el apoyo de organizaciones sociales y de ciudadanxs como vos.";
const desdeArgentina = "Desde Argentina:";
const aliasTransferencia = "Alias para transferencias: xxxxx";
const desdeOtrosPaises = "Desde otros países:";
const paypalUrl = "https://www.paypal.com";
const paypalTexto = "Botón de Paypal";
const mediosTexto = "Medios como gelatina o PDB usan botones de pago:";
const pagoMensualTexto = "Botón de pago mensual";
const pagoUnicoTexto = "Botón de pago único";
const montosMensuales = [3000, 6000, 9000, 12000, 17000, 25000];
const montosUnicos = [5000, 10000, 15000, 20000, 25000];

const Colabora = () => {
    return (
        <section className={styles.background}>

            <section className={styles.colabora}>
                <h2 className={styles.title}>{titulo}</h2>
                <h5 className={styles.desc}>{descripcion1}</h5>
                <h5 className={styles.desc2}>{descripcion2}</h5>

                <h3 className={styles.arg}>{desdeArgentina}</h3>
                <h5 className={styles.alias}>{aliasTransferencia}</h5>

                <h3 className={styles.world}>{desdeOtrosPaises}</h3>
                <a
                    href={paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paypalButton}
                >
                    {paypalTexto}
                </a>

                <h3>{mediosTexto}</h3>
                <div className={styles.paymentButtons}>
                    <h4>{pagoMensualTexto}</h4>
                    {montosMensuales.map(monto => (
                        <button key={monto} className={styles.paymentButton}>${monto}</button>
                    ))}

                    <h4>{pagoUnicoTexto}</h4>
                    {montosUnicos.map(monto => (
                        <button key={monto} className={styles.paymentButton}>${monto}</button>
                    ))}
                </div>
            </section>
        </section>

    );
};

export default Colabora;
