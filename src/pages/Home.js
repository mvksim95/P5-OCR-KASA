import React from 'react';
import Rental from '../components/Rental'
import Banner from '../components/Banner'
import '../styles/Home.sass'
import ImageBanner from '../assets/images/HomeCover.png'

const Home = () => {
    return (
    <div className='home-content'>
    <Banner 
                image={ImageBanner} 
                altText="Photographie montrant une plage" 
                title="Chez vous, partout et ailleurs"
            /> 
    <Rental />
    </div>
)};

export default Home;