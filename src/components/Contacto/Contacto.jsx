import styles from './Contacto.module.css';
import { Historia, Mision, Internacional, Equipo } from '../Icons/Icons';

const tituloPrincipal = "EdIPo";
const subtituloPrincipal = "Equipo de Investigación Política";

const historiaTitulo = "Historia";
const historiaDescripcion = "Surgió en 2018 como un organismo de derechos humanos de nuevo tipo, para continuar el legado de los movimientos que impulsaron la construcción de Memoria, Verdad y Justicia en Argentina a partir de la última dictadura cívico-militar (1976-1983).";

const misionTitulo = "Visión, Misión, Vínculo con Revista Crisis";
const misionDescripciones = [
  "El Equipo de Investigación Política de la Revista Crisis es un colectivo que explora estrategias innovadoras para la defensa de los derechos humanos a través del desarrollo de plataformas tecnológicas de participación ciudadana bajo las premisas de democratización de información y construcción colaborativa de conocimiento.",
  "Ante el desafío cada vez más urgente de ¿qué hacer ante las violencias contemporáneas?, EdIPo genera herramientas, información y análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.",
  "Ya sea tirando del hilo hacia análisis en profundidad o a través de radiografías más extensas como mapas de poderes, la Investigación Política asume la información como territorio de disputa para dar nombre a una experimentación abierta e interdisciplinaria.",
  "Desarrolla capacidades colectivas y conectivas de investigación, de nombrar, atestiguar y denunciar violencias, de defenderse mediante procesos de construcción social de evidencia, monitoreo colaborativo y construcción de registros independientes para fomentar miradas críticas, narrativas alternativas e intervenciones estratégicas."
];

const internacionalTitulo = "Colaboraciones internacionales";
const internacionalDescripcion = "Trabajamos a la par con organizaciones sociales de DDHH y movimientos sociales, como el CELS, XXXX.";

const equipoTitulo = "Equipo";
const equipoDescripcion = "Aquí puedes añadir información sobre cada participante";

const Contacto = () => {
  return (
    <>
      <section className={styles.header}>
        <h2>{tituloPrincipal}</h2>
        <h2>{subtituloPrincipal}</h2>
      </section>

      <section className={styles.contacto}>
        <div className={styles.tematica}>
          <Historia />
          <h3>{historiaTitulo}</h3>
          <h5>{historiaDescripcion}</h5>
        </div>

        <div className={styles.tematica}>
          <Mision />
          <h3>{misionTitulo}</h3>
          {misionDescripciones.map((desc, index) => (
            <h5 key={index}>{desc}</h5>
          ))}
        </div>

        <div className={styles.tematica}>
          <Internacional />
          <h3>{internacionalTitulo}</h3>
          <h5>{internacionalDescripcion}</h5>
        </div>

        <div className={styles.tematica}>
          <Equipo />
          <h3>{equipoTitulo}</h3>
          <h5>{equipoDescripcion}</h5>
        </div>
      </section>
    </>
  );
};

export default Contacto;
