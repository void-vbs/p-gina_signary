import React from 'react';
import PersonaLogo from '../assets/Persona_Logo.png';
import AplicacionesLogo from '../assets/Aplicaciones_Logo.png';
import Logos1 from '../assets/Logos_1.png';
import Logos2 from '../assets/Logos_2.png';

const Features = () => {
  return (
    <section id="caracteristicas" className="py-20 px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            CARACTERÍSTICAS
          </p>
          <h2 className="text-5xl font-bold text-[#1A1615] leading-tight">
            Construido para la inclusión,<br />
            impulsado por tecnología
          </h2>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Card 1 - Traducción inteligente */}
          <div className="bg-[#E8E3DC] rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-[#1A1615] mb-6">
              Traducción inteligente en tiempo real
            </h3>
            
            <div className="flex justify-center my-12">
              <div className="bg-[#1A1615] rounded-2xl p-8 w-48 h-40 flex items-center justify-center">
                <img 
                  src={PersonaLogo} 
                  alt="Persona traduciendo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[#1A1615] font-semibold mb-2">
                Traducción fluida.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Procesamiento rápido, preciso y optimizado para capturar cada movimiento de manos y expresiones clave.
              </p>
            </div>
          </div>

          {/* Card 2 - Compatible con herramientas */}
          <div className="bg-[#E8E3DC] rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-[#1A1615] mb-6">
              Compatible con tus herramientas favoritas
            </h3>
            
            <div className="flex justify-center my-12">
              <img 
                src={AplicacionesLogo} 
                alt="Logos de aplicaciones compatibles" 
                className="w-auto h-32 object-contain"
              />
            </div>

            <div className="mt-8">
              <p className="text-gray-600 leading-relaxed">
                Funciona con cualquier cámara y entorno. Integra Signary con facilidad: pantallas externas, proyectores, plataformas educativas o incluso webs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 3 - Visualización de landmarks */}
          <div className="bg-[#E8E3DC] rounded-3xl p-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <img src={Logos1} alt="Visualización" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1615] mb-4">
              Visualización de landmarks
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Landmarks personalizables para entender mejor cada gesto sin saturar la pantalla.
            </p>
          </div>

          {/* Card 4 - Se adapta a tu idioma */}
          <div className="bg-[#E8E3DC] rounded-3xl p-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <img src={Logos2} alt="Idioma" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1615] mb-4">
              Se adapta a tu idioma
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Traducción adaptable que respeta idioma, estructura y claridad perfecto para bilingües.
            </p>
          </div>

          {/* Card 5 - Diseñado para aprender */}
          <div className="bg-[#E8E3DC] rounded-3xl p-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <img src={Logos1} alt="Aprender" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1615] mb-4">
              Diseñado para aprender como tú
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vistas flexibles para analizar cada gesto de la forma que prefieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
