import React, { useEffect, useState } from 'react';
import { AdminActionsProps, Vendor } from '../../../types/Interfaces';
import Modal from '../../Modal';
import CabRequestService from '../../../services/CabRequestService';
import { BiUser } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { toast } from '../../../components/Toast/ToastManager';

const AprroveCabRequestModal: React.FC<AdminActionsProps> = ({
  selectedCabRequest,
  onCloseHandler,
  onSuccessHandler,
}) => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [displayedVendorList, setDisplayedVendorList] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const listElementStyle =
    'w-full bg-tw_disable_input hover:bg-tw_primary hover:text-white tracking-wide font-semibold my-1 p-2 rounded-lg';
  const activeListItem =
    'w-full bg-tw_primary text-white tracking-wide font-semibold my-1 p-2 rounded-lg';

  useEffect(() => {
    CabRequestService.getVendors().then((data) => {
      setVendors(data);
    });
  }, []);

  useEffect(() => {
    if (vendors.length > 0) {
      let Vendorlist = vendors;
      if (selectedCabRequest.status === 'APPROVED') {
        let assignedVendor = Vendorlist?.filter(
          (vendor) => vendor.id === selectedCabRequest.vendorId
        )?.[0];
        Vendorlist.splice(Vendorlist.indexOf(assignedVendor), 1);
        setDisplayedVendorList([assignedVendor, ...Vendorlist]);
        setSelectedVendor(assignedVendor);
      } else {
        setDisplayedVendorList(Vendorlist);
      }
    }
  }, [vendors]);

  const assignModalContent =
    vendors.length > 0 ? (
      <div>
        <div className="flex flex-col p-2">
          {displayedVendorList.map((vendor) => (
            <button
              onClick={() => setSelectedVendor(vendor)}
              key={vendor.id}
              className={
                vendor === selectedVendor ? activeListItem : listElementStyle
              }
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center w-50">
                  <div className="px-2">
                    <BiUser size={'1.1rem'} />
                  </div>
                  <div>{vendor.name}</div>
                </div>
                <div className="flex flex-row items-center w-50">
                  <div>
                    <BsTelephone size={'1.1rem'} />
                  </div>
                  <div className="px-2">{vendor.phoneNumber}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="flex justify-center items-center h-full">
        <div className="font-semibold text-2xl">Loading vendors...</div>
      </div>
    );

  const handleApproveRequest = () => {
    if (selectedCabRequest != null && selectedVendor != null) {
      CabRequestService.assignVendor(
        selectedVendor?.id!,
        selectedCabRequest?.id
      ).then(() => {
        setSelectedVendor(null);
        onSuccessHandler();
        setIsLoading(false);
        toast.show({
          id: 'success',
          title: 'Notification has been sent',
          duration: 3000,
        });
      });
    }
  };

  const actionableItemsForApprove = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => onCloseHandler(null)}
        className="p-2 mx-4 w-24 bg-tw_disable_input font-bold rounded text-center"
      >
        Cancel
      </button>
      <button
        onClick={handleApproveRequest}
        className="p-2 mx-4 w-24 bg-tw_primary font-bold text-white rounded text-center disabled:bg-tw_disable_input disabled:cursor-not-allowed"
        disabled={selectedVendor === null}
      >
        {!isLoading ? 'Save' : 'Saving...'}
      </button>
    </div>
  );
  const titleForModal = vendors.length > 0 ? 'Assign a vendor' : '';
  return (
    <Modal
      title={titleForModal}
      onRequestClose={() => onCloseHandler(null)}
      content={assignModalContent}
      action={actionableItemsForApprove}
    />
  );
};

export default AprroveCabRequestModal;
