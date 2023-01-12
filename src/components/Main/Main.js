import React from 'react';
import './Main.css';
import Hero from './Hero Section/Hero.js';

function Main() {
    return (
        <main className='container'>
            <section id='hero-section'><Hero /></section>
            <section id='highlight-section'>Highlight Section</section>
            <section id='testimonials-section'>Testimonials Section</section>
            <section id='about-section'>About Little Lemon Section</section>
        </main>
    )
}

export default Main;