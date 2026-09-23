import React from 'react';
import type { Project } from '../../types';
import { ProjectVisual } from './ProjectVisual';
import { CheckCircle2, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <article className="featured-project-card glass-card">
      {/* Featured Accent Pill */}
      <div className="featured-flag">
        <Sparkles size={13} className="text-accent" />
        <span>PROJET MIS EN AVANT · FINTECH EXPÉRIMENTALE</span>
      </div>

      <div className="featured-project-content">
        {/* Visual Component (Left or Top depending on viewport) */}
        <div className="featured-visual-container">
          <ProjectVisual project={project} isFeatured={true} />
        </div>

        {/* Text & Editorial Details (Right) */}
        <div className="featured-details">
          {/* Header Metadata */}
          <div className="project-meta-row">
            <span className="project-category-tag">
              Projet personnel
            </span>
            <div className="status-badge-wrapper">
              <span className="badge badge-done" aria-label="Statut : terminé">
                <CheckCircle2 size={13} aria-hidden="true" />
                <span>TERMINÉ</span>
              </span>
            </div>
          </div>

          <h3 className="featured-title">{project.title}</h3>
          
          <p className="featured-tagline">{project.tagline}</p>
          
          <p className="featured-description">{project.description}</p>

          {/* Contextual Context Pill */}
          {project.context && (
            <div className="project-context-pill">
              <span className="context-label">Cadre d'application :</span>
              <span className="context-value">{project.context}</span>
            </div>
          )}

          {/* Factual Known Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div className="featured-features-block">
              <h4 className="features-headline">Fonctionnalités & mécanismes explorés :</h4>
              <ul className="features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 size={15} className="feature-check text-accent" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ethical / Rigor Factual Notice */}
          {project.notes && (
            <div className="project-factual-notice">
              <ShieldCheck size={15} className="notice-icon" aria-hidden="true" />
              <p className="notice-text">{project.notes}</p>
            </div>
          )}

          {/* CTA Actions */}
          <div className="featured-actions">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary featured-btn"
                aria-label={`Voir la démo en ligne de ${project.title} (nouvel onglet)`}
              >
                <span>Voir la démo</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : null}
            <span className="featured-availability-note">
              Prototype fonctionnel en ligne
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
