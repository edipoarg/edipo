import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
 return (
  <>
<section className={styles.navbar}>
  <div className={styles.logo}><h3 className={styles.title}>[ ] EdIPo</h3></div>
  <section className={styles.menu}>
  <Link to='./lista'>
<h5 className={styles.item}>Investigaciones</h5>
</Link>  
<Link to='./publicaciones'>
<h5 className={styles.item}>Publicaciones</h5>
</Link>  
<Link to='./recursos'>
<h5 className={styles.item}>Recursos</h5>
</Link>  
<Link to='./talleres'>
<h5 className={styles.item}>Talleres</h5>
</Link>  
<Link to='./contacto'>
<h5 className={styles.item}>Contacto</h5>
</Link>  
</section>

<section className={styles.suscribite}><h4 className={styles.text}>Suscribite</h4></section>


</section>
    </>
  );
}

export default Navbar
