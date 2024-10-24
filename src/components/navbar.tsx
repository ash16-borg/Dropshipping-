import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  return (
    <>
    <nav className="bg-navb bg-opacity-30 backdrop-blur-lg p-4 md:p-12 w-full">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <div className="flex items-center space-x-2 -ml-2 md:-ml-10">
      <img src={logo} className="h-12 w-12 md:h-20 md:w-20" alt="Logo" />
      <div className="text-black uppercase" id='navbrand'>S t o r e &nbsp; P o i n t</div>
    </div>
    <div className="space-x-4 md:space-x-16 pr-4 md:pr-30 flex-grow md:flex-grow-0">
          <Link to="/" className="nav-items">Home</Link>
          <a href="#" className="nav-items">About</a>
          <a href="#" className="nav-items">Products</a>
          <a href="#" className="nav-items">Contact</a>
        </div>
        <div>
          <a onClick={toggleLoginModal} className="nav-items">
            <FontAwesomeIcon icon={faUser}/> Login
          </a>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;