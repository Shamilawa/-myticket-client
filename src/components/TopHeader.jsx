import React from 'react'
import "./TopHeader.css"

// Importing icons
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Header() {
    return (
        <header className='com-container'>

            {/* Top navigation bar */}
            <div className='header-container'>
                <div className='top-section'>
                    <div className="top-nav">
                        <div className="nav-contact-details">
                            <div className='nav-contacts'>
                                <PhoneIcon />
                                <p>+62274 889767</p>
                            </div>
                            <div className='nav-contacts'>
                                <MailOutlineIcon />
                                <p>hello@myticket.com</p>
                            </div>
                        </div>
                        <div className="login-section">
                            <p className='login user'>SIGN IN</p>
                            <p>|</p>
                            <p className='register user'>SIGN UP</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header