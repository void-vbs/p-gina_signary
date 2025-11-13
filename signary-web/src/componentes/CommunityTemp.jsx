import React from 'react';
import XIcon from '../assets/X_icon.svg.png';
import GithubLogo from '../assets/Github_logo.png';

const Community = () => {
  return (
    <section id="comunidad" className="py-20 px-6 bg-gradient-to-b from-[#E8E8E8] to-[#C5D5E5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
            COMUNIDAD
          </p>
          <h2 className="text-5xl font-bold text-[#1A1615]">
            Mantenete al día
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* X/Twitter Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                <img 
                  src={XIcon} 
                  alt="X/Twitter" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">15.2K FOLLOWERS</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1615] mb-3">
              X/Twitter
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Novedades, avances del modelo, mejoras de Signary y anuncios del proyecto.
            </p>

            <button 
              className="w-full bg-white border-2 border-[#1A1615] text-[#1A1615] py-3 rounded-full font-medium hover:bg-[#1A1615] hover:text-white transition-all"
              disabled
            >
              Síguenos
            </button>
          </div>

          {/* Github Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-[#1A1615] rounded-2xl flex items-center justify-center">
                <img 
                  src={GithubLogo} 
                  alt="Github" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">32K SUBSCRIBERS</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1615] mb-3">
              Github
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Accedé al código, reportá problemas, contribuí al desarrollo y explorá las últimas novedades.
            </p>

            <a
              href="https://github.com/void-vbs"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-[#1A1615] text-[#1A1615] py-3 rounded-full font-medium hover:bg-[#1A1615] hover:text-white transition-all text-center"
            >
              Visitar
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#1A1615] mb-4">
            Listo para empezar?
          </h3>
          <p className="text-gray-600 mb-8">
            Descarga Signary GRATIS. No se necesita tarjeta de crédito
          </p>
          <button className="bg-[#1A1615] text-white px-10 py-4 rounded-full font-medium hover:bg-[#2A2625] transition-all shadow-lg text-lg">
            Prueba Signary
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
