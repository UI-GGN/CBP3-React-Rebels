import React, { useState, useEffect, useContext } from 'react';
import '../../../styles/components/CabRequest.scss';
import type { T_CabRequest, Vendor } from '../../../types/Interfaces';
import CabRequestService from '../../../services/CabRequestService';
import { LuMailX } from 'react-icons/lu';
import Select from '../../Select';
import Pagination from '../../Pagination/Pagination';
import {
  REQUEST_TYPE_FILETR_OPTIONS,
  SORTING_OPTIONS,
  REQUEST_STATUS_FILETR_OPTIONS,
} from '../../../utils/Constants';
import DashboardLoader from '../../DashboardLoader/DashboardLoader';

import { AuthContext } from 'src/context/AuthContext';
import CabRequestCards from './CabRequestCards';

const EmployeeCabRequest = () => {
  const { loggedInUser } = useContext(AuthContext);
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

  const [sortingFilter, setSortingFilter] = useState(SORTING_OPTIONS[0]);

  const [pageDetails, setPageDetails] = useState<T_CabRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(filteredCabRequest.length / recordsPerPage);
  const [isLoading, setIsLoading] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      setCabRequests(
        await CabRequestService.fetchUserRequest(loggedInUser?.id)
      );
      setVendors(await CabRequestService.getVendors());
      setIsLoading(false);
      // setCabRequests(CAB_REQUEST);
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
    if (requestStatusFilter.value === 'All') {
      filteredRequest = filteredRequest;
    } else if (requestStatusFilter.value === 'Pending') {
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

  return (
    <div className="cabRequest pt-8">
      <div className="w-11/12 mx-auto mb-8">
        <div className="flex flex-row justify-between items-center">
          <div className="text-light text-3xl mb-4">Cab Requests</div>
          <button className="bg-tw_secondary font-bold text-light py-2 px-8 rounded disabled:bg-tw_placeholder disabled:cursor-not-allowed mb-4">
            Book a cab
          </button>
        </div>
        <div className="inner-container relative min-h-[45.381rem] rounded-b-xl pb-3">
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
          {pageDetails.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
              <CabRequestCards vendors={vendors} pageDetails={pageDetails} />
            </div>
          )}
          {isLoading && pageDetails.length === 0 && <DashboardLoader />}
          {pageDetails.length === 0 && !isLoading && (
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
          <div className="absolute bottom-2 right-0">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCabRequest;
