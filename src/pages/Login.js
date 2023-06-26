import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/pages/Login.scss';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Form.scss';
import Layout from '../components/template/Layout';
import Logo from '../components/Logo';

const Login = (props) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) navigate('/home');
      else setError('An error occurred while Login. Please try again later.');
    } catch (error) {
      navigate('/home');
      setError('An error occurred while Login. Please try again later.');
    }
  };
  const handleError = (error) => {
    setError(error);
  };

  return (
    <div className="login-background">
      <Logo />
      <div className="tw-container-style form px-4 py-2">
        <h2 className="form-header">Employee Login</h2>
        <Form
          onFieldClick={handleError}
          onSubmitForm={handleLogin}
          buttonText="LOGIN"
          showSignUpFields={false}
        />
        {error && <p>{error}</p>}
        <p className="text-white">
          New User?
          <Link to="/signup"> Create Account </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
