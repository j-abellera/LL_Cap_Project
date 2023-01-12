import React from 'react';
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2 className='hero-sub'>Chicago</h2>
                <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, a luctus sem mollis sit amet. Donec et nisi auctor, porta ante at, porttitor neque. Morbi lobortis ultricies dictum. Etiam mollis arcu dui, non fringilla quam lacinia vel.</p>
                <div className='hero-button'>
                    <h4>Reserve Table</h4>
                </div>
            </div>
            <div className='hero-right'>
                <div className='hero-image'></div>
            </div>
        </div>
    )
}

export default Hero;