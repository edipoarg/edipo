import { useParams } from 'react-router-dom';
import autocuidadoData from '../../../data/autocuidado.json';
import styles from './FichaAutocuidado.module.css';

// Import SVG files
import barco from '../../../svg/barco.svg';
import botella from '../../../svg/botella.svg';
import campamentoTails from '../../../svg/campamentoTails.svg';
import cofre from '../../../svg/cofre.svg';
import llave from '../../../svg/llave.svg';
import nubes from '../../../svg/nubes.svg';
import remolino from '../../../svg/remolino.svg';

const FichaAutocuidado = () => {
  const { IMAGEN } = useParams(); // Obtener el parámetro IMAGEN de la URL

  // Encontrar el recurso correspondiente en autocuidadoData según IMAGEN
  const recurso = autocuidadoData.find(item => item.IMAGEN === IMAGEN);

  if (!recurso) {
    return <div>No se encontró el recurso</div>; // Manejo de caso donde no se encuentra el recurso
  }

  // Función para obtener la URL del background image según el nombre de IMAGEN
  const getBackgroundImageByImagen = (imagen) => {
    switch (imagen) {
      case 'REMOLINO':
        return `url(${remolino})`;
      case 'NUBE':
        return `url(${nubes})`;
      case 'BARCO':
        return `url(${barco})`;
      case 'LLAVE':
        return `url(${llave})`;
      case 'COFRE':
        return `url(${cofre})`;
      case 'BOTELLA':
        return `url(${botella})`;
      case 'CAMPING':
        return `url(${campamentoTails})`;
      default:
        return null;
    }
  };

  return (
    <div className={styles.Container}>   

      <section className={styles.ficha}>
      <h2 className={styles.name}>{recurso.NOMBRE}</h2>

        <div
          className={styles.iconContainer}
          style={{ backgroundImage: getBackgroundImageByImagen(recurso.IMAGEN) }}
        />
                <a href={recurso.LINK} className={styles.link}>WEB</a>

        <h3 className={styles.bajada}>{recurso.BAJADA}</h3>
        <h5 className={styles.info}>{recurso.INFO}</h5>
      </section>
      </div>  );
};

export default FichaAutocuidado;
