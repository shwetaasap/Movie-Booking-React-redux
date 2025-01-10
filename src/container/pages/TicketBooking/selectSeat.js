
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectSeatType from './selectSeatType';
import { latestMovieList, bookingMovie } from '../../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class SelectSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: '',
            showSelectSeatType: false,
            movieData: null
        };
    }
    handleButtonClick = () => {
        this.setState({ showSelectSeatType: true });
    }

    componentDidMount() {
        this.getDate();
        this.props.dispatch(latestMovieList());
        this.props.dispatch(bookingMovie());
    }
    componentDidUpdate(prevProps) {
        if (prevProps.latestmoviedata !== this.props.latestmoviedata) {
            this.setState({ movieData: this.props.latestmoviedata.latestMovie });
        }
    }

    getDate = () => {
        let today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        this.setState({ currentDate: `${month}/${date}/${year}` });
    }

    render() {
        const combinedProps = {
            ...this.props.bookingMovieTT,
            movieApiData: this.state.movieData
        }
        return (
            <div>
                <div>
                    <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light" style={{ textShadow: '2px 2px black' }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                    <h2 className="navbar-brand title">Movie Booking</h2>
                </div>
                <button class="btn-lg btn-dark navbar-btn m-2"><Link to='/home'>Home</Link></button>
                    
                    </nav>
                    <section>
                        <div style={{ width: '100%', backgroundColor: 'lightGrey', display: 'flex', justifyContent: 'center', textAlign: 'center', borderColor: 'grey', borderStyle: 'solid', borderWidth: '2px' }}>
                            <h1>Today's Date</h1>
                            <div style={{ width: '12em', margin: '0 auto', backgroundColor: 'lightCoral', padding: '1em', textAlign: 'center' }}>
                                <h2>{this.state.currentDate}</h2>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="button-container">
                            <div className="row">
                                <div className="col-6 mt-5">
                                    <span className="d-inline-block" style={{ width: '100%' }}>
                                        <button className="btn btn-outline-dark btn-lg btn-block text-black" style={{ backgroundColor: 'lightgrey' }}>Available Event Timing</button>
                                    </span>
                                </div>
                                <div className="col-6 mt-5">
                                    <span className="d-inline-block" style={{ width: '100%' }}>
                                        <button
                                            className="btn btn-outline-dark btn-lg btn-block text-black"
                                            onClick={this.handleButtonClick}
                                            style={{ backgroundColor: 'lightgrey' }}>
                                            <Link to={`/ticket`}>Available Movie Timing</Link>
                                        </button>
                                        {this.state.showSelectSeatType && <SelectSeatType showSelectSeatType={this.state.showSelectSeatType} {...combinedProps} />}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    latestmoviedata: state.articles,
    bookingMovieTT: state.movieBookingTimeTable
});
SelectSeat.ProtoTypes = {
    dispatch: PropTypes.func
}
export default connect(mapStateToProps)(SelectSeat);



