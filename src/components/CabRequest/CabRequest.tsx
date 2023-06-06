import React from 'react';
import '../../styles/components/CabRequest.scss';

const CabRequest = () => {
  return (
    <div className="flex justify-center">
      <div className="card" style={{ marginRight: '20px' }}>
        <div className="card-content">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nameInput" className="text-gray-500 mb-2">
                Name
              </label>
              <br />
              <input
                type="text"
                id="nameInput"
                className="border-b border-gray-300 mb-4"
              />
              <label htmlFor="projectCode" className="text-gray-500 mb-2">
                Project Code
              </label>
              <input
                type="text"
                id="projectCode"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="pickupLocation" className="text-gray-500 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>

            <div>
              <label htmlFor="date" className="text-gray-500 mb-2">
                Date
              </label>
              <br />
              <input
                type="text"
                id="date"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="time" className="text-gray-500 mb-2">
                Time
              </label>
              <br />
              <input
                type="text"
                id="time"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="dropLocation" className="text-gray-500 mb-2">
                Drop Location
              </label>
              <input
                type="text"
                id="dropLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginRight: '20px' }}>
        <div className="card-content">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nameInput" className="text-gray-500 mb-2">
                Name
              </label>
              <br />
              <input
                type="text"
                id="nameInput"
                className="border-b border-gray-300 mb-4"
              />
              <label htmlFor="projectCode" className="text-gray-500 mb-2">
                Project Code
              </label>
              <input
                type="text"
                id="projectCode"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="pickupLocation" className="text-gray-500 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>

            <div>
              <label htmlFor="date" className="text-gray-500 mb-2">
                Date
              </label>
              <br />
              <input
                type="text"
                id="date"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="time" className="text-gray-500 mb-2">
                Time
              </label>
              <br />
              <input
                type="text"
                id="time"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="dropLocation" className="text-gray-500 mb-2">
                Drop Location
              </label>
              <input
                type="text"
                id="dropLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nameInput" className="text-gray-500 mb-2">
                Name
              </label>
              <br />
              <input
                type="text"
                id="nameInput"
                className="border-b border-gray-300 mb-4"
              />
              <label htmlFor="projectCode" className="text-gray-500 mb-2">
                Project Code
              </label>
              <input
                type="text"
                id="projectCode"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="pickupLocation" className="text-gray-500 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>

            <div>
              <label htmlFor="date" className="text-gray-500 mb-2">
                Date
              </label>
              <br />
              <input
                type="text"
                id="date"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="time" className="text-gray-500 mb-2">
                Time
              </label>
              <br />
              <input
                type="text"
                id="time"
                className="border-b border-gray-300 mb-4"
              />
              <br />
              <label htmlFor="dropLocation" className="text-gray-500 mb-2">
                Drop Location
              </label>
              <input
                type="text"
                id="dropLocation"
                className="border-b border-gray-300 mb-4"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabRequest;
