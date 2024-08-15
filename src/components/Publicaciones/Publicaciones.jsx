import { useState, useEffect } from 'react';
import publicacionesData from '../../data/publicaciones.json';
import styles from './Publicaciones.module.css';

const Publicaciones = () => {
  // Estado para la publicación seleccionada
  const [selectedPublication, setSelectedPublication] = useState(null);

  // Efecto para seleccionar la última publicación por defecto y ajustar el orden
  useEffect(() => {
    // Aplana los datos y revierte el orden
    const allPublications = Object.keys(publicacionesData).flatMap(year =>
      publicacionesData[year]
    ).reverse(); // Invertir el orden de las publicaciones

    // Si hay publicaciones, selecciona la primera (última en el orden original)
    if (allPublications.length > 0) {
      setSelectedPublication(allPublications[0]);
    }
  }, []);

  // Función para manejar la selección de una publicación
  const handleSelectPublication = (publication) => {
    setSelectedPublication(publication);
  };

  return (
    <section className={styles.background}>
      <section className={styles.publicaciones}>
        <h1 className={styles.header}>PUBLICACIONES</h1>
        <div className={styles.main}>
          <div>
            {Object.keys(publicacionesData).flatMap(year =>
              publicacionesData[year]
            ).reverse() // Invertir el orden para la visualización
              .map((pub, index) => (
                <div
                  key={index}
                  className={`${styles.each} ${selectedPublication === pub ? styles.selected : ''}`}
                  onClick={() => handleSelectPublication(pub)}
                >
                  <h4 className={styles.title}>{pub.titulo}</h4>
                </div>
              ))
            }
          </div>
          <div className={styles.post}>
            {selectedPublication ? (
              <>
                <div className={styles.foto}></div>
                <h4 className={styles.postTitle}>{selectedPublication.titulo}</h4>
                <h4 className={styles.postDate}>{selectedPublication.anio}</h4>
                <h4 className={styles.postText}>{selectedPublication.resumen}</h4>
                <a className={styles.postLink} href={selectedPublication.link} target="_blank" rel="noopener noreferrer">Leer</a>
              </>
            ) : (
              <p>Selecciona una publicación para ver los detalles</p>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Publicaciones;
