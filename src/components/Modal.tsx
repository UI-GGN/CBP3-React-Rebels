import React, { Children } from 'react';
import { ModalProps, Props } from 'src/types/Interfaces';

import { RxCross2 } from 'react-icons/rx';

export const Modal = ({ showModal, children, onClose }: ModalProps) => {
  return (
    <div className={showModal ? 'visible ' : 'invisible'}>
      <div className="fixed inset-0 bg-gray-700 opacity-80"></div>
      <div className="fixed inset-40 w-[60rem] p-10 bg-white overflow-hidden">
        <div className="p-2">
          <div className="flex flex-row-reverse">
            <RxCross2
              className="cursor-pointer text-lg "
              size="1.4rem"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="p-2 overflow-auto ">{children}</div>
      </div>
    </div>
  );
};
