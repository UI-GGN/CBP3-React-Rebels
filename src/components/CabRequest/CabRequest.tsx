import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import '../../styles/components/CabRequest.scss';
import type { T_CabRequest, Vendor } from '../../types/Interfaces';
import CabRequestService from '../../services/CabRequestService';
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineUser,
} from 'react-icons/ai';
import { LuMailX } from 'react-icons/lu';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import Select from '../Select';
import { convertToReadabelDate } from 'src/utils/Date';
import Pagination from '../Pagination/Pagination';
import {
  REQUEST_TYPE_FILETR_OPTIONS,
  SORTING_OPTIONS,
  REQUEST_STATUS_FILETR_OPTIONS,
} from '../../utils/Constants';
import DashboardLoader from '../DashboardLoader/DashboardLoader';

const EmployeeCabRequest = () => {
  const [cabRequests, setCabRequests] = useState<T_CabRequest[]>([]);
  const [requestTypeFilter, setRquestTypeFilter] = useState(
    REQUEST_TYPE_FILETR_OPTIONS[0]
  );
  const [requestStatusFilter, setRquestStatusFilter] = useState(
    REQUEST_STATUS_FILETR_OPTIONS[0]
  );
  const [filteredCabRequest, setFilteredCabRequest] = useState<T_CabRequest[]>(
    []
  );
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedCabRequest, setSelectedCabRequest] =
    useState<T_CabRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const [sortingFilter, setSortingFilter] = useState(SORTING_OPTIONS[0]);

  const [pageDeatils, setPageDetails] = useState<T_CabRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(filteredCabRequest.length / recordsPerPage);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      setCabRequests(await CabRequestService.fetchInfo());
    }
    getData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    let filteredRequest = cabRequests;
    if (requestTypeFilter.value === 'Adhoc') {
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.pickupTime === cabRequest.expireDate
      );
    } else if (requestTypeFilter.value === 'Recurring') {
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.pickupTime !== cabRequest.expireDate
      );
    }
    if (requestStatusFilter.value === 'Pending') {
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'PENDING'
      );
    } else if (requestStatusFilter.value === 'Approved') {
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'APPROVED'
      );
    } else if (requestStatusFilter.value === 'Declined') {
      filteredRequest = filteredRequest.filter(
        (cabRequest) => cabRequest.status === 'DECLINED'
      );
    }
    filteredRequest = filteredRequest.sort(
      (a, b) =>
        new Date(a.pickupTime).getTime() - new Date(b.pickupTime).getTime()
    );
    if (sortingFilter.id !== '0') filteredRequest = filteredRequest.reverse();
    setFilteredCabRequest(filteredRequest);
  }, [requestTypeFilter, cabRequests, requestStatusFilter, sortingFilter]);

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
    setRquestTypeFilter(
      REQUEST_TYPE_FILETR_OPTIONS[Number(event.target.value)]
    );
  };

  const sortingChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortingFilter(SORTING_OPTIONS[Number(event.target.value)]);
  };
  const requestStatusFilterChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRquestStatusFilter(
      REQUEST_STATUS_FILETR_OPTIONS[Number(event.target.value)]
    );
  };

  const handleDeleteConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleApproveRequest = () => {
    console.log('1. ');
    if (selectedCabRequest != null && selectedVendor != null) {
      CabRequestService.assignVendor(
        selectedVendor?.id,
        selectedCabRequest?.id
      ).then(() => setIsModalOpen(false));
      console.log('2. ');
    }
  };
  const assignModalContent =
    vendors.length > 0 ? (
      <div>
        <div className="flex flex-col p-2">
          {vendors.map((vendor) => (
            <button
              onClick={() => setSelectedVendor(vendor)}
              key={vendor.id}
              className="w-full bg-tw_disable_input hover:bg-tw_primary hover:text-white tracking-wide font-semibold my-1 p-2 rounded-lg"
            >
              {vendor.name}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div>Loading vendors...</div>
    );
  const actionableItemsForApprove = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => setIsModalOpen(false)}
        className="p-2 mx-4 w-24 bg-tw_disable_input rounded text-center"
      >
        Cancel
      </button>
      <button
        onClick={handleApproveRequest}
        className="p-2 mx-4 w-24 bg-tw_primary text-white rounded text-center"
      >
        Save
      </button>
    </div>
  );
  const actionableItemsForDecline = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => setIsModalOpen(false)}
        className="p-2 mx-4 w-24 bg-tw_disable_input rounded text-center"
      >
        No
      </button>
      <button className="p-2 mx-4 w-24 bg-tw_primary text-white rounded text-center">
        Yes
      </button>
    </div>
  );
  return (
    <div className="cabRequest pt-12">
      <div className="w-11/12 mx-auto mb-8">
        <div className="text-light text-3xl mb-4">Cab Requests</div>
        <div className="inner-container rounded-b-xl pb-4">
          <div className="bg-light rounded-t-lg flex flex-col md:flex-row justify-end mb-3">
            <div className="flex flex-row items-center p-2">
              <div className="pr-2 text-sm">Request Status</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
                <Select
                  id="request_status_filter"
                  value={requestStatusFilter.id}
                  options={REQUEST_STATUS_FILETR_OPTIONS}
                  required={false}
                  onChange={requestStatusFilterChangeHandler}
                ></Select>
              </div>
            </div>
            <div className="flex items-center flex-row p-2">
              <div className="px-2 text-sm">Request Type</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
                <Select
                  id="request_type_filter"
                  value={requestTypeFilter.id}
                  options={REQUEST_TYPE_FILETR_OPTIONS}
                  required={false}
                  onChange={requestTypeFilterChangeHandler}
                ></Select>
              </div>
            </div>
            <div className="flex items-center flex-row p-2">
              <div className="px-2 text-sm">Sort By</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
                <Select
                  id="sort_by"
                  value={sortingFilter.id}
                  options={SORTING_OPTIONS}
                  required={false}
                  onChange={sortingChangeHandler}
                ></Select>
              </div>
            </div>
          </div>
          {pageDeatils.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
              {pageDeatils.map((cabRequest) => {
                const isAdhocRequest =
                  cabRequest.pickupTime === cabRequest.expireDate;

                const handleApprove = (
                  event: React.MouseEvent<HTMLButtonElement>
                ) => {
                  setSelectedCabRequest(cabRequest);
                  setIsModalOpen(true);
                  fetchVendors();
                };

                const handleDecline = (
                  event: React.MouseEvent<HTMLButtonElement>
                ) => {
                  setSelectedCabRequest(cabRequest);
                  setIsConfirmationOpen(true);
                };
                const fetchVendors = async () => {
                  try {
                    const response = await fetch(
                      'https://cab-schedule-serverless.vercel.app/api/v1/vendor'
                    );
                    const data = await response.json();
                    setVendors(data);
                  } catch (error) {
                    console.error('Error fetching vendors:', error);
                  }
                };

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
                      <button
                        onClick={handleApprove}
                        className="btn-1 text-white px-3 py-2 mr-2 rounded-md font-bold bg-tw_blue"
                      >
                        Approve
                      </button>
                      <button
                        onClick={handleDecline}
                        className="btn-2 text-white px-3 py-2 rounded-md font-bold bg-tw_pink"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {isLoading && <DashboardLoader />}
          {pageDeatils.length === 0 && !isLoading && (
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

          <div className="pt-2">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          {isModalOpen && selectedCabRequest && (
            <Modal
              title="Assign a vendor"
              shouldShow={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              content={assignModalContent}
              action={actionableItemsForApprove}
            />
          )}

          {isConfirmationOpen && selectedCabRequest && (
            <Modal
              title="Are you sure you want to delete the request?"
              shouldShow={isConfirmationOpen}
              onRequestClose={() => setIsConfirmationOpen(false)}
              action={actionableItemsForDecline}
            ></Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCabRequest;
