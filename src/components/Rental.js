import { Link } from 'react-router-dom'
import logements from '../logements.json'
import '../styles/Rental.sass';

const Rental = () => {
  return (
    <div className='rental-list'>
      {logements.map((logement) => (
        <div key={logement.id} className="rental-item">
          <div className='div-cards'>
            <Link to={`/logement/${logement.id}`} className="cards">
                {/*logement/${logement.id} pour que la route soit bonne au niveau du router*/}
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