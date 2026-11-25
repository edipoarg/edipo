// En el componente ProyectoButton.jsx
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProyectoButton = ({ nombre, dominio }) => {
  return (
    <Link to={`/${dominio}`} className="proyecto-link">
      {nombre}
    </Link>
  );
};

export default ProyectoButton;
