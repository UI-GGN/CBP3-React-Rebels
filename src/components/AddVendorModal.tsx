import React from 'react';
import Spinner from './Spinner';
import { useState } from 'react';

import Input from './Input';
import Modal from './Modal';
import CabRequestService from 'src/services/CabRequestService';

const AddVendorModal = ({ isActive }: any) => {
  const [vendorName, setVendorName] = useState('');
  const [vendorNumber, setVendorNumber] = useState('');

  const handleAddVendorName = (event: any) => {
    setVendorName(event.target.value);
  };

  const handleAddVendorNumber = (event: any) => {
    setVendorNumber(event.target.value);
  };

  const [isLoading, setIsLoading] = useState(false);

  const submitButton = async (event: any) => {
    setIsLoading(true);

    CabRequestService.addVendor({
      name: vendorName,
      phoneNumber: vendorNumber,
    })
      .then((resp) => {
        setIsLoading(false);
        setVendorName('');
        setVendorNumber('');
        console.log(resp);
        console.log('Vendor Added');
        alert('Vendor Added');
      })
      .catch((exp) => {
        setIsLoading(false);
        console.log('error message show here');
        console.log('Incorrect Name or Number');
        console.log(exp);
        alert('Incorrect Name or Number');
      });
  };
  const cancelButton = (event: any) => {
    event.preventDefault();
    if (vendorName === '' && vendorNumber === '') {
      isActive(false);
    }
    setVendorName('');
    setVendorNumber('');
  };
  const crossButton = () => {
    setVendorName('');
    setVendorNumber('');
    isActive(false);
  };

  const modalBody = (
    <div className="p-4 mt-4">
      <div className="mb-4 pt-2">
        <Input
          required={true}
          type="text"
          id="vendor-text"
          value={vendorName}
          onChange={handleAddVendorName}
        >
          Enter Name
        </Input>
      </div>
      <div className="mb-4 pt-4">
        <Input
          required={true}
          type="text"
          id="vendor-number"
          value={vendorNumber}
          onChange={handleAddVendorNumber}
        >
          Enter Number
        </Input>
      </div>
    </div>
  );
  const modalAction = (
    <div className="text-center  flex justify-between ">
      <button
        type="submit"
        className="bg-tw_primary font-bold text-light font-bold py-2 px-4 rounded my-3 "
        onClick={submitButton}
      >
        Submit
      </button>
      <button
        type="submit"
        className="bg-tw_secondary font-bold text-light font-bold py-2 px-4 rounded my-3 "
        onClick={cancelButton}
      >
        Cancel
      </button>
    </div>
  );
  return (
    <div>
      {isActive && (
        <>
          <Modal
            title="Add Vendor"
            content={modalBody}
            action={modalAction}
            onRequestClose={() => crossButton()}
          ></Modal>
          <Spinner showSpinner={isLoading} />
        </>
      )}
    </div>
  );
};

export default AddVendorModal;
