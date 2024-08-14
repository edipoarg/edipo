// FichaInteligencia.jsx

import recursosInteligencia from '../../../data/inteligencia.json'; // Importa el archivo JSON
import { useParams } from 'react-router-dom';
import styles from './FichaInteligencia.module.css'; // Asegúrate de crear este archivo CSS

// Import SVG files
import osint from '../../../svg/osint.svg';
import dorking from '../../../svg/dorking.svg';
import duckduckgo from '../../../svg/duckduckgo.svg';
import dorkingDefensivo from '../../../svg/dorkingDefensivo.svg';
import verificacion from '../../../svg/verificacion.svg';
import archivo from '../../../svg/archivo.svg';
import geolocalizacion from '../../../svg/geolocalizacion.svg';
import metadatos from '../../../svg/metadatos.svg';
import otrosRecursos from '../../../svg/otrosRecursos.svg';

const iconMap = {
  OSINT: osint,
  DORKING: dorking,
  DUCKDUCKGO: duckduckgo,
  DORKINGDEFENSIVO: dorkingDefensivo,
  VERIFICACION: verificacion,
  ARCHIVO: archivo,
  GEOLOCALIZACION: geolocalizacion,
  METADATOS: metadatos,
  OTROSRECURSOS: otrosRecursos,
};

const FichaInteligencia = () => {
    const { IMAGEN } = useParams(); // Obtiene el parámetro de la URL (imagen del recurso)

    // Busca el recurso por su imagen en el JSON
    const recurso = recursosInteligencia.herramientas.find(item => item.imagen === IMAGEN);

    if (!recurso) {
        return <div>No se encontró el recurso.</div>;
    }

    // Obtén la imagen de fondo correspondiente
    const backgroundImage = iconMap[recurso.imagen.toUpperCase()] || null;

    return (
        <div className={styles.container}>
            <section className={styles.ficha}>
                <h2 className={styles.name}>{recurso.nombre}</h2>
                <div
                    className={styles.iconContainer}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <p className={styles.bajada}>{recurso.bajada}</p>
                <p className={styles.info}>{recurso.info}</p>
                <p>Tag: {recurso.tag}</p>
                {recurso.link && <p>Link: <a href={recurso.link} className={styles.link}>{recurso.link}</a></p>}
                {recurso.imagen && <img src={recurso.imagen} alt={`Imagen ${recurso.nombre}`} />}
            </section>
        </div>
    );
}

export default FichaInteligencia;
