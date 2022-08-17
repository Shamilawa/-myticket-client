import React, { useEffect, useState } from 'react'
import "./Events.css"
import Navbar from './Navbar'
import Axios from "axios"

function Events() {

    // Storing all the event data into state
    const [events, setEvents] = useState([]);

    // Getting all the even from DB
    useEffect(() => {
        Axios.get("https://myticket-server.herokuapp.com/events").then((res) => {
            setEvents(res.data)
        })
    }, [])

    return (
        <div className='com-container'>

            <div className='hero-container'>

                {/*  Botton navigation bar */}
                <div className="main-nav">
                    {/* Navigation Bar component */}
                    <Navbar />
                </div>

                {/* Hero Form Section */}
                <div className="hero-contents event">
                    <h2>All Events</h2>
                    <h4>Thousand of Events are Here, Scroll It and Find It... </h4>
                    <p>Home / Events</p>
                </div>

            </div>

            <div className="up-event-card-container event-page-card">
                {events.map((event) => {
                    return (
                        <div className="up-event-card" key={event._id}>
                            <div className='time-label'>
                                <p className='date'>{event.date.day}</p>
                                <p className='month'>{event.date.month}</p>
                                <p className='year'>{event.date.year}</p>
                            </div>
                            <div className='up-event-card-meta'>
                                <div>
                                    <p className='title'>{event.title}</p>
                                    <p className='location'>{event.place}</p>
                                </div>
                                <button>{event.availability ? "Get Ticket" : "Sold Out"}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Events