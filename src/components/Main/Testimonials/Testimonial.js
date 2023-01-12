import React from 'react';
import './Testimonial.css';

function Testimonial() {
    return (
        <div className='t-card-container'>
            <h3 className='rating-title'>Rating</h3>
            <div className='rating'>4.5</div>
            <div className='t-name'>Name</div>
            <div className='t-review'>Review snippet</div>
        </div>
    )
}

export default Testimonial;