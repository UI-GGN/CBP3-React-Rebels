import './App.scss';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Home from './pages/Home/Home';
import CabRequest from './components/CabRequest/CabRequest.tsx';
import CabRequestForm from './pages/CabRequestForm/CabRequestForm';
import Layout from './components/template/Layout';
import ErrorPage from '../src/pages/ErrorPage';
import EmployeeCabRequest from './components/CabRequest/CabRequest.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="booking" element={<AddCab />} /> */}
          <Route path="home" element={<Home />} />
          {/* <Route
            path="booking-confirmation"
            element={<BookingConfirmation rides={rides} />}
          /> */}
          {/* <Route path="add-route" element={<AddRoute />} /> */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dashboard-admin" element={<CabRequest />} />
          <Route path="/dashboard-employee" element={<EmployeeCabRequest />} />
          <Route path="/cab-request" element={<CabRequestForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
