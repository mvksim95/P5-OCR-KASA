import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../logements.json';
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import '../styles/Logement.sass';
import Details from '../components/details'

const Logement = () => {
    const { id } = useParams(); // récupère l'id depuis l'URL
    const navigate = useNavigate(); // hook pour redirection
    const logement = logements.find((logement) => logement.id === id); // recherche du logement correspondant

    useEffect(() => {
        if (!logement) {
            navigate('/notfound', { replace: true }); // redirige vers /notfound si le logement n'existe pas (replace true évite que l'utilisateur puisse revenir sur une route invalide ou inutile en cliquant sur "retour")
        }
    }, [logement, navigate]); // déclenche l'effet si logement ou navigate change

    if (!logement) {
        return null; // empêche le rendu tant que la redirection n'est pas terminée
    }

    return (
        <div className="logement-details">
            <Carrousel images={logement.pictures} />
            <Details logement={logement} />
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
