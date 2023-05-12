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
  const rides = [{
    bookingId:1,
    dropLocation: "address1",
    pickUpLocation: "address2",
    city:'city',
    area:'area',
    time: '2022-04-22 10:34:23',
    status: "confirmed",
  },{
    bookingId:2,
    dropLocation: "Delhi",
    pickUpLocation: "Chennai",
    time: "2022-04-22 10:34:23",
    city:'Chennai',
    area:'T.Nagar',
    status: "confirmed",
  },{
    bookingId:3,
    dropLocation: "Delhi",
    pickUpLocation: "Bangalore",
    time: "2022-04-22 10:34:23",
    city:'Koramangla',
    area:'BTM Layout',
    status: "confirmed",
  }];
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="booking" element={<Booking />} />
        <Route
          path="booking-confirmation"
          element={<BookingConfirmation rides={rides} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
