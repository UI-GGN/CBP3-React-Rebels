import React, { useEffect, useState } from 'react';
import { AdminActionsProps, Vendor } from 'src/types/Interfaces';
import Modal from '../../Modal';
import CabRequestService from 'src/services/CabRequestService';
import { BiUser } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';

const AprroveCabRequestModal: React.FC<AdminActionsProps> = ({
  selectedCabRequest,
  onCloseHandler,
  onSuccessHandler,
}) => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const listElementStyle =
    'w-full bg-tw_disable_input hover:bg-tw_primary hover:text-white tracking-wide font-semibold my-1 p-2 rounded-lg';
  const activeListItem =
    'w-full bg-tw_primary text-white tracking-wide font-semibold my-1 p-2 rounded-lg';

  useEffect(() => {
    CabRequestService.getVendors().then((data) => setVendors(data));
  }, []);

  const assignModalContent =
    vendors.length > 0 ? (
      <div>
        <div className="flex flex-col p-2">
          {vendors.map((vendor) => (
            <button
              onClick={() => setSelectedVendor(vendor)}
              key={vendor.id}
              className={
                vendor === selectedVendor ? activeListItem : listElementStyle
              }
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <div className="px-2">
                    {' '}
                    <BiUser size={'1.1rem'} />
                  </div>
                  <div>{vendor.name}</div>
                </div>
                <div className="flex flex-row-reverse items-center">
                  <div className="px-2">{vendor.phoneNumber}</div>
                  <div>
                    <BsTelephone size={'1.1rem'} />{' '}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div>Loading vendors...</div>
    );

  const handleApproveRequest = () => {
    if (selectedCabRequest != null && selectedVendor != null) {
      CabRequestService.assignVendor(
        selectedVendor?.id,
        selectedCabRequest?.id
      ).then(() => {
        setSelectedVendor(null);
        onSuccessHandler();
      });
    }
  };

  const actionableItemsForApprove = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => onCloseHandler(null)}
        className="p-2 mx-4 w-24 bg-tw_disable_input rounded text-center"
      >
        Cancel
      </button>
      <button
        onClick={handleApproveRequest}
        className="p-2 mx-4 w-24 bg-tw_primary text-white rounded text-center disabled:bg_tw_disable_input"
        disabled={selectedVendor === null}
      >
        Save
      </button>
    </div>
  );

  return (
    <Modal
      title="Assign a vendor"
      onRequestClose={() => onCloseHandler(null)}
      content={assignModalContent}
      action={actionableItemsForApprove}
    />
  );
};

export default AprroveCabRequestModal;
