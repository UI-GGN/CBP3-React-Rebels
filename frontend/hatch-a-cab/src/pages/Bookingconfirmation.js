import React from "react";
import moment from "moment";
import "./../styles/pages/BookingConfirmation.scss";

const BookingConfirmation = ({ ride }) => {
  const date = moment(ride.date).format("ddd DD MMM, hh:mm A");
  const checkStatus = () => {
    if (ride.status === "confirmed") {
      return <h5>Ride Booked Successful</h5>;
    } else return <h5>Ride Booking Failed</h5>;
  };
  return (
    <div className="container">
      {checkStatus()}
      <div>
        <div>
          <strong>Pickup :</strong> {ride.pickUpLocation}
        </div>
        <div>
          <strong>Destination :</strong> {ride.pickUpLocation}
        </div>
        <hr />
        <div>
          <strong>Time :</strong> {date}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
