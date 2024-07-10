import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className={styles.navbar}>
        <div className={styles.logo}><h3 className={styles.title}>[ ] EdIPo</h3></div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>
        <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
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

export default Navbar;
