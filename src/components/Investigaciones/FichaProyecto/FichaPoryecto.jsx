import styles from './FichaProyecto.module.css';
import { useParams } from 'react-router-dom';
import { investigationsData } from '../InvestigacionesList';
import Background from '../../Background/Background';
import Header from '../../Header/Header';

const FichaProyecto = () => {
  const { dominio } = useParams();
  const investigacion = investigationsData.find(investigacion => investigacion.dominio === dominio);

  if (!investigacion) {
    return <p>La investigación no fue encontrada.</p>;
  }

  const { titulo, bajada, año, descripcion, enlace, ig, tw, fb, mail } = investigacion;

  return (
    <Background theme="dark">
      <div className="investigation-container">
        {/* Agregar el Header con el título y la bajada */}
        <Header 
          title={titulo} 
          subTitle={bajada} 
        />

        <h3>{año}</h3>
        <p>{descripcion}</p>
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          <button>Ver más</button>
        </a>
        <a href={ig} target="_blank" rel="noopener noreferrer">
          <button>ig</button>
        </a>
        <a href={tw} target="_blank" rel="noopener noreferrer">
          <button>tw</button>
        </a>
        <a href={fb} target="_blank" rel="noopener noreferrer">
          <button>fb</button>
        </a>
        <a href={mail} target="_blank" rel="noopener noreferrer">
          <button>mail</button>
        </a>
      </div>
    </Background>
  );
};

export default FichaProyecto;
