import React, { useEffect, useState } from 'react'
import Axios from "axios";
import "./Timeline.css";

// importing required icon
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Timeline() {


    // Storing all the event data into state
    const [events, setEvents] = useState([]);

    // Make get request to backend to get all event data from database when the component is load
    useEffect(() => {
        // make a get request to server
        Axios.get("https://myticket-server.herokuapp.com/events").then((res) => {
            setEvents(res.data)
        })
    }, [])


    // button style
    const btnStyle = {
        backgroundColor: "transparent",
        color: "var(--main-orange)",
        border: "1px solid var(--main-orange)"
    }


    return (
        <div className='com-container'>
            <div className="timeline-container">

                <div className="timeline-content">

                    {/* daily event header part */}
                    <div className='timeline-header'>
                        <h3>TODAY'S SCHEDULE</h3>
                        <div className="date">
                            <CalendarMonthIcon />
                            <p>12 Aug 2016</p>
                        </div>
                    </div>

                    {/* Upcoming event card section with timeline */}
                    <div className="daily-event-container">

                        <div className="daily-events">
                            {/* Upcoming event card generated using map function*/}
                            {events.map((event, index) => {
                                return (
                                    <div
                                        className='event-card'
                                        key={event._id} >
                                        <div className='time-data' >
                                            <div>
                                                <p className='time'>{event.date.time}<span>{event.date.type}</span></p>
                                                <p className="location">{event.place}</p>
                                            </div>
                                            <div className='icon'><ArrowForwardIosIcon fontSize='small' /></div>
                                        </div>
                                        <div className="button-section">
                                            <button style={event.availability ? null : btnStyle}>
                                                {event.availability ? "Get Ticket" : "Sold Out"}
                                            </button>
                                        </div>
                                        <div className='icon-bottom'>
                                            {/* adding clock icon to first element of the arr */}
                                            {index === 0 ? <AccessTimeFilledIcon /> : <FiberManualRecordIcon />}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='full-event'>
                            <p><span>Full Event </span>Schedule</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Timeline