import React, { useState } from 'react';
import moment from 'moment';
import '../styles/pages/BookingConfirmation.scss';

const BookingConfirmation = ({ rides }) => {
  const convertDate = (date) => moment(date).format('ddd DD MMM, hh:mm A');

  const [selectedCab, setSelectedCab] = useState({
    bookingId: 1,
    dropLocation: 'address1',
    pickUpLocation: 'address2',
    city: 'Chennai',
    area: 'T.Nagar',
    time: '2022-04-22 10:34:23',
    status: 'confirmed',
  });

  const checkStatus = (ride) => {
    if (ride.status === 'confirmed') {
      return <h5>Ride Booked Successful</h5>;
    } else return <h5>Ride Booking Failed</h5>;
  };

  const selectCab = (bookingId) => {
    const cab = rides.find((item) => item.bookingId === bookingId);
    setSelectedCab(cab);
  };
  const showDetails = () => {
    return (
      <div>
        Details
        <div>
          <strong>Area :</strong> {selectedCab?.area}
        </div>
        <div>
          <strong>Date :</strong>
          {selectedCab?.time}
        </div>
        <div>
          <strong>Pickup :</strong> {selectedCab?.pickUpLocation}
        </div>
        <div>
          <strong>Destination :</strong> {selectedCab?.pickUpLocation}
        </div>
        <hr />
        <div>
          <strong>Time :</strong> {convertDate(selectedCab.time)}
        </div>
      </div>
    );
  };
  return (
    <div className="container text-center mt-5">
      <div class="row">
        <div class="col">
          {rides.map((ride) => (
            <div className="row bg-light m-5 p-3" key={ride.bookingId}>
              {checkStatus(ride)}
              <div class="row m-2">
                <div onClick={() => selectCab(ride.bookingId)}>
                  <strong>Pickup :</strong> {ride.pickUpLocation}
                </div>
                <div>
                  <strong>Destination :</strong> {ride.pickUpLocation}
                </div>
                <hr />
                <div>
                  <strong>Time :</strong> {convertDate(ride.time)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="col m-5 bg-light">
          {selectedCab !== undefined ? showDetails() : <></>}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
