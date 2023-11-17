import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AntNav from './Components/Nav/AntNav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NoPage from './Pages/NoPage';
import MicroBlading from './Pages/MicroBlading';
import LipBlush from './Pages/LipBlush';
import Tattoo from './Pages/Tattoo';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import ConfirmedBooking from './Pages/ConfirmedBooking';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ConfigProvider>
          <AntNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route index element={<Home />} />
            <Route path='microblading' element={<MicroBlading />} />
            <Route path='lipblush' element={<LipBlush />} />
            <Route path='tattoo' element={<Tattoo />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='booking' element={<Booking />} />
            <Route path='booking/confirmed' element={<ConfirmedBooking />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
          <Footer />
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
