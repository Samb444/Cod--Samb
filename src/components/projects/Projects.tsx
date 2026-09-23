import React, { useState, useMemo } from 'react';
import { 
  PROJECTS_DATA, 
  PROJECT_FILTERS 
} from '../../data/projectsData';
import type { ProjectFilter } from '../../data/projectsData';
import type { Project } from '../../types';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { FolderGit2, ShieldCheck, Filter } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter['id']>('all');

  // Compute count for each category
  const counts = useMemo(() => {
    return {
      all: PROJECTS_DATA.length,
      académique: PROJECTS_DATA.filter(p => p.category === 'académique').length,
      personnel: PROJECTS_DATA.filter(p => p.category === 'personnel').length,
      client: PROJECTS_DATA.filter(p => p.category === 'client').length,
    };
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  // Separate featured project when showing "all" or "personnel"
  const featuredProject = useMemo(() => {
    if (activeFilter === 'all' || activeFilter === 'personnel') {
      return filteredProjects.find(p => p.featured);
    }
    return undefined;
  }, [filteredProjects, activeFilter]);

  // Regular grid projects (excluding the featured one if it's currently rendered in spotlight)
  const gridProjects = useMemo(() => {
    if (featuredProject) {
      return filteredProjects.filter(p => p.id !== featuredProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, featuredProject]);

  return (
    <section id="projets" className="projects-section section-wrapper">
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="projects-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>RÉALISATIONS & PROJETS</span>
          </div>

          <h2 className="projects-title">
            Des idées transformées en <span className="text-gradient">expériences numériques</span>.
          </h2>

          <p className="projects-lead text-lead">
            Une sélection de projets académiques, personnels et clients qui illustrent mon apprentissage, ma pratique du développement web et mon évolution vers l'ingénierie logicielle.
          </p>

          {/* Factual Notice Banner */}
          <div className="projects-clarification-banner">
            <ShieldCheck size={16} className="clarification-icon" aria-hidden="true" />
            <span>
              <strong>Transparence & Rigueur :</strong> Les projets en développement sont explicitement signalés, et seules les technologies factuellement utilisées ou intégrées sont mentionnées.
            </span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-bar" role="toolbar" aria-label="Filtrer les projets par catégorie">
          <div className="filter-label-group">
            <Filter size={15} className="filter-icon" aria-hidden="true" />
            <span className="filter-title">Catégories :</span>
          </div>

          <div className="filter-tabs-list" role="tablist">
            {PROJECT_FILTERS.map((tab) => {
              const count = counts[tab.id];
              const isActive = activeFilter === tab.id;
              
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count-badge" aria-label={`${count} projets`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Showcase Layout */}
        <div className="projects-content-flow">
          {/* Featured Spotlight (MoneyLink) when relevant */}
          {featuredProject && (
            <div className="featured-spotlight-wrapper">
              <FeaturedProject project={featuredProject} />
            </div>
          )}

          {/* Grid Layout for other / filtered projects */}
          {gridProjects.length > 0 ? (
            <div className="projects-grid">
              {gridProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="no-projects-fallback glass-card">
              <FolderGit2 size={32} className="fallback-icon" />
              <p>Aucun projet ne correspond à ce filtre pour le moment.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
