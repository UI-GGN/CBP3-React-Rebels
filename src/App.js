import './App.scss';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCab from './pages/AddCab';
import Login from './pages/Login';
import BookingConfirmation from './pages/Bookingconfirmation';
import SignUp from './pages/Signup';
import LandingPage from './pages/LandingPage';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
