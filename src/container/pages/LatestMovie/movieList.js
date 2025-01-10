import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../components/app.css';

const MovieList = (props) => {

    const navigate = useNavigate();

    let HomeNavigate = () => {
        navigate('/home')
    }

    let handleMovieList = ({ movieApiData }) => {
        console.log('insidemovielist', movieApiData)
        if (movieApiData) {
            return movieApiData.map((item) => {

                return (
                    <div >
                        <div key={item.id} className="card shadow border d-inline-block col-lg-4 m-0.5">
                            <img className="card-img-top imgHeight" src={item.imageUrl} alt="product picture upcomingImg"></img>

                            <div className='card-body col border mb-4'>
                                <div>
                                    <h3 className="card-title text-center" style={{ backgroundColor: '#D3D3D3' }}>{item.name}</h3>
                                    <Link style={{ backgroundColor: '#C0C0C0' }} class="btn bookNow" to={'/ticketbooking'}>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
            })
        }
    }
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light" style={{ textShadow: '2px 2px black' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <h2 className="navbar-brand title">Movie Booking</h2>
                </div>
                <button class="btn-lg btn-dark navbar-btn m-2" onClick={HomeNavigate}><Link>Home</Link></button>
            </nav>

            <section>
                <div>
                    <h2 style={{ width: '100%', textAlign: 'center', backgroundColor: '#DCDCDC' }}>Latest Movies</h2>
                    <span >{handleMovieList(props)}</span>
                </div>
            </section>
        </div>
    );
};

export default MovieList;
