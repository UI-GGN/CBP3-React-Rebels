import React from 'react';
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import {
  EmployeeCabRequestCardsProps,
  T_CabRequest,
} from '../../../types/Interfaces';
import { convertToReadabelDate } from '../../../utils/Date';
import { FaUserNurse } from 'react-icons/fa6';
import { BsTelephone } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { RxCrossCircled } from 'react-icons/rx';

const CabRequestCards: React.FC<EmployeeCabRequestCardsProps> = ({
  pageDetails,
  vendors,
}) => {
  return (
    <>
      {pageDetails.map((cabRequest: T_CabRequest) => {
        const isAdhocRequest = cabRequest.pickupTime === cabRequest.expireDate;
        const vendor = cabRequest.vendorId
          ? vendors.find((vendor) => vendor.id === cabRequest.vendorId)
          : undefined;
        const pickupTime = new Date(cabRequest.pickupTime);
        const requestApprovedWithInTime = pickupTime;
        requestApprovedWithInTime.setMinutes(pickupTime.getMinutes() - 30);
        return (
          <div
            className="card w-80 min-h-[17.62rem] font-inter relative p-2 my-2 mx-auto"
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
                      {convertToReadabelDate(pickupTime.toLocaleDateString())}
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
              {cabRequest.status === 'APPROVED' && (
                <div className="text-tw_primary">
                  {' '}
                  <div
                    className="flex items-center truncate w-full text-base mt-3"
                    title="Assigned Vendor"
                  >
                    <FaUserNurse size={'1.4rem'} />
                    <div className="pl-1">{vendor?.name}</div>
                  </div>
                  <div
                    className="flex items-center truncate w-full text-base my-3"
                    title="Vendor contact number"
                  >
                    <BsTelephone size={'1.4rem'} />
                    <div className="pl-1">{vendor?.phoneNumber}</div>
                  </div>
                </div>
              )}
              {cabRequest.status === 'PENDING' && (
                <div className="h-[4rem] my-3">
                  <div className="flex w-full text-base">
                    <CgSandClock size={'1.4rem'} />
                    Your request is in progress.
                  </div>
                  <div className="text-muted text-xs mt-1">
                    Request will be processed by
                    <span className="text-tw_yellow font-bold">
                      {' ' +
                        convertToReadabelDate(pickupTime.toLocaleDateString()) +
                        ' ' +
                        requestApprovedWithInTime.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                    </span>
                    .
                  </div>
                </div>
              )}

              {cabRequest.status === 'DECLINED' && (
                <div className="h-[4rem] my-3">
                  <div className="flex w-full text-tw_secondary">
                    <div className="pt-1">
                      <RxCrossCircled size={'1.2rem'} />
                    </div>
                    <div className="flex w-full text-base ml-1 font-medium">
                      Request rejected, currently unable to fulfill.
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-row py-1 mb-0">
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CabRequestCards;
