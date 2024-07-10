// En el componente Investigations.jsx
import InvestigationButton from './InvestigationButon'; // Ajusta la ruta según tu estructura de archivos
import { investigationsData } from './InvestigacionesList'; // Ajusta la ruta según tu estructura de archivos
import styles from './Investigaciones.module.css';

const Investigations = () => {
  return (
    <div className="investigations-container">
      <h1>Proyectos / Tecnopolíticas</h1>
      <ul className={styles.seccion}>
        {investigationsData.map((investigacion, index) => (
          <li key={index}>
            <InvestigationButton
              nombre={investigacion.nombre}
              dominio={investigacion.dominio}
              geometryType={investigacion.geometryType} // Pasa la propiedad geometryType
            />
          </li>
        ))}
      </ul>
      <hr />
      {/* Deja de renderizar todas las investigaciones aquí */}
    </div>
  );
};

export default Investigations;
