import React, { useState } from 'react';
import { HACKATHONS_DATA } from '../../data/hackathonsData';
import type { HackathonAward } from '../../types';
import { CertificateModal } from '../common/CertificateModal';
import { Award, Calendar, MapPin, Maximize2, ShieldCheck, Building2 } from 'lucide-react';
import './Hackathons.css';

export const Hackathons: React.FC = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonAward | null>(null);

  const mainHackathon = HACKATHONS_DATA[0];

  const handleOpenModal = (hackathon: HackathonAward) => {
    setSelectedHackathon(hackathon);
  };

  const handleCloseModal = () => {
    setSelectedHackathon(null);
  };

  return (
    <section id="hackathons" className="hackathons-section section-wrapper">
      <div className="container">

        {/* Editorial Section Header */}
        <div className="hackathons-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>DÉFIS & ÉMULATION TECHNOLOGIQUE</span>
          </div>

          <h2 className="hackathons-title">
            Hackathons & <span className="text-gradient">distinctions</span>.
          </h2>

          <p className="hackathons-lead text-lead">
            Expériences d'innovation intensive confrontant rigueur technique, sens du produit et résolution méthodique de problématiques concrètes en temps contraint.
          </p>
        </div>

        {/* Editorial Showcase Card */}
        {mainHackathon && (
          <div className="hackathon-spotlight glass-card">
            <div className="hackathon-spotlight-inner">
              
              {/* Left Column: Editorial Information */}
              <div className="hackathon-info-col">
                <div className="hackathon-badge-row">
                  <span className="hackathon-rank-pill">
                    <span className="rank-dot" aria-hidden="true" />
                    <strong>{mainHackathon.rankBadge}</strong>
                  </span>

                  <span className="hackathon-official-pill">
                    <ShieldCheck size={14} aria-hidden="true" />
                    <span>Attestation officielle</span>
                  </span>
                </div>

                <h3 className="hackathon-event-title">
                  {mainHackathon.event}
                </h3>

                <div className="hackathon-meta-strip">
                  <span className="meta-strip-item">
                    <MapPin size={15} aria-hidden="true" />
                    <span>{mainHackathon.location}, Sénégal</span>
                  </span>
                  <span className="meta-strip-separator" aria-hidden="true">·</span>
                  <span className="meta-strip-item">
                    <Calendar size={15} aria-hidden="true" />
                    <span>Édition {mainHackathon.year}</span>
                  </span>
                </div>

                <p className="hackathon-description">
                  {mainHackathon.description}
                </p>

                {/* Organizers List */}
                {mainHackathon.organizers && (
                  <div className="hackathon-organizers-block">
                    <div className="organizers-title-group">
                      <Building2 size={15} className="organizers-icon" aria-hidden="true" />
                      <span className="organizers-label">Cadre institutionnel & Partenariat :</span>
                    </div>
                    <ul className="organizers-list">
                      {mainHackathon.organizers.map((org, index) => (
                        <li key={index} className="organizer-chip">
                          {org}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Verification Notice */}
                <div className="hackathon-signatories-note">
                  <Award size={15} className="signatories-icon" aria-hidden="true" />
                  <span>
                    Attestation officielle co-signée par la Direction d'Orange Digital Center (Sonatel) et le Secrétariat Exécutif du CEZAT.
                  </span>
                </div>

                {/* Interactive Action */}
                <div className="hackathon-action-area">
                  <button
                    type="button"
                    className="hackathon-view-btn"
                    onClick={() => handleOpenModal(mainHackathon)}
                    aria-label={`Consulter l'attestation officielle du ${mainHackathon.event}`}
                  >
                    <Maximize2 size={16} aria-hidden="true" />
                    <span>Consulter l'attestation en plein écran</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Attestation Document */}
              <div className="hackathon-visual-col">
                <div 
                  className="hackathon-document-frame"
                  onClick={() => handleOpenModal(mainHackathon)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Agrandir l'attestation du ${mainHackathon.event}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenModal(mainHackathon);
                    }
                  }}
                >
                  <img
                    src={mainHackathon.image}
                    alt={`Attestation officielle de participation et distinction au Hackathon CEZAT 2026 décernée à Codé Samb (2e position)`}
                    className="hackathon-document-img"
                    loading="lazy"
                  />
                  <div className="hackathon-preview-overlay">
                    <span className="hackathon-overlay-prompt">
                      <Maximize2 size={18} aria-hidden="true" />
                      <span>Agrandir le justificatif</span>
                    </span>
                  </div>
                </div>
                <p className="hackathon-visual-caption">
                  Justificatif authentique certifié par le CEZAT et Orange Digital Center
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Lightbox / Modal */}
        {selectedHackathon && (
          <CertificateModal
            isOpen={selectedHackathon !== null}
            onClose={handleCloseModal}
            title={selectedHackathon.event}
            subtitle={`${selectedHackathon.location} · ${selectedHackathon.year} · Résultat : ${selectedHackathon.result}`}
            imageSrc={selectedHackathon.image}
            badge={selectedHackathon.rankBadge}
            date={selectedHackathon.year}
          />
        )}

      </div>
    </section>
  );
};
