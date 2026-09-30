import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../../data/certificationsData';
import type { Certification } from '../../types';
import { CertificationCard } from './CertificationCard';
import { CertificateModal } from '../common/CertificateModal';
import { ShieldCheck } from 'lucide-react';
import './Certifications.css';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleOpenModal = (cert: Certification) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="certifications-section section-wrapper">
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="certifications-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>QUALIFICATIONS & COMPÉTENCES VÉRIFIÉES</span>
          </div>

          <h2 className="certifications-title">
            Certifications & <span className="text-gradient">attestations de réussite</span>.
          </h2>

          <p className="certifications-lead text-lead">
            Des attestations officielles obtenues dans le cadre de programmes rigoureux, validant l'acquisition de compétences en informatique fondamentale, commerce électronique, marketing numérique et gestion des réseaux sociaux.
          </p>

          {/* Factual Notice Banner */}
          <div className="certifications-notice-banner">
            <ShieldCheck size={16} className="notice-icon" aria-hidden="true" />
            <span>
              <strong>Authenticité garantie :</strong> Justificatifs originaux délivrés par les organismes officiels partenaires (FORCE-N / Université numérique Cheikh Hamidou Kane, Orange Digital Center / Sonatel). Documents vérifiables et authentiques.
            </span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {CERTIFICATIONS_DATA.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onViewDocument={handleOpenModal}
            />
          ))}
        </div>

        {/* Certificate Modal / Lightbox */}
        <CertificateModal
          isOpen={selectedCert !== null}
          onClose={handleCloseModal}
          title={selectedCert ? selectedCert.title : ''}
          subtitle={selectedCert ? (selectedCert.partner ? `${selectedCert.issuer} · ${selectedCert.partner}` : selectedCert.issuer) : undefined}
          imageSrc={selectedCert ? selectedCert.image : ''}
          badge={selectedCert?.type || "Attestation officielle"}
          date={selectedCert?.period}
        />

      </div>
    </section>
  );
};
