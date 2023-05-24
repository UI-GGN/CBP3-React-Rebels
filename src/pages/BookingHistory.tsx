import React from 'react';

import { useEffect } from 'react';

//@ts-ignore
import Accordion from '../components/Accordion.tsx';

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
const BookingHistory = () => {
  let history;
  useEffect(() => {
    history = bookingHistory;
  }, []);

  return (
    <div>
      <Accordion list={bookingHistory} />
    </div>
  );
};

export default BookingHistory;
