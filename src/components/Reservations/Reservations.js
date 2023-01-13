import React from 'react';
import './Reservations.css';

function Reservations(props) {
    const { form, onChange, onSubmit } = props;

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
            <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>What's Your Name?</label>
                    <input
                        className='forminput'
                        id='name' name='name'
                        type='text'
                        placeholder='Enter Name'
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div id='guests-input'>
                    <label className='guests-title' htmlFor='guests'>How Many Guests?</label>

                    <input
                        id='1-2'
                        name='guests'
                        type='radio'
                        value='1-2'
                        onChange={onChange}
                        required
                    />
                    <label htmlFor='1-2'>1-2</label>

                    <input
                        id='3-4'
                        name='guests'
                        type='radio'
                        value='3-4'
                        onChange={onChange}
                    />
                    <label htmlFor='3-4'>3-4</label>

                    <input
                        id='5-6'
                        name='guests'
                        type='radio'
                        value='5-6'
                        onChange={onChange}
                    />
                    <label htmlFor='5-6'>5-6</label>

                    <input
                        id='7plus'
                        name='guests'
                        type='radio'
                        value='7+'
                        onChange={onChange}
                    />
                    <label htmlFor='7plus'>7+</label>
                </div>
                <div id='date-time'>
                    <div>
                        <label htmlFor='date'>Date</label>
                        <input
                            name='date'
                            type='date'
                            value={form.date}
                            onChange={onChange}
                            required
                        />
                    </div>
                <div>
                    <label htmlFor='time'>Time</label>
                    <input
                        name='time'
                        type='time'
                        value={form.time}
                        onChange={onChange}
                        required
                    />
                </div>
                </div>
                <div>
                <label>Phone</label>
                <input
                    name='phone'
                    className='forminput'
                    type='number'
                    placeholder='000-000-0000'
                    value={form.phone}
                    onChange={onChange}
                    min='10'
                    required
                />
                </div>
                <div>
                <label>Any special requests/Questions?</label>
                <input
                    name='comments'
                    className='forminput'
                    type='text'
                    placeholder='Additional Comments'
                    value={form.comments}
                    onChange={onChange}
                />
                </div>
                <button id='submit' type='submit'>Submit</button>
            </form>
            <div className='img-btm'></div>
        </div>
    )
}

export default Reservations;