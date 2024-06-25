import { useEffect, useState } from 'react';
import autocuidadoData from '../../../data/autocuidado.json';
import { Barco, Nube, Remolino, Llave, Cofre, Botella, Camping } from '../../Icons/Icons';
import styles from './Autocuidado.module.css';
import { Link } from 'react-router-dom';



const Autocuidado = () => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde el JSON
    setRecursos(autocuidadoData);
  }, []);

  return (
    <div className="container">
      <div className={styles.list}>
      <h2 className={styles.text}>Autocuidado</h2>
        {recursos.map((recurso, index) => (
          <div className="recurso" key={index}>
  <Link to={`/recursos/autocuidado/${recurso.IMAGEN}`} className={styles.link}>
              {recurso.NOMBRE}
            </Link>          </div>
        ))}
      </div>
      <section className={styles.mapa}>
        <div>
        <Barco className={styles.barco}/>
        </div>
        <div>
        <Nube className={styles.nube} />
        </div>
        <div>
        <Remolino className={styles.remolino}/>
        </div>
        <div>
        <Llave className={styles.llave}/>
        </div>
        <div>
        <Cofre className={styles.cofre}/>
        </div>
        <div>
        <Botella className={styles.botella}/>
        </div>
        <div>
        <Camping className={styles.camping}/>
        </div>
      </section>
    </div>
  );
};

export default Autocuidado;
