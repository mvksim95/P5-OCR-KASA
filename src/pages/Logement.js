import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../logements.json';
import Carrousel from '../components/Carrousel';
import Informations from '../components/Informations';
import TagRating from '../components/TagRating';
import Collapse from '../components/Collapse';
import '../styles/Logement.sass'
import NotFound from './Notfound';

const Logement = () => {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant

    if (!logement) {
        // Redirige vers la page NotFound si aucun logement n'est trouvé
        return <NotFound />;
        // possible d'utiliser // return <Navigate to="*" replace />
    }

    return (
        <div className="logement-details">
            <Carrousel images={logement.pictures} />
            <Informations logement={logement} />
            <TagRating logement={logement} />
            <div className="Collapse-logement">
                <Collapse title="Description">{logement.description}</Collapse>
                <Collapse title="Équipements">
                    {logement.equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default Logement;
