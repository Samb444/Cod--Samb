import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Code2, 
  GraduationCap
} from 'lucide-react';
import { usePortraitParallax } from '../../hooks/usePortraitParallax';
import './Hero.css';

export const Hero: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const visualStageRef = usePortraitParallax<HTMLDivElement>({
    maxTilt: 4.5,
    maxShift: 6,
    lerp: 0.08
  });

  return (
    <section id="accueil" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Authentic Narrative & Strict Hierarchy */}
        <div className="hero-content">
          {/* Eyebrow & Location Anchor */}
          <div className="hero-eyebrow-container">
            <span className="hero-badge-editorial">
              PORTFOLIO PROFESSIONNEL
            </span>
            <span className="hero-badge-location">
              <MapPin size={13} />
              <span>Dakar, Sénégal</span>
            </span>
          </div>

          {/* Identity & Main Title */}
          <h1 className="hero-title">
            CODÉ <span className="text-gradient">SAMB</span>
          </h1>

          {/* Authentic Positioning */}
          <div className="hero-subtitle">
            <span>Étudiant en informatique</span>
            <span className="hero-separator">·</span>
            <span>Développeur web</span>
            <span className="hero-separator">·</span>
            <span className="hero-highlight-phrase">Créateur de solutions numériques</span>
          </div>

          {/* Editorial Breathable Summary (Who I am, What I do, What I build, Target) */}
          <p className="hero-description text-lead">
            Étudiant en informatique au <strong>Groupe ISI</strong> (Dakar), je conçois des applications web utiles, 
            performantes et modulaires. Engagé dans des projets concrets, je développe mes compétences techniques avec 
            l'ambition d'évoluer vers l'<strong>ingénierie logicielle</strong>.
          </p>

          {/* Triple-tier Action Buttons */}
          <div className="hero-actions">
            {/* Primary CTA */}
            <a href="#projets" className="btn btn-primary" id="cta-hero-projets">
              <span>Voir mes projets</span>
              <ArrowRight size={16} />
            </a>

            {/* Secondary CTA: Download & Browser View */}
            <a 
              href="/documents/CV-CODE-SAMB.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary" 
              title="Consulter ou télécharger le CV de Codé Samb (PDF)"
              id="cta-hero-cv"
            >
              <Download size={16} />
              <span>Télécharger mon CV</span>
            </a>

            {/* Tertiary CTA */}
            <a href="#contact" className="btn btn-tertiary" id="cta-hero-contact">
              <span>Me contacter</span>
            </a>
          </div>

          {/* Factual Highlights: ISI, Projects, Hackathon */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-tag">Formation</span>
              <span className="highlight-value">Groupe ISI</span>
              <span className="highlight-label">Licence Informatique</span>
            </div>
            
            <div className="highlight-item">
              <span className="highlight-tag">Réalisations</span>
              <span className="highlight-value">Projets Concrets</span>
              <span className="highlight-label">AfriTalent · Sama Santé <em>(en cours)</em></span>
            </div>
            
            <div className="highlight-item">
              <span className="highlight-tag">Hackathon</span>
              <span className="highlight-value">2e Place</span>
              <span className="highlight-label">CEZAT Tivaouane 2026</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition with Digital Portrait & Multi-Layer Depth */}
        <div className="hero-visual" ref={visualStageRef}>
          <div className="visual-composition">
            {/* Layer 0: Ambient Multi-Stop Animated Halo (Green #22C55E / Cyan #38BDF8) */}
            <div className="visual-ambient-halo" aria-hidden="true" />

            {/* Layer 1: Architectural Backdrop Geometry with Discrete Grid & Coordinate Lines */}
            <div className="visual-tech-backdrop" aria-hidden="true">
              <div className="backdrop-grid" />
              <div className="backdrop-corner-accent top-right" />
              <div className="backdrop-corner-accent bottom-left" />
            </div>

            {/* Layer 2: Dynamic Frame with Light Sheen & Precision Brackets */}
            <div className="visual-frame-container">
              <div className="visual-frame-border-glow" aria-hidden="true" />
              
              <div className="visual-frame">
                {/* Precision Corner Brackets */}
                <span className="corner-bracket corner-tl" aria-hidden="true" />
                <span className="corner-bracket corner-tr" aria-hidden="true" />
                <span className="corner-bracket corner-bl" aria-hidden="true" />
                <span className="corner-bracket corner-br" aria-hidden="true" />

                {/* Architectural Grid Guidelines */}
                <div className="visual-frame-guidelines" aria-hidden="true" />

                {!photoError ? (
                  <div className="photo-media-wrapper">
                    <img
                      src="/images/profile/code-samb.jpg"
                      alt="Portrait professionnel de Codé Samb — Développeur Web & Étudiant en Informatique"
                      className="profile-photo"
                      loading="eager"
                      decoding="async"
                      onError={() => setPhotoError(true)}
                    />
                    {/* Subtle Interactive Reflection/Sheen */}
                    <div className="photo-light-sheen" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="profile-placeholder">
                    <div className="placeholder-monogram-box">
                      <span className="placeholder-initials">CS</span>
                    </div>
                    <div className="placeholder-details">
                      <span className="placeholder-title">CODÉ SAMB</span>
                      <span className="placeholder-subtitle">
                        Emplacement portrait officiel
                      </span>
                    </div>
                    <span className="placeholder-path-spec">
                      /images/profile/code-samb.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Card 1: Factual Education */}
            <div className="floating-card floating-card-education">
              <div className="card-icon-box">
                <GraduationCap size={18} />
              </div>
              <div className="card-info">
                <span className="card-primary-text">Licence Informatique</span>
                <span className="card-secondary-text">Groupe ISI · Formation active</span>
              </div>
            </div>

            {/* Floating Card 2: Factual Practical Web Projects */}
            <div className="floating-card floating-card-projects">
              <div className="card-icon-box accent-cyan">
                <Code2 size={18} />
              </div>
              <div className="card-info">
                <span className="card-primary-text">Développement Web</span>
                <span className="card-secondary-text">Applications & Projets réels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

