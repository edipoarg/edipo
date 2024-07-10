import React from 'react';
import ReactDOM from 'react-dom/client'

import Root from "./routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./App";
import Investigations from './components/Investigaciones/Investigaciones.jsx';
import Recursos from './components/Recursos/Recursos.jsx';
import Investigacion from './components/Investigaciones/Investigacion.jsx';
import Publicaciones from './components/Publicaciones/Publicaciones.jsx';
import Landing from './components/Landing/Landing.jsx';
import Talleres from './components/Talleres/Talleres.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Autocuidado from './components/Recursos/Autocuidado/Autocuidado.jsx';
import FichaAutocuidado from './components/Recursos/Autocuidado/FichaAutocuidado.jsx';



const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>},
      { path:"/recursos", element:<Recursos/>},
      { path:"/lista", element:<Investigations/>},
      {path:"/publicaciones", element:<Publicaciones/>},
      { path: "/:dominio", element: <Investigacion /> }, // Asume que aquí se mostrará la información completa de una investigación
      { path: "/landing", element: <Landing /> }, 
      { path: "/talleres", element: <Talleres /> },
      { path: "/contacto", element: <Contacto /> },
      { path: "/recursos/autocuidado", element: <Autocuidado /> },
      { path: "/recursos/autocuidado/:IMAGEN", element: <FichaAutocuidado /> },
  
         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);