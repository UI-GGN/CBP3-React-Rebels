import React from 'react';
import '../../styles/components/CabRequest.scss';

const CabRequest = ({ requests }) => {
  return (
    <div className="cabRequest p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {requests.map((request) => (
          <div className="card font-inter" key={request.bookingId}>
            <div className="card-content  ">
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

                <div>
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

            <div className="card-footer-1 mt-4 space-x-16 ">
              <button className="btn-1 text-white px-4 py-2 rounded-md font-bold bg-tw_saphire_blue">
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
