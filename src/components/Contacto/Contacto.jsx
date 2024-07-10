import styles from './Contacto.module.css';
import { Historia, Mision, Internaiconal, Equipo } from '../Icons/Icons';

const Investigacion = () => {
    return (
        <>
            <section className={styles.header}>
                <h2>EdIPo</h2>
                <h2>Equipo de Investigación Política</h2>
            </section>

            <section className={styles.contacto}>
                <div className={styles.tematica}>
                    <Historia />
                    <h3>Historia</h3>
                    <h5>
                        Surgió en 2018 como un organismo de derechos humanos de nuevo tipo, para continuar el legado de los movimientos que impulsaron la construcción de Memoria, Verdad y Justicia en Argentina a partir de la última dictadura cívico-militar (1976-1983).
                    </h5>
                </div>

                <div className={styles.tematica}>
                    <Mision />

                    <h3>Visión, Misión, Vínculo con Revista Crisis</h3>
                    <h5>
                        El Equipo de Investigación Política de la Revista Crisis es un colectivo que explora estrategias innovadoras para la defensa de los derechos humanos a través del desarrollo de plataformas tecnológicas de participación ciudadana bajo las premisas de democratización de información y construcción colaborativa de conocimiento.
                    </h5>
                    <h5>
                        Ante el desafío cada vez más urgente de ¿qué hacer ante las violencias contemporáneas?, EdIPo genera herramientas, información y análisis que enriquezcan el debate público y fortalezcan las respuestas comunitarias.
                    </h5>
                    <h5>
                        Ya sea tirando del hilo hacia análisis en profundidad o a través de radiografías más extensas como mapas de poderes, la Investigación Política asume la información como territorio de disputa para dar nombre a una experimentación abierta e interdisciplinaria.
                    </h5>
                    <h5>
                        Desarrolla capacidades colectivas y conectivas de investigación, de nombrar, atestiguar y denunciar violencias, de defenderse mediante procesos de construcción social de evidencia, monitoreo colaborativo y construcción de registros independientes para fomentar miradas críticas, narrativas alternativas e intervenciones estratégicas.
                    </h5>
                </div>

                <div className={styles.tematica}>
                    <Internaiconal />

                    <h3>Colaboraciones internacionales</h3>
                    <h5>
                        Trabajamos a la par con organizaciones sociales de DDHH y movimientos sociales, como el CELS, XXXX.
                    </h5>
                </div>

                <div className={styles.tematica}>
                    <Equipo />

                    <h3>Equipo</h3>
                    <h5>
                        Aquí puedes añadir información sobre cada participante
                    </h5>
                </div>
            </section>
        </>
    );
};

export default Investigacion;
