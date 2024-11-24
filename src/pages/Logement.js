import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import Carrousel from '../components/Carrousel';
import Informations from '../components/Informations';
import TagRating from '../components/TagRating';

const Logement = () => {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant

    if (!logement) {
        // Si aucun logement ne correspond à l'id, retourne une erreur ou redirige
        return <p>Logement non trouvé.</p>;
    }

    return (
        <div className="logement-details">
            <Carrousel images={logement.pictures} />
            <Informations logement={logement} />
            <TagRating logement={logement} />
            {/* Ajoute d'autres détails si nécessaire */}
        </div>
    );
};

export default Logement;
