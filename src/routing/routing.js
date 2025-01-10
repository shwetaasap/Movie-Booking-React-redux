import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../components/Login/login';
import Home from '../components/Home/home';
import MovieList from '../container/pages/LatestMovie/movieList';
import MovieDetailPage from '../container/pages/LatestMovie/movieDetailPage';
import UpcomingMovie from '../container/pages/UpcomingMovie/upcomingmovie';
import SelectSeat from '../container/pages/TicketBooking/selectSeat';
import SelectSeatType from '../container/pages/TicketBooking/selectSeat';
import SelectBookingInput from '../container/pages/TicketBooking/selectBooking';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { latestMovieList, upcomingMovieList, eventsList, bookingMovie } from '../actions';
import NearByEvents from '../container/pages/UpcomingMovie/nearbyEvents';


class Routing extends Component{

    componentDidMount() {
        this.props.dispatch(latestMovieList());
        this.props.dispatch(upcomingMovieList());
        this.props.dispatch(eventsList());
        this.props.dispatch(bookingMovie());
    }
    
    bookingMovieTT=this.props.bookingTime.bookingTimetable;
    movieApiData=this.props.latestmoviedata.latestMovie;


    render(){    
        return(   
            <div>
            <span>{console.log('cjgcvjh',this.movieApiData)}</span>
        <BrowserRouter> 
            <Link to='/home'></Link>
            <Link to='/movielist'></Link>
            <Link to='/movielistdetail'></Link>
            <Link to='/apicall'></Link>
            <Link to='/upcomingmovie'></Link>
            <Link to='/nearbyevents'></Link>
            <Link to='/ticketBooking'></Link>
            <Link to="/"></Link>
            
            <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home  homepageApiData={this.props.latestmoviedata.latestMovie}/>}></Route>
            <Route exact path="/moviedetailpage/:id" element={<MovieDetailPage/>}></Route>
            <Route path="/movielist" element={<MovieList movieApiData={this.props.latestmoviedata.latestMovie}/>}></Route>
            <Route path="/movielistdetail" element={<MovieDetailPage/>}></Route>
            <Route path="/nearbyevents" element={<NearByEvents nearbyevents={this.props.nearbyEventData.nearbyEvent}/>}></Route>
            <Route path="/upcomingmovie" element={<UpcomingMovie upcomingMoviedata={this.props.upcomingMovieListData.upcomingMovie}/>}></Route>
            <Route path="/ticketbooking" element={<SelectSeat bookingMovieTT={this.props.bookingTime.bookingTimetable}
                                            movieApiData={this.props.latestmoviedata.latestMovie} />}></Route>
            <Route path="/ticket" element={<SelectSeatType />}></Route>
            <Route exact path="/ticket/seat" element={<SelectBookingInput bookingMovieTT={this.props.bookingTime.bookingTimetable}
                                            movieApiData={this.props.latestmoviedata.latestMovie} />}></Route>
            </Routes>     
        </BrowserRouter>      
    </div>   
        )
    }
}

function mapStateToProps(state) {
    return ({
        latestmoviedata: state.articles,
        upcomingMovieListData:state.upcomingmovies,
       nearbyEventData:state.nearbyevent,
       bookingTime:state.movieBookingTimeTable
    })
}
Routing.ProtoTypes = {
    dispatch: PropTypes.func
}
export default connect(mapStateToProps)(Routing)