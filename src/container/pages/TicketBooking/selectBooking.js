import React, { useState, useEffect } from 'react';
import './bookingPage.css';
import { Link } from 'react-router-dom';
import CongratulationsPage from './Confirmation';
import { toDataURL } from 'qrcode'

const SelectBookingInput = (props) => {
  const [numSeats, setNumSeats] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [movieSelection, setMovieSelection] = useState([]);
  const [movieSelectTime, setMovieSelectTime] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [seatTypes] = useState([
    { seatType: "Executive" },
    { seatType: "Premium" }
  ]);
  const [selectedSeatType, setSelectedSeatType] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (props.movieApiData) {
      setMovieSelection(props.movieApiData);
    }
    if (props.bookingMovieTT) {
      setMovieSelectTime(props.bookingMovieTT);
    }
  }, [props.movieApiData, props.bookingMovieTT]);

  useEffect(() => {
    console.log('Movie Selection updated:', movieSelection);
  }, [movieSelection]);

  useEffect(() => {
    console.log('Movie Select Time updated:', movieSelectTime);
  }, [movieSelectTime]);

  const handleChange = (event) => {
    setNumSeats(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.booking) {
      console.log(`You have booked ${numSeats} seats.`);
    }
  };

  const bookingDetails = {
    id: '1200',
    movieName: selectedMovie,
    numSeats: numSeats,
    showTime: selectedTime,
    seatTypeSelected: selectedSeatType
  };

  const handleConfirmation = async () => {
    setConfirm(!confirm);
    try {
      const dataUrl = await toDataURL(JSON.stringify(bookingDetails));
      setQrCodeUrl(dataUrl);
      console.log('qrcode', qrCodeUrl)
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleSeatTypeChange = (event) => {
    setSelectedSeatType(event.target.value);
  };

  return (
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
      <span className='container'>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Enter Number of Seats: &nbsp;</h3></label>
          <input
            type="number"
            onChange={handleChange}
            value={numSeats} className='inputNumber'
          />&nbsp;

          <label className='selectLabel'>
            Select Movie: &nbsp;&nbsp;
            <select value={selectedMovie} onChange={handleMovieChange} className='select'>
              <option value="" disabled>Select a movie</option>
              {movieSelection.length > 0 ? (
                movieSelection.map((movie, index) => (
                  <option key={index} value={movie.name}>{movie.name}</option>
                ))
              ) : (
                <option disabled>No movies available</option>
              )}
            </select>
          </label>&nbsp;
          <label className='selectLabel'>
            Select Time:&nbsp;&nbsp;
            <select value={selectedTime} onChange={handleTimeChange} className='select'>
              <option value="" disabled>Select a time</option>
              {movieSelectTime.length > 0 ? (
                movieSelectTime.map((time, index) => (
                  <option key={index} value={time.TimeStart}>{time.TimeStart}</option>
                ))
              ) : (
                <option disabled>No times available</option>
              )}
            </select>
          </label>&nbsp;
          <label className='selectLabel'>
            SEAT TYPE:
            <select value={selectedSeatType} onChange={handleSeatTypeChange} className='select'>
              <option value="" disabled>Select a Seat Type</option>
              {seatTypes.map((seat, index) => (
                <option key={index} value={seat.seatType}>{seat.seatType}</option>
              ))}
            </select>
          </label>&nbsp;
          <button type="submit" className='btn btn-outline-dark btn-block button'>Submit</button>
        </form>
        <br />
      </span>
      <hr></hr>
      <div>
        <h3>You have selected &nbsp;&nbsp;{numSeats} &nbsp;&nbsp;seats & &nbsp;&nbsp;{selectedMovie} &nbsp;&nbsp;at &nbsp;&nbsp;{selectedTime}&nbsp;&nbsp;</h3>
      </div>
      <button className='button' onClick={handleConfirmation}>Please confirm</button>
      {confirm && qrCodeUrl && <CongratulationsPage bookingDetails={bookingDetails} qrcode={<img src={qrCodeUrl} alt="QR Code" />} />}
    </div>
  );
};

export default SelectBookingInput;



