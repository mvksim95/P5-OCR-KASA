import React from 'react';
import Rental from '../components/Rental'
import HomeCover from '../components/HomeCover'
import '../styles/Home.sass'

const Home = () => {
    return (
    <div className='home-content'>
    <HomeCover /> 
    <Rental />
    </div>
)};

export default Home;