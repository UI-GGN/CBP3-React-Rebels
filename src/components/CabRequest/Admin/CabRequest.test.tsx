import { act, render, screen } from '@testing-library/react';
import CabRequest from './CabRequest';
import CabRequestService from 'src/services/CabRequestService';
import React from 'react';

jest.mock('../../services/CabRequestService.ts', () => ({
  fetchInfo: jest.fn(),
}));

describe('CabRequest', () => {
  beforeEach(() => {
    (CabRequestService.fetchInfo as jest.Mock).mockReset();
  });

  test('renders cab requests', async () => {
    const mockCabRequests = [
      {
        id: 1,
        employeeName: 'John Doe',
        projectCode: 'ABC123',
        pickupLocation: 'Location 1',
        pickupTime: '2023-06-15T09:00:00Z',
        dropLocation: 'Location 2',
      },
    ];
    (CabRequestService.fetchInfo as jest.Mock).mockResolvedValue(
      mockCabRequests
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<CabRequest />);
    });

    expect(CabRequestService.fetchInfo).toHaveBeenCalledTimes(1);

    const name = screen.getByText('John Doe');
    const projectCode = screen.getByText('ABC123');
    const pickupLocation = screen.getByText('Location 1');
    const dropLocation = screen.getByText('Location 2');

    expect(name).toBeTruthy();

    expect(projectCode).toBeTruthy();

    expect(pickupLocation).toBeTruthy();
    expect(dropLocation).toBeTruthy();
  });
});
