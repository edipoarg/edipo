// En el componente InvestigationButton.jsx
import { Link } from 'react-router-dom';
import InvestigationShape from './InvestigationShape';

const InvestigationButton = ({ nombre, dominio }) => {
  return (
    <Link to={`/${dominio}`} className="investigation-link">
      <InvestigationShape />
      {nombre}
    </Link>
  );
};

export default InvestigationButton;
