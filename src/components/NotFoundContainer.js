import { Link } from 'react-router-dom';
import '../styles/NotFound.sass';
// import Error from '../assets/images/404.png'

const NotFoundContainer = () => {
    return (
        <div className='Content'>
            <h1 className='404'>{'404'}</h1>
            <h2 className='CoverTitle'>{'Oups! La page que vous demandez n\'existe pas.'}</h2>
            <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFoundContainer;