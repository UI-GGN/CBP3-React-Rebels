import React from 'react';
import { render, screen } from '@testing-library/react';
import CabRequest from './CabRequest';

describe('CabRequest Component', () => {
  test('Should render input fields correctly', () => {
    const { container } = render(<CabRequest />);
    const nameInput = screen.getByLabelText('Name');
    const projectCodeInput = screen.getByLabelText('Project Code');
    const pickupLocationInput = screen.getByLabelText('Pickup Location');
    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const dropLocationInput = screen.getByLabelText('Drop Location');

    expect(container).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(projectCodeInput).toBeInTheDocument();
    expect(pickupLocationInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(dropLocationInput).toBeInTheDocument();
  });
});
