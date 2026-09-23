import React from 'react';
import type { Certification } from '../../types';
import { Award, Calendar, Maximize2, ShieldCheck } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
  onViewDocument: (cert: Certification) => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  onViewDocument,
}) => {
  return (
    <article className="cert-card glass-card">
      {/* Certificate Visual Preview Frame */}
      <div 
        className="cert-card-preview"
        onClick={() => onViewDocument(certification)}
        role="button"
        tabIndex={0}
        aria-label={`Agrandir le certificat ${certification.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onViewDocument(certification);
          }
        }}
      >
        <img
          src={certification.image}
          alt={`Attestation officielle de réussite en ${certification.title} délivrée à Codé Samb par le programme FORCE-N`}
          className="cert-card-image"
          loading="lazy"
        />
        <div className="cert-preview-overlay">
          <span className="cert-preview-action">
            <Maximize2 size={18} aria-hidden="true" />
            <span>Consulter le document</span>
          </span>
        </div>

        <div className="cert-card-badge-layer">
          <span className="cert-verified-pill">
            <ShieldCheck size={13} aria-hidden="true" />
            <span>FORCE-N</span>
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="cert-card-content">
        <div className="cert-card-meta">
          <span className="cert-card-period">
            <Calendar size={13} aria-hidden="true" />
            <span>{certification.period}</span>
          </span>
          <span className="cert-card-issuer">
            <Award size={13} aria-hidden="true" />
            <span>{certification.issuer}</span>
          </span>
        </div>

        <h3 className="cert-card-title">
          {certification.title}
        </h3>

        {certification.partner && (
          <p className="cert-card-partner">
            {certification.partner}
          </p>
        )}

        {certification.description && (
          <p className="cert-card-description">
            {certification.description}
          </p>
        )}

        <div className="cert-card-footer">
          <button
            type="button"
            className="cert-view-btn"
            onClick={() => onViewDocument(certification)}
            aria-label={`Voir l'attestation originale pour ${certification.title}`}
          >
            <Maximize2 size={15} aria-hidden="true" />
            <span>Voir l'attestation</span>
          </button>
        </div>
      </div>
    </article>
  );
};
