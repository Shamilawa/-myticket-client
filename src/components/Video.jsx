import React from 'react'
import "./Video.css"
import playBtn from "../assets/images/play-button.png"

function Video() {
    return (
        <div className='com-container'>
            <div className='video-container'>

                <div className='video-container-inner-content'>
                    <h3>LIVE THERE</h3>
                    <p>Book events from anywhere in 191+ countries and get awesome experience<br></br>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                    <img src={playBtn} alt="play-button" />
                </div>

            </div>
        </div>
    )
}

export default Video