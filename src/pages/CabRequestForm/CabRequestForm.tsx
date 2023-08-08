import React, { useContext, useState } from 'react';
import '../../styles/pages/CabRequestForm.scss';
import type { FormProps } from '../../types/FormProps';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import CabRequestService from '../../services/CabRequestService';
import Select from '../../components/Select';
import type { Option } from '../../components/Select';
import moment from 'moment';
import { AuthContext } from '../../context/AuthContext';

interface FormField {
  value: string;
  error?: string;
  isTouched: boolean;
  validations: string[];
  label?: string;
  name?: string;
  disabled?: boolean;
}

interface FormState {
  [key: string]: FormField;
}

const CabRequestForm: React.FC<FormProps> = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  const [isSubmit, setIsSubmit] = useState(false);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString();
    const day = currentDate.getDate().toString();
    return `${year}-${month}-${day}`;
  };

  const options: Option[] = [
    {
      id: 'adhoc',
      value: 'adhoc',
    },
  ];

  const initialBookingType = [
    {
      id: 'cabType',
      name: 'Select Cab Type',
    },
  ];

  const initialState: FormState = {
    name: {
      name: 'name',
      value: loggedInUser.name,
      error: 'Name is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Name',
      disabled: true,
    },
    employeeId: {
      name: 'employeeId',
      value: loggedInUser.id,
      error: 'Employee Id is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Employee Id',
      disabled: true,
    },
    projectCode: {
      name: 'projectCode',
      value: '',
      error: 'Project code is mandatory',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Project code',
    },
    phoneNumber: {
      name: 'phoneNumber',
      value: '',
      error: 'Phone number is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Phone Number',
    },
    startDate: {
      name: 'startDate',
      value: getCurrentDate(),
      error: undefined,
      isTouched: true,
      validations: ['required'],
      label: 'Start Date',
    },
    endDate: {
      name: 'endDate',
      value: '',
      error: 'End Date is mandatory.',
      isTouched: false,
      validations: [],
      label: 'End Date',
      disabled: true,
    },
    Time: {
      name: 'Time',
      value: '',
      error: 'Time is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Pickup Time',
    },
    pickupLocation: {
      name: 'pickupLocation',
      value: '',
      error: 'Pick up location is mandatory',
      isTouched: false,
      validations: ['required'],
      label: 'Pickup location',
    },
    dropLocation: {
      name: 'dropLocation',
      value: '',
      error: 'Drop location is mandatory',
      isTouched: false,
      validations: ['required'],
      label: 'Drop location',
    },
    cabType: {
      name: 'cabType',
      value: initialBookingType[0].id,
      error: 'Booking type is required',
      isTouched: false,
      validations: ['required'],
      label: 'Booking Type',
    },
  };

  const [formState, setFormState] = useState(initialState);
  const [selectedBookingType, setSelectedBookingType] = useState(
    initialBookingType[0].id
  );
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
      console.info(`FormState does not have property: ${name}`);
    }
  };

  const handleCabType = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = event.target.value;
    setSelectedBookingType(currentValue);
    if (currentValue === 'adhoc') {
      setFormState((prevState) => ({
        ...prevState,
        endDate: {
          ...prevState.endDate,
          value: formState.startDate.value,
          disabled: true,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        endDate: {
          ...prevState.endDate,
          value: prevState.endDate.value,
          disabled: false,
        },
      }));
    }
  };

  const validateInput = (input: FormField, value: string) => {
    // if (input.error === 'Route already exists.') return input.error;
    //
    //   if (input.validations.includes('required') && !hasValue(value)) {
    //     return `${input.label} is mandatory.`;
    //   }
    //   const minlengthIndex = input.validations.findIndex((element) =>
    //       element.includes('minLength')
    //   );
    //   if (minlengthIndex > -1) {
    //     const minLength = input.validations[minlengthIndex].split('-')[1];
    //     if (!hasMinLength(value, minLength))
    //       return `${input.label} should contain atleast ${minLength} character.`;
    //   }
    //   if (input.validations.includes('numeric') && isNaN(Number(value))) {
    //     return `${input.label} should contain numbers only.`;
    //   }
    //   const excetLengthIndex = input.validations.findIndex((element) =>
    //       element.includes('exectLength')
    //   );
    //   if (excetLengthIndex > -1 && value.length > 0) {
    //     const length = input.validations[excetLengthIndex].split('-')[1];
    //     if (!exectLength(value, length)) {
    //       return `${input.label} should contain excelty ${length} character.`;
    //     }
    //   }
    // }
    return undefined;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubmit(true);
    event.preventDefault();
    const cabRequestBody = {
      employeeId: formState.employeeId.value,
      employeeName: formState.name.value,
      pickupLocation: formState.pickupLocation.value,
      dropLocation: formState.dropLocation.value,
      pickupTime: moment(
        formState.startDate.value + ' ' + formState.Time.value
      ),
      projectCode: formState.projectCode.value,
      phoneNumber: formState.phoneNumber.value,
      expireDate: moment(
        formState.startDate.value + ' ' + formState.Time.value
      ).add(1, 'd'),
    };

    CabRequestService.createRequest(cabRequestBody).then((response) => {
      setIsSubmit(false);
      setFormState(initialState);
      navigate('/');
    });
  };

  return (
    <div className="cabRequestForm">
      <div className="leftWindow"></div>
      <div className="rightWindow">
        <div className="formContainer mt-4 px-4 mr-8 ml-8 w-full h-full">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-10 text-tw_primary">{'Request a Cab'}</h2>
            <div>
              <Input
                type={'text'}
                id={'name'}
                name={'name'}
                required={true}
                onChange={handleInputChange}
                value={formState.name.value}
                disabled={formState.name.disabled}
              >
                {formState.name.label}
              </Input>
              <Input
                type={'text'}
                id={'employeeId'}
                name={'employeeId'}
                required={true}
                onChange={handleInputChange}
                value={formState.employeeId.value}
                disabled={formState.employeeId.disabled}
              >
                {formState.employeeId.label}
              </Input>
              <Input
                type={'text'}
                id={'projectCode'}
                name={'projectCode'}
                required={true}
                onChange={handleInputChange}
                value={formState.projectCode.value}
              >
                {formState.projectCode.label}
              </Input>
              <Input
                type={'text'}
                id={'phoneNumber'}
                name={'phoneNumber'}
                required={true}
                onChange={handleInputChange}
                value={formState.phoneNumber.value}
              >
                {formState.phoneNumber.label}
              </Input>
              <Input
                type={'date'}
                id={'startDate'}
                name={'startDate'}
                required={true}
                onChange={handleInputChange}
                value={formState.startDate.value}
              >
                {formState.startDate.label}
              </Input>
              <Select
                value={selectedBookingType}
                id={selectedBookingType}
                options={options}
                onChange={handleCabType}
              >
                {formState.cabType.label}
              </Select>
              <Input
                type={'time'}
                id={'Time'}
                name={'Time'}
                required={true}
                onChange={handleInputChange}
                value={formState.Time.value}
              >
                {formState.Time.label}
              </Input>
              <Input
                type={'text'}
                id={'pickupLocation'}
                name={'pickupLocation'}
                required={true}
                onChange={handleInputChange}
                value={formState.pickupLocation.value}
              >
                {formState.pickupLocation.label}
              </Input>
              <Input
                type={'text'}
                id={'dropLocation'}
                name={'dropLocation'}
                required={true}
                onChange={handleInputChange}
                value={formState.dropLocation.value}
              >
                {formState.dropLocation.label}
              </Input>
            </div>
            <br />
            <button
              type="submit"
              className="btn-1 text-white px-2 py-2 rounded-lg font-bold bg-tw_blue inline-block w-1/4 disabled:bg-tw_disable_input disabled:cursor-not-allowed"
              disabled={isSubmit}
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
