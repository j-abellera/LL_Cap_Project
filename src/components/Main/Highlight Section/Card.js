import React from 'react';
import './Card.css';

function Card() {
    return (
        <article className='card-container'>
            <div className='card-image'>Image Goes Here</div>
            <h3 className='card-title'>Title</h3>
            <div className='card-price'>Price</div>
            <p className='card-description'>Description</p>
            <p className='card-link'>LINK "Order Delivery"</p>
        </article>
    )
}

export default Card;