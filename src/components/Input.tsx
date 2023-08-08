import React from 'react';
import className from 'classnames';

interface inputProps {
  type: string;
  value: string;
  id: string;
  children?: string;
  required?: boolean;
  error?: string;
  props?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({
  type,
  value,
  id,
  required = false,
  children,
  error,
  ...props
}) => {
  const inputStyles = className(
    'border-x-0 border-top-0 rounded-0 border-b border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-b-tw_dark focus:border-b-[0.12rem]  block w-full p-1',
    {}
  );
  return (
    <>
      {children && (
        <label className="block text-xs mt-2 mb-1 text-muted" htmlFor={id}>
          {children}
          {required && <span className="text-danger text-bold">*</span>}
        </label>
      )}
      <input
        {...props}
        type={type}
        value={value}
        id={id}
        className={inputStyles}
      />
      {error && (
        <div className="text-danger text-sm pb-2 capitalize">{error}</div>
      )}
    </>
  );
};

export default Input;

/**
 * e.g. -->  <Input required={true} type='text' id="test">Test</Input>
 * e.g. -->  <Input type='text' id="test">Test</Input>
 */
