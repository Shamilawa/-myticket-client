import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css";

// Importing Hambuger menu
import { Twirl as Hamburger } from 'hamburger-react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// importing images
import logo from "../assets/images/logo.png"


function Navbar() {

    // state to conditionally check whether the side menu should open or not
    const [openSideMenu, setOpenSideMenu] = useState(false);

    return (
        <div className='com-container nav-bar-main-container'>

            <div className='navbar-container'>
                {/* site logo */}
                <div className="site-logo">
                    <NavLink to="/">
                        <img src={logo} alt="site-logo" />
                    </NavLink>
                </div>

                {/* Navigation menu desktop*/}
                <nav className='main-navigation-bar'>
                    <ul>
                        <a href=""><li>SCHEDULE</li></a>
                        <a href=""><li>CONCERTS</li></a>
                        <a href=""><li>SPORTS</li></a>
                        <a href=""><li>PARTIES</li></a>
                        <a href=""><li>THEATER</li></a>
                        <a href=""><li>GALLERY</li></a>
                        <a href=""><li>BLOG</li></a>
                    </ul>
                </nav>

                {/* cart section */}
                <div className="nav-cart">
                    <p className='items-quantity'>0</p>
                    <ShoppingCartOutlinedIcon />
                </div>


                {/* Hamburger Menu Icon with Animations*/}
                <div className="hamburger-menu" onClick={() => { setOpenSideMenu(!openSideMenu) }}>
                    <Hamburger color="#f89406" />
                </div>

                {/* Navigation menu mobile*/}
                {/* This will open base on the value of openSideMenu state (if true, mobile menu will open. If not, this div will not rendered to DOM) */}
                {openSideMenu && <div className='mobile-navigation-bar'>
                    <ul>
                        <a href=""><li>SCHEDULE</li></a>
                        <a href=""><li>CONCERTS</li></a>
                        <a href=""><li>SPORTS</li></a>
                        <a href=""><li>PARTIES</li></a>
                        <a href=""><li>THEATER</li></a>
                        <a href=""><li>GALLERY</li></a>
                        <a href=""><li>BLOG</li></a>
                    </ul>
                </div>}

            </div>

        </div>
    )
}

export default Navbar