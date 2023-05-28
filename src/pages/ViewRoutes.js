import '../styles/pages/ViewRoutes.scss';
import React from 'react';

const routes = [
  {
    routeName: 'Route - 1',
    pickupLocation: 'Indiranagar',
    dropLocation: 'KRM',
    startTime: '9:00 AM',
    vendor: 'Uber',
    driver: 'ABC',
    driverContact: '1234567890',
    noOfEmployees: 3,
    employeeID: '1234',
    projectCode: 'PJ-01',
  },
  {
    routeName: 'Route - 2',
    pickupLocation: 'KRM',
    dropLocation: 'Indiranagar',
    startTime: '5:00 PM',
    vendor: 'Uber',
    driver: 'ABC',
    driverContact: '1234567890',
    noOfEmployees: 1,
    employeeID: '1234',
    projectCode: 'PJ-01',
  },
  // More people...
];

const data = [
  'Route Name',
  'Pick up Location',
  'Drop Location',
  'Start Time',
  'Vendor',
  'Driver',
  'Driver Contact No',
  'No. of Employees',
  'Employee ID',
  'Project Code',
];

const ViewRoutes = () => {
  return (
    <div className="">
      <div className="table-auto ">
        <div className="py-2 align-middle content-around min-w-fit sm:px-10 lg:px-20">
          <div className="border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-cyan text-white">
                <tr>
                  {data.map((title) => {
                    return (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                      >
                        {title}
                      </th>
                    );
                  })}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-light-grey divide-y divide-gray-200">
                {routes.map((route) => (
                  <tr key={route.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.routeName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.pickupLocation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.dropLocation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.startTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.vendor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.driver}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.driverContact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.noOfEmployees}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.employeeID}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {route.projectCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-6 h-6  stroke-cyan"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRoutes;
