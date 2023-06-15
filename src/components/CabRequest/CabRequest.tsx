import React, { useState, useEffect } from 'react';
import '../../styles/components/CabRequest.scss';
import type { T_CabRequest } from '../../types/Interfaces';
import CabRequestService from '../../services/CabRequestService';

const CabRequest = () => {
  const [cabRequests, setCabRequests] = useState<T_CabRequest[]>([]);

  useEffect(() => {
    async function getData() {
      setCabRequests(await CabRequestService.fetchInfo());
    }
    getData();
  }, []);

  return (
    <div className="cabRequest">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6">
        {cabRequests.map((cabRequest) => (
          <div className="card font-inter relative" key={cabRequest.id}>
            <div className="ellipse-background"></div>
            <div className="card-content">
              <span className="inline-flex items-center rounded-full bg-green-100 px-6 py-1 mb-4 text-s font-medium text-green-700 ring-1 ring-inset ring-green-500">
                Adhoc
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-6 py-1 mb-4 text-s font-medium text-indigo-700 ring-1 ring-inset ring-indigo-500">
                Recurring
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Name </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.employeeName}
                  >
                    {cabRequest.employeeName}
                  </span>
                  <br />
                  <strong>Project Code </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.projectCode}
                  >
                    {cabRequest.projectCode}
                  </span>
                  <br />
                  <strong>Pickup Location</strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.pickupLocation}
                  >
                    {cabRequest.pickupLocation}
                  </span>
                </div>

                <div className="tooltip-trigger">
                  <strong>Date </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.pickupTime}
                  >
                    {new Date(cabRequest.pickupTime).toLocaleDateString()}
                  </span>
                  <br />
                  <strong>Time </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.pickupTime}
                  >
                    {new Date(cabRequest.pickupTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <br />
                  <strong>Drop Location </strong>
                  <span
                    className="inline-block truncate w-full mb-2"
                    title={cabRequest.dropLocation}
                  >
                    {cabRequest.dropLocation}
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
