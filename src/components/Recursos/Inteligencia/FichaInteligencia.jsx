// FichaInteligencia.jsx

import recursosInteligencia from '../../../data/inteligencia.json'; // Importa el archivo JSON
import { useParams } from 'react-router-dom';

const FichaInteligencia = () => {
    const { IMAGEN } = useParams(); // Obtiene el parámetro de la URL (imagen del recurso)

    // Busca el recurso por su imagen en el JSON
    const recurso = recursosInteligencia.herramientas.find(item => item.imagen === IMAGEN);

    if (!recurso) {
        return <div>No se encontró el recurso.</div>;
    }

    return (
        <div className="ficha-inteligencia">
            <h2>{recurso.nombre}</h2>
            <p>{recurso.bajada}</p>
            <p>{recurso.info}</p>
            <p>Tag: {recurso.tag}</p>
            {recurso.link && <p>Link: <a href={recurso.link}>{recurso.link}</a></p>}
            {recurso.imagen && <img src={recurso.imagen} alt={`Imagen ${recurso.nombre}`} />}
        </div>
    );
}

export default FichaInteligencia;
