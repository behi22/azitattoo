import { ConfigProvider, theme } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AntNav from './Components/AntNav';
import Home from './Pages/Home';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ConfigProvider>
          <AntNav />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact-about' element={<Company />} />
            <Route path='careers' element={<Careers />} />
            <Route path='careers/:key' element={<Job />} />
            <Route path='successful-apply' element={<ApplySuccessful />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='*' element={<NoPage />} /> */}
          </Routes>
          <Footer />
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
