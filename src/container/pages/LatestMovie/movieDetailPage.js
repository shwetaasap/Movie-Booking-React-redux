import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../component/app.css';
import { selectedMovieDetail, clearSlectedMovie } from '../../action';

 class MovieDetailPage extends Component{
   
    urlpath =(window.location.pathname.split('/'))[2]

    componentDidMount() {
            this.props.dispatch(selectedMovieDetail(this.urlpath));
        }
    componentWillUnmount(){
        this.props.dispatch(clearSlectedMovie());
    }       


    handleMovieDetail = ({selectedMovie}) => {
        if (selectedMovie) {
            return selectedMovie.map((item) => {
                return (
                    <div className='container-fluid mt-4'>
                        <div class="row row-cols-4">
                            <div key={item.id} className="card col shadow border imgDetailDiv" >
                                <img className="card-img-top imgDetail" src={item.imageUrl} alt="product picture"></img>
                            </div>
                            <div className='card-body col'>
                                <div>
                                    <h3 className="card-title text-center bg-secondary">{item.name}</h3>
                                    <div className='border text-center p-2'>
                                        <h5 className="card-text text-start"><h4>Language:</h4>{item.language}</h5>
                                        <h5 className="card-text text-start"><h4>Rating:</h4>{item.rate}</h5>
                                        <h5 className="card-text text-start"><h4>Type:</h4>{item.type}</h5>
                                    </div>
                                    <Link style={{ backgroundColor: '#C0C0C0' }} class="btn col col-lg-12 bookNow" to={'/ticketbooking'}>Book Now</Link>
                                </div>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){   
      return ( 
        <div>
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <h2 className="navbar-brand title">Movie Booking</h2>
                </div>
                <Link class="btn-lg bg-light navbar-btn m-2 btn p-2 wrapper" to={'/home'}>Home</Link>
            </nav>
            <section>
                    <span >{console.log(this.props.selectedMovieDetail)}
                        {this.handleMovieDetail(this.props.selectedMovieDetail)}</span>
            </section>
        </div>
    );
    }

};


function mapStateToProps(state) {
    return ({
        selectedMovieDetail: state.articles,
    })
}
MovieDetailPage.ProtoTypes = {
    dispatch: PropTypes.func
}
export default connect(mapStateToProps)(MovieDetailPage)
