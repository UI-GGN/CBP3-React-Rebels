import React from 'react';
import className from 'classnames';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  props: PropTypes.any,
};

type ComponentTypes = InferProps<typeof propTypes>;

const Input = ({
  type,
  value,
  id,
  required = false,
  children,
  error,
  ...props
}: ComponentTypes) => {
  const inputStyles = className(
    'border-x-0 border-top-0 rounded-0 border-b border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-b-tw_dark focus:border-b-[0.12rem]  block w-full p-1',
    {}
  );
  return (
    <>
      {children && (
        <label className="block text-xs mt-2 mb-1 text-muted" htmlFor={id}>
          {children}
          {required && <span className="text-danger text-bold text-lg">*</span>}
        </label>
      )}
      <input {...props} type={type} id={id} className={inputStyles} />
      {error && (
        <div className="text-danger text-sm pb-2 capitalize">{error}</div>
      )}
    </>
  );
};

Input.propTypes = propTypes;

export default Input;

/**
 * e.g. -->  <Input required={true} type='text' id="test">Test</Input>
 * e.g. -->  <Input type='text' id="test">Test</Input>
 */
