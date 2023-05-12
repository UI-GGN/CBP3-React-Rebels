import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCab from './pages/AddCab';
import Login from './pages/Login';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/Bookingconfirmation';
import SignUp from './pages/Signup';
import ErrorPage from './pages/ErrorPage';
import LandingPage_ from './pages/LandingPage_';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login"  element={<Login />} />
          <Route path="landing"  element={<LandingPage_ />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="booking" element={<AddCab />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
