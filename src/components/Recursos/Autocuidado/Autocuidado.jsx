import { useEffect, useState } from 'react';
import autocuidadoData from '../../../data/autocuidado.json';
import styles from './Autocuidado.module.css';
import { Link } from 'react-router-dom';

import barco from '../../../svg/barco.svg';
import botella from '../../../svg/botella.svg';
import campamentoTails from '../../../svg/campamentoTails.svg';
import cofre from '../../../svg/cofre.svg';
import llave from '../../../svg/llave.svg';
import nubes from '../../../svg/nubes.svg';
import remolino from '../../../svg/remolino.svg';

const iconMap = {
  BARCO: barco,
  BOTELLA: botella,
  CAMPING: campamentoTails,
  COFRE: cofre,
  LLAVE: llave,
  NUBE: nubes,
  REMOLINO: remolino,
};

const Autocuidado = () => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    setRecursos(autocuidadoData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.list} ${styles.mobileList}`}>
        <h2 className={styles.text}>AUTOCUIDADO</h2>
        <section className={styles.links}>
          {recursos.map((recurso, index) => (
            <div className={styles.recurso} key={index}>
              <Link to={`/recursos/autocuidado/${recurso.IMAGEN}`} className={styles.link}>
                {recurso.NOMBRE}
              </Link>
            </div>
          ))}
        </section>
      </div>
      <section className={`${styles.mapa} ${styles.mobileMapa}`}>
        {Object.entries(iconMap).map(([key, value]) => {
          const recurso = recursos.find(recurso => recurso.IMAGEN === key);
          return (
            <Link key={key} to={`/recursos/autocuidado/${key}`} className={styles.a}>
              <div className={styles[key.toLowerCase()]}>
                <section className={styles.card}>
                  <div className={styles.image} style={{ backgroundImage: `url(${value})` }}>
                  </div>
                  <h4 className={styles.nombre}>
                    {recurso ? recurso.NOMBRE : key}
                  </h4>
                </section>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Autocuidado;
