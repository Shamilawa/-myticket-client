import React from 'react'

// Importing all the required components
import Hero from "./Hero";
import Timeline from './Timeline';
import UpcomingEvent from './UpcomingEvent';
import News from './News';
import Video from './Video';
import Partners from './Partners';
import Newsletter from './Newsletter';

function Home() {
    return (
        <div className='home-container'>
            <Hero />
            <Timeline />
            <UpcomingEvent />
            <News />
            <Video />
            <Partners />
            <Newsletter />
        </div>
    )
}

export default Home