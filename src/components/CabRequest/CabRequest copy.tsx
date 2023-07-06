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
const CabRequestTest = () => {
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
    <div className="cabRequest pt-12">
      <div className="w-11/12 mx-auto">
        <div className="text-light text-3xl mb-4">Cab Requests</div>
        <div className="inner-container pb-4">
          <div className="bg-light rounded flex flex-col md:flex-row justify-between mb-3">
            <div className="flex items-center p-2">
              <div className="pr-1">Request Status</div>
              <AiFillCaretRight size={'1.2rem'} /> <div>PENDING</div>
            </div>
            <div className="flex flex-row p-2">
              <div className="px-2">Request Type</div>
              <div className="inline min-w-max sm:mr-[.5rem]">
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
          {pageDeatils.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
              {pageDeatils.map((cabRequest) => {
                const isAdhocRequest =
                  cabRequest.pickupTime === cabRequest.expireDate;
                return (
                  <div className="cards w-80 font-inter relative my-2 mx-auto">
                    <div className="cover "></div>
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

export default CabRequestTest;
