// Inteligencia.jsx

import { Link } from 'react-router-dom'; // Asumiendo que se utiliza React Router para las rutas
import recursosInteligencia from '../../../data/inteligencia.json'; // Importa el archivo JSON

const Inteligencia = () => {
    return (
        <div className="inteligencia-container">
            <h2>MANUAL INTELIGENCIA ABIERTA</h2>
            <p>Este manual ofrece técnicas avanzadas para la investigación utilizando fuentes abiertas y diversas herramientas de búsqueda en línea.</p>
            <p>Ya sea que desee aplicar búsquedas avanzadas en Internet, recuperar contenido en línea eliminado, usar mapas para verificar información o más, aquí puede comprender las técnicas clave que debe utilizar en su investigación.</p>
            <p>Link: <a href="https://kit.exposingtheinvisible.org/en/">enlace</a></p>
            <img src="TRAMA/ RED" alt="Imagen manual inteligencia abierta" />

            <div className="recursos-list">
                <h3>Recursos de Inteligencia Abierta:</h3>
                <ul>
                    {recursosInteligencia.herramientas.map((recurso, index) => (
                        <li key={index}>
                            <Link to={`/recursos/inteligencia_abierta/${recurso.imagen}`}>
                                {recurso.nombre}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Inteligencia;
