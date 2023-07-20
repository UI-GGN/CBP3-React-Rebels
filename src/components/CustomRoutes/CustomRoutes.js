import React from 'react';
import Login from '../../pages/Login';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/ErrorPage';
import CabRequest from '../CabRequest/CabRequest';
import EmployeeCabRequest from '../CabRequest/EmployeeCabRequest';
import CabRequestForm from '../../pages/CabRequestForm/CabRequestForm';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function CustomRoutes() {
  const { loggedInUser } = useContext(AuthContext);
  let routes = (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );

  if (loggedInUser?.profile === 'user') {
    routes = (
      <Routes>
        <Route path="/" element={<EmployeeCabRequest />} />
        <Route path="/home" element={<EmployeeCabRequest />} />
        <Route path="/cab-request" element={<CabRequestForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
  if (loggedInUser?.profile === 'admin') {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-admin" element={<CabRequest />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }

  return <>{routes}</>;
}

export default CustomRoutes;
