import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Certifications } from './components/certifications/Certifications';
import { Hackathons } from './components/hackathons/Hackathons';
import { CV } from './components/cv/CV';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio-root">
      {/* Dynamic Background Ambient Light & Network Grid */}
      <div className="bg-ambient-layer" aria-hidden="true" />

      {/* Accessibility: Skip to Content Link */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      {/* Premium Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <CV />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
