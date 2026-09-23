import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  FileCheck, 
  Layers, 
  GraduationCap, 
  Code2, 
  Award, 
  FolderGit2, 
  Calendar,
  HardDrive
} from 'lucide-react';
import { CV_METADATA, CV_PROFILE_SUMMARY, CV_PILLARS } from '../../data/cvData';
import './CV.css';

export const CV: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sheet' | 'reader'>('sheet');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'formation':
        return <GraduationCap size={18} aria-hidden="true" />;
      case 'competences':
        return <Code2 size={18} aria-hidden="true" />;
      case 'certifications':
        return <Award size={18} aria-hidden="true" />;
      case 'projets':
        return <FolderGit2 size={18} aria-hidden="true" />;
      default:
        return <Sparkles size={18} aria-hidden="true" />;
    }
  };

  return (
    <section id="cv" className="cv-section section-wrapper" aria-labelledby="cv-title">
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="cv-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>CURRICULUM VITÆ · PROFIL PROFESSIONNEL</span>
          </div>

          <h2 id="cv-title" className="cv-title">
            Mon parcours, en un <span className="text-gradient">document officiel</span>.
          </h2>

          <p className="cv-lead text-lead">
            Retrouvez la synthèse structurée de mon parcours académique, de mes compétences techniques fondamentales, 
            de mes certifications vérifiées et de mes projets web concrets dans un document officiel prêt à l'emploi.
          </p>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="cv-grid">
          
          {/* Left Column: Context, Pillars, Metadata & Actions */}
          <div className="cv-summary-panel">
            
            {/* Identity & Measured Orientation Card */}
            <div className="cv-identity-card">
              <div className="cv-identity-badge">
                <span className="identity-tag">Profil vérifié</span>
                <span className="identity-year">{CV_METADATA.lastUpdated}</span>
              </div>

              <h3 className="cv-identity-name">{CV_PROFILE_SUMMARY.fullName}</h3>
              <p className="cv-identity-headline">{CV_PROFILE_SUMMARY.headline}</p>

              <div className="cv-objective-box">
                <span className="cv-objective-label">Orientation professionnelle :</span>
                <p className="cv-objective-text">
                  {CV_PROFILE_SUMMARY.careerObjective}
                </p>
              </div>
            </div>

            {/* Document Content Pillars */}
            <div className="cv-pillars-block">
              <h4 className="cv-pillars-title">Ce que contient ce document :</h4>
              <ul className="cv-pillars-list">
                {CV_PILLARS.map((pillar) => (
                  <li key={pillar.id} className="cv-pillar-item">
                    <div className="cv-pillar-icon" aria-hidden="true">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div className="cv-pillar-body">
                      <div className="cv-pillar-header">
                        <span className="cv-pillar-name">{pillar.title}</span>
                        <span className="cv-pillar-tag">{pillar.tag}</span>
                      </div>
                      <p className="cv-pillar-desc">{pillar.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Metadata Bar */}
            <div className="cv-metadata-card">
              <div className="metadata-item">
                <span className="metadata-label">
                  <HardDrive size={13} aria-hidden="true" />
                  <span>Fichier & Poids</span>
                </span>
                <span className="metadata-value">{CV_METADATA.fileName} ({CV_METADATA.fileSize})</span>
              </div>
              
              <div className="metadata-item">
                <span className="metadata-label">
                  <FileCheck size={13} aria-hidden="true" />
                  <span>Format</span>
                </span>
                <span className="metadata-value">{CV_METADATA.format}</span>
              </div>

              <div className="metadata-item">
                <span className="metadata-label">
                  <Calendar size={13} aria-hidden="true" />
                  <span>Validité</span>
                </span>
                <span className="metadata-value">{CV_METADATA.lastUpdated}</span>
              </div>
            </div>

            {/* Clear Primary & Secondary Actions */}
            <div className="cv-actions-group">
              {/* Primary Action: View PDF in new tab */}
              <a
                href={CV_METADATA.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cv-btn-primary"
                id="cta-cv-view"
                title="Consulter le document PDF dans un nouvel onglet"
              >
                <Eye size={18} aria-hidden="true" />
                <span>Voir le CV</span>
              </a>

              {/* Secondary Action: Direct PDF Download */}
              <a
                href={CV_METADATA.filePath}
                download={CV_METADATA.downloadName}
                className="btn btn-secondary cv-btn-secondary"
                id="cta-cv-download"
                title="Télécharger le fichier PDF sur votre appareil"
              >
                <Download size={18} aria-hidden="true" />
                <span>Télécharger le CV</span>
              </a>
            </div>

            {/* In-situ View Mode Switcher */}
            <div className="cv-toggle-wrapper">
              <button
                type="button"
                className="cv-toggle-btn"
                onClick={() => setActiveTab(prev => prev === 'sheet' ? 'reader' : 'sheet')}
                aria-pressed={activeTab === 'reader'}
                id="cta-cv-toggle-reader"
              >
                <Layers size={15} aria-hidden="true" />
                <span>
                  {activeTab === 'sheet' 
                    ? "Afficher le lecteur PDF intégré in-situ" 
                    : "Revenir à la fiche synthétique éditoriale"}
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Preview Stage */}
          <div className="cv-preview-stage">
            <div className="cv-frame-container">
              
              {/* Precision Frame Header */}
              <div className="cv-frame-topbar">
                <div className="cv-frame-doc-info">
                  <span className="cv-dot-indicator" aria-hidden="true" />
                  <FileText size={15} className="cv-doc-icon" aria-hidden="true" />
                  <span className="cv-doc-title">{CV_METADATA.fileName}</span>
                  <span className="cv-doc-verified-badge">
                    <ShieldCheck size={13} aria-hidden="true" />
                    <span>Conforme & Vérifié</span>
                  </span>
                </div>

                <div className="cv-frame-controls">
                  <div className="cv-tab-switcher" role="tablist" aria-label="Mode d'affichage du CV">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'sheet'}
                      className={`cv-tab-btn ${activeTab === 'sheet' ? 'active' : ''}`}
                      onClick={() => setActiveTab('sheet')}
                      id="tab-cv-sheet"
                    >
                      Aperçu éditorial
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activeTab === 'reader'}
                      className={`cv-tab-btn ${activeTab === 'reader' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reader')}
                      id="tab-cv-reader"
                    >
                      Lecteur PDF
                    </button>
                  </div>

                  <a
                    href={CV_METADATA.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-frame-fullscreen-link"
                    title="Ouvrir en plein écran dans un nouvel onglet"
                    aria-label="Ouvrir le document PDF en plein écran"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* View 1: Authentic Editorial Document Sheet */}
              {activeTab === 'sheet' && (
                <div className="cv-sheet-view" role="tabpanel" aria-labelledby="tab-cv-sheet">
                  <div className="cv-sheet-paper">
                    
                    {/* Top Watermark & Serial */}
                    <div className="cv-sheet-watermark" aria-hidden="true">
                      <span>DOCUMENT OFFICIEL · CODÉ SAMB · {CV_METADATA.lastUpdated}</span>
                    </div>

                    {/* Sheet Header */}
                    <div className="cv-sheet-header">
                      <div className="cv-sheet-heading">
                        <h4 className="cv-sheet-name">CODÉ SAMB</h4>
                        <p className="cv-sheet-subname">
                          Étudiant en informatique · Développeur web
                        </p>
                      </div>

                      <div className="cv-sheet-contact-mini">
                        <span>Dakar, Sénégal</span>
                        <span className="sep">·</span>
                        <span>Groupe ISI</span>
                        <span className="sep">·</span>
                        <span className="cv-sheet-status-pill">
                          <CheckCircle2 size={11} aria-hidden="true" />
                          <span>PDF Vérifié</span>
                        </span>
                      </div>
                    </div>

                    <div className="cv-sheet-divider" aria-hidden="true" />

                    {/* Sheet Body 2-Column Blueprint */}
                    <div className="cv-sheet-body">
                      
                      {/* Left Mini Column */}
                      <div className="cv-sheet-col-left">
                        
                        {/* Section: Formation */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">FORMATION</span>
                          
                          <div className="cv-sheet-entry">
                            <span className="entry-year">2025–2026</span>
                            <span className="entry-title">Licence 1 Informatique de gestion</span>
                            <span className="entry-inst">Groupe ISI · En cours</span>
                          </div>

                          <div className="cv-sheet-entry">
                            <span className="entry-year">2022–2025</span>
                            <span className="entry-title">Licence 1 à 3 Droit public</span>
                            <span className="entry-inst">Univ. Cheikh Anta Diop (UCAD)</span>
                          </div>

                          <div className="cv-sheet-entry">
                            <span className="entry-year">2021</span>
                            <span className="entry-title">Baccalauréat L1</span>
                            <span className="entry-inst">Dakar</span>
                          </div>
                        </div>

                        {/* Section: Certifications */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">CERTIFICATS FORCE-N</span>
                          <ul className="cv-sheet-tags-list">
                            <li>Internet et Informatique</li>
                            <li>Commerce digital</li>
                            <li>Marketing digital</li>
                          </ul>
                        </div>

                        {/* Section: Langues */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">LANGUES</span>
                          <div className="cv-sheet-lang-item">
                            <span>Français</span>
                            <span className="lang-level">Courant</span>
                          </div>
                          <div className="cv-sheet-lang-item">
                            <span>Anglais</span>
                            <span className="lang-level">Niveau moyen</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Mini Column */}
                      <div className="cv-sheet-col-right">
                        
                        {/* Section: Profil factuel */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">PROFIL & OBJECTIFS</span>
                          <p className="cv-sheet-text">
                            Étudiant en Licence d'informatique doté de bases solides en développement d'applications web. 
                            Méthodique et motivé pour consolider ses compétences en ingénierie logicielle et conception numérique.
                          </p>
                        </div>

                        {/* Section: Projets & Réalisations */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">RÉALISATIONS & PROJETS</span>
                          
                          <div className="cv-sheet-project-entry">
                            <span className="project-title">Projets d'applications Web</span>
                            <p className="project-desc">
                              Conception, développement et déploiement de solutions concrètes (HTML, CSS, JavaScript, React, Tailwind, PHP, MySQL).
                            </p>
                          </div>

                          <div className="cv-sheet-project-entry">
                            <span className="project-title">AfriTalent & Projets d'équipe</span>
                            <p className="project-desc">
                              Plateforme de mise en relation freelances/entreprises et projets d'innovation numérique.
                            </p>
                          </div>

                          <div className="cv-sheet-project-entry">
                            <span className="project-title">Hackathon CEZAT Tivaouane 2026</span>
                            <p className="project-desc">
                              2e place sur le podium · Développement intensif de solution numérique.
                            </p>
                          </div>
                        </div>

                        {/* Section: Compétences Clés */}
                        <div className="cv-sheet-section">
                          <span className="cv-sheet-sec-title">COMPÉTENCES FONDAMENTALES</span>
                          <div className="cv-sheet-skills-pills">
                            <span className="skill-pill">HTML5 / CSS3</span>
                            <span className="skill-pill">JavaScript</span>
                            <span className="skill-pill">React</span>
                            <span className="skill-pill">Tailwind CSS</span>
                            <span className="skill-pill">PHP / MySQL</span>
                            <span className="skill-pill">Git & GitHub</span>
                            <span className="skill-pill">Bureautique</span>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Prompt / Footer of Sheet */}
                    <div className="cv-sheet-footer">
                      <div className="cv-sheet-footer-left">
                        <ShieldCheck size={14} className="text-accent" aria-hidden="true" />
                        <span>Source officielle : {CV_METADATA.fileName}</span>
                      </div>

                      <button
                        type="button"
                        className="cv-sheet-embed-trigger"
                        onClick={() => setActiveTab('reader')}
                      >
                        <Eye size={14} aria-hidden="true" />
                        <span>Basculer vers le lecteur PDF interactif</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* View 2: Native PDF Embedded Reader */}
              {activeTab === 'reader' && (
                <div className="cv-reader-view" role="tabpanel" aria-labelledby="tab-cv-reader">
                  <div className="cv-reader-frame-wrap">
                    <iframe
                      src={`${CV_METADATA.filePath}#toolbar=1&navpanes=0`}
                      title="Document PDF original du CV de Codé Samb"
                      className="cv-reader-iframe"
                      loading="lazy"
                    />
                  </div>
                  <div className="cv-reader-bottom-bar">
                    <div className="cv-reader-status">
                      <span className="pulse-dot" aria-hidden="true" />
                      <span>Document officiel actif · Affichage PDF natif</span>
                    </div>

                    <div className="cv-reader-quick-actions">
                      <button
                        type="button"
                        className="cv-reader-return-btn"
                        onClick={() => setActiveTab('sheet')}
                      >
                        <span>Aperçu synthétique</span>
                      </button>

                      <a
                        href={CV_METADATA.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-reader-direct-btn"
                      >
                        <ExternalLink size={13} aria-hidden="true" />
                        <span>Ouvrir dans un nouvel onglet</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
