import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-left'>
                <h1 className='about-title'>Little Lemon</h1>
                <h2 className='about-sub'>Sub Text</h2>
                <p className='about-description'>about description</p>
            </div>
            <div className='about-image'>
                <div className='about-img1'>Image1</div>
                <div className='about-img2'>Image2</div>
            </div>
        </div>
    )
}

export default About;