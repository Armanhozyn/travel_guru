import React from 'react';
import Header from './../Header/Header';
import './Booking.css';
const Booking = () => {
    document.body.style.background = '#fff';
    return (
        <div className='scene__booking'>
            <Header></Header>
            <h2>This is Booking</h2>
        </div>
    );
};

export default Booking;