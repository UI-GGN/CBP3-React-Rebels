import React from 'react';
import '../../styles/components/CabRequest.scss';
import type { T_CabRequest, ActionButton } from '../../types/Interfaces';
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser,
} from 'react-icons/ai';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import { convertToReadabelDate } from 'src/utils/Date';

interface CardProps {
  cabRequest: T_CabRequest;
  actionButtons: ActionButton[];
}

const DashboardCard: React.FC<CardProps> = ({ cabRequest, actionButtons }) => {
  const isAdhocRequest = cabRequest.pickupTime === cabRequest.expireDate;
  return (
    <div
      className="card w-80 font-inter relative my-2 mx-auto"
      key={cabRequest.id}
    >
      <div className="ellipse-background"></div>
      <div className="card-content">
        <div className="flex flex-row justify-between border-b-2 pb-2 mb-2">
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
          Currently assigned to {cabRequest.projectCode} project.
        </div>
        <div className="flex flex-row my-2 py-2 border-b-2">
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
            <div className="px-1 hover:text-[1.01rem]">
              {cabRequest.pickupLocation}
            </div>
            <div className="mt-auto px-1 hover:text-[1.01rem]">
              {cabRequest.dropLocation}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center">
        {actionButtons.map((action) => {
          return (
            <button
              className={`btn-1 text-white px-3 py-2 mr-2 rounded-md font-bold ${action.color}`}
            >
              {action.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCard;
