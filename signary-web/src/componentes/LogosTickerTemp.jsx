import React from 'react';
import marca1 from '../assets/marca_1.png';
import marca2 from '../assets/marca_2.png';
import marca3 from '../assets/marca_3.png';
import marca4 from '../assets/marca_4.png';
import marca5 from '../assets/marca_5.png';

const LogosTicker = () => {
  const logos = [
    { src: marca1, alt: 'Marca 1' },
    { src: marca2, alt: 'Marca 2' },
    { src: marca3, alt: 'Marca 3' },
    { src: marca4, alt: 'Marca 4' },
    { src: marca5, alt: 'Marca 5' },
  ];

  return (
    <div className="bg-[#E8E8E8] py-12 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E8E8E8] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E8E8E8] to-transparent z-10"></div>

        {/* Scrolling logos container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosTicker;
