import React, { useState, useEffect } from 'react';
import '../../styles/components/CabRequest.scss';
import type { T_CabRequest } from '../../types/Interfaces';
import CabRequestService from '../../services/CabRequestService';
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser,
  AiFillCaretRight,
} from 'react-icons/ai';

import { ImLocation, ImLocation2 } from 'react-icons/im';
import Select from '../Select';
import { convertToReadabelDate } from 'src/utils/Date';
import Pagination from '../Pagination/Pagination';

const filterOptions = [
  {
    id: '0',
    value: 'Adhoc & Recurring',
  },
  {
    id: '1',
    value: 'Adhoc',
  },
  {
    id: '2',
    value: 'Recurring',
  },
];
const CabRequest = () => {
  const [cabRequests, setCabRequests] = useState<T_CabRequest[]>([]);
  const [filter, setFilter] = useState(filterOptions[0]);
  const [filteredCabRequest, setFilteredCabRequest] = useState<T_CabRequest[]>(
    []
  );

  const [pageDeatils, setPageDetails] = useState<T_CabRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(filteredCabRequest.length / recordsPerPage);

  useEffect(() => {
    async function getData() {
      setCabRequests(await CabRequestService.fetchInfo());
    }
    getData();
  }, []);

  useEffect(() => {
    if (filter.value === 'Adhoc') {
      setFilteredCabRequest(
        cabRequests.filter(
          (cabRequest) => cabRequest.pickupTime === cabRequest.expireDate
        )
      );
    } else if (filter.value === 'Recurring') {
      setFilteredCabRequest(
        cabRequests.filter(
          (cabRequest) => cabRequest.pickupTime !== cabRequest.expireDate
        )
      );
    } else setFilteredCabRequest(cabRequests);
  }, [filter, cabRequests]);

  useEffect(() => {
    const currentRecords = filteredCabRequest.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );
    setPageDetails(currentRecords);
  }, [currentPage, filteredCabRequest]);

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(Number(event.target.value));
    setFilter(filterOptions[Number(event.target.value)]);
  };
  return (
    <div className="cabRequest pt-16">
      <div className="w-11/12 inner-container mx-auto pb-4">
        <div className="bg-light rounded flex flex-col md:flex-row justify-between mb-3">
          <div className="flex items-center p-2">
            <div className="pr-1">Request Status</div>
            <AiFillCaretRight size={'1.2rem'} /> <div>PENDING</div>
          </div>
          <div className="flex flex-row p-2">
            <div className="px-2">Request Type</div>
            <div className="inline min-w-max sm:mr-[.5rem]">
              {/* <Select 
          id="request_type_filter" 
          options={filterOptions} 
          value={filter.value}
          onChange={}
          ></Select> */}

              <Select
                id="driver_name"
                value={filter.id}
                options={filterOptions}
                required={false}
                onChange={filterChangeHandler}
              ></Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
          {pageDeatils.map((cabRequest) => {
            const isAdhocRequest =
              cabRequest.pickupTime === cabRequest.expireDate;
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
                          {new Date(cabRequest.pickupTime).toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            }
                          )}
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
                        <ImLocation
                          className="text-tw_yellow"
                          size={'1.5rem'}
                        />
                      </div>
                      <div className="h-8 border-r-2 w-0 m-auto my-2 border-tw_primary border-dashed"></div>
                      <div>
                        <ImLocation2 className="text-tw_pink" size={'1.5rem'} />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="px-1 hover:text-[1.01rem]">
                        {' '}
                        {cabRequest.pickupLocation}
                      </div>
                      <div className="mt-auto px-1 hover:text-[1.01rem]">
                        {' '}
                        {cabRequest.dropLocation}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-row justify-center">
                  <button className="btn-1 text-white px-4 py-2 mr-2 rounded-md font-bold bg-tw_blue">
                    Approve
                  </button>
                  <button className="btn-2 text-white px-4 py-2 rounded-md font-bold bg-tw_pink">
                    Decline
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CabRequest;
