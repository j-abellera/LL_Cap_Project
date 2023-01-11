import React, {  } from 'react';
import './Navigation.css';

function Navigation() {
    return (
       <div className='nav-container'>
        <div className='logo'></div>
        <nav className='nav'>
            <a className='nav-link' href='#home'>Home</a>
            <a className='nav-link' href='#about'>About</a>
            <a className='nav-link' href='#menu'>Menu</a>
            <a className='nav-link' href='#reservations'>Reservations</a>
            <a className='nav-link' href='#order-online'>Order Online</a>
            <a className='nav-link' href='#login'>Login</a>
        </nav>
       </div>
    )
}

export default Navigation;