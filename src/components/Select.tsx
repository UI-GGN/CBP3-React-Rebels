import React from 'react';
import className from 'classnames';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  props: PropTypes.any,
};

type ComponentTypes = InferProps<typeof propTypes>;

const Select = ({
  value,
  id,
  required = false,
  children,
  error,
  options,
  ...props
}: ComponentTypes) => {
  const inputStyles = className(
    'border-x-0 border-top-0 rounded-0 border-b border-gray-300 text-tw_placeholder text-sm focus:outline-none focus:border-b-tw_dark focus:border-b-[0.12rem]  block w-full p-1 transparent disabled:bg-tw_disable_input disabled:cursor-not-allowed',
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
      <select {...props} value={value} id={id} className={inputStyles}>
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

Select.propTypes = propTypes;

export default Select;

/**
 * e.g. -->  <Input required={true} type='text' id="test">Test</Input>
 * e.g. -->  <Input type='text' id="test">Test</Input>
 */
