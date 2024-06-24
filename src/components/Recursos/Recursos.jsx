import { Link } from "react-router-dom";

const Recursos = () =>{

return(
    <>
    <section >
    <h2>recursos</h2>
    </section>
    <section>
    <Link>
    <div>  <h3>seguridad</h3></div>
    </Link>
    <Link>
       <div><h3>busqueda</h3></div> 
        </Link>
        <Link>
        <div><h3>Guia mapa</h3></div>
        </Link>
    </section>


    </>
);};

export default Recursos;