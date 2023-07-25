import React, { useState } from 'react';
import '../../styles/pages/CabRequestForm.scss';
import type { FormProps } from '../../types/FormProps';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import CabRequestService from '../../services/CabRequestService';

interface FormField {
  value: string;
  error?: string;
  isTouched: boolean;
  validations?: string[];
  label?: string;
}

interface FormState {
  [key: string]: FormField;
}

const CabRequestForm: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString();
    const day = currentDate.getDate().toString();
    return `${year}-${month}-${day}`;
  };

  const initialState: FormState = {
    name: {
      value: '',
      error: 'Name is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Name',
    },
    employeeId: {
      value: '',
      error: 'Employee Id is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Employee Id',
    },
    projectCode: {
      value: '',
      error: 'Project code is mandatory',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Project code',
    },
    endLocation: {
      value: '',
      error: 'Drop Point is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Drop Point',
    },
    startDate: {
      value: getCurrentDate(),
      error: undefined,
      isTouched: true,
      validations: [],
      label: 'Start Date',
    },
    endDate: {
      value: '',
      error: 'End Date is mandatory.',
      isTouched: false,
      validations: [],
      label: 'End Date',
    },
    Time: {
      value: '',
      error: 'Time is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Time',
    },
    pickUpLocation: {
      value: '',
      error: 'Pick up location is mandatory',
      isTouched: false,
      validations: ['required'],
      label: 'Pick up location',
    },
    dropLocation: {
      value: '',
      error: 'Drop location is mandatory',
      isTouched: false,
      validations: ['required'],
      label: 'Drop location',
    },
  };

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    if (formState.hasOwnProperty(name)) {
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
    } else {
      console.log(`FormState does not have property: ${name}`);
      console.log(formState);
    }
  };

  const validateInput = (input: FormField, value: string) => {
    throw new Error('Function not implemented.');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const cabRequestBody = {
      employeeId: '222',
      employeeName: 'Naruto',
      pickupLocation: 'some oggce',
      dropLocation: 'Thoughtworks gurugram',
      pickupTime: '2023-09-12T08:55:18.252Z',
      projectCode: 'dsds',
      phoneNumber: '+91918310009',
      expireDate: '2023-09-13T08:55:18.252Z',
    };

    CabRequestService.createRequest(cabRequestBody)
      .then((response) => {
        console.log('Request created:', response);
      })
      .catch((error) => {
        console.error('Error creating request:', error);
      });
  };

  let formTemplate = {
    title: 'Request a Cab',
    fields: [
      {
        title: 'Name',
        type: 'text',
        name: 'name',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Employee ID',
        type: 'text',
        name: 'employeeId',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Project Code',
        type: 'text',
        name: 'projectCode',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Phone Number',
        type: 'text',
        name: 'phoneNumber',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Start Date',
        type: 'date',
        name: 'startDate',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'End Date (optional)',
        type: 'date',
        name: 'endDate',
        validationProps: {
          required: false,
        },
        value: '',
      },
      {
        title: 'Time',
        type: 'time',
        name: 'time',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Pickup Location',
        type: 'text',
        name: 'pickupLocation',
        validationProps: {
          required: true,
        },
        value: '',
      },
      {
        title: 'Drop Location',
        type: 'text',
        name: 'dropLocation',
        validationProps: {
          required: true,
        },
        value: '',
      },
    ],
  };

  return (
    <div className="cabRequestForm">
      <div className="leftWindow"></div>
      <div className="rightWindow">
        <div className="formContainer mt-4 px-4 mr-8 ml-8">
          <form onSubmit={handleSubmit}>
            <h2>{formTemplate.title}</h2>
            <br />
            {formTemplate.fields.map((field) => {
              let { title, type, name, validationProps, value } = field;
              return (
                <div key={name}>
                  <label htmlFor={name}>{title}</label>
                  <Input
                    type={type}
                    id={name}
                    required={validationProps?.required}
                    onChange={handleInputChange}
                    value={value}
                  />
                </div>
              );
            })}

            <br />
            <button
              type="submit"
              className="btn-1 text-white px-2 py-2 rounded-lg font-bold bg-tw_blue inline-block w-1/4"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CabRequestForm;
