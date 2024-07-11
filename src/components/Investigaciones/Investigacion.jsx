// En el componente Investigacion.jsx
import { useParams } from 'react-router-dom';
import { investigationsData } from './InvestigacionesList';

const Investigacion = () => {
  const { dominio } = useParams();
  const investigacion = investigationsData.find(investigacion => investigacion.dominio === dominio);

  if (!investigacion) {
    return <p>La investigación no fue encontrada.</p>;
  }

  const { titulo, bajada, año, descripcion, enlace, ig, tw, fb, mail} = investigacion;

  return (
    <div className="investigation-container">

      <h2>{titulo}</h2>

      <h3>{bajada}</h3>
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
  );
};

export default Investigacion;
