import { useParams } from 'react-router-dom';
import autocuidadoData from '../../../data/autocuidado.json';
import { Barco, Nube, Remolino, Llave, Cofre, Botella, Camping } from '../../Icons/Icons';
import styles from './FichaAutocuidado.module.css'

const FichaAutocuidado = () => {
  const { IMAGEN } = useParams(); // Obtener el parámetro IMAGEN de la URL

  // Encontrar el recurso correspondiente en autocuidadoData según IMAGEN
  const recurso = autocuidadoData.find(item => item.IMAGEN === IMAGEN);

  if (!recurso) {
    return <div>No se encontró el recurso</div>; // Manejo de caso donde no se encuentra el recurso
  }

  // Función para obtener el icono correspondiente según el nombre de IMAGEN
  const getIconByImagen = (imagen) => {
    switch (imagen) {
      case 'REMOLINO':
        return <Remolino className={styles.icon} />;
      case 'NUBE':
        return <Nube className={styles.icon} />;
      case 'BARCO':
        return <Barco className={styles.icon} />;
      case 'LLAVE':
        return <Llave className={styles.icon} />;
      case 'COFRE':
        return <Cofre className={styles.icon} />;
      case 'BOTELLA':
        return <Botella className={styles.icon} />;
      case 'CAMPING':
        return <Camping className={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.Container}>
        <section className={styles.ficha}>
       <div className={styles.iconContainer}>
        {getIconByImagen(recurso.IMAGEN)}
      </div>
      <h2>{recurso.NOMBRE}</h2>
      <h3 className={styles.bajada}>{recurso.BAJADA}</h3>
      <h5 className={styles.info}>{recurso.INFO}</h5>
      <a href={recurso.LINK} className={styles.link}>WEB</a>
      </section>
    </div>
  );
};

export default FichaAutocuidado;
