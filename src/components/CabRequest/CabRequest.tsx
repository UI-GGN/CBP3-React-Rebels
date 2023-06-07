import React from 'react';
import '../../styles/components/CabRequest.scss';

const CabRequest = ({ requests }) => {
  return (
    <div className="cabRequest p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {requests.map((request) => (
          <div className="card" key={request.bookingId}>
            <div className="card-content">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Name </strong>
                  <span>{request.name}</span>
                  <br />
                  <strong>Project Code </strong>{' '}
                  <span>{request.projectCode}</span>
                  <br />
                  <strong>Pickup Location</strong>{' '}
                  <span>{request.pickupLocation}</span>
                </div>
                <div>
                  <strong>Date </strong>
                  <span>{request.date}</span>
                  <br />
                  <strong>Time </strong> <span>{request.time}</span>
                  <br />
                  <strong>Drop Location </strong>{' '}
                  <span>{request.dropLocation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabRequest;
