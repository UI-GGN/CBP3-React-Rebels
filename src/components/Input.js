import React from 'react';
import className from 'classnames';

const Input = (props) => {
  // {rest,rounded,children,secondary,primary,blue}
  const inputStyles = className(
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-tw_primary block w-full p-1',
    {}
  );
  // let inputStyles =  "bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-tw_primary block w-full p-1"
  // if(props.input.styles!==undefined) {
  //     inputStyles = inputStyles + ' ' +props.input.styles.join(' ')
  // }

  return (
    <React.Fragment>
      {props.label !== undefined && (
        <label className="block mb-1 text-muted" htmlFor={props.input.id}>
          {props.children}
        </label>
      )}
      <input {...props.input} className={inputStyles} />
    </React.Fragment>
  );
};
export default Input;
