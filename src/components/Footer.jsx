import React from 'react'
import "./Footer.css"

// importing all the logos
import logo from "../assets/images/logo.png"
import fbIcon from "../assets/images/facebook.png"
import googleIcon from "../assets/images/google.png"
import linkendIcon from "../assets/images/linkend.png"
import rssIcon from "../assets/images/rss.png"
import twitterIcon from "../assets/images/twitter.png"

function Footer() {
    return (
        <div className='com-container'>
            <div className='footer-container'>
                <footer>

                    <div className="top-bar">
                        <img src={logo} alt="footer-logo" />
                        <p>©2016 MYTICKET.COM. ALL RIGHTS RESEVED</p>
                    </div>

                    <div className="bottom-bar">

                        <div className='flex-left'>
                            <div className='footer-nav-one'>
                                <p className='no-border'>About</p>
                                <p className='no-border'>Our Company</p>
                                <p>Career</p>
                                <p>Advertising</p>
                                <p>Press</p>
                                <p>Trade Mark</p>
                                <p>Term of Service</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div className='footer-nav-one'>
                                <p className='no-border'>Support and Contact</p>
                                <p className='no-border'>Customer Support Contact</p>
                                <p>Feedback</p>
                                <p>Help</p>
                                <p>Sitemap</p>
                            </div>
                            <div className='footer-nav-social'>
                                <p className='no-border'>Stay Connected</p>
                                <div>
                                    <img src={fbIcon} alt="social-media" />
                                    <p>Facebook</p>
                                </div>
                                <div>
                                    <img src={twitterIcon} alt="social-media" />
                                    <p>Twitter</p>
                                </div>
                                <div>
                                    <img src={linkendIcon} alt="social-media" />
                                    <p>Linkend</p>
                                </div>
                                <div>
                                    <img src={googleIcon} alt="social-media" />
                                    <p>Google+</p>
                                </div>
                                <div>
                                    <img src={rssIcon} alt="social-media" />
                                    <p>RSS</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-right'>
                            <h6>MYTICKET DASHBOARD</h6>
                            <p>Professional</p>
                            <p>Subscribe Login</p>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer