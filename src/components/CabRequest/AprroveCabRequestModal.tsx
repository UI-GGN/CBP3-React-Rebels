import React, { useEffect, useState } from 'react';
import { ApproveRequestProp, Vendor } from 'src/types/Interfaces';
import Modal from '../Modal';
import CabRequestService from 'src/services/CabRequestService';

const AprroveCabRequestModal: React.FC<ApproveRequestProp> = ({
  selectedCabRequest,
  setSelecetdCabRequest,
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
              {vendor.name}
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div>Loading vendors...</div>
    );

  const handleApproveRequest = () => {
    console.log('test');
    if (selectedCabRequest != null && selectedVendor != null) {
      CabRequestService.assignVendor(
        selectedVendor?.id,
        selectedCabRequest?.id
      ).then(() => {
        setSelectedVendor(null);
        setSelecetdCabRequest(null);
      });
    }
  };

  const actionableItemsForApprove = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => setSelecetdCabRequest(null)}
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
      shouldShow={true}
      onRequestClose={() => setSelecetdCabRequest(null)}
      content={assignModalContent}
      action={actionableItemsForApprove}
    />
  );
};

export default AprroveCabRequestModal;
