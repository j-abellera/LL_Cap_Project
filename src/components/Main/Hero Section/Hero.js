import React from 'react';
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <h1 className='hero-title'>TITLE Little Lemon</h1>
                <h2 className='hero-sub'>SUB Chicago</h2>
                <p className='hero-text'>TEXT Some text about little lemon</p>
                <p className='hero-button'>BUTTON "Reserve Table"</p>
            </div>
            <div className='hero-right'>
                <div className='hero-image'>Image container</div>
            </div>
        </div>
    )
}

export default Hero;