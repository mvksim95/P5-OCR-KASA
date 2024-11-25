import { Link } from 'react-router-dom'
import logements from '../logements.json'
import '../styles/Rental.sass';

const Rental = () => {
    return (
        <div className='rental-list'>
            {logements.map((logement) => (
        <div key={logement.id} className="rental-item">
        <div>
          <Link to={`${logement.id}`} className="cards">
          <img src={logement.cover} alt={logement.title} />
          <h2 className="title">{logement.title}</h2>
          </Link>
        </div>
      </div>
        ))}
        </div>
    );
};

export default Rental;