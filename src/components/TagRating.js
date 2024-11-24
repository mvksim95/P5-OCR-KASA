import './TagRating.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons'


const TagRating = ({ logement }) => {
    const totalStars = 5; // Toujours 5 étoiles
    const filledStars = logement.rating; // Note obtenue, exemple : 3

    return (
        <div className='TagRatingContainer'>
            <div className='tagContainer'>
                {logement.tags.map((tag, index) => (
                    <span key={index} className='tag'>
                        {tag}
                    </span>
                ))}
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
    );
};

export default TagRating