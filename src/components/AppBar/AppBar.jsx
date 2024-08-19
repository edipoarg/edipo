import styles from './AppBar.module.css';
import { GiBrassEye } from "react-icons/gi";
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.line}></div>
     <Link to='/mapa'> <section className={styles.button1}><div className={styles.logoMapa} /></section></Link>
     <Link to='/radar'><section className={styles.button2}><div className={styles.logoRadar} /></section></Link>
     <Link to='/ahora'><section className={styles.button3}><div className={styles.logoAhora} /></section></Link>
     <Link to='/monitor'><div className={styles.button4}><GiBrassEye className={styles.logoMonitor} />
      </div></Link>
    </div>
  );
};

export default AppBar;
