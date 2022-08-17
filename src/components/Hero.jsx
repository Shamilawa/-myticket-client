import React, { useState } from 'react'
import "./Hero.css";

// Importing Components
import LocationSelector from "./LocationSelector";
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Importing Icon Component from Material UI Icon
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Hero() {

    // declare state to open location selecator conditionally
    const [selectLocation, setselectLocation] = useState(false);

    // function handle click
    function handlClick(clicked) {
        { clicked ? setselectLocation(false) : setselectLocation(true) }
    }

    return (
        <div className='com-container'>

            <div className='hero-container'>

                {/*  Botton navigation bar */}
                <div className="main-nav">
                    <Navbar />
                </div>

                {/* Hero Form Section */}
                <div className="hero-contents">
                    <h2>Make Your Dream Come True</h2>
                    <h4>Meet your favourite artist, sport teams and parties</h4>
                    <form action="">
                        <div className='hero-form'>
                            <input type="text" placeholder='Search Artist, Team or Venue' />
                            <div className='hero-form-icon'><SearchOutlinedIcon fontSize='large' /></div>
                        </div>
                    </form>
                </div>

                <LocationSelector func={handlClick} />

                {/* Autocomplete form for selecting the location */}
                <div className='auto-complete'>
                    {selectLocation &&
                        <Autocomplete
                            size='small'
                            disablePortal
                            id="combo-box-demo"
                            options={location}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />}
                </div>


            </div>
        </div>
    )
}

const location = [
    { label: 'Kandy', },
    { label: 'Colombo', },
    { label: 'NuwaraEliya', },
    { label: 'Kurunegala', },
    { label: 'Anuradhapura', },
    { label: "Mathale", },

];

export default Hero