import React from 'react'
import "./Partners.css"
import logo1 from "../assets/images/partner-logo1.png"
import logo2 from "../assets/images/partner-logo2.png"
import logo3 from "../assets/images/partner-logo3.png"
import logo4 from "../assets/images/partner-logo4.png"

function Partners() {
    return (
        <div className='com-container'>
            <div className='partners-container'>

                <div className='partner-logos'>
                    <img src={logo1} alt="partiner-logo" />
                    <img src={logo2} alt="partiner-logo" />
                    <img src={logo3} alt="partiner-logo" />
                    <img src={logo4} alt="partiner-logo" />
                </div>

            </div>
        </div>
    )
}

export default Partners