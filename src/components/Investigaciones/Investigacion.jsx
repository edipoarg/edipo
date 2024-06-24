// En el componente Investigacion.jsx
import { useParams } from 'react-router-dom';
import { investigationsData } from './InvestigacionesList';

const Investigacion = () => {
  const { dominio } = useParams();
  const investigacion = investigationsData.find(investigacion => investigacion.dominio === dominio);

  if (!investigacion) {
    return <p>La investigación no fue encontrada.</p>;
  }

  const { nombre, aclaracion, textoLargo, enlace } = investigacion;

  return (
    <div className="investigation-container">

      <h2>{nombre}</h2>

      <h3>{aclaracion}</h3>
      <p>{textoLargo}</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer">
        <button>Ver más</button>
      </a>
    </div>
  );
};

export default Investigacion;
