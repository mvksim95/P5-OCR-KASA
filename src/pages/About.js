import React from 'react';
import '../styles/About.sass'
import Banner from '../components/Banner'
import AboutCover from '../assets/images/AboutCover.png'
import Collapse from '../components/Collapse';
import '../styles/Collapse.sass'
import AboutContent from '../About.json'


const About = () => {
    return (
        <div className="About-container">
            <Banner 
                image={AboutCover} 
                altText="Photographie montrant des montagnes" 
            />
            <div className="Collapse-about">
                {AboutContent.map((item, index) => (
                    <Collapse key={index} title={item[`title${index + 1}`]}>
                        <p>{item[`content${index + 1}`]}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default About;