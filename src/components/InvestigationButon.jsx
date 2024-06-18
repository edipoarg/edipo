// En el componente InvestigationButton.jsx
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const InvestigationButton = ({ nombre, dominio }) => {
  return (
    <Link to={`/${dominio}`} className="investigation-link">
      {nombre}
    </Link>
  );
};

export default InvestigationButton;
