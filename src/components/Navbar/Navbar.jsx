import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <section className={styles.navbar}>
        <Link to='./'>
          <div className={styles.logo}>
            <h3 className={styles.title}>[ ] EdIPo</h3>
          </div>
        </Link>

        <section className={styles.derecha}>
          <section className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
            <Link to='./lista' onClick={handleMenuItemClick}>
              <h5 className={styles.item}>Investigaciones</h5>
            </Link>
            <Link to='./recursos' onClick={handleMenuItemClick}>
              <h5 className={styles.item}>Recursos</h5>
            </Link>
            <Link to='./talleres' onClick={handleMenuItemClick}>
              <h5 className={styles.item}>Talleres</h5>
            </Link>
            <Link to='./publicaciones' onClick={handleMenuItemClick}>
              <h5 className={styles.item}>Publicaciones</h5>
            </Link>
            <Link to='./equipo' onClick={handleMenuItemClick}>
              <h5 className={styles.item}>Equipo</h5>
            </Link>
          </section>

        {/*}  <Link to='./colabora'>
            <section className={styles.suscribite}>
              <h4 className={styles.text}>Suscribite</h4>
            </section>
          </Link>*/}

          <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={handleMenuToggle}>
            {menuOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
          </div>
        </section>
      </section>
    </>
  );
}

export default Navbar;