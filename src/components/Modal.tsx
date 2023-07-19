import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps, BackDropProps } from '../types/Interfaces';

const BackDrop: React.FC<BackDropProps> = ({ onRequestClose }) => {
  return (
    <div
      className="backdrop"
      onClick={() => {
        onRequestClose();
      }}
    />
  );
};

const Overlay: React.FC<ModalProps> = ({
  onRequestClose,
  title,
  content,
  action,
}) => {
  return (
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
        <div className="text-xl p-2 font-semibold text-tw_primary tracking-wide border-b-2">
          {title}
        </div>
        {content && (
          <div className="p-2 overflow-y-scroll h-[19rem] border-b-2">
            {content}
          </div>
        )}
        <div className="p-2 h-1/6">{action}</div>
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  onRequestClose,
  title,
  content,
  action,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onRequestClose={onRequestClose} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={title}
          content={content}
          action={action}
          onRequestClose={onRequestClose}
        />,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export default Modal;
