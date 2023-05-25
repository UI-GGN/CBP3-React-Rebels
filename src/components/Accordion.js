import React from 'react';
import { useState } from 'react';
import { GoDash, GoPlus } from 'react-icons/go';
import { GrNorton } from 'react-icons/gr';
import { GiCancel } from 'react-icons/gi';

const Accordion = ({ list, dateFormatter }) => {
  const [expandIndex, setExpandIndex] = useState(-1);
  const bookingList = list.map((item, index) => {
    const expandedIndex = expandIndex === index;
    const icon = <span>{expandedIndex ? <GoDash /> : <GoPlus />}</span>;
    const selectedRowStyle = expandedIndex
      ? 'hover:bg-tw_hover_light bg-tw_hover_light'
      : 'hover:bg-tw_hover_light';
    return (
      <React.Fragment key={item.sno}>
        <tr
          className={selectedRowStyle}
          onClick={() => {
            expandedIndex ? setExpandIndex(-1) : setExpandIndex(index);
          }}
        >
          <td className={expandedIndex ? 'border-0' : 'border-b-1'}>
            {dateFormatter(item.bookingDate)}
          </td>
          <td className={expandedIndex ? 'border-0' : 'border-b-1'}>
            {item.cabFrom}
          </td>
          <td className={expandedIndex ? 'border-0' : 'border-b-1'}>
            {item.cabTo}
          </td>
          <td className={expandedIndex ? 'border-0' : 'border-b-1'}>
            {item.pickUpTime}
          </td>
          <td className={expandedIndex ? 'border-0 ' : 'border-b-1'}>
            {item.status}
          </td>
          <td
            className={
              expandedIndex
                ? 'border-0 hover:cursor-pointer'
                : 'border-b-1 hover:cursor-pointer'
            }
          >
            {icon}
          </td>
        </tr>
        {expandedIndex && (
          <tr className="bg-tw_hover_light ">
            <td colSpan={6} className="border-b-1">
              <div>Your Booking time is : {item.bookingTime}</div>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className="px-5 py-1">
      <table className="table">
        <thead>
          <tr className="bg-tw_primary text-light">
            <td>Date</td>
            <td>From</td>
            <td>Destination</td>
            <td>Time</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
    </div>
  );
};

export default Accordion;
