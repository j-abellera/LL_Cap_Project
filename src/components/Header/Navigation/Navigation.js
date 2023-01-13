import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
       <div className='nav-container'>
        <div className='logo'></div>
        <nav className='nav'>
            <NavLink
                className='nav-link'
                style={({isActive}) => ({color: isActive ? "#ee9972" : "#333333"})}
                to='/'>Home
            </NavLink>
            <a className='nav-link' href='#about'>About</a>
            <a className='nav-link' href='#menu'>Menu</a>
            <NavLink
                className='nav-link'
                style={({isActive}) => ({color: isActive ? "#ee9972" : "#333333"})}
                to='/reservations'>Reservations
            </NavLink>
            <a className='nav-link' href='#order-online'>Order Online</a>
            <a className='nav-link' href='#login'>Login</a>
        </nav>
       </div>
    )
}

export default Navigation;