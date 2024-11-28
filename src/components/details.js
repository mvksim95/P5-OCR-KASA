import '../styles/details.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons'

const Details = ({ logement }) => {
    const [firstName, lastName] = logement.host.name.split(' '); // divise le prénom et le nom du host
    const totalStars = 5; // Toujours 5 étoiles
    const filledStars = logement.rating; // Note obtenue, exemple : 3

    return (
        <div className='details-container'>
            <div className='location-tag'>
                <h1 className='Title'>{logement.title}</h1>
                <h2 className='location'>{logement.location}</h2>
                <div className='tagContainer'>
                    {logement.tags.map((tag, index) => (
                        <span key={index} className='tag'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='host-rating'>
                <div className='host-info'>
                    <p className='name'>
                        {firstName}<br />{lastName}
                    </p>
                    <img src={logement.host.picture} alt="Photographie du loueur" className='profil-pic' />
                </div>
                <div className='rating'>
                    {[...Array(totalStars)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={index < filledStars ? solidStar : emptyStar}
                            className={index < filledStars ? 'star filled' : 'star empty'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details
