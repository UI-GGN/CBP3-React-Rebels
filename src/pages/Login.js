import React, { useState, useContext } from 'react';
import '../styles/pages/Login.scss';
import '../styles/components/Form.scss';
import Input from '../components/Input';
import { hasValue, hasMinLength } from '../utils/Validations.ts';
import { USERS } from '../utils/User';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = (props) => {
  const { login } = useContext(AuthContext);
  const initialState = {
    username: {
      value: '',
      error: 'Username is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-3'],
      label: 'Username',
    },
    password: {
      value: '',
      error: 'Password is mandatory.',
      isTouched: false,
      validations: ['required', 'minLength-8'],
      label: 'Password',
    },
  };
  const [formState, setFormState] = useState(initialState);
  let isFormSubmitted = false;
  const navigate = useNavigate();
  const isFormValid = !formState.username.error && !formState.password.error;
  const [serverError, setServerError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
        error: validateInput(prevState[name], value),
      },
    }));
  };
  const validateInput = (input, value) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    isFormSubmitted = true;
    if (isFormValid) {
      const user = USERS.filter(
        (user) => user.username === formState.username.value
      )[0];
      if (user) {
        console.log(user);
        if (user.password === formState.password.value) {
          login(user);
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          if (user.profile === 'admin') {
            navigate('/dashboard-admin', { replace: true });
          } else {
            navigate('/home', { replace: true });
          }
        }
      }
      setServerError(true);
    }
  };
  return (
    <div className="h-full w-full flex flex-row justify-center items-center">
      <div className="w-1/2 h-full">
        <div className="ride-svg mx-auto"></div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="grow">
          <div className="w-6/12 mx-auto shadow-md rounded">
            <h2 className="text-tw_primary text-center">LOGIN</h2>
            {serverError && (
              <div className="mx-2 my-1 py-3 text-danger text-center">
                You have entered an invalid username or password!!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="username"
                  name="username"
                  error={isErrorVisible(formState.username)}
                  type="text"
                  value={formState.username.value}
                  onChange={handleInputChange}
                  required={
                    formState.username.validations.indexOf('required') > -1
                  }
                  onBlur={onBlurHandler}
                >
                  Username
                </Input>
              </div>
              <div className="mx-2 my-1 pb-2">
                <Input
                  id="password"
                  name="password"
                  error={isErrorVisible(formState.password)}
                  type="password"
                  value={formState.password.value}
                  onChange={handleInputChange}
                  required={
                    formState.password.validations.indexOf('required') > -1
                  }
                  onBlur={onBlurHandler}
                >
                  Password
                </Input>
              </div>
              <div className="m-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-tw_primary font-bold text-light py-2 px-8 rounded disabled:bg-tw_placeholder disabled:cursor-not-allowed"
                  disabled={!isFormValid}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
