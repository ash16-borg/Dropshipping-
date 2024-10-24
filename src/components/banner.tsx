import React from 'react';
import BannerImage from '../assets/images/banner.png';

const Banner: React.FC = () => {
    return (
      <div className="relative">
      <img src={BannerImage} className="h-2/5 md:h-3/5 w-full object-cover opacity-90" />
      <div className="absolute top-1/2 right-4 md:right-10 h-[200px] md:h-[370px] w-[200px] md:w-[290px] transform -translate-y-1/2 bg-[rgba(217,178,152,0.89)] p-2 md:p-4 rounded-lg shadow-md flex flex-col justify-between">
        <h2 className="text-lg md:text-2xl text-[#333] font-mono uppercase text-center pt-3 font-bold">Festive Diwali collection</h2>
        <h1 className="text-[60px] md:text-[120px] text-center font-Georgia pt-4 md:pt-3">80%</h1>
        <p className="text-xs md:text-sm text-[#333232] text-center mt-auto pb-3">terms & condition</p>
      </div>
    </div>
    );
}

export default Banner;