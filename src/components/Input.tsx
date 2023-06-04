import React from 'react';
import className from 'classnames';

const Input = ({ type, value, id, children, ...props }) => {
  const inputStyles = className(
    'border-x-0 border-top-0 rounded-0 border-b border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-b-tw_secondary focus:border-b-[0.12rem]  block w-full p-1',
    {}
  );
  return (
    <>
      {children && (
        <label className="block text-xs mt-2 mb-1 text-muted" htmlFor={id}>
          {children}
        </label>
      )}
      <input {...props} type={type} id={id} className={inputStyles} />
    </>
  );
};
export default Input;
