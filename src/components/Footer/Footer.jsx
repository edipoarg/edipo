import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {

  return (
    <>
      <section className={styles.footer}>
        <Link to='https://revistacrisis.com.ar/'>
          <div className={styles.crisis}>
</div>
        </Link>

      
            <Link to='https://tacticaltech.org/'>
            <div className={styles.tatech}>
            </div>
            </Link>
          
<div>v 0.2.0 /
Desarrollado x [ EdIPo ]</div>
       
      </section>
    </>
  );
}

export default Footer;