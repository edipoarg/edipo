import publicacionesData from '../../data/publicaciones.json';
import styles from './Publicaciones.module.css';

const Publicaciones = () => {
  return (
    <section className={styles.publicaciones}>
      {Object.keys(publicacionesData).map(year => (
        <div key={year} className={styles.publicacion}>
          <h3>{year}</h3>
          {publicacionesData[year].length > 0 ? (
            <ul>
              {publicacionesData[year].map((pub, index) => (
                <li key={index}>
                  <h4>{pub.titulo}</h4>
                  <p>{pub.resumen}</p>
                  <p>{pub.anio}</p>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">Ver más</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Publicación no encontrada</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Publicaciones;
