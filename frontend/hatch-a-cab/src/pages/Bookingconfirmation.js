import React, { useState } from "react";
import moment from "moment";
import "./../styles/pages/BookingConfirmation.scss";

const BookingConfirmation = ({ rides }) => {
  const convertDate = (date) => moment(date).format("ddd DD MMM, hh:mm A");

  const [selectedCab, setSelectedCab] = useState();

  const checkStatus = (ride) => {
    if (ride.status === "confirmed") {
      return (
        <p>
          {" "}
          <strong>Status :</strong> Successful
        </p>
      );
    } else
      return (
        <p>
          <strong>Status :</strong> Failed
        </p>
      );
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
          <strong>Destination :</strong> {selectedCab?.dropLocation}
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
            <div
              className="row bg-light m-5 p-3"
              key={ride.bookingId}
              onClick={() => selectCab(ride.bookingId)}
            >
              {checkStatus(ride)}
              <div class="row m-2">
                <div>
                  <strong>Pickup :</strong> {ride.pickUpLocation}
                </div>
                <div>
                  <strong>Destination :</strong> {ride.dropLocation}
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
