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
      <div className="fixed inset-40 flex items-start justify-center">
        <div className="bg-white w-[60rem] h-[75vh] p-10 overflow-hidden rounded">
          <div className="flex justify-end mb-4">
            <RxCross2
              className="cursor-pointer text-lg"
              size="1.4rem"
              onClick={onClose}
            />
          </div>

          <div className="h-[40rem] max-h-[40rem] overflow-y-auto pb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
