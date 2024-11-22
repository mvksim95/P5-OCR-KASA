import { useParams } from 'react-router-dom';
import logements from '../logements.json'

const Logement = () => {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant

    if (!logement) {
        // Si aucun logement ne correspond à l'id, retourne une erreur ou redirige
        return <p>Logement non trouvé.</p>;
    }

    return (
        <div className="logement-details">
            <img src={logement.cover} alt={logement.title} />
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
            <p>{id}</p>
            {/* Ajoute d'autres détails si nécessaire */}
        </div>
    );
};

export default Logement;
