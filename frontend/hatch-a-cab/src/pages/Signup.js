import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { Link } from 'react-router-dom';
import '../styles/pages/Signup.scss';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Form.scss';

const SignUp = (props) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (email, password, name, phoneNumber, address, pincode) => {
    try {
      await axios.post('http://localhost:3001/signup', {
        email,
        password,
        name,
        phoneNumber,
        address,
        pincode,
      });
      // redirect the user to the login page or do some other action here
      navigate('/login');
    } catch (err) {
      setError('An error occurred while signing up. Please try again later.');
    }
  };
  const handleError = (error) => {
    setError(error);
  };

  return (
    <div className="signup-container">
      <h1>Employee Signup</h1>
      <Form onFieldClick={handleError} buttonText="Signup" onSubmitForm={handleSignUp} showSignUpFields={true} />

      {error && <p>{error}</p>}

      <p>
        Already a user?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
