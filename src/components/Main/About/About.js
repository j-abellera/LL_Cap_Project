import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about about-container'>
            <div className='about-left'>
                <h2 className='about-title'>Little Lemon</h2>
                <h3 className='about-sub'>Chicago</h3>
                <p className='about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, a luctus sem mollis sit amet. Donec et nisi auctor, porta ante at, porttitor neque. Morbi lobortis ultricies dictum. Etiam mollis arcu dui, non fringilla quam lacinia vel. Nam dapibus fermentum urna. Aenean congue feugiat volutpat.</p>
            </div>
            <div className='about-image'>
                <div className='about-img1'></div>
                <div className='about-img2'></div>
            </div>
        </div>
    )
}

export default About;