export interface CVMetadata {
  fileName: string;
  filePath: string;
  fileSize: string;
  format: string;
  language: string;
  lastUpdated: string;
  downloadName: string;
}

export interface CVPillar {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  tag: string;
}

export const CV_METADATA: CVMetadata = {
  fileName: 'CV-CODE-SAMB.pdf',
  filePath: '/documents/CV-CODE-SAMB.pdf',
  fileSize: '~201 Ko',
  format: 'Document PDF (Vectoriel)',
  language: 'Français',
  lastUpdated: 'Année 2025–2026',
  downloadName: 'CV-CODE-SAMB.pdf',
};

export const CV_PROFILE_SUMMARY = {
  fullName: 'Codé Samb',
  headline: 'Étudiant en informatique · Développeur web · Créateur de solutions numériques',
  location: 'Dakar, Sénégal',
  careerObjective: 'Évoluer progressivement vers l’ingénierie logicielle, le développement d’applications web et la cybersécurité.',
  academicBase: 'Licence 1 Informatique appliquée à la gestion (Groupe ISI) & Cursus Droit public (UCAD)',
};

export const CV_PILLARS: CVPillar[] = [
  {
    id: 'formation',
    title: 'Formation universitaire hybride',
    subtitle: 'Groupe ISI & UCAD Dakar',
    details: 'Licence 1 Informatique de gestion en cours (2025–2026) précédée de 3 années validées en Droit public (2022–2025). Double culture technique et analytique.',
    tag: 'Académique'
  },
  {
    id: 'competences',
    title: 'Compétences web fondamentales',
    subtitle: 'Développement moderne & bases logicielles',
    details: 'HTML5, CSS3, JavaScript, React, Tailwind CSS, PHP, MySQL, Git & GitHub. Méthodologie structurée et bonnes pratiques de code.',
    tag: 'Technique'
  },
  {
    id: 'certifications',
    title: 'Certifications officielles vérifiées',
    subtitle: 'Programme FORCE-N · UN-CHK · Mastercard Foundation',
    details: 'Attestations officielles avec QR code en Internet & Informatique, Marketing digital et Commerce électronique.',
    tag: 'Certifié'
  },
  {
    id: 'projets',
    title: 'Réalisations & Engagement pratique',
    subtitle: 'Projets d’équipe & Hackathons',
    details: 'Conception de plateformes concrètes (AfriTalent, Sama Santé) et distinction au Hackathon CEZAT Tivaouane 2026 (2e place sur le podium).',
    tag: 'Pratique'
  }
];
