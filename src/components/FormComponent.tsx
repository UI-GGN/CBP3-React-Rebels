import React, { useState } from 'react';
import Input from './Input';
import type { FormProps } from '../types/FormProps';

const FormComponent: React.FC<FormProps> = ({ template, onSubmit }) => {
  const renderFields = (fields: FormProps['template']['fields']) => {
    return fields.map((field) => {
      let { title, type, name, value, validationProps } = field;

      const [formState, setFormState] = useState(initialState);

      const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
          ...prevState,
          [name]: {
            ...prevState[name],
            value: value,
            error: prevState[name].isTouched
              ? validateInput(prevState[name], value)
              : prevState[name].error,
          },
        }));
      };

      return (
        <div key={name}>
          <label htmlFor={name}>{title}</label>
          <Input
            type={type}
            id={name}
            required={validationProps.required}
            value={value}
            handleInputChange={handleInputChange}
          />
          {/* {errors[name] && <span className="red-text">{errors[name]["message"]}</span>} */}
          <br />
        </div>
      );
    });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData: FormProps = {
      template: template,
      initialState: initi,
    };
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{template.title}</h2>
        <br />
        {renderFields(template.fields)}
        <br />
        <button
          type="submit"
          className="btn-1 text-white px-2 py-2 rounded-lg font-bold bg-tw_blue inline-block w-1/4"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
