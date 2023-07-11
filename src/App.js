import './App.scss';
import 'tailwindcss/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/template/Layout';
import { AuthProvider } from './context/AuthContext';
import CustomRoutes from './components/CustomRoutes/CustomRoutes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <CustomRoutes />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
