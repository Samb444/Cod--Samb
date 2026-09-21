import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio-root">
      {/* Dynamic Background Ambient Light & Network Grid */}
      <div className="bg-ambient-layer" aria-hidden="true" />

      {/* Premium Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
};

export default App;
