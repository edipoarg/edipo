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
      <Link to='./landing'>

        <div className={styles.logo}><h3 className={styles.title}>[ ] EdIPo</h3></div>
        </Link>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>
        <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <Link to='./lista'>
            <h5 className={styles.item}>Proyetos</h5>
          </Link>
          <Link to='./recursos'>
            <h5 className={styles.item}>Recursos</h5>
          </Link>
          <Link to='./publicaciones'>
            <h5 className={styles.item}>Publicaciones</h5>
          </Link>
          <Link to='./talleres'>
            <h5 className={styles.item}>Talleres</h5>
          </Link>
          <Link to='./contacto'>
            <h5 className={styles.item}>Equipo</h5>
          </Link>
        </section>
        <Link to='./colabora'>
        <section className={styles.suscribite}><h4 className={styles.text}>¿Queré aportar?</h4></section>
        </Link>

      </section>
    </>
  );
}

export default Navbar;