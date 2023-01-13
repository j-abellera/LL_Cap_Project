import React, { useEffect } from 'react';
// import test from 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
import './Reservations.css';

function Reservations(props) {
    // console.log(test)
    const { form, onChange, onSubmit } = props;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script)
        return () => {
            document.body.appendChild(script)
        }
    },[])

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = () => {
        const availableTimes = fetchAPI(new Date(form.date))
        return availableTimes.map(time => <option key={time} defaultValue={time}>{time}</option>)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(submitAPI(form))
            return onSubmit(event)
    }

    const isDisabled = () => {
        if(form.name && form.guests && form.date && form.time && form.phone) {
            return false
        } else {
            return true
        }
    }

    return (
        <>
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
            <form className='form-container' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>What's Your Name?</label>
                    <input
                        className='forminput'
                        id='name' name='name'
                        type='text'
                        placeholder='Enter Name'
                        value={form.name}
                        onChange={onChange}
                        pattern='[A-Za-z]{25}'
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
                    {/* <input
                        name='time'
                        type='time'
                        value={form.time}
                        onChange={onChange}
                        required
                    /> */}
                    <select name='time' onChange={onChange}>
                        <option key='default' defaultValue=''>Pick a time</option>
                        {form.date !== '' ? initializeTimes() : <option key='select-date-first' defaultValue=''>Select date first</option>}
                    </select>
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
                <button data-testid='submitbutton' disabled={isDisabled()} id='submit' type='submit'>Submit</button>
            </form>
            <div className='img-btm'></div>
        </div>
        </>
    )
}

export default Reservations;