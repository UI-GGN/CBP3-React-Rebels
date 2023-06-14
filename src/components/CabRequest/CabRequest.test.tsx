import React from 'react';
import { render, screen } from '@testing-library/react';
import CabRequest from './CabRequest';
import { T_CabRequest } from '../../types/Interfaces';

const requests: T_CabRequest[] = [
  {
    bookingId: 1,
    name: 'Joe',
    date: '22-06-23',
    projectCode: 'BP',
    time: '10:30 AM',
    pickupLocation: 'address1',
    dropLocation: 'address2',
    status: 'PENDING',
  },
];

describe('CabRequest Component', () => {
  test('renders the component with correct data', () => {
    render(<CabRequest requests={requests} />);

    const name = screen.getByText('Joe');
    const date = screen.getByText('22-06-23');
    const projectCode = screen.getByText('BP');
    const time = screen.getByText('10:30 AM');
    const pickupLocation = screen.getByText('address1');
    const dropLocation = screen.getByText('address2');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(projectCode).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(pickupLocation).toBeInTheDocument();
    expect(dropLocation).toBeInTheDocument();
  });
});
