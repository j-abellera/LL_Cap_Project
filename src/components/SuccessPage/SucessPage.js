import React from 'react';
import './SuccessPage.css';
import Highlight from '../Main/Highlight Section/Highlight.js';
import { Link } from 'react-router-dom';

function SucessPage() {
    return (
        <div className='sp-container'>
            <div className='img-top'></div>
            <h1>Reservation Submitted</h1>
            <div className='sp-message'>
                <h2 className='sp-title'>Reservation Details</h2>
                <div className='sp-section'>
                    <h3>Name:</h3>
                    <h4>Ron Burgundy</h4>
                </div>
                <div className='sp-section'>
                    <h3>Guests:</h3>
                    <h4>3-4</h4>
                </div>
                <div className='sp-section'>
                    <h3>Date/Time:</h3>
                    <h4>1/25/2023 @ 7:30AM</h4>
                </div>
                <div className='sp-section'>
                    <h3>Phone:</h3>
                    <h4>661-555-7563</h4>
                </div>
                <div className='sp-section'>
                    <h3>Comments:</h3>
                    <h4>I will be enjoying your finest wine. Please have it ready.</h4>
                </div>
                <div className='tiny'>**We may contact you about your reservation to confirm availability within 2-hours of reservation time.</div>
                <Link to='/' className='sp-button'>Home</Link>
            </div>
            <div className='img-btm'></div>
            <div className='highlight-container'>
                <Highlight />
            </div>
        </div>
    )
}

export default SucessPage;