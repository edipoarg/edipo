import { useState } from 'react';
import { Link } from 'react-router-dom';

import { proyectosData } from './ProyectosList';
import styles from './Proyectos.module.css';
import Background from '../Background/Background';

import LogoMapa from '../../svg/LogoMapa.svg';
import LogoAhora from '../../svg/LogoAhora.svg';
import LogoAncora from '../../svg/LogoAncora.svg';
import LogoRadar from '../../svg/LogoRadar.svg';

import {
  FiArrowRight,
  FiArrowUpRight,
  FiGlobe,
  FiLock
} from 'react-icons/fi';


/* =========================================
   CONFIGURACIÓN DE PROYECTOS
========================================= */

const configuracion = {
  mapa: {
    color: '#b64ef0',
    logo: LogoMapa,
    preview: 'mapa.webp',
    resumen:
      'Una herramienta colaborativa de cuidado ciudadano para registrar, visibilizar y enfrentar la violencia policial.'
  },

  ahora: {
    color: '#d5fa00',
    logo: LogoAhora,
    preview: 'ahora.webp',
    resumen:
      'Un archivo nacional de registros audiovisuales sobre la represión, la protesta social y la construcción de memoria colectiva.'
  },

  ancora: {
    color: '#00dce5',
    logo: LogoAncora,
    preview: 'ancora.webp',
    resumen:
      'Una plataforma de inteligencia colectiva para compartir información confiable y construir conocimiento para la acción política.'
  },

  radar: {
    color: '#0087ef',
    logo: LogoRadar,
    preview: 'radar.webp',
    resumen:
      'Un mapeo colaborativo de ataques protagonizados por derechas radicalizadas para fortalecer las estrategias de cuidado colectivo.'
  }
};


/* =========================================
   RUTAS INTERNAS
========================================= */

const rutaProyecto = (proyecto) =>
  `/tecnopoliticas/proyectos/${proyecto.dominio}`;


/* =========================================
   ORDEN ALEATORIO
========================================= */

const mezclarProyectos = (datos) => {

  const lista = [...datos];

  for (let i = lista.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [lista[i], lista[j]] = [lista[j], lista[i]];

  }

  return lista;
};


/* =========================================
   LOGO DEL PROYECTO
========================================= */

const LogoProyecto = ({ proyecto, config }) => {

  return (

    <div
      className={styles.logoProyecto}
      data-proyecto={proyecto.dominio}
      aria-hidden="true"
    >

      {config.logo ? (

        <img
          src={config.logo}
          alt=""
          className={styles.logoImagen}
          decoding="async"
        />

      ) : (

        <FiGlobe />

      )}

    </div>

  );

};


/* =========================================
   PREVISUALIZACIÓN DE LA PLATAFORMA
========================================= */

const Preview = ({ proyecto, config }) => {

  const direccion = proyecto.enlace
    ? proyecto.enlace.replace(/^https?:\/\//, '')
    : proyecto.titulo;

  const contenido = (

    <>

      <div className={styles.browserBar}>

        <div className={styles.browserDots}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.address}>
          <FiLock />
          <span>{direccion}</span>
        </div>

        <FiArrowUpRight />

      </div>


      <div className={styles.previewContent}>

        <div className={styles.previewFallback}>

          <LogoProyecto
            proyecto={proyecto}
            config={config}
          />

          <strong>
            {proyecto.titulo}
          </strong>

          <span>
            PLATAFORMA TECNOPOLÍTICA
          </span>

        </div>


        {config.preview && (

          <img
            key={config.preview}
            className={styles.previewImage}
            src={`${import.meta.env.BASE_URL}previews/${config.preview}`}
            alt={`Previsualización de ${proyecto.titulo}`}
            loading="lazy"
            decoding="async"
            width="960"
            height="540"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />

        )}


        <div className={styles.previewOverlay}>

          <span>

            {proyecto.enlace
              ? 'EXPLORAR PLATAFORMA'
              : 'CONOCER PROYECTO'}

            <FiArrowUpRight />

          </span>

        </div>

      </div>

    </>

  );


  return proyecto.enlace ? (

    <a
      className={styles.browser}
      href={proyecto.enlace}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Explorar ${proyecto.titulo}`}
    >

      {contenido}

    </a>

  ) : (

    <Link
      className={styles.browser}
      to={rutaProyecto(proyecto)}
    >

      {contenido}

    </Link>

  );

};


/* =========================================
   TARJETA DE PROYECTO
========================================= */

const Proyecto = ({ proyecto, index }) => {

  const config = configuracion[proyecto.dominio] || {
    color: '#d5fa00'
  };


  return (

    <article
      className={styles.proyecto}
      style={{ '--acento': config.color }}
    >

      {/* BARRA SUPERIOR */}

      <div className={styles.proyectoBarra}>

        <div className={styles.proyectoIdentidad}>

          <LogoProyecto
            proyecto={proyecto}
            config={config}
          />

          <span>
            {proyecto.titulo}
          </span>

        </div>

        <span className={styles.numero}>

          {String(index + 1).padStart(2, '0')}

          {' / '}

          {proyecto.año}

        </span>

      </div>


      {/* CONTENIDO */}

      <div className={styles.proyectoContenido}>

        <Preview
          proyecto={proyecto}
          config={config}
        />


        {/* INFORMACIÓN */}

        <div className={styles.informacion}>

          <h2 className={styles.titulo}>
            {proyecto.titulo}
          </h2>

          <h3 className={styles.bajada}>
            {proyecto.bajada}
          </h3>

          <p className={styles.descripcion}>
            {config.resumen || proyecto.descripcion}
          </p>

        </div>


        {/* ACCIONES */}

        <div className={styles.acciones}>

          {proyecto.enlace ? (

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.explorar}
            >

              EXPLORAR PLATAFORMA

              <FiArrowUpRight />

            </a>

          ) : (

            <Link
              to={rutaProyecto(proyecto)}
              className={styles.explorar}
            >

              CONOCER PLATAFORMA

              <FiArrowRight />

            </Link>

          )}


          <Link
            to={rutaProyecto(proyecto)}
            className={styles.sobreProyecto}
          >

            Sobre el proyecto

            <FiArrowRight />

          </Link>

        </div>

      </div>

    </article>

  );

};


/* =========================================
   PÁGINA PRINCIPAL
========================================= */

const Proyectos = () => {

  const [proyectos] = useState(
    () => mezclarProyectos(proyectosData)
  );


  return (

    <Background>

      <main className={styles.proyectos}>

        {/* ENCABEZADO */}

        <header className={styles.encabezado}>

          <div className={styles.identidad}>

            <span className={styles.etiqueta}>
              /// TECNOPOLÍTICAS
            </span>

            <h1 className={styles.headerTitle}>
              Proyectos
            </h1>

            <p className={styles.subTitle}>

              Bajo la premisa de la información como
              autodefensa desarrollamos plataformas de
              monitoreo ciudadano y experiencias de
              periodismo abierto en red con diversos
              actores de la sociedad civil.

            </p>

          </div>


          <div className={styles.contador}>

            <span className={styles.contadorNumero}>

              {String(proyectos.length).padStart(2, '0')}

            </span>

            <span>

              PLATAFORMAS

              <br />

              TECNOPOLÍTICAS

            </span>

          </div>

        </header>


        {/* LISTADO DE PROYECTOS */}

        <section className={styles.list}>

          {proyectos.map((proyecto, index) => (

            <Proyecto
              key={proyecto.dominio}
              proyecto={proyecto}
              index={index}
            />

          ))}

        </section>


        {/* PIE GRÁFICO */}

        <footer className={styles.cierre}>

          <span className={styles.cuadrado} />

          <span>
            Equipo de investigación Política
          </span>

          <span className={styles.linea} />

          <span className={styles.barras}>
            /////////
          </span>

          <span className={styles.linea} />

          <strong>
            EDIPO / PROYECTOS
          </strong>

        </footer>

      </main>

    </Background>

  );

};

export default Proyectos;