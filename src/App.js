import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './page/home/Home';
import Preloader from './components/preloader/Preloader';
import { Routes, Route } from 'react-router-dom';
import Services from './page/services/Services';
import ServiceDetail from './page/serviceDetail/ServiceDetail';
function App() {
  return (
    <>
      <Preloader />
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
