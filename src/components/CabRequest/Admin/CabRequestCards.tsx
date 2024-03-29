import React from 'react';
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import { CabRequestCardsProps, T_CabRequest } from '../../../types/Interfaces';
import { convertToReadabelDate } from '../../../utils/Date';

const CabRequestCards: React.FC<CabRequestCardsProps> = ({
  pageDetails,
  handleApprove,
  handleDecline,
  vendors,
}) => {
  return (
    <>
      {pageDetails.map((cabRequest: T_CabRequest) => {
        const isAdhocRequest = cabRequest.pickupTime === cabRequest.expireDate;
        const vendorName = cabRequest.vendorId
          ? vendors.find((vendor) => vendor.id === cabRequest.vendorId)?.name
          : undefined;
        return (
          <div
            className="card w-80 font-inter relative p-2 my-2 mx-auto"
            key={cabRequest.id}
          >
            <div className="ellipse-background"></div>
            <div className="card-content text-base">
              <div className="flex flex-row justify-between border-b-2 pb-2 mb-1">
                <div>
                  <div
                    className="flex items-center truncate w-full"
                    title="Starting Date"
                  >
                    <AiOutlineCalendar size={'1.2rem'} />
                    <span className="pl-1">
                      {convertToReadabelDate(
                        new Date(cabRequest.pickupTime).toLocaleDateString()
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className="flex items-center truncate w-full"
                    title="Pickup Time"
                  >
                    <AiOutlineClockCircle size={'1.2rem'} />
                    <span className="pl-1">
                      {new Date(cabRequest.pickupTime).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
                <div title="Request Type">
                  {isAdhocRequest && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-500">
                      Adhoc
                    </span>
                  )}
                  {!isAdhocRequest && (
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-500">
                      Recurring
                    </span>
                  )}
                </div>
              </div>
              <div
                className="flex items-center truncate w-full text-base"
                title="Employee Name"
              >
                <AiOutlineUser size={'1.4rem'} />
                <div className="pl-1">{cabRequest.employeeName}</div>
              </div>
              <div className="text-muted text-xs">
                Project code is{' '}
                <span className="text-tw_yellow font-bold">
                  {cabRequest.projectCode}
                </span>
                .
              </div>

              <div className="flex flex-row py-1">
                <div className="flex flex-col align-center">
                  <div>
                    <ImLocation className="text-tw_yellow" size={'1.5rem'} />
                  </div>
                  <div className="h-8 border-r-2 w-0 m-auto my-2 border-tw_primary border-dashed"></div>
                  <div>
                    <ImLocation2 className="text-tw_pink" size={'1.5rem'} />
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <div className="px-1 hover:text-[1.05rem]">
                    {cabRequest.pickupLocation}
                  </div>
                  <div className="mt-auto px-1 hover:text-[1.05rem]">
                    {cabRequest.dropLocation}
                  </div>
                </div>
              </div>
              <div className="py-1 text-muted mb-2 text-sm h-[1.5rem]">
                {cabRequest.vendorId && cabRequest.status === 'APPROVED' && (
                  <span>
                    Assigned vendor is{' '}
                    <span className="text-tw_secondary font-bold">
                      {vendorName}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="pt-2 flex flex-row justify-around border-t-2">
              {cabRequest.status !== 'APPROVED' && (
                <button
                  onClick={() => handleApprove(cabRequest)}
                  disabled={cabRequest.status === 'DECLINED'}
                  className="btn-1 text-white px-3 py-2 rounded-md font-bold bg-tw_blue disabled:bg-tw_placeholder disabled:cursor-not-allowed"
                >
                  Approve
                </button>
              )}
              {cabRequest.status === 'APPROVED' && (
                <button
                  onClick={() => handleApprove(cabRequest)}
                  className="btn-1 text-white px-3 py-2 rounded-md font-bold bg-tw_blue"
                >
                  Reassign
                </button>
              )}

              <button
                onClick={() => handleDecline(cabRequest)}
                disabled={cabRequest.status === 'DECLINED'}
                className="btn-2 text-white px-3 py-2 rounded-md font-bold bg-tw_pink disabled:bg-tw_placeholder disabled:cursor-not-allowed"
              >
                Decline
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CabRequestCards;
