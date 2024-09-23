import styles from './FichaProyecto.module.css';
import { useParams } from 'react-router-dom';
import { investigationsData } from '../InvestigacionesList';
import Background from '../../Background/Background';
import Header from '../../Header/Header';

// Importar íconos de react-icons
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaLink } from 'react-icons/fa';

const FichaProyecto = () => {
  const { dominio } = useParams();
  const investigacion = investigationsData.find(investigacion => investigacion.dominio === dominio);

  if (!investigacion) {
    return <p>La investigación no fue encontrada.</p>;
  }

  const { titulo, bajada, descripcion, enlace, ig, tw, fb, mail } = investigacion;

  return (
    <Background theme="dark">
      <div className="investigation-container">
        {/* Agregar el Header con el título y la bajada */}
        <Header 
          title={titulo} 
          subTitle={bajada} 
        />

        <p className={styles.descripcion}>{descripcion}</p>
        
        <section className={styles.links}>
          {/* Condicionalmente renderiza los enlaces si tienen información */}
          {enlace && (
            <a href={enlace} target="_blank" rel="noopener noreferrer">
              <button><FaLink /> WEB</button>
            </a>
          )}
          {ig && (
            <a href={ig} target="_blank" rel="noopener noreferrer">
              <button><FaInstagram /></button>
            </a>
          )}
          {tw && (
            <a href={tw} target="_blank" rel="noopener noreferrer">
              <button><FaTwitter /></button>
            </a>
          )}
          {fb && (
            <a href={fb} target="_blank" rel="noopener noreferrer">
              <button><FaFacebook /></button>
            </a>
          )}
          {mail && (
            <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
              <button><FaEnvelope /></button>
            </a>
          )}
        </section>
        
      </div>
    </Background>
  );
};

export default FichaProyecto;
