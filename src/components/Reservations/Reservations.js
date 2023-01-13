import React from 'react';
import './Reservations.css';
import Highlight from '../Main/Highlight Section/Highlight.js';

function Reservations() {
    return (
        <div className='res-container'>
            <div className='img-top'></div>
            <h1 className='res-title'>Reserve A Table</h1>
            <div className='status-bar'>
                <div className='circle stat statitm1'>1</div>
                <div className='line stat statitm2'></div>
                <div className='circle stat statitm3'>2</div>
                <div className='line stat statitm4'></div>
                <div className='circle stat statitm5'>3</div>
            </div>
            <form className='form-container'>
                <div>
                    <label htmlFor='name'>What's Your Name?</label>
                    <input className='forminput' id='name' name='name' type='text' placeholder='Enter Name' />
                </div>
                <div id='guests-input'>
                    <label className='guests-title' htmlFor='guests'>How Many Guests?</label>

                    <input id='1-2' name='guests' type='radio' value='1-2'/>
                    <label htmlFor='1-2'>1-2</label>

                    <input id='3-4' name='guests' type='radio' value='3-4'/>
                    <label htmlFor='3-4'>3-4</label>

                    <input id='5-6' name='guests' type='radio' value='5-6'/>
                    <label htmlFor='5-6'>5-6</label>

                    <input id='7plus' name='guests' type='radio' value='7+'/>
                    <label htmlFor='7plus'>7+</label>
                </div>
                <div id='date-time'>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input name='date' type='date' />
                    </div>
                <div>
                    <label htmlFor='time'>Time</label>
                    <input name='time' type='time'></input>
                </div>
                </div>
                <div>
                <label>Phone</label>
                <input className='forminput' type='tel' placeholder='000-000-0000' />
                </div>
                <div>
                <label>Any special requests/Questions?</label>
                <input className='forminput' type='text' placeholder='Additional Comments' />
                </div>
                <button id='submit' type='submit'>Submit</button>
            </form>
            <div className='img-btm'></div>
        </div>
    )
}

export default Reservations;