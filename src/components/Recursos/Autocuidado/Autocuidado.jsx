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
      <section className={styles.links}>
        {recursos.map((recurso, index) => (
          <div className="recurso" key={index}>
  <Link to={`/recursos/autocuidado/${recurso.IMAGEN}`} className={styles.link}>
              {recurso.NOMBRE}
            </Link>          </div>
        ))}</section>
      </div>
      <section className={styles.mapa}>
      <Link to={`/recursos/autocuidado/BARCO`} >
        <div className={styles.barco}>
        <Barco className={styles.barcoIcon}/>
        <h4 className={styles.nombre}>ANONIMATO</h4>
        </div>
        </Link>

        <Link to={`/recursos/autocuidado/NUBE`} >
        <div className={styles.nube}>
        <Nube className={styles.nubeIcon} />
        <h4 className={styles.nombre}>ALMACENAMIENTO</h4>

        </div>
        </Link>

        <Link to={`/recursos/autocuidado/REMOLINO`} >

        <div className={styles.remolino}>
        <Remolino className={styles.remolinoIcon}/>
        <h4 className={styles.nombre}>WORMHOLE</h4>

        </div>
        <div className={styles.llave}>
        <Llave className={styles.llaveIcon}/>
        <h4 className={styles.nombre}>KEEPASS</h4>

        </div>
        </Link>

        <Link to={`/recursos/autocuidado/COFRE`} >

        <div className={styles.cofre}>
        <Cofre className={styles.cofreIcon}/>
        <h4 className={styles.nombre}>VERACRYPT</h4>

        </div>
        </Link>

        <Link to={`/recursos/autocuidado/BOTELLA`} >

        <div className={styles.botella}>
        <Botella className={styles.botellaIcon}/>
        <h4 className={styles.nombre}>PROTONMAIL
        </h4>

        </div>
        </Link>

        <Link to={`/recursos/autocuidado/CAMPING`} >

        <div className={styles.camping}>
        <Camping className={styles.campingIcon}/>
        <h4 className={styles.nombre}>TAILS</h4>

        </div>
        </Link>

      </section>
    </div>
  );
};

export default Autocuidado;
