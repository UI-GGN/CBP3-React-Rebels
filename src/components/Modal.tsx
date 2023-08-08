import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps, BackDropProps } from '../types/Interfaces';
import { RxCross2 } from 'react-icons/rx';

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
    <div className="text-xs md:text-base fixed inset-0 flex items-center justify-center z-[10]">
      <div className="w-11/12 md:w-[32rem] max-h-[30rem] py-2 px-3 bg-white rounded-xl shadow-xl">
        <div className="flex flex-row justify-between items-start">
          {title && (
            <div className="text-xl p-2 font-semibold text-tw_primary tracking-wide">
              {title}
            </div>
          )}
          <div className="py-2">
            <button
              className="text-md p-1 font-semibold hover:bg-tw_disable_input rounded-full"
              onClick={onRequestClose}
            >
              <RxCross2 size={'1.3rem'} />
            </button>
          </div>
        </div>
        {content && (
          <div className="overflow-y-scroll max-h-[19rem]">{content}</div>
        )}
        {action && <div className="p-2 h-1/6">{action}</div>}
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
