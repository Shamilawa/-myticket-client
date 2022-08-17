import React from 'react'
import "./Newsletter.css"

function Newsletter() {
    return (
        <div className='com-container'>
            <div className='newsletter-container'>
                <div className='newsletter-content'>

                    <h3>Stay Up to date With Your Favorite Events!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                    <div className='newsletter-form'>
                        <form action="">
                            <input type="text" placeholder='Your Email Address' />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter