import React from 'react';
import "./News.css";
import tweeterLogo from "../assets/images/tweeter-logo.png";

function News() {
    return (
        <div className='com-container'>
            <div className='news-container'>

                <div className="latest-news">
                    <h3>Latest News</h3>

                    <div className='news-card'>
                        <div className='news-post-card-inside'>
                            <div className='time-label-news'>
                                <p className='date'>25</p>
                                <p className='month'>August</p>
                                <p className='news-year'>2016</p>
                            </div>
                        </div>
                        <div className='post-content'>
                            <h5 className='post-title'>Attending the Indonesian Envato
                                Authors National Meetup</h5>
                            <p className='post-meta'>6 hours ago | By <span>Admin</span></p>
                            <p className='post-des'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>
                    <div className='news-card'>
                        <div className='news-post-card-inside'>
                            <div className='time-label-news'>
                                <p className='date'>25</p>
                                <p className='month'>August</p>
                                <p className='news-year'>2016</p>
                            </div>
                        </div>
                        <div className='post-content'>
                            <h5 className='post-title'>Attending the Indonesian Envato
                                Authors National Meetup</h5>
                            <p className='post-meta'>6 hours ago | By <span>Admin</span></p>
                            <p className='post-des'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>
                    <div className='news-card'>
                        <div className='news-post-card-inside'>
                            <div className='time-label-news'>
                                <p className='date'>25</p>
                                <p className='month'>August</p>
                                <p className='news-year'>2016</p>
                            </div>
                        </div>
                        <div className='post-content'>
                            <h5 className='post-title'>Attending the Indonesian Envato
                                Authors National Meetup</h5>
                            <p className='post-meta'>6 hours ago | By <span>Admin</span></p>
                            <p className='post-des'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>

                    <div className='pagination'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>

                </div>

                <div className="tweets">
                    <h3>Latest Tweets</h3>

                    <div className="tweeter-logo-section">
                        <img src={tweeterLogo} alt="tweeter logo" />
                        <div>
                            <p className='title'>myticket.com</p>
                            <p className='username'>@myticket</p>
                        </div>
                        <button>Follow</button>
                    </div>

                    <div className='latest-tweet-container'>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam <span>#EratVolutpat</span>.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam<span>#EratVolutpat</span>.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam <span>#EratVolutpat</span>.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam <span>#EratVolutpat</span>.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                        <div className='latest-tweets'>
                            <p className='tweet-content'><span>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam<span>#EratVolutpat</span>.</p>
                            <p className='posted-time'>17 min</p>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default News