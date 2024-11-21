import ImageCover from '../assets/images/HomeCover.png'
import './HomeCover.sass'

const HomeCover = () => {
    return (
        <div className='HomeCover'>
            <div className='Mask'></div>
            <img src={ImageCover} alt='photographie montrant une plage' />
            <h2 className='CoverTitle'>Chez vous, partout et ailleurs</h2>

        </div>
    );
};

export default HomeCover;