import React from 'react';
import Navbar from './componentes/NavbarTemp';
import Hero from './componentes/HeroTemp';
import LogosTicker from './componentes/LogosTickerTemp';
import Features from './componentes/FeaturesTemp';
import Pricing from './componentes/PricingTemp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <LogosTicker />
    </div>
  );
}

export default App;
