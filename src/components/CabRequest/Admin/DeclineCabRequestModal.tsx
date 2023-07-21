import React from 'react';
import { AdminActionsProps } from '../../../types/Interfaces';
import Modal from '../../Modal';
import CabRequestService from '../../../services/CabRequestService';

const DeclineCabRequestModal: React.FC<AdminActionsProps> = ({
  selectedCabRequest,
  onCloseHandler,
  onSuccessHandler,
}) => {
  const onDeclineHandler = () => {
    CabRequestService.declineRequest(selectedCabRequest.id).then(() =>
      onSuccessHandler()
    );
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
        onClick={onDeclineHandler}
        className="p-2 mx-4 w-24 bg-tw_primary text-white rounded text-center"
      >
        Yes
      </button>
    </div>
  );

  return (
    <Modal
      title="Are you sure you want to delete the request?"
      onRequestClose={() => onCloseHandler(null)}
      action={actionableItemsForDecline}
    />
  );
};

export default DeclineCabRequestModal;
