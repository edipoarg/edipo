import styles from "./Talleres.module.css";

const talleres = [
    {
        nombre: "Guía práctica para la investigación política en el SXXI",
        fecha: "Lunes 8, 15, 22 y 29 de agosto 2022 (18 a 20 hs.)",
        lugar: "La tribu (Lambaré 873)",
        url: "https://www.revistacrisis.com.ar/",
        videoUrl: "https://www.youtube.com/embed/video_id_1"
    },
    {
        nombre: "Construcción del Mapa de la Policía",
        fecha: "Abril 2023",
        lugar: "CCK",
        url: "",
        videoUrl: "https://www.youtube.com/embed/video_id_2"
    },
    {
        nombre: "Taller de cuidado y primero auxilios para el registro en manifestaciones",
        fecha: "marzo 2024",
        lugar: "La tribu (Lambaré 873)",
        url: "",
        videoUrl: "https://www.youtube.com/embed/video_id_3"
    },
    {
        nombre: "La investigación política en el siglo XXI",
        fecha: "4, 11, 18 y 25 de Abril 2023",
        lugar: "CCK",
        url: "https://www.cck.gob.ar/events/la-investigacion-politica-en-el-siglo-xxi-taller-con-el-equipo-de-investigacion-politica/",
        videoUrl: "https://www.youtube.com/embed/video_id_4"
    }
];

const title = "Talleres";
const subTitle = "Talleres/seminarios dados por EdIPo";
const info = "En esta sección encontrarás un listado de los talleres y seminarios que hemos ofrecido. Cada uno incluye detalles sobre el contenido, fechas, y enlaces a videos y recursos adicionales."

const Talleres = () => {
    return (
        <div className={styles.talleres}>
            <section className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subTitle}>{subTitle}</h2>
            <p className={styles.info}>{info}</p>
            </section>
            <div className={styles.list}>
                {talleres.map((taller, index) => (
                    <div key={index} className={styles.taller}>
                        <h3 className={styles.name}>{taller.nombre}</h3>
                        <p className={styles.date}><strong>Fecha:</strong> {taller.fecha}</p>
                        <p className={styles.list}><strong>Lugar:</strong> {taller.lugar}</p>
                        {taller.url && <p><a href={taller.url} target="_blank" rel="noopener noreferrer">Más información</a></p>}
                        {taller.videoUrl && <iframe className={styles.iframe}width="560" height="315" src={taller.videoUrl} title={taller.nombre} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Talleres;
