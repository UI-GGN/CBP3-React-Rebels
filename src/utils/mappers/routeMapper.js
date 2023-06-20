export function mapRoutesToRoutesDashboard() {
  const uiroutes = [
    {
      id: 1,
      routeName: 'Route - 1',
      pickupLocation: 'Indiranagar',
      dropLocation: 'KRM',
      startTime: '9:00 AM',
      vendor: 'Uber',
      driver: 'ABC',
      driverContact: '1234567890',
      employees: [
        {
          id: '101',
          name: 'Riya Mathew',
          projectCode: 'PJ-01',
        },
        {
          id: '102',
          name: 'Nallu M',
          projectCode: 'PJ-02',
        },
      ],
    },
    {
      id: 2,
      routeName: 'Route - 2',
      pickupLocation: 'KRM',
      dropLocation: 'Indiranagar',
      startTime: '5:00 PM',
      vendor: 'Uber',
      driver: 'ABC',
      driverContact: '1234567890',
      employees: [
        {
          id: '101',
          name: 'Tim Johns',
          projectCode: 'PJ-01',
        },
        {
          id: '102',
          name: 'Priya James',
          projectCode: 'PJ-02',
        },
        {
          id: '103',
          name: 'Anjum K',
          projectCode: 'PJ-03',
        },
      ],
    },
  ];
  return uiroutes;
}
