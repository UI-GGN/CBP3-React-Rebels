import React from 'react';
import { ModalProps } from '../types/Interfaces';

const Modal: React.FC<ModalProps> = ({
  shouldShow,
  onRequestClose,
  title,
  content,
  action,
}) => {
  return shouldShow ? (
    <>
      <div onClick={onRequestClose} className="backdrop"></div>
      <div className="fixed inset-0 flex items-center justify-center z-[10]">
        <div className="w-11/12 md:w-1/4 max-h-[30rem] py-2 px-3 bg-white rounded-xl shadow-xl">
          <div className="flex flex-row-reverse">
            <button
              className="text-md px-2 font-semibold hover:scale-110 hover:bg-tw_disable_input rounded-full"
              onClick={onRequestClose}
            >
              X
            </button>
          </div>

          <div className="text-xl p-2 font-semibold text-tw_primary tracking-wide">
            {title}
          </div>
          {content && (
            <div className="p-2 overflow-y-scroll h-[20rem]">{content}</div>
          )}
          <div className="p-2 h-1/6">{action}</div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
