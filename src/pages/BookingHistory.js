import React from 'react';

import { useEffect } from 'react';
import { BsFillClockFill, BsFillCalendar2RangeFill } from 'react-icons/bs';
import { GiSandsOfTime, GiRoad } from 'react-icons/gi';
import { MdLocationOn, MdPanoramaFishEye } from 'react-icons/md';
//@ts-ignore
import Accordion from '../components/Accordion.js';
import Button from '../components/Button.js';

const bookingHistory = [
  {
    sno: '1',
    employeeName: 'Dummy',
    employeeId: '12345',
    cabFrom: 'Delhi',
    cabTo: 'Gurgaon',
    bookingDate: '18/05/2023',
    pickUpTime: '7:00 AM',
    bookingTime: '6:00 PM',
    status: 'Confirmed',
  },
  {
    sno: '2',
    employeeName: 'Test',
    employeeId: '14245',
    cabFrom: 'Gurgaon',
    cabTo: 'Delhi',
    bookingDate: '17/05/2023',
    pickUpTime: '7:00 AM',
    bookingTime: '6:00 PM',
    status: 'Cancelled',
  },
  {
    sno: '3',
    employeeName: 'Response',
    employeeId: '11145',
    cabFrom: 'Delhi',
    cabTo: 'Gurgaon',
    bookingDate: '16/05/2023',
    pickUpTime: '7:00 AM',
    bookingTime: '6:00 PM',
    status: 'Rejected',
  },
];
const toReadableDate = (date) => {
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let dateParts = date.split('/');
  return `${dateParts[0]} ${monthName[Number(dateParts[1])]} ${dateParts[2]}`;
};
const BookingHistory = () => {
  let history;
  useEffect(() => {
    history = bookingHistory;
  }, []);

  return (
    <div>
      <div className="flex flex-row-reverse pt-4 pb-2 px-5">
        <button className="bg-tw_primary text-light p-2 rounded">
          Book a Cab
        </button>
      </div>
      <div className="hidden sm:block">
        <Accordion list={bookingHistory} dateFormatter={toReadableDate} />
      </div>
      <div className="block sm:hidden">
        {bookingHistory.map((item) => {
          return (
            <div
              key={item.sno}
              className="max-w-xs px-1 my-3 mx-auto bg-white border rounded-lg shadow"
            >
              <div className="flex flex-row p-2 mx-1 justify-between border-b text-tw_primary">
                <span className="flex text-xs">
                  <BsFillCalendar2RangeFill size={'1rem'} />
                  <span className="mx-1">
                    {toReadableDate(item.bookingDate)}
                  </span>
                </span>
                <span className="flex item-center text-xs">
                  <BsFillClockFill size={'1rem'} />
                  <span className="mx-1">{item.pickUpTime}</span>
                </span>
                <span>
                  <GiSandsOfTime size={'1rem'} />
                </span>
              </div>
              <div className="flex flex-auto p-2">
                <div className="">
                  <div className="text-tw_dark">
                    <MdPanoramaFishEye />
                  </div>
                  <div>
                    <GiRoad height={'2rem'} />
                  </div>
                  <div className="text-tw_secondary">
                    <MdLocationOn />
                  </div>
                </div>
                <div className="ml-2 flex w-full flex-col">
                  <div className="text-xs">{item.cabFrom}</div>
                  <div className="text-xs mt-auto">{item.cabTo}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingHistory;
