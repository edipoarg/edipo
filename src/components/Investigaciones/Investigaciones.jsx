import { useState, useEffect } from 'react';

import { investigationsData } from './InvestigacionesList';
import styles from './Investigaciones.module.css';

import AppBar from '../AppBar/AppBar';

const Investigations = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedInvestigation = investigationsData[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % investigationsData.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + investigationsData.length) % investigationsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section className={styles.background}>
      <AppBar></AppBar>
      <div className={styles.investigaciones}>
        <h1 className={styles.header}>Proyectos / Tecnopolíticas</h1>
        <div className={styles.content}>
          <div className={styles.detailSection}>
            <button onClick={handlePrev}>x</button>
            <div className={styles.selected}>
              <h2 className={styles.titulo}>{selectedInvestigation.titulo}</h2>
              <div className={styles.imagePlaceholder}></div>
              <p className={styles.bajada}>{selectedInvestigation.bajada}</p>
            </div>
            <button onClick={handleNext}>x</button>
          </div>
          <section className={styles.fullInfo}>
              <p className={styles.descripcion}>{selectedInvestigation.descripcion}</p>
            </section>

          <div className={styles.listSection}>
            {/*  <ul className={styles.list}>
              {investigationsData.map((investigacion, index) => (
                <li className={styles.li} key={index}>
                  <div
                    className={`${styles.button} ${index === selectedIndex ? styles.selectedButton : ''}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    + {investigacion.titulo}
                  </div>
                </li>
              ))}
            </ul>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigations;
