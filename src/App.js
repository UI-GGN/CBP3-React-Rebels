import './App.scss';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCab from './pages/AddCab';
import Login from './pages/Login';
import BookingConfirmation from './pages/Bookingconfirmation';
import SignUp from './pages/Signup';
import LandingPage from './pages/LandingPage';
import CabRequest from './components/CabRequest/CabRequest.tsx';

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
  const requests = [
    {
      bookingId: 1,
      name: 'Joe',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
    {
      bookingId: 4,
      name: 'Joe',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
    {
      bookingId: 5,
      name: 'Joe',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
    {
      bookingId: 6,
      name: 'Joe',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
    {
      bookingId: 2,
      name: 'Rach',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'adress line 1 addresss line 2',
      dropLocation: 'address2',
    },
    {
      bookingId: 3,
      name: 'Mon',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
    {
      bookingId: 7,
      name: 'Mon',
      date: '22-06-23',
      projectCode: 'BP',
      time: '10:30 AM',
      pickupLocation: 'address1',
      dropLocation: 'address2',
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="booking" element={<AddCab />} />
        <Route path="landing" element={<LandingPage />} />
        <Route
          path="booking-confirmation"
          element={<BookingConfirmation rides={rides} />}
        />
        <Route path="*" element={<Login />} />
        <Route path="/cab" element={<CabRequest requests={requests} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
