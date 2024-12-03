import React, { useState } from 'react';
import '../styles/Carrousel.sass'
import ChevronRight from '../assets/images/chevronright.png'
import ChevronLeft from '../assets/images/ChevronLeft.png'

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carrousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carrousel-image" />

            {/* affiche les boutons uniquement si plus d'une image */}
            {images.length > 1 && (
                <>
                    <button className="carrousel-button prev" onClick={goToPrev}>
                        <img src={ChevronLeft} alt='chevron-gauche' className="ChevronLeft" />
                    </button>
                    <button className="carrousel-button next" onClick={goToNext}>
                        <img src={ChevronRight} alt='chevron-droite' className="ChevronRight" />
                    </button>
                </>
            )}
        </div>
    );
};

export default Carrousel