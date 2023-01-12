import React from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial.js';

function Testimonials() {
    return (
        <>
            <h1 className='testimonials-title'>Testimonials Section</h1>
            <div className='testimonial-container'>
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </>
    )
}

export default Testimonials;