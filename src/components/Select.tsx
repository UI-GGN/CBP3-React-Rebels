import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export interface Option {
  id: string;
  value: string;
}

interface SelectProps {
  value: any;
  id: string;
  children?: string;
  required?: boolean;
  error?: string;
  options: Option[];
  props?: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  value,
  id,
  required = false,
  children,
  error,
  options,
  onChange,
  ...props
}) => {
  const inputStyles = className(
    'border-x-0 border-top-0 rounded-0 border-b border-gray-300 text-tw_placeholder text-sm focus:outline-none focus:border-b-tw_dark focus:border-b-[0.12rem] block w-full p-1 transparent disabled:bg-tw_disable_input disabled:cursor-not-allowed',
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
      <select
        {...props}
        value={value}
        id={id}
        className={inputStyles}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
      {error && (
        <div className="text-danger text-xs pb-2 normal-case">{error}</div>
      )}
    </>
  );
};

Select.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  props: PropTypes.any,
};

export default Select;
