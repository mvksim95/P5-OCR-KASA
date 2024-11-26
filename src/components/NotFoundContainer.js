import { Link } from 'react-router-dom';
import '../styles/NotFound.sass';
import Error from '../assets/images/404.png'

const NotFoundContainer = () => {
    return (
        <div className='Content'>
            <img src={Error} alt={'erreur 404'} />
            <h2 className='CoverTitle'>{'Oups! La page que vous demandez n\'existe pas.'}</h2>
            <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFoundContainer;