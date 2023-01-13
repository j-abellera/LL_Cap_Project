import React from 'react';
import './Reservations.css';

function Reservations() {
    return (
        <div className='res-container'>
            <div className='img-top'></div>
            <h1>Reserve A Table</h1>
            <div className='status-bar'>
                <div className='circle stat statitm1'>1</div>
                <div className='line stat statitm2'></div>
                <div className='circle stat statitm3'>2</div>
                <div className='line stat statitm4'></div>
                <div className='circle stat statitm5'>3</div>
            </div>
            <form className='form-container'>
                <label htmlFor='name'>Name</label>
                <input name='name' type='text' placeholder='Enter Name' />

                <label htmlFor='guests'>Guests</label>

                <input name='guests' type='radio' value='1-2'/>
                <label htmlFor='guests'>1-2</label>

                <input name='guests' type='radio' value='3-4'/>
                <label htmlFor='guests'>3-4</label>

                <input name='guests' type='radio' value='5-6'/>
                <label htmlFor='guests'>5-6</label>

                <input name='guests' type='radio' value='7+'/>
                <label htmlFor='guests'>7+</label>

                <label htmlFor='date'>Date</label>
                <input type='date'/>

                <input type='time'></input>

                <label>Phone</label>
                <input type='tel' />

                <label>Any special requests/Questions?</label>
                <input type='text' />
            </form>
            <div className='img-btm'></div>
        </div>
    )
}

export default Reservations;