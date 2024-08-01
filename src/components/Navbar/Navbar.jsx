import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
<Link to='./colabora'>

<section className={styles.suscribite}><h4 className={styles.text}>Suscribite</h4></section>
</Link>  


</section>
    </>
  );
}

export default Navbar;