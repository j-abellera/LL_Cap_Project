import React from 'react';
import './Main.css';
import Hero from './Hero Section/Hero.js';
import Highlight from './Highlight Section/Highlight.js';
import Testimonials from './Testimonials/Testimonials.js';

function Main() {
    return (
        <main className='container'>
            <section id='hero-section'><Hero /></section>
            <section id='highlight-section'><Highlight /></section>
            <section id='testimonials-section'><Testimonials /></section>
            <section id='about-section'>About Little Lemon Section</section>
        </main>
    )
}

export default Main;