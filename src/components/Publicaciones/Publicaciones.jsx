import styles from './Publicaciones.module.css';

const publicaciones = {
  2023: [
    "Los dinosaurios no van a desaparecer | Revista Crisis",
    "La violencia avanza: Informe a un año del atentado a Cristina Fernández de Kirchner | Revista Crisis",
    "Quién mató a Facundo | Revista Crisis",
    "La batalla por el 5G | Revista Crisis"
  ],
  2022: [
    "La madre de todas las rentas | Revista Crisis"
  ],
  2021: [],
  2020: [
    "El conflicto por la tierra en guernica | Revista Crisis",
    "La cuestión evangélica | Revista Crisis"
  ]
};

const Publicaciones = () => {
  return (
    <section className={styles.publicaciones}>
      {Object.keys(publicaciones).map(year => (
        <div key={year} className={styles.publicacion}>
          <h3>{year}</h3>
          {publicaciones[year].length > 0 ? (
            <ul>
              {publicaciones[year].map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          ) : (
            <p>No hay publicaciones disponibles para este año.</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Publicaciones;
