import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, CONTACT_CHANNELS, SOCIAL_NETWORKS } from '../../data/contactData';
import './Contact.css';

// SVG Icons tailored for brand fidelity and African Digital Premium theme
const GithubBrandIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const TiktokBrandIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.209 1.641 2.908 2.908 0 012.313-4.545c.348 0 .684.062.997.175V9.435a6.37 6.37 0 00-.997-.08 6.35 6.35 0 00-6.352 6.352 6.353 6.353 0 006.352 6.352 6.31 6.31 0 005.424-3.134V9.824a8.21 8.21 0 004.687 1.458V7.837a4.847 4.847 0 01-.001-1.151z" />
  </svg>
);

const InstagramBrandIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappBrandIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.234-.244-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.125-.276-.2-.577-.35zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.98.58 3.82 1.58 5.37L2 22l4.83-1.58a9.92 9.92 0 005.21 1.46c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.08c-1.61 0-3.1-.47-4.36-1.29l-.31-.2-3.23 1.06 1.07-3.15-.2-.33a8.1 8.1 0 01-1.24-4.21c0-4.51 3.67-8.18 8.18-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.2-8.18 8.2z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2400);
    }).catch(() => {
      // Fallback if clipboard API is unavailable
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2400);
    });
  };

  const getChannelIcon = (id: string) => {
    switch (id) {
      case 'email':
        return <Mail size={22} aria-hidden="true" />;
      case 'whatsapp':
        return <WhatsappBrandIcon size={22} className="whatsapp-accent-icon" />;
      case 'phone':
        return <Phone size={22} aria-hidden="true" />;
      default:
        return <MessageSquare size={22} aria-hidden="true" />;
    }
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'github':
        return <GithubBrandIcon size={20} />;
      case 'tiktok':
        return <TiktokBrandIcon size={20} />;
      case 'instagram':
        return <InstagramBrandIcon size={20} />;
      default:
        return <ArrowUpRight size={20} />;
    }
  };

  return (
    <section id="contact" className="contact-section section-wrapper" aria-labelledby="contact-title">
      <div className="container">
        
        {/* Section Header with Strict Editorial Positioning */}
        <div className="contact-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>CONTACT · DISPONIBILITÉ & ÉCHANGES</span>
          </div>

          <h2 id="contact-title" className="contact-title">
            Construisons quelque chose <span className="text-gradient">d’utile</span>.
          </h2>

          <div className="contact-positioning-tag">
            <span>{CONTACT_INFO.headline}</span>
          </div>

          <p className="contact-lead text-lead">
            Vous avez un projet d’application web, une idée de solution numérique à concrétiser, 
            ou une opportunité d’apprentissage ou de collaboration ? Échangeons directement à travers 
            des canaux simples et transparents.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Direct Contact Channels & Networks Stage */}
        <div className="contact-layout-grid">
          
          {/* Column 1: Direct Contact Conversion Cards (No fake forms) */}
          <div className="contact-direct-column">
            
            {/* Status & Availability Banner */}
            <div className="availability-card">
              <div className="availability-status">
                <span className="availability-indicator" aria-hidden="true" />
                <span className="availability-text">{CONTACT_INFO.availabilityStatus}</span>
              </div>
              <div className="availability-meta">
                <span className="meta-badge">
                  <MapPin size={13} aria-hidden="true" />
                  <span>Dakar, Sénégal</span>
                </span>
                <span className="meta-badge">
                  <Clock size={13} aria-hidden="true" />
                  <span>Fuseau GMT+0</span>
                </span>
              </div>
            </div>

            {/* Direct Cards List */}
            <div className="contact-cards-stack">
              {CONTACT_CHANNELS.map((channel) => {
                const isCopied = copiedKey === channel.id;

                return (
                  <article 
                    key={channel.id} 
                    className={`contact-card ${channel.highlight ? 'card-highlighted' : ''}`}
                  >
                    <div className="contact-card-header">
                      <div className="contact-card-icon-wrap" aria-hidden="true">
                        {getChannelIcon(channel.id)}
                      </div>
                      <div className="contact-card-meta">
                        <span className="contact-channel-label">{channel.label}</span>
                        <span className="contact-channel-value">{channel.value}</span>
                      </div>
                    </div>

                    <p className="contact-channel-desc">{channel.description}</p>

                    <div className="contact-card-actions">
                      <a
                        href={channel.actionUrl}
                        target={channel.isExternal ? '_blank' : undefined}
                        rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                        className={`btn ${channel.highlight ? 'btn-primary' : 'btn-secondary'} contact-action-btn`}
                        id={`cta-contact-${channel.id}`}
                        aria-label={`${channel.actionLabel} (${channel.value})`}
                      >
                        <span>{channel.actionLabel}</span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>

                      {/* Quick Copy Utility Button */}
                      <button
                        type="button"
                        onClick={() => handleCopy(channel.id, channel.value)}
                        className={`copy-btn ${isCopied ? 'copied' : ''}`}
                        title={`Copier ${channel.value}`}
                        aria-label={`Copier ${channel.value}`}
                      >
                        {isCopied ? (
                          <>
                            <Check size={14} className="copy-icon-success" aria-hidden="true" />
                            <span>Copié</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} aria-hidden="true" />
                            <span>Copier</span>
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

          {/* Column 2: Social Networks & Public Activity Hub */}
          <div className="contact-networks-column">
            
            {/* Editorial Social Sub-block: Retrouver mon travail */}
            <div className="networks-block">
              <div className="networks-block-header">
                <div className="networks-eyebrow">
                  <Sparkles size={14} className="text-accent" aria-hidden="true" />
                  <span>PRÉSENCE NUMÉRIQUE</span>
                </div>
                <h3 className="networks-block-title">Retrouver mon travail</h3>
                <p className="networks-block-subtitle">
                  Explorez mes dépôts de code en accès libre, suivez mon apprentissage continu 
                  et retrouvez mes actualités sur le web.
                </p>
              </div>

              {/* Social Cards Stack */}
              <div className="networks-grid">
                {SOCIAL_NETWORKS.map((network) => (
                  <a
                    key={network.id}
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-card"
                    id={`cta-social-${network.id}`}
                    aria-label={`Visiter le profil ${network.name} de Codé Samb (${network.handle})`}
                  >
                    <div className="network-card-top">
                      <div className="network-icon-box" aria-hidden="true">
                        {getSocialIcon(network.id)}
                      </div>
                      <span className="network-badge">{network.badge}</span>
                    </div>

                    <div className="network-info">
                      <div className="network-name-row">
                        <span className="network-name">{network.name}</span>
                        <span className="network-handle">{network.handle}</span>
                      </div>
                      <p className="network-desc">{network.description}</p>
                    </div>

                    <div className="network-card-footer">
                      <span className="network-link-text">Consulter le profil</span>
                      <ArrowUpRight size={15} className="network-arrow" aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Factual Engagement Note / Honest Principles */}
            <div className="contact-principles-card">
              <div className="principles-icon-row">
                <ShieldCheck size={18} className="text-accent" aria-hidden="true" />
                <span className="principles-title">Démarche professionnelle & Réactivité</span>
              </div>
              <p className="principles-text">
                En tant qu'étudiant motivé en informatique au Groupe ISI, chaque sollicitation 
                est traitée avec rigueur et bienveillance. Je réponds généralement sous 24 à 48 heures 
                par email ou WhatsApp.
              </p>
              <div className="principles-nav-actions">
                <a href="#projets" className="btn btn-tertiary btn-sm">
                  <span>Voir mes projets</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
                <a 
                  href="https://github.com/Samb444" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-tertiary btn-sm"
                >
                  <GithubBrandIcon size={14} />
                  <span>GitHub Samb444</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
