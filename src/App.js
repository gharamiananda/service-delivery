import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './page/home/Home';
import Preloader from './components/preloader/Preloader';
import { Routes, Route } from 'react-router-dom';
import Services from './page/services/Services';
import ServiceDetail from './page/serviceDetail/ServiceDetail';
import Login from './page/login/Login';
import Register from './page/register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './page/requireAuth/RequireAuth';
import Portfoilo from './page/portfolio/Portfoilo';
import Blogpage from './page/blogpage/Blogpage';


function App() {
  return (
    <>
      <Preloader />
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfoilo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services/:id" element={

          <RequireAuth>
            <ServiceDetail />
          </RequireAuth>
        } />


      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
