import { useState, useEffect } from 'react';
import { investigationsData } from './InvestigacionesList';
import styles from './Investigaciones.module.css';
import AppBar from '../AppBar/AppBar';
import Background from '../Background/Background';
import Header from '../Header/Header';

const Investigations = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showImage, setShowImage] = useState(true); // Inicialmente verdadero para mostrar la primera imagen
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

  useEffect(() => {
    setShowImage(false); // Ocultar la imagen actual
    const timer = setTimeout(() => {
      setShowImage(true); // Mostrar la nueva imagen después de un corto retraso
    }, 100); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer); // Limpia el temporizador al cambiar la investigación
  }, [selectedIndex]);

  return (
    <Background theme="dark">
      <AppBar></AppBar>
      <div className={styles.investigaciones}>
      <Header theme='solid'
          title="Proyectos / Tecnopolíticas"
          subTitle="Bajo la premisa de la información como autodefensa desarrollamos plataformas de monitoreo ciudadano y experiencias de periodismo abierto en red con diversos actores de la sociedad civil."
        />
        <div className={styles.content}>
          <div className={styles.detailSection}>
            <div className={styles.button} onClick={handlePrev}> - </div>
            <div className={styles.selected}>
              <div className={styles.imageContainer}>
                <div
                  className={`${styles.imagePlaceholder} ${showImage ? styles.show : ''}`}
                  style={{ backgroundImage: `url(${selectedInvestigation.img})` }} // Establecer la imagen de fondo
                ></div>
              </div>
            </div>
            <div onClick={handleNext} className={styles.button}>+</div>
          </div>
          
      
          <div className={styles.listSection}>
          <h2 className={styles.titulo}>{selectedInvestigation.titulo}</h2>
          <p className={styles.bajada}>{selectedInvestigation.bajada}</p>          </div>
         

        </div>
      </div>
    </Background>
  );
};

export default Investigations;
