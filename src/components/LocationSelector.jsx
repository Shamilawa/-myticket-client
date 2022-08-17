import React, { useState } from 'react'
import "./LocationSelector.css";

// importing location icon
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationSelector(props) {

    // state to keep track of user clicked
    const [isClick, setIsClick] = useState(false);

    // Handle click function
    function detectClick() {
        setIsClick(!isClick);
        props.func(isClick);
    }


    return (
        <div className='com-container'>
            <div className="location-selector-container">
                <LocationOnIcon fontSize="large" />
                <p className="current-location">
                    San Francisco, CA
                </p>
                <p onClick={detectClick} className='location-selector'>Change Location</p>
            </div>
        </div>
    )
}

export default LocationSelector