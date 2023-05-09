import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/Bookingconfirmation";
import SignUp from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const ride = {
    dropLocation: "Delhi",
    pickUpLocation: "Chennai",
    time: "2022-04-22 10:34:23",
    status: "confirmed",
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="booking" element={<Booking />} />
        <Route
          path="booking-confirmation"
          element={<BookingConfirmation ride={ride} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
