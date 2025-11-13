import React from 'react';
import ThumbsUpImage from '../assets/ThumbsUp.png';
import LogosTicker from './LogosTickerTemp';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden">
      {/* Background with gradient and clouds */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9CC1E7] via-[#B5D4EF] to-[#E3E1E1]">
        {/* Cloud patterns - using CSS for simple clouds */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-40 h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute top-10 right-1/3 w-36 h-16 bg-white/35 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-44 h-20 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 right-10 w-32 h-16 bg-white/40 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-8xl font-bold text-[#1A1615] mb-6">
            Signary
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Tecnología que conecta manos y voces para hacer la comunicación
            realmente accesible para todos.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button className="bg-[#1A1615] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2A2625] transition-all hover:scale-105">
            Probar Demo Gratis
          </button>
          <a 
            href="#caracteristicas"
            className="bg-transparent border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-white/50 transition-all inline-block"
          >
            Ver características
          </a>
        </div>

        {/* Dashboard Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            {/* Thumbs Up Card */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Thumbs up 63%
              </h3>
              
              {/* Thumbs up image */}
              <div className="relative aspect-video bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src={ThumbsUpImage} 
                  alt="Thumbs up hand gesture with tracking points" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Landmarks Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="bg-[#B94A48] text-white px-6 py-2 rounded-full font-medium hover:bg-[#A03D3B] transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Landmarks
                </button>
              </div>
              <button className="bg-[#B94A48] text-white px-6 py-2 rounded-full font-medium hover:bg-[#A03D3B] transition-all">
                Detener
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16 mb-12">
          <p className="text-gray-600 text-sm">
            Trusted by 7,000+ top startups, freelancers and studios
          </p>
        </div>
      </div>

      {/* Logos Ticker at the bottom of Hero */}
      <div className="relative">
        <LogosTicker />
      </div>
    </section>
  );
};

export default Hero;
