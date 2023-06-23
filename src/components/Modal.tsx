import React from 'react';
import { ModalProps } from 'src/types/Interfaces';

import { RxCross2 } from 'react-icons/rx';
import { useEffect } from 'react';

export const Modal = ({ showModal, children, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={showModal ? 'visible' : 'invisible'}>
      <div className="fixed inset-0 bg-gray-700 opacity-80"></div>
      <div className="fixed mx-auto inset-40 w-[60rem] p-10 bg-white overflow-hidden">
        <div className="p-2">
          <div className="flex flex-row-reverse">
            <RxCross2
              className="cursor-pointer text-lg"
              size="1.4rem"
              onClick={onClose}
            />
          </div>
          <div className="h-[60rem] max-h-[30rem] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
