import '../styles/Banner.sass';

const Banner = ({ image, altText, title }) => {
    return (
        <div className='Banner'>
            <div className='Mask'></div>
            <img src={image} alt={altText} />
            <h2 className='CoverTitle'>{title}</h2>
        </div>
    );
};

export default Banner;
