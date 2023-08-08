import React, { useState, useEffect } from 'react';
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
import AprroveCabRequestModal from './AprroveCabRequestModal';
import DeclineCabRequestModal from './DeclineCabRequestModal';
import CabRequestCards from './CabRequestCards';
import DashboardLoader from '../../DashboardLoader/DashboardLoader';
import { downloadExcelFile } from '../../../utils/GenerateExcel';
import AddVendorModal from '../../AddVendorModal';

const EmployeeCabRequest = () => {
  const [cabRequests, setCabRequests] = useState<T_CabRequest[]>([]);
  const [requestTypeFilter, setRquestTypeFilter] = useState(
    REQUEST_TYPE_FILETR_OPTIONS[0]
  );
  const [requestStatusFilter, setRquestStatusFilter] = useState(
    REQUEST_STATUS_FILETR_OPTIONS[1]
  );
  const [filteredCabRequest, setFilteredCabRequest] = useState<T_CabRequest[]>(
    []
  );
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedCabRequest, setSelectedCabRequest] =
    useState<T_CabRequest | null>(null);
  const [sortingFilter, setSortingFilter] = useState(SORTING_OPTIONS[0]);

  const [pageDetails, setPageDetails] = useState<T_CabRequest[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(filteredCabRequest.length / recordsPerPage);
  const [showAddVendorModal, setShowAddVendorModal] = useState(false);

  async function getData() {
    setIsLoading(true);
    setCabRequests(await CabRequestService.fetchInfo());
    setVendors(await CabRequestService.getVendors());
    setIsLoading(false);
  }

  useEffect(() => {
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

  const handleDeleteConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleApprove = (cabRequest: T_CabRequest) => {
    setSelectedCabRequest(cabRequest);
    setIsApproveModalOpen(true);
  };

  const handleDecline = (cabRequest: T_CabRequest) => {
    setSelectedCabRequest(cabRequest);
    setIsConfirmationOpen(true);
  };

  const resetDeclineModal = (value: T_CabRequest | null) => {
    setSelectedCabRequest(value);
    setIsConfirmationOpen(false);
  };

  const resetApproveModal = (value: T_CabRequest | null) => {
    setSelectedCabRequest(value);
    setIsApproveModalOpen(false);
  };

  const handleOnActionComplete = () => {
    setSelectedCabRequest(null);
    setIsApproveModalOpen(false);
    setIsConfirmationOpen(false);
    getData();
    setCabRequests([]);
  };
  const generateReport = () => {
    downloadExcelFile(cabRequests, 'Hatch-a-cab-request');
  };

  const handleAddVendor = () => {
    setShowAddVendorModal(true);
  };

  const getShowModal = (data: any) => {
    setShowAddVendorModal(data);
  };

  return (
    <div className="cabRequest pt-8">
      <div className="w-11/12 mx-auto mb-8">
        <div className="flex flex-row items-center">
          <div className="text-light text-2xl md:text-3xl mb-4 mr-10">
            Cab Requests
          </div>
          <div className="flex flex-row flex-1 w-full justify-end">
            <button
              onClick={handleAddVendor}
              className="bg-tw_secondary font-bold text-light py-2 px-8 rounded disabled:bg-tw_placeholder disabled:cursor-not-allowed mb-4 mr-4"
            >
              Add New Vendor
            </button>
            <button
              onClick={generateReport}
              className="bg-tw_secondary font-bold text-light py-2 px-8 rounded disabled:bg-tw_placeholder disabled:cursor-not-allowed mb-4"
            >
              Export Report
            </button>
          </div>
        </div>
        <div className="inner-container relative min-h-[45.381rem] rounded-b-xl pb-3">
          <div className="bg-light rounded-t-lg flex flex-col md:flex-row justify-end mb-3">
            <div className="flex flex-row items-center p-2">
              <div className="px-2 text-sm">Request Status</div>
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
              <CabRequestCards
                pageDetails={pageDetails}
                handleApprove={(cabRequest) => {
                  handleApprove(cabRequest);
                }}
                handleDecline={(cabRequest) => {
                  handleDecline(cabRequest);
                }}
                vendors={vendors}
              />
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

          {isApproveModalOpen && selectedCabRequest && (
            <AprroveCabRequestModal
              selectedCabRequest={selectedCabRequest}
              onCloseHandler={resetApproveModal}
              onSuccessHandler={handleOnActionComplete}
            />
          )}

          {isConfirmationOpen && selectedCabRequest && (
            <DeclineCabRequestModal
              selectedCabRequest={selectedCabRequest}
              onCloseHandler={resetDeclineModal}
              onSuccessHandler={handleOnActionComplete}
            />
          )}
        </div>
      </div>
      {showAddVendorModal && <AddVendorModal isActive={getShowModal} />}
    </div>
  );
};
export default EmployeeCabRequest;
