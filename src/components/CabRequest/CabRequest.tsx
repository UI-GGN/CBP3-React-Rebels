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
import { LuMailX } from 'react-icons/lu';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import Select from '../Select';
import { convertToReadabelDate } from 'src/utils/Date';
import Pagination from '../Pagination/Pagination';

const CAB_REQUEST: T_CabRequest[] = [
  {
    id: 1,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-08-22T10:00:00.000Z',
    status: 'PENDING',
  },
  {
    id: 2,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'APPROVED',
  },
  {
    id: 3,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 4,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-08-23T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 5,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 6,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 7,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 8,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 9,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 10,
    employeeName: 'Dhruva Ji',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 11,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 12,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 13,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 14,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 15,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 16,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 17,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 18,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 19,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 20,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
  {
    id: 21,
    employeeName: 'Dhruva',
    pickupTime: '2023-06-22T10:00:00.000Z',
    projectCode: '123456',
    pickupLocation: 'ABC ABC ABC',
    dropLocation: 'Thoughtworks Gurgram',
    expireDate: '2023-06-22T10:00:00.000Z',
    status: 'DECLINED',
  },
];

const requestTypeFilterOptions = [
  {
    id: '0',
    value: 'All',
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

const requestStatusFilterOptions = [
  {
    id: '0',
    value: 'Pending',
  },
  {
    id: '1',
    value: 'Approved',
  },
  {
    id: '2',
    value: 'Declined',
  },
];

const CabRequest = () => {
  const [cabRequests, setCabRequests] = useState<T_CabRequest[]>([]);
  const [requestTypeFilter, setRquestTypeFilter] = useState(
    requestTypeFilterOptions[0]
  );
  const [requestStatusFilter, setRquestStatusFilter] = useState(
    requestStatusFilterOptions[0]
  );
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
      // setCabRequests(await CabRequestService.fetchInfo());
      setCabRequests(CAB_REQUEST);
    }
    getData();
  }, []);

  useEffect(() => {
    let filteredRequest = cabRequests;
    console.log(filteredCabRequest);
    if (requestTypeFilter.value === 'Adhoc') {
      console.log(1);
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.pickupTime === cabRequest.expireDate
      );
    } else if (requestTypeFilter.value === 'Recurring') {
      console.log(2);
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.pickupTime !== cabRequest.expireDate
      );
    }
    if (requestStatusFilter.value === 'Pending') {
      console.log(3);
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'PENDING'
      );
    } else if (requestStatusFilter.value === 'Approved') {
      console.log(4);
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'APPROVED'
      );
    } else if (requestStatusFilter.value === 'Declined') {
      console.log(5);
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'DECLINED'
      );
    }
    setFilteredCabRequest(filteredRequest);
  }, [requestTypeFilter, cabRequests, requestStatusFilter]);

  useEffect(() => {
    const currentRecords = filteredCabRequest.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );
    setPageDetails(currentRecords);
  }, [currentPage, filteredCabRequest]);

  const requestTypeFilterChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRquestTypeFilter(requestTypeFilterOptions[Number(event.target.value)]);
  };

  const requestStatusFilterChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRquestStatusFilter(
      requestStatusFilterOptions[Number(event.target.value)]
    );
  };

  return (
    <div className="cabRequest pt-12">
      <div className="w-11/12 mx-auto">
        <div className="text-light text-3xl mb-4">Cab Requests</div>
        <div className="inner-container pb-4">
          <div className="bg-light rounded flex flex-col md:flex-row justify-end mb-3">
            <div className="flex flex-row items-center p-2">
              <div className="pr-2 text-sm text-muted">Request Status</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
                <Select
                  id="request_status_filter"
                  value={requestStatusFilter.id}
                  options={requestStatusFilterOptions}
                  required={false}
                  onChange={requestStatusFilterChangeHandler}
                ></Select>
              </div>
            </div>
            <div className="flex items-center flex-row p-2">
              <div className="px-2 text-sm text-muted">Request Type</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
                <Select
                  id="request_type_filter"
                  value={requestTypeFilter.id}
                  options={requestTypeFilterOptions}
                  required={false}
                  onChange={requestTypeFilterChangeHandler}
                ></Select>
              </div>
            </div>
          </div>
          {pageDeatils.length > 0 && (
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
                                new Date(
                                  cabRequest.pickupTime
                                ).toLocaleDateString()
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
                              {new Date(
                                cabRequest.pickupTime
                              ).toLocaleTimeString([], {
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
                            <ImLocation
                              className="text-tw_yellow"
                              size={'1.5rem'}
                            />
                          </div>
                          <div className="h-8 border-r-2 w-0 m-auto my-2 border-tw_primary border-dashed"></div>
                          <div>
                            <ImLocation2
                              className="text-tw_pink"
                              size={'1.5rem'}
                            />
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
                      <button className="btn-1 text-white px-3 py-2 mr-2 rounded-md font-bold bg-tw_blue">
                        Approve
                      </button>
                      <button className="btn-2 text-white px-3 py-2 rounded-md font-bold bg-tw_pink">
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {pageDeatils.length === 0 && (
            <div className="bg-tw_disable_input rounded h-60 w-11/12 mx-auto px-4 my-2">
              <div className="flex h-full text-muted flex-col items-center justify-center">
                <div>
                  <LuMailX size={'10rem'} />
                </div>
                <div className="text-xl">
                  You've got no items left to handle!
                </div>
              </div>
            </div>
          )}
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CabRequest;
