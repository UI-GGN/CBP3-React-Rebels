import React, { useState } from 'react';
import { AdminActionsProps } from '../../../types/Interfaces';
import Modal from '../../Modal';
import CabRequestService from '../../../services/CabRequestService';
import { toast } from '../../../components/Toast/ToastManager';

const DeclineCabRequestModal: React.FC<AdminActionsProps> = ({
  selectedCabRequest,
  onCloseHandler,
  onSuccessHandler,
}) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const onDeclineHandler = () => {
    setIsSubmit(true);
    CabRequestService.declineRequest(selectedCabRequest.id).then(() => {
      onSuccessHandler();
      setIsSubmit(false);
      toast.show({
        id: 'failure',
        title: 'Request is declined',
        duration: 3000,
      });
    });
  };

  const actionableItemsForDecline = (
    <div className="flex flex-row p-2 justify-center">
      <button
        onClick={() => onCloseHandler(null)}
        className="p-2 mx-4 w-24 bg-tw_disable_input rounded text-center"
      >
        No
      </button>
      <button
        disabled={isSubmit}
        onClick={onDeclineHandler}
        className="p-2 mx-4 w-24 bg-tw_primary text-white rounded text-center disabled:bg-tw_disable_input disabled:cursor-not-allowed"
      >
        Yes
      </button>
    </div>
  );

  return (
    <Modal
      title="Are you sure you want to decline the request?"
      onRequestClose={() => onCloseHandler(null)}
      action={actionableItemsForDecline}
    />
  );
};

export default DeclineCabRequestModal;
