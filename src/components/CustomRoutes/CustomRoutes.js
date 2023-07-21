import React from 'react';
import Login from '../../pages/Login';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/ErrorPage';
import CabRequest from '../CabRequest/Admin/CabRequest';
import EmployeeCabRequest from '../CabRequest/Employee/EmployeeCabRequest';
import CabRequestForm from '../../pages/CabRequestForm/CabRequestForm';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function CustomRoutes() {
  const { loggedInUser } = useContext(AuthContext);
  let routes = (
    <>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Login />} />
    </>
  );

  if (loggedInUser?.profile === 'user') {
    routes = (
      <>
        <Route path="/" element={<EmployeeCabRequest />} />
        <Route path="/home" element={<EmployeeCabRequest />} />
        <Route path="/cab-request" element={<CabRequestForm />} />
      </>
    );
  }
  if (loggedInUser?.profile === 'admin') {
    routes = (
      <>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-admin" element={<CabRequest />} />
        <Route path="home" element={<Home />} />
      </>
    );
  }

  return (
    <Routes>
      {routes}
      {loggedInUser?.profile === 'user' || loggedInUser?.profile === 'admin' ? (
        <Route path="*" element={<ErrorPage />} />
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );
}

export default CustomRoutes;
