import React, { useState, useEffect } from 'react';
import SelectBookingInput from './selectBooking';
import { Link } from 'react-router-dom';

const SelectSeatType = (props) => {
    const [isTable, setIsTable] = useState(false);
    const [movieName, setMovieName] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(false);

    useEffect(() => {
        handleMovieName();
    }, [props.movieApiData]);

    const handleClick = () => {
        if (props.showSelectSeatType) {
            setIsTable(!isTable);
        }
    };

    const handleMovieName = () => {
        if (props.movieApiData) {
            const movieData = props.movieApiData;
            setMovieName(movieData.map((item) => item.name));
        }
    };

    const handleBookingClick = () => {
        setSelectedBooking(!selectedBooking);
    };

    const combinedProps = {
    bookingTimetable:props.bookingTimetable,
    movieApiData: props.movieApiData
}

    return (
        <div>
            {console.log('hbdjjjjjjjjjj', props)}
            <button className="btn btn-outline-dark btn-m btn-block text-black" onClick={handleClick}>Executive</button>
            <button className="btn btn-outline-dark btn-lm btn-block text-black" onClick={handleClick}>Premium</button>
            {isTable && (
                <div className="mt-12">
                    <table className="table table-bordered table-hover table-striped w-50">
                        <thead className="bg-dark text-info text-center">
                            <tr>
                                <th>SNo.</th>
                                <th>NAME</th>
                                <th>START Time</th>
                                <th>END TIME</th>
                                <th>SEATS AVAILABLE</th>
                                <th>TOTAL SEATS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.bookingTimetable.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.movieNo}</td>
                                    <td>{movieName}</td>
                                    <td>{prod.TimeStart}</td>
                                    <td>{prod.TimeEnd}</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="btn p-2" style={{ backgroundColor: '#C0C0C0' }} onClick={handleBookingClick}>
                        <Link to={`/ticket/seat`}>Book Now</Link>
                    </button>
                    {selectedBooking && <SelectBookingInput booking={selectedBooking} {...combinedProps} />}
                </div>
               
            )}
            
        </div>
    );
};

export default SelectSeatType;
