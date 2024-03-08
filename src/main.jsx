import React from 'react';
import ReactDOM from 'react-dom/client'

import Root from "./routes/Root.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import App from "./App";
import Investigations from './components/Investigaciones.jsx';
import Recursos from './components/Recursos.jsx';
import Investigacion from './components/Investigacion.jsx';


const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>},
      { path:"/recursos", element:<Recursos/>},
      { path:"/lista", element:<Investigations/>},
      { path: "/:dominio", element: <Investigacion /> }, // Asume que aquí se mostrará la información completa de una investigación


    
         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);