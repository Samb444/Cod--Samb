import React from 'react';
import type { Project } from '../../types';
import { ShieldCheck, Activity, Calendar, Users, Landmark, Lock, Sparkles, Terminal } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  isFeatured?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, isFeatured = false }) => {
  // If an actual screenshot/image is present, render it
  if (project.image) {
    return (
      <div className={`project-visual-wrapper ${isFeatured ? 'featured' : ''}`}>
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="project-visual-image"
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render a bespoke, high-end editorial vector plate (no fake screenshot)
  const getProjectIcon = () => {
    switch (project.id) {
      case 'moneylink':
        return <ShieldCheck size={isFeatured ? 40 : 28} className="visual-core-icon text-accent" />;
      case 'sama-sante':
        return <Activity size={isFeatured ? 40 : 28} className="visual-core-icon text-cyan" />;
      case 'africonnect-summit':
        return <Calendar size={isFeatured ? 40 : 28} className="visual-core-icon text-green" />;
      case 'afritalent':
        return <Users size={isFeatured ? 40 : 28} className="visual-core-icon text-blue" />;
      case 'dahira-madjmahoun-noreyni':
        return <Landmark size={isFeatured ? 40 : 28} className="visual-core-icon text-emerald" />;
      default:
        return <Sparkles size={isFeatured ? 40 : 28} className="visual-core-icon text-accent" />;
    }
  };

  const colors = project.visualColors || {
    primary: '#22C55E',
    secondary: '#38BDF8',
    bg: '#0D1117'
  };

  return (
    <div
      className={`project-visual-wrapper ${isFeatured ? 'featured' : ''} project-visual-${project.id}`}
      style={{
        '--proj-primary': colors.primary,
        '--proj-secondary': colors.secondary || colors.primary,
        '--proj-bg': colors.bg || '#0D1117',
      } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* Background Decorative Tech Grid & Ambient Glow */}
      <div className="visual-backdrop">
        <div className="visual-glow" />
        <svg className="visual-grid-svg" width="100%" height="100%">
          <defs>
            <pattern id={`grid-${project.id}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>
      </div>

      {/* Centerpiece Graphic Composition */}
      <div className="visual-centerpiece">
        <div className="visual-emblem-ring">
          <div className="visual-emblem-core">
            {getProjectIcon()}
          </div>
        </div>

        {/* Project Branding Monogram & Contextual Graphic Artifacts */}
        <div className="visual-meta-display">
          <span className="visual-project-title">{project.title}</span>
          <span className="visual-project-badge">{project.tagline}</span>
        </div>

        {/* Context-specific Graphic Badges */}
        {project.id === 'moneylink' && (
          <div className="visual-accent-strip">
            <span className="visual-mini-tag"><Lock size={11} /> Escrow Sécurisé</span>
            <span className="visual-mini-tag">OTP 6 Chiffres</span>
            <span className="visual-mini-tag">XOF / FCFA</span>
          </div>
        )}

        {project.id === 'sama-sante' && (
          <div className="visual-accent-strip">
            <span className="visual-mini-tag highlight"><Activity size={11} /> E-Santé SaaS</span>
            <span className="visual-mini-tag">React 19 & Prisma</span>
            <span className="visual-mini-tag">En développement</span>
          </div>
        )}

        {project.id === 'africonnect-summit' && (
          <div className="visual-accent-strip">
            <span className="visual-mini-tag"><Terminal size={11} /> Vanilla Tech</span>
            <span className="visual-mini-tag">Palette #0F172A / #22C55E</span>
            <span className="visual-mini-tag">8 Commits</span>
          </div>
        )}

        {project.id === 'dahira-madjmahoun-noreyni' && (
          <div className="visual-accent-strip">
            <span className="visual-mini-tag"><Landmark size={11} /> Touba Malika</span>
            <span className="visual-mini-tag">Projet Client</span>
          </div>
        )}
      </div>

      {/* Discretionary Tag: Architectural representation */}
      <div className="visual-disclaimer">
        <span>Présentation graphique</span>
      </div>
    </div>
  );
};
