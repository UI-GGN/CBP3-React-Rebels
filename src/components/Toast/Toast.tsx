import React, { useEffect } from 'react';
import '../../styles/components/Toast.scss';

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { destroy, title, duration = 0, id } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div>
      {id === 'success' && (
        <div className="bg-lime-600  px-4 py-3 rounded relative" role="alert">
          <span className="mr-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <strong className="font-bold pl-2">{title}</strong>
          </span>

          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button onClick={destroy}>X</button>
          </span>
        </div>
      )}
      {id === 'failure' && (
        <div className="bg-red-500 px-4 py-3 rounded relative" role="alert">
          <span className="mr-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
            <strong className="font-bold pl-2">{title}</strong>
          </span>

          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button onClick={destroy}>X</button>
          </span>
        </div>
      )}
    </div>
  );
};

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id;
};

export default React.memo(Toast, shouldRerender);
