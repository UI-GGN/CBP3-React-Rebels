import React from 'react';
import { SpinnerProps } from 'src/types/Interfaces';
import '../styles/components/Spinner.scss';

const Spinner = ({ showSpinner }: SpinnerProps) => {
  return (
    <div className={showSpinner ? 'visible' : 'invisible'}>
      <div className="fixed inset-0 bg-gray-700 opacity-80"></div>
      <div className="fixed  flex items-start justify-center">
        <div className="spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
