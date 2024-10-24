import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Banner from './components/banner'; 
import Carousel from './components/carousel'; 
import MensForm from './components/mensform';
import Mencoat from './components/mencoat';
import Womencas from './components/womencas';
import Womenform from './components/womenform';
import Child from './components/child';
import Products from './components/products';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <div className='navbar'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={
            <div>
              <div className='bann'>
                <Banner />
              </div>
              <div className='carouse'>
                <Carousel />
              </div>
              <div className='products'>
                <Products />
              </div>
            </div>
          } />
          <Route path="mensform" element={<MensForm />} />
          <Route path="mencoat" element={<Mencoat />} />
          <Route path="womencas" element={<Womencas />} />
          <Route path="womenform" element={<Womenform />} />
          <Route path="child" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;