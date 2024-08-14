import { Link } from 'react-router-dom'; // Asumiendo que se utiliza React Router para las rutas
import recursosInteligencia from '../../../data/inteligencia.json'; // Importa el archivo JSON
import styles from './Inteligencia.module.css';

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
  

  const Inteligencia = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.bajada}>MANUAL INTELIGENCIA ABIERTA</h2>
        <h4 className={styles.bajada}>Este manual ofrece técnicas avanzadas para la investigación utilizando fuentes abiertas y diversas herramientas de búsqueda en línea.</h4>
        <h4 className={styles.bajada}>Ya sea que desee aplicar búsquedas avanzadas en Internet, recuperar contenido en línea eliminado, usar mapas para verificar información o más, aquí puede comprender las técnicas clave que debe utilizar en su investigación.</h4>
        
  
        <div className={styles.recursosList}>
          {recursosInteligencia.herramientas.map((recurso, index) => (
            <div className={styles.recurso} key={index}>
              <Link to={`/recursos/inteligencia_abierta/${recurso.imagen}`} className={styles.link}>
                <img 
                  src={iconMap[recurso.imagen]} 
                  alt={recurso.nombre} 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'ruta/de/imagen/por/defecto.svg'; }} 
                />
                <h4>{recurso.nombre}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Inteligencia;
