import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/Bookingconfirmation';
import SignUp from './pages/Signup';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login"  element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
