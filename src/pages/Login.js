import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/pages/Login.scss';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Form.scss';

const Login = (props) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) navigate('/landing');
      else setError('An error occurred while Login. Please try again later.');
    } catch (error) {
      setError('An error occurred while Login. Please try again later.');
    }
  };
  const handleError = (error) => {
    setError(error);
  };

  return (
    <div>
      <h1 className="login-container">Hatch-A-Cab</h1>
      <div className="login-container">
        <h2>Employee Login</h2>
        <Form
          onFieldClick={handleError}
          onSubmitForm={handleLogin}
          buttonText="Login"
          showSignUpFields={false}
        />
        {error && <p>{error}</p>}
        <p>
          New User?
          <Link to="/signup"> Create Account </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
