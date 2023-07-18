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
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );

  if (loggedInUser.profile === 'user') {
    routes = (
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<EmployeeCabRequest />} />
        <Route path="/cab-request" element={<CabRequestForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
  if (loggedInUser.profile === 'admin') {
    routes = (
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" replace />} />
        <Route path="/dashboard-admin" element={<CabRequest />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }

  return (
    <>{routes}</>

    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="login" element={<Login />} />
    //   {/* <Route path="signup" element={<SignUp />} /> */}
    //   {/* <Route path="booking" element={<AddCab />} /> */}
    //   <Route path="home" element={<Home />} />
    //   {/* <Route
    //           path="booking-confirmation"
    //           element={<BookingConfirmation rides={rides} />}
    //         /> */}
    //   {/* <Route path="add-route" element={<AddRoute />} /> */}
    //   <Route path="*" element={<ErrorPage />} />
    //   <Route path="/dashboard-admin" element={<CabRequest />} />
    //   <Route path="/cab-request" element={<CabRequestForm />} />
    // </Routes>
  );
}

export default CustomRoutes;
