import React from 'react';
import ReactDOM from 'react-dom/client'

import Root from "./routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Investigations from './components/Investigaciones/Investigaciones.jsx';
import Recursos from './components/Recursos/Recursos.jsx';
import FichaProyecto from './components/Investigaciones/FichaProyecto/FichaProyecto.jsx';
import Publicaciones from './components/Publicaciones/Publicaciones.jsx';
import Landing from './components/Landing/Landing.jsx';
import Talleres from './components/Talleres/Talleres.jsx';
import Equipo from './components/Equipo/Equipo.jsx';
import Colabora from './components/Colabora/Colabora.jsx';
import Autocuidado from './components/Recursos/Autocuidado/Autocuidado.jsx';
import Inteligencia from './components/Recursos/Inteligencia/Inteligencia.jsx';
import FichaInteligencia from './components/Recursos/Inteligencia/FichaInteligencia.jsx'
import FichaAutocuidado from './components/Recursos/Autocuidado/FichaAutocuidado.jsx';



const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/lista", element: <Investigations /> },
      { path: "/publicaciones", element: <Publicaciones /> },
      { path: "/:dominio", element: <FichaProyecto /> }, // Asume que aquí se mostrará la información completa de una investigación
      { path: "/talleres", element: <Talleres /> },
      { path: "/equipo", element: <Equipo /> },
      { path: "/colabora", element: <Colabora /> },
      { path: "/recursos/autocuidado", element: <Autocuidado /> },
      { path: "/recursos/autocuidado/:IMAGEN", element: <FichaAutocuidado /> },
      { path: "/recursos/inteligencia_abierta", element: <Inteligencia /> },
      { path: "/recursos/inteligencia_abierta/:IMAGEN", element: <FichaInteligencia /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);