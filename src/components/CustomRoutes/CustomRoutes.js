import React from 'react';
import Login from '../../pages/Login';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/ErrorPage';
import CabRequest from '../CabRequest/CabRequest';
import EmployeeCabRequest from '../CabRequest/EmployeeCabRequest';
import CabRequestForm from '../../pages/CabRequestForm/CabRequestForm';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function CustomRoutes() {
  const { profile } = useContext(AuthContext);
  let routes = (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );

  if (profile === 'user') {
    routes = (
      <Routes>
        <Route path="/" element={<EmployeeCabRequest />} />
        <Route path="/home" element={<EmployeeCabRequest />} />
        <Route path="/cab-request" element={<CabRequestForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
  if (profile === 'admin') {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
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
