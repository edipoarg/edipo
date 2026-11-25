import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createHashRouter,
    RouterProvider,
    Navigate,
    useParams
} from 'react-router-dom';

import './index.css';

import Root from './routes/Root.jsx';


// =====================================
// INICIO
// =====================================

import Landing from './components/Landing/Landing.jsx';


// =====================================
// TECNOPOLÍTICAS
// =====================================

import Proyectos from './components/Tecnopoliticas/Proyectos.jsx';

import FichaProyecto from './components/Tecnopoliticas/FichaProyecto/FichaProyecto.jsx';


// =====================================
// INVESTIGACIONES
// =====================================

import Investigaciones from './components/Investigaciones/Investigaciones.jsx';

import InvestigacionFicha from './components/Investigaciones/InvestigacionFicha.jsx';


// =====================================
// PUBLICACIONES
// =====================================

import Publicaciones from './components/Publicaciones/Publicaciones.jsx';


// =====================================
// RECURSOS
// =====================================

import Recursos from './components/Recursos/Recursos.jsx';

import Autocuidado from './components/Recursos/Autocuidado/Autocuidado.jsx';

import FichaAutocuidado from './components/Recursos/Autocuidado/FichaAutocuidado.jsx';

import Inteligencia from './components/Recursos/Inteligencia/Inteligencia.jsx';

import FichaInteligencia from './components/Recursos/Inteligencia/FichaInteligencia.jsx';


// =====================================
// OTRAS SECCIONES
// =====================================

import Talleres from './components/Talleres/Talleres.jsx';

import Equipo from './components/Equipo/Equipo.jsx';

import Colabora from './components/Colabora/Colabora.jsx';


// =====================================
// RUTAS PRINCIPALES
// =====================================

const RUTA_PROYECTOS = '/tecnopoliticas/proyectos';


// =====================================
// REDIRECCIÓN DE FICHAS ANTERIORES
// =====================================

const RedireccionProyecto = () => {

    const { dominio } = useParams();

    return (
        <Navigate
            to={`${RUTA_PROYECTOS}/${dominio}`}
            replace
        />
    );

};


// =====================================
// ROUTER
// =====================================

const router = createHashRouter([

    {
        path: '/',
        element: <Root />,

        children: [

            // =============================
            // INICIO
            // =============================

            {
                index: true,
                element: <Landing />
            },


            // =============================
            // TECNOPOLÍTICAS
            // =============================

            {
                path: 'tecnopoliticas/proyectos',
                element: <Proyectos />
            },

            {
                path: 'tecnopoliticas/proyectos/:dominio',
                element: <FichaProyecto />
            },


            // =============================
            // INVESTIGACIONES
            // =============================

            {
                path: 'investigaciones',
                element: <Investigaciones />
            },

            {
                path: 'investigaciones/:id',
                element: <InvestigacionFicha />
            },


            // =============================
            // PUBLICACIONES
            // =============================

            {
                path: 'publicaciones',
                element: <Publicaciones />
            },


            // =============================
            // RECURSOS
            // =============================

            {
                path: 'recursos',
                element: <Recursos />
            },


            // AUTOCUIDADO

            {
                path: 'recursos/autocuidado',
                element: <Autocuidado />
            },

            {
                path: 'recursos/autocuidado/:IMAGEN',
                element: <FichaAutocuidado />
            },


            // INTELIGENCIA ABIERTA

            {
                path: 'recursos/inteligencia_abierta',
                element: <Inteligencia />
            },

            {
                path: 'recursos/inteligencia_abierta/:IMAGEN',
                element: <FichaInteligencia />
            },


            // =============================
            // TALLERES
            // =============================

            {
                path: 'talleres',
                element: <Talleres />
            },


            // =============================
            // EQUIPO
            // =============================

            {
                path: 'equipo',
                element: <Equipo />
            },


            // =============================
            // COLABORA
            // =============================

            {
                path: 'colabora',
                element: <Colabora />
            },


            // =============================
            // COMPATIBILIDAD
            // =============================

            {
                path: 'tecnopoliticas',
                element: (
                    <Navigate
                        to={RUTA_PROYECTOS}
                        replace
                    />
                )
            },

            {
                path: 'proyectos',
                element: (
                    <Navigate
                        to={RUTA_PROYECTOS}
                        replace
                    />
                )
            },

            {
                path: 'proyectos/:dominio',
                element: <RedireccionProyecto />
            },

            {
                path: 'lista',
                element: (
                    <Navigate
                        to={RUTA_PROYECTOS}
                        replace
                    />
                )
            },

            {
                path: 'mapa',
                element: (
                    <Navigate
                        to={`${RUTA_PROYECTOS}/mapa`}
                        replace
                    />
                )
            },

            {
                path: 'ahora',
                element: (
                    <Navigate
                        to={`${RUTA_PROYECTOS}/ahora`}
                        replace
                    />
                )
            },

            {
                path: 'ancora',
                element: (
                    <Navigate
                        to={`${RUTA_PROYECTOS}/ancora`}
                        replace
                    />
                )
            },

            {
                path: 'radar',
                element: (
                    <Navigate
                        to={`${RUTA_PROYECTOS}/radar`}
                        replace
                    />
                )
            }

        ]
    }

]);


// =====================================
// RENDER
// =====================================

ReactDOM.createRoot(
    document.getElementById('root')
).render(

    <React.StrictMode>

        <RouterProvider router={router} />

    </React.StrictMode>

);