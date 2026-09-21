import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Briefcase, 
  Check, 
  Cpu, 
  GitBranch, 
  Laptop, 
  Sparkles,
  FileSpreadsheet,
  FileText,
  Presentation,
  Calculator,
  ShieldCheck
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/skillsData';
import './Skills.css';

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
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

export const Skills: React.FC = () => {
  // Helper to get discreet Lucide icons per technology
  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'html':
      case 'css':
      case 'javascript':
      case 'typescript':
      case 'react':
      case 'bootstrap':
        return <Code2 size={16} className="tech-chip-icon" />;
      case 'node.js':
      case 'express':
        return <Server size={16} className="tech-chip-icon" />;
      case 'mysql':
      case 'postgresql':
        return <Database size={16} className="tech-chip-icon" />;
      case 'prisma':
        return <Layers size={16} className="tech-chip-icon" />;
      case 'python':
        return <Terminal size={16} className="tech-chip-icon" />;
      case 'git':
        return <GitBranch size={16} className="tech-chip-icon" />;
      case 'github':
        return <GithubIcon size={16} className="tech-chip-icon" />;
      case 'visual studio code':
        return <Laptop size={16} className="tech-chip-icon" />;
      case 'antigravity':
        return <Sparkles size={16} className="tech-chip-icon" />;
      case 'microsoft word':
        return <FileText size={16} className="tech-chip-icon" />;
      case 'microsoft excel':
        return <FileSpreadsheet size={16} className="tech-chip-icon" />;
      case 'microsoft powerpoint':
        return <Presentation size={16} className="tech-chip-icon" />;
      case 'notions de gestion & comptabilité':
        return <Calculator size={16} className="tech-chip-icon" />;
      default:
        return <Check size={16} className="tech-chip-icon" />;
    }
  };

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'web-frontend':
        return <Code2 size={20} />;
      case 'backend-api':
        return <Server size={20} />;
      case 'databases':
        return <Database size={20} />;
      case 'prog-tools':
        return <Cpu size={20} />;
      case 'management-office':
        return <Briefcase size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section id="competences" className="skills-section section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="skills-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>COMPÉTENCES & OUTILS</span>
          </div>

          <h2 className="skills-title">
            Technologies et outils que j'utilise dans mes <span className="text-gradient">projets</span>
          </h2>

          <p className="skills-lead text-lead">
            Une stack technique acquise à travers des projets académiques, personnels et concrets, sans artifices ni pourcentages arbitraires.
          </p>

          {/* Ethical & Factual Notice */}
          <div className="skills-clarification-banner">
            <ShieldCheck size={16} className="clarification-icon" />
            <span>
              <strong>Note de clarté :</strong> Les technologies présentées correspondent aux outils étudiés en formation, utilisés ou intégrés dans mes projets.
            </span>
          </div>
        </div>

        {/* Structured Asymmetric Editorial Layout */}
        <div className="skills-grid">
          {SKILLS_DATA.map((group) => (
            <div 
              key={group.id} 
              className={`skill-group-card group-${group.id}`}
            >
              {/* Card Header */}
              <div className="skill-card-top">
                <div className="group-icon-badge">
                  {getGroupIcon(group.id)}
                </div>
                <div className="group-title-wrap">
                  <span className="group-category-badge">{group.badge}</span>
                  <h3 className="group-title">{group.title}</h3>
                  <span className="group-subtitle">{group.subtitle}</span>
                </div>
              </div>

              {/* Group Description */}
              <p className="group-desc">
                {group.description}
              </p>

              {/* Technologies / Chips List */}
              <div className="tech-chips-list">
                {group.items.map((item, idx) => (
                  <div key={idx} className="tech-chip">
                    <div className="tech-chip-header">
                      {getTechIcon(item.name)}
                      <span className="tech-chip-name">{item.name}</span>
                    </div>
                    {item.role && (
                      <span className="tech-chip-role">{item.role}</span>
                    )}
                    {item.tag && (
                      <span className="tech-chip-tag">{item.tag}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Distinct Note for ORM vs Database or context */}
              {group.note && (
                <div className="group-specific-note">
                  <Layers size={13} />
                  <span>{group.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Technical Philosophy Summary */}
        <div className="skills-footer-note">
          <div className="footer-note-content">
            <span className="footer-note-title">Approche de travail</span>
            <p className="footer-note-text">
              Je privilégie un code lisible, des composants réutilisables et une organisation claire du projet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
