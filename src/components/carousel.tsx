import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import './banner.css';

const Carousel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      if (isHovered) {
        scrollContainer.classList.add('paused');
      } else {
        scrollContainer.classList.remove('paused');
      }
    }
  }, [isHovered]);
  
  const navigate = useNavigate();

  const handleMensClick = () => {
    navigate('/mensform');
  };

  const handleMenCoatClick = () => {
    navigate('/mencoat');
  };

  const handleWomenCasClick = () => {
    navigate('/womencas');
  };

  const handleWomenCoatClick = () => {
    navigate('/womenform');
  };

  const handleChildClick = () => {
    navigate('/child');
  };
 
  return (
    <div className="scroll-container relative grid h-100 w-full overflow-hidden whitespace-nowrap p-4 md:p-7 mb-2 cards">
  <div data-first className="scroll flex h-80 w-full items-center justify-around gap-4 md:gap-6 whitespace-nowrap px-2 md:px-4">
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMensClick}>
      <img src="/src/assets/images/man1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 font-sans rounded-b-md">
        Mens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCasClick}>
      <img src="/src/assets/images/woman1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMenCoatClick}>
      <img src="/src/assets/images/man2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Mens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCoatClick}>
      <img src="/src/assets/images/woman2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card"  onClick={handleChildClick}>
      <img src="/src/assets/images/child.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Kids Wear
      </div>
    </div>
  </div>
  <div className="scroll flex h-80 w-full items-center justify-around gap-4 md:gap-8 whitespace-nowrap px-2 md:px-4">
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMensClick}>
      <img src="/src/assets/images/man1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Mens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCasClick}>
      <img src="/src/assets/images/woman1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMenCoatClick}>
      <img src="/src/assets/images/man2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Mens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCoatClick}>
      <img src="/src/assets/images/woman2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card"  onClick={handleChildClick}>
      <img src="/src/assets/images/child.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
       Kids wear
      </div>
    </div>
  </div>
  <div data-last className="scroll flex h-80 w-full items-center justify-around gap-4 md:gap-8 whitespace-nowrap px-2 md:px-4">
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMensClick} >
      <img src="/src/assets/images/man1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Mens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCasClick}>
      <img src="/src/assets/images/woman1.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Casuals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleMenCoatClick}>
      <img src="/src/assets/images/man2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Mens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card" onClick={handleWomenCoatClick}>
      <img src="/src/assets/images/woman2.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
        Womens Formals
      </div>
    </div>
    <div className="h-64 md:h-80 w-48 md:w-64 relative card"  onClick={handleChildClick}>
      <img src="/src/assets/images/child.png" alt="Description" className="h-full w-full object-cover rounded-md" />
      <div className="absolute bottom-0 left-0 w-full text-white text-center bg-amber-800 bg-opacity-85 text-xl md:text-3xl p-1 md:p-2 rounded-b-md">
       Kids wear
      </div>
    </div>
  </div>
  <div className="fade pointer-events-none absolute inset-0 lg:hidden"></div>
</div>
  );
}

export default Carousel;