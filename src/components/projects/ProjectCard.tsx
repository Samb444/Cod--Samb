import React from 'react';
import type { Project } from '../../types';
import { ProjectVisual } from './ProjectVisual';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Info, 
  ShieldAlert,
  MapPin
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isWip = project.status === 'en cours';

  const getCategoryLabel = () => {
    switch (project.category) {
      case 'académique':
        return 'Projet académique';
      case 'personnel':
        return 'Projet personnel';
      case 'client':
        return 'Projet client';
      default:
        return 'Projet';
    }
  };

  const getCtaLabel = () => {
    if (project.id === 'afritalent') return 'Voir la démo';
    return 'Voir le projet';
  };

  return (
    <article className={`project-card glass-card ${isWip ? 'card-wip' : ''} project-item-${project.id}`}>
      {/* Top Visual Area */}
      <div className="card-visual-area">
        <ProjectVisual project={project} />
        
        {/* Floating Category Pill */}
        <span className="card-floating-category">
          {getCategoryLabel()}
        </span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Status row */}
        <div className="card-status-row">
          {isWip ? (
            <span className="badge badge-dev" aria-label="Statut : En cours de développement">
              <Clock size={13} aria-hidden="true" />
              <span>EN COURS</span>
            </span>
          ) : (
            <span className="badge badge-done" aria-label="Statut : Terminé">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>TERMINÉ</span>
            </span>
          )}

          {project.context && (
            <span className="card-context-indicator">
              <MapPin size={12} aria-hidden="true" />
              <span>{project.context}</span>
            </span>
          )}
        </div>

        {/* Project Title & Signature */}
        <h3 className="card-title">{project.title}</h3>
        
        {project.tagline && (
          <p className="card-tagline">{project.tagline}</p>
        )}

        <p className="card-description">{project.description}</p>

        {/* Known Technical Notes (e.g. AfriConnect vanilla note, Sama Santé development note) */}
        {project.technicalNote && (
          <div className="card-tech-note">
            <Info size={14} className="tech-note-icon text-accent" aria-hidden="true" />
            <span>{project.technicalNote}</span>
          </div>
        )}

        {project.notes && isWip && (
          <div className="card-wip-notice">
            <ShieldAlert size={14} className="wip-notice-icon" aria-hidden="true" />
            <span>{project.notes}</span>
          </div>
        )}

        {/* Known Technologies List (only rendered if known factually) */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="card-tech-stack">
            <span className="tech-stack-label">
              <Layers size={13} aria-hidden="true" />
              <span>Technologies :</span>
            </span>
            <div className="tech-tags-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Card Action Footer */}
        <div className="card-actions-footer">
          {isWip ? (
            <div className="btn btn-disabled-wip" aria-disabled="true" title="Ce projet est en cours de développement">
              <Clock size={15} aria-hidden="true" />
              <span>Projet en développement</span>
            </div>
          ) : project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary card-cta-btn"
              aria-label={`${getCtaLabel()} ${project.title} (nouvel onglet)`}
            >
              <span>{getCtaLabel()}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
