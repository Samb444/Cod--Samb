import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import './CertificateModal.css';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc: string;
  badge?: string;
  date?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  badge,
  date,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (!isOpen) return;

    // Save active element to restore later
    const previousActiveElement = document.activeElement as HTMLElement | null;

    // Focus close button on open
    closeButtonRef.current?.focus();

    // Prevent background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      // Trap focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cert-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="cert-modal-dialog"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="cert-modal-header">
          <div className="cert-modal-meta">
            <div className="cert-modal-tagline">
              <ShieldCheck size={16} className="cert-modal-shield" aria-hidden="true" />
              <span>Document officiel vérifié</span>
              {badge && <span className="cert-modal-badge">{badge}</span>}
              {date && <span className="cert-modal-date">{date}</span>}
            </div>
            <h3 id="cert-modal-title" className="cert-modal-title">
              {title}
            </h3>
            {subtitle && <p className="cert-modal-subtitle">{subtitle}</p>}
          </div>

          <div className="cert-modal-actions">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-modal-external-btn"
              title="Ouvrir le justificatif dans un nouvel onglet"
              aria-label="Ouvrir le justificatif original dans un nouvel onglet"
            >
              <ExternalLink size={17} aria-hidden="true" />
              <span className="btn-label-desktop">Plein écran</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              className="cert-modal-close-btn"
              onClick={onClose}
              aria-label="Fermer la boîte de dialogue du certificat"
              title="Fermer (Échap)"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Document Display Container */}
        <div className="cert-modal-body">
          <div className="cert-modal-image-wrapper">
            <img
              src={imageSrc}
              alt={`Document officiel : ${title}`}
              className="cert-modal-image"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
