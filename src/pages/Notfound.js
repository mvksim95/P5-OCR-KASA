import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/NotFound.sass';

const NotFound = () => {
    return (
        <div className="NotFound-container">
            <h1>404</h1>
            <p>Oups ! La page que vous cherchez n'existe pas.</p>
            <Link to="/" className="home-link">
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;