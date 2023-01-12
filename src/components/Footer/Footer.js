import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-image'>Image Goes Here</div>
            <div className='footer-nav'>
                <h4 className='fnav-title'>Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='footer-contact'>
                <h4 className='contact-title'>Contact</h4>
                <div className='address'>
                    <address>
                        1234 Meringue Way
                        <br/>Spokane, WA 19340
                        <br/><br/>tel. 661-555-7563
                        <br/><br/>contact@littlelemon.com
                    </address>
                </div>
            </div>
            <div className='footer-social'>
                <h4 className='social-title'>Social</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;