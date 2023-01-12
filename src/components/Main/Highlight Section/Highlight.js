import React from 'react';
import './Highlight.css'
import Card from './Card.js';

function Highlight() {
    return (
        <div className='highlight-container'>
            <div className='highlight-left'>
                <h2 className='highlight-title'>Our specials of the week!</h2>
                <div className='highlight-button'>Order Online</div>
            </div>
            <div className='highlight-card-container'>
                <div className='highlight-card'><Card /></div>
                <div className='highlight-card'><Card /></div>
                <div className='highlight-card'><Card /></div>
            </div>
        </div>
    )
}

export default Highlight;