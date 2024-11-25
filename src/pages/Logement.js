import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Carrousel from '../components/Carrousel';
import Informations from '../components/Informations';
import TagRating from '../components/TagRating';
import Collapse from '../components/Collapse';
import '../styles/Logement.sass'

const Logement = () => {
    const { id } = useParams(); // récupère l'id depuis l'URL
    const logement = logements.find((logement) => logement.id === id); // recherche du logement correspondant

    if (!logement) {
        // mettre page notfound.js ici
        return <p>Logement non trouvé.</p>;
    }

    return (
        <div className="logement-details">
            <Carrousel images={logement.pictures} />
            <Informations logement={logement} />
            <TagRating logement={logement} />
            <div className='Collapse'>
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default Logement;
