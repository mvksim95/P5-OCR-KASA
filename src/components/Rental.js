import logements from '../logements.json'
import './Rental.sass';

const Rental = () => {
    return (
        <div className='rental-list'>
            {logements.map((logements) => (
        <div key={logements.id} className="rental-item">
        <div className="image-container">
          <img src={logements.cover} alt={logements.title} />
          <h2 className="title">{logements.title}</h2>
        </div>
      </div>
        ))}
        </div>
    );
};

export default Rental;