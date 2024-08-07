import styles from './AppBar.module.css';
import { GiBrassEye } from "react-icons/gi";

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.line}></div>
      <section className={styles.button1}><div className={styles.logoMapa} /></section>
      <section className={styles.button2}><div className={styles.logoRadar} /></section>
      <section className={styles.button3}><div className={styles.logoAhora} /></section>
      <div className={styles.button4}><GiBrassEye className={styles.logoMonitor} />
      </div>
    </div>
  );
};

export default AppBar;
