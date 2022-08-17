import React, { useEffect, useState } from 'react'
import "./UpcomingEvent.css";
import { NavLink } from "react-router-dom"
import Axios from "axios"

function UpcomingEvent() {

    // storing last three events after slicing the array of object got from the database
    const [lastThreeEvents, setLastThreeEvents] = useState([]);

    // Getting all the even from DB by making a get request
    useEffect(() => {
        Axios.get("https://myticket-server.herokuapp.com/events").then((res) => {
            // slice only last three element of the array and update the state
            const slicedArr = res.data.slice(1).slice(-3);
            setLastThreeEvents(slicedArr);
        })
    }, [])


    // button style
    const btnStyle = {
        backgroundColor: "transparent",
        color: "var(--main-orange)",
        border: "1px solid var(--main-orange)"
    }


    // Getting all the even from DB
    return (
        <div className='com-container'>
            <div className="up-event-container">

                {/* Section header */}
                <div className='up-event-header'>
                    <h3>UPCOMING EVENTS</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                        <NavLink to="events">
                            <button>SEE ALL UPCOMING EVENTS</button>
                        </NavLink>
                    </div>
                </div>

                {/* Upcoming event cards */}
                <div className='up-event-card-container'>
                    {lastThreeEvents.map((event) => {
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

                                    <button
                                        style={event.availability ? null : btnStyle}>
                                        {event.availability ? "Get Ticket" : "Sold Out"}
                                    </button>

                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default UpcomingEvent;