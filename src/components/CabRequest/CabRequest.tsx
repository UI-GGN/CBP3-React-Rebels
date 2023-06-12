import React from 'react';
import '../../styles/components/CabRequest.scss';
import { T_CabRequest } from '../../types/Interfaces';

const CabRequest: React.FC<T_CabRequest> = ({ requests }) => {
  return (
    <div className="cabRequest">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6">
        {requests.map((request) => (
          <div className="card font-inter relative" key={request.bookingId}>
            <div className="ellipse-background"></div>
            <div className="card-content">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Name </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.name}
                  >
                    {request.name}
                  </span>
                  <br />
                  <strong>Project Code </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.projectCode}
                  >
                    {request.projectCode}
                  </span>
                  <br />
                  <strong>Pickup Location</strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.pickupLocation}
                  >
                    {request.pickupLocation}
                  </span>
                </div>

                <div className="tooltip-trigger">
                  <strong>Date </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.date}
                  >
                    {request.date}
                  </span>
                  <br />
                  <strong>Time </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.time}
                  >
                    {request.time}
                  </span>
                  <br />
                  <strong>Drop Location </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={request.dropLocation}
                  >
                    {request.dropLocation}
                  </span>
                </div>
              </div>
            </div>

            <div className="card-footer-1 mt-4 space-x-4 sm:space-x-4 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
              <button className="btn-1 text-white px-4 py-2 rounded-md font-bold bg-tw_blue">
                Approve
              </button>
              <button className="btn-2 text-white px-4 py-2 rounded-md font-bold bg-tw_pink">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabRequest;
