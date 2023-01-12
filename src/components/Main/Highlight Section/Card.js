import React from 'react';
import './Card.css';

function Card() {
    return (
        <article className='card-container'>
            <div className='card-image'></div>
            <h3 className='card-title'>Lemon Meringue Pie</h3>
            <div className='card-price'>$6.99</div>
            <p className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, a luctus sem mollis sit amet.</p>
            <div className='card-link'>Order Delivery</div>
        </article>
    )
}

export default Card;