import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { hasValue, hasMinLength, exectLength } from '../utils/Validations.ts';
import Input from '../components/Input';
import Select from '../components/Select';
import map from '../assets/map.jpg';

const exisitingRoutes = ['shaitan gali', 'Royal Circus'];

const AddRoute = (props) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const initialCabState = [
    {
      id: -1,
      driverName: 'Select Driver',
      vendorId: -1,
      deleted: false,
    },
  ];

  const initialVendorState = [
    {
      id: -1,
      name: 'Select Vendor',
      deleted: false,
    },
  ];

  const initialState = {
    routeName: {
      value: '',
      error: 'Route Name is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Route Name',
    },
    pickupTime: {
      value: '',
      error: 'Start time is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Start Time',
    },
    startLocation: {
      value: '',
      error: 'Pickup Point is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Pickup point',
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
    },
    expireDate: {
      value: '',
      error: 'Valid till is mandatory.',
      isTouched: false,
      validations: ['required'],
      label: 'Valid till',
    },
    vehicleId: {
      value: initialVendorState[0].id,
      error: undefined,
      isTouched: false,
      validations: [],
      label: 'Driver Name',
    },
    driverContact: {
      value: '',
      error: undefined,
      isTouched: false,
      validations: ['exectLength-10', 'numeric'],
      label: 'Driver contact number',
    },
  };

  const [vendors, setVendors] = useState(initialVendorState);
  const [cabs, setCabs] = useState(initialCabState);
  const [formState, setFormState] = useState(initialState);
  const [selectedVendor, setSelectedVendor] = useState(
    initialVendorState[0].id
  );
  let isFormSubmitted = false;

  const isFormValid =
    !formState.endLocation.error &&
    !formState.expireDate.error &&
    !formState.pickupTime.error &&
    !formState.routeName.error &&
    !formState.startLocation.error &&
    !formState.vehicleId.error &&
    !formState.driverContact.error;

  useEffect(() => {
    (async () => {
      const vendorList = await axios.get(
        'https://cab-schedule-serverless.vercel.app/api/v1/vendor'
      );
      setVendors(initialVendorState.concat(vendorList.data));
    })();
    return () => {};
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        exisitingRoutes.find(
          (routeName) =>
            routeName.toLowerCase() === formState.routeName.value.toLowerCase()
        )
      ) {
        setFormState((prevState) => {
          const inputField = prevState.routeName;
          const updatedInputField = {
            ...inputField,
            error: 'Route already exists.',
            value: formState.routeName.value,
            isTouched: true,
          };
          return {
            ...prevState,
            routeName: updatedInputField,
          };
        });
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [formState.routeName.value]);

  const handleInputChange = (event) => {
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

  const handleFormReset = () => {
    setFormState(initialState);
    isFormSubmitted = false;
    setSelectedVendor(-1);
    setCabs(initialCabState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    isFormSubmitted = true;
    if (isFormValid) {
      const requestBody = {
        routeName: formState.routeName.value,
        endLocation: formState.endLocation.value,
        expireDate: formState.expireDate.value,
        pickupTime: formState.pickupTime.value,
        startDate: formState.startDate.value,
        startLocation: formState.startLocation.value,
        vehicleId:
          Number(formState.vehicleId.value) === -1
            ? null
            : formState.vehicleId.value,
      };
      console.log(JSON.stringify(requestBody));
    }

    // await axios.post(
    //   "https://cab-schedule-serverless.vercel.app/api/v1/route",
    //   requestBody
    // );
  };

  const handleVendorChange = async (event) => {
    const currentValue = event.target.value;
    setSelectedVendor(currentValue);
    if (currentValue !== -1) {
      let cabs = await axios.get(
        'https://cab-schedule-serverless.vercel.app/api/v1/vehicle'
      );
      console.log(cabs.data);
      cabs = cabs.data.filter((cab) => cab.vendorId === Number(currentValue));
      setCabs(initialCabState.concat(cabs));
    } else {
      setCabs(initialCabState);
    }
  };

  const validateInput = (input, value) => {
    if (input.error === 'Route already exists.') return input.error;
    if (input.validations.length > 0) {
      if (input.validations.includes('required') && !hasValue(value)) {
        return `${input.label} is mandatory.`;
      }
      const minlengthIndex = input.validations.findIndex((element) =>
        element.includes('minLength')
      );
      if (minlengthIndex > -1) {
        const minLength = input.validations[minlengthIndex].split('-')[1];
        if (!hasMinLength(value, minLength))
          return `${input.label} should contain atleast ${minLength} character.`;
      }
      if (input.validations.includes('numeric') && isNaN(Number(value))) {
        return `${input.label} should contain numbers only.`;
      }
      const excetLengthIndex = input.validations.findIndex((element) =>
        element.includes('exectLength')
      );
      if (excetLengthIndex > -1 && value.length > 0) {
        const length = input.validations[excetLengthIndex].split('-')[1];
        if (!exectLength(value, length)) {
          return `${input.label} should contain excelty ${length} character.`;
        }
      }
    }
    return undefined;
  };

  const isErrorVisible = (inputState) => {
    if (inputState.error && (inputState.isTouched || isFormSubmitted)) {
      return inputState.error;
    }
  };

  const onBlurHandler = (event) => {
    const { name, value } = event.target;
    const error = validateInput(formState[name], value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        isTouched: true,
        error: error ? error : undefined,
      },
    }));
  };

  return (
    <div className="mt-8 md:min-h-screen py-[5rem] add-route-banner">
      <div className="p-3 rounded m-auto max-w-xl drop-shadow-xl">
        <div className="h-[10rem] map-banner"></div>
        <div className="bg-light p-4 md:p-2 text-xs uppercase font-inter">
          <div
            data-testid="form-title"
            className="text-4xl flex justify-center mb-6 text-tw_primary font-bold item-center"
          >
            Add Route
          </div>
          <form onSubmit={handleSubmit}>
            <div className="sm:grid sm:grid-cols-2">
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="route_name"
                  name="routeName"
                  type="text"
                  error={isErrorVisible(formState.routeName)}
                  value={formState.routeName.value}
                  required={
                    formState.routeName.validations.indexOf('required') > -1
                  }
                  onChange={handleInputChange}
                  onBlur={(event) => onBlurHandler(event)}
                >
                  Route Name
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="start_time"
                  name="pickupTime"
                  type="time"
                  required={
                    formState.pickupTime.validations.indexOf('required') > -1
                  }
                  value={formState.pickupTime.value}
                  error={isErrorVisible(formState.pickupTime)}
                  onChange={handleInputChange}
                  onBlur={(event) => onBlurHandler(event)}
                >
                  Start Time
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="pickup_point"
                  name="startLocation"
                  type="text"
                  value={formState.startLocation.value}
                  error={isErrorVisible(formState.startLocation)}
                  required={
                    formState.startLocation.validations.indexOf('required') > -1
                  }
                  onChange={handleInputChange}
                  onBlur={(event) => onBlurHandler(event)}
                >
                  Pickup Point
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="drop_point"
                  name="endLocation"
                  type="text"
                  value={formState.endLocation.value}
                  required={
                    formState.endLocation.validations.indexOf('required') > -1
                  }
                  onChange={handleInputChange}
                  error={isErrorVisible(formState.endLocation)}
                  onBlur={(event) => onBlurHandler(event)}
                >
                  Drop Point
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="valid_till"
                  name="expireDate"
                  type="date"
                  min={getCurrentDate()}
                  placeholder={getCurrentDate()}
                  value={formState.expireDate.value}
                  required={
                    formState.expireDate.validations.indexOf('required') > -1
                  }
                  onChange={handleInputChange}
                  error={isErrorVisible(formState.expireDate)}
                  onBlur={(event) => onBlurHandler(event)}
                >
                  Request Valid till
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Select
                  id="vendor_name"
                  value={selectedVendor}
                  onChange={handleVendorChange}
                  options={vendors.map((vendor) => {
                    return { id: vendor.id, value: vendor.name };
                  })}
                >
                  Vendor Name
                </Select>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Select
                  id="driver_name"
                  value={formState.vehicleId.value.toString()}
                  name="vehicleId"
                  onChange={handleInputChange}
                  onBlur={onBlurHandler}
                  options={cabs.map((cab) => {
                    return { id: cab.id, value: cab.driverName };
                  })}
                  disabled={cabs.length === 1}
                >
                  Driver Name
                </Select>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="driver_contact"
                  name="driverContact"
                  error={isErrorVisible(formState.driverContact)}
                  type="text"
                  value={formState.driverContact.value}
                  onChange={handleInputChange}
                  required={
                    formState.driverContact.validations.indexOf('required') > -1
                  }
                  onBlur={onBlurHandler}
                >
                  Driver Contact Number
                </Input>
              </div>
            </div>
            <div className="m-2 flex justify-center">
              <button
                type="button"
                className="bg-tw_dark font-bold text-light py-2 px-4 mr-2 rounded"
                onClick={handleFormReset}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-tw_primary font-bold text-light py-2 px-4 rounded disabled:bg-tw_placeholder disabled:cursor-not-allowed"
                disabled={!isFormValid}
              >
                Submit
              </button>
            </div>
            <div className="text-xs text-muted normal-case">
              Fields marked with <span className="text-danger">*</span> are
              mandatory.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddRoute;
