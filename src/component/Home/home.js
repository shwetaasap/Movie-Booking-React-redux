import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../app.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
    constructor() {
        super()
    }
    settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <h2 className="navbar-brand title">Movie Booking</h2>
                    </div>
                    <div className="col-lg-8 row justify-content-center search">
                        <input type='text' defaultValue='search movie'></input>
                    </div>
                    <Link className="btn wrapper translate-end m-4" to={'/'}>Login </Link>
                </nav>
                <section>
                    <div className="button-container">
                        <div className="row">
                            <div className="col-4">
                                <span classNmae="d-inline-block spanLinkTab">
                                    <Link className="btn btn-outline-dark btn-lg btn-block text-black linkTab" to='/movielist'>Latest Movie</Link>
                                </span>
                            </div>
                            <div className="col-4" >
                                <span classNmae="d-inline-block spanLinkTab">
                                    <Link className="btn btn-outline-dark btn-lg btn-block text-black linkTab" to='/upcomingmovie'>UpcomingMovie</Link>
                                </span>
                            </div>
                            <div className="col-4">
                                <span classNmae="d-inline-block spanLinkTab">
                                    <Link className="btn btn-outline-dark btn-lg btn-block text-black linkTab" to='/nearbyevents'>Nearby events</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='m-auto col-3 slick-slider'>
                        <div key='1' style={{ width: "75%", height: "75%", marginBottom: '3em' }} >
                            <Slider {...(this.settings)}>
                                {this.props.homepageApiData.map((latestMovieData) => (
                                    <img className='p-20 w-44 h-44' src={latestMovieData.imageUrl}></img>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='recommended'>Recommended Movies</div>
                    <br />
                    <div className="card d-inline-block latestMoviecard" key={this.props.homepageApiData._id}>
                        {this.props.homepageApiData.map(latestMovieData =>
                            <div className="card-body col-lg-4">
                                <img className="card-img-top p-20 cardBodyImage" src={latestMovieData.imageUrl} alt="product picture"></img>
                                <div className='imgCardTitle'>
                                    <h3 className="card-title">{latestMovieData.name}</h3>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                                    <Link className="btn moreDetailButton" to={`/moviedetailpage/${latestMovieData._id}`}>More Details.</Link>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
