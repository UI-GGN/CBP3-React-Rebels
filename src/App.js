import './App.scss';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCab from './pages/AddCab';
import Login from './pages/Login';
import BookingConfirmation from './pages/Bookingconfirmation';
import SignUp from './pages/Signup';
import Home from './pages/Home/Home';
import AddRoute from './pages/AddRoute';
import CabRequest from './components/CabRequest/CabRequest.tsx';

import CabRequestForm from './pages/CabRequestForm/CabRequestForm';
import Layout from './components/template/Layout';
import ErrorPage from '../src/pages/ErrorPage';

function App() {
  const rides = [
    {
      bookingId: 1,
      dropLocation: 'address1',
      pickUpLocation: 'address2',
      city: 'Chennai',
      area: 'T.Nagar',
      time: '2022-04-22 10:34:23',
      status: 'confirmed',
    },
    {
      bookingId: 2,
      dropLocation: 'Delhi',
      pickUpLocation: 'Chennai',
      time: '2022-04-22 10:34:23',
      city: 'Chennai',
      area: 'T.Nagar',
      status: 'confirmed',
    },
    {
      bookingId: 3,
      dropLocation: 'Delhi',
      pickUpLocation: 'Chennai',
      time: '2022-04-22 10:34:23',
      city: 'Chennai',
      area: 'T.Nagar',
      status: 'confirmed',
    },
  ];

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="booking" element={<AddCab />} />
          <Route path="home" element={<Home />} />
          <Route
            path="booking-confirmation"
            element={<BookingConfirmation rides={rides} />}
          />
          <Route path="add-route" element={<AddRoute />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dashboard-admin" element={<CabRequest />} />

          <Route path="/cab-request" element={<CabRequestForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
