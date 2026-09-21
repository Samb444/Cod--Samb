import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  MapPin, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ABOUT_FACTS, EDUCATION_TIMELINE } from '../../data/aboutData';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="about-section section-wrapper">
      <div className="container">
        
        {/* Editorial Top Grid: Left Identity & Narrative | Right Context & Transition */}
        <div className="about-grid">
          
          {/* Left Column: Section Hook & Editorial Positioning */}
          <div className="about-left">
            <div className="section-eyebrow">
              <span className="pulse-dot" aria-hidden="true" />
              <span>QUI SUIS-JE ?</span>
            </div>

            <h2 className="about-title">
              De l'apprentissage aux projets <span className="text-gradient">concrets</span>.
            </h2>

            <p className="about-subtitle">
              Étudiant en informatique · Développeur web · Créateur de solutions numériques
            </p>

            {/* Strategic Transition Editorial Pill: Droit -> Informatique */}
            <div className="evolution-banner">
              <div className="evolution-header">
                <span className="evolution-label">Évolution de parcours</span>
                <div className="evolution-flow">
                  <span className="evolution-tag law">Droit public</span>
                  <ArrowRight size={14} className="evolution-arrow" />
                  <span className="evolution-tag tech">Informatique</span>
                </div>
              </div>
              <p className="evolution-note">
                Un cursus initial universitaire en droit public à l'UCAD, suivi d'une orientation vers l'informatique appliquée à la gestion au Groupe ISI.
              </p>
            </div>
          </div>

          {/* Right Column: Factual Narrative & Structured Facts */}
          <div className="about-right">
            <div className="about-narrative-card">
              <div className="about-paragraphs">
                {ABOUT_FACTS.paragraphs.map((p, idx) => (
                  <p key={idx} className="about-text">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Highlights Grid */}
              <div className="about-highlights-grid">
                {ABOUT_FACTS.highlights.map((item, idx) => (
                  <div key={idx} className="about-highlight-item">
                    <span className="highlight-mini-label">{item.label}</span>
                    <span className="highlight-mini-value">{item.value}</span>
                    <span className="highlight-mini-subtext">{item.subtext}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Zone: Parcours Académique & Timeline */}
        <div id="parcours" className="timeline-block">
          <div className="timeline-header">
            <div className="timeline-header-meta">
              <span className="timeline-badge">
                <Sparkles size={14} />
                <span>PARCOURS ACADÉMIQUE</span>
              </span>
              <h3 className="timeline-title">
                Historique des formations
              </h3>
            </div>
            <p className="timeline-header-desc">
              De l'analyse juridique à l'UCAD au développement informatique au Groupe ISI.
            </p>
          </div>

          {/* Responsive Timeline Grid */}
          <div className="timeline-track">
            {EDUCATION_TIMELINE.map((item) => (
              <div 
                key={item.id} 
                className={`timeline-card ${item.isCurrent ? 'current-step' : 'completed-step'}`}
              >
                {/* Timeline Indicator Node */}
                <div className="timeline-node-column">
                  <div className="timeline-marker">
                    {item.isCurrent ? (
                      <GraduationCap size={18} className="marker-icon active" />
                    ) : (
                      <BookOpen size={16} className="marker-icon" />
                    )}
                  </div>
                  <div className="timeline-stem" aria-hidden="true" />
                </div>

                {/* Card Content */}
                <div className="timeline-card-content">
                  <div className="timeline-card-top">
                    <div className="timeline-period-wrap">
                      <span className="timeline-period">{item.period}</span>
                      {item.isCurrent ? (
                        <span className="status-current-badge">
                          <Clock size={12} />
                          <span>Formation en cours</span>
                        </span>
                      ) : (
                        <span className="status-completed-badge">
                          <CheckCircle2 size={12} />
                          <span>Parcours validé</span>
                        </span>
                      )}
                    </div>
                    <div className="timeline-institution">
                      <span>{item.institution}</span>
                      <span className="inst-separator">·</span>
                      <span className="timeline-location">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  <h4 className="timeline-degree">
                    {item.degree}
                  </h4>

                  <p className="timeline-desc">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
