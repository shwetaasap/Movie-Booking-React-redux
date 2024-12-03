
import React from 'react';
import { Link } from 'react-router-dom';
import './bookingPage.css'

const CongratulationsPage = ({ bookingDetails,qrcode }) => {
    return (
      <div className='confirmCard'>
        <div className='containerX'>
            <h1>Congratulations!</h1>
            <h4>Your booking is confirmed.</h4>
            <div className='details'>
                <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
                <p><strong>Movie:</strong> {bookingDetails.movieName}</p>
                <p><strong>Seats:</strong> {bookingDetails.numSeats}</p>
                <p><strong>Show Time:</strong> {bookingDetails.showTime}</p>
                <p><strong>Seat Type:</strong> {bookingDetails.seatTypeSelected}</p>
                </div>
                <hr></hr>
            <div className='cardconfirm'>{qrcode} &nbsp;&nbsp;
            <button className='btn btn-lg border confirmButtonHome'><Link to={`/home`}>Home</Link></button></div>
        </div>
        </div>
    );
};

export default CongratulationsPage;
