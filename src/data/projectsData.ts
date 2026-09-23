import type { Project } from '../types';

export interface ProjectFilter {
  id: 'all' | 'académique' | 'personnel' | 'client';
  label: string;
}

export const PROJECT_FILTERS: ProjectFilter[] = [
  { id: 'all', label: 'Tous' },
  { id: 'académique', label: 'Académiques' },
  { id: 'personnel', label: 'Personnels' },
  { id: 'client', label: 'Client' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'moneylink',
    title: 'MoneyLink',
    category: 'personnel',
    status: 'terminé',
    tagline: 'Projet fintech expérimental · Commerce & transactions',
    description: 'Solution numérique orientée commerce et transactions conçue pour le contexte Sénégal / UEMOA.',
    notes: 'Projet numérique personnel / expérimental explorant les mécanismes de sécurisation des transactions marchandes sans prétention d\'agrément bancaire.',
    context: 'Contexte Sénégal / UEMOA · Environnement XOF (FCFA)',
    featured: true,
    demoUrl: 'https://moneylink-site.onrender.com',
    features: [
      'Système d\'escrow / mise en séquestre des fonds',
      'Code OTP à 6 chiffres pour la validation de livraison',
      'Logique de tiers de confiance entre acheteur et vendeur',
      'Pass Premium pour les marchands et utilisateurs fréquents',
      'Intégration contextuelle des écosystèmes Wave et Orange Money'
    ],
    visualColors: {
      primary: '#22C55E',
      secondary: '#38BDF8',
      bg: '#0B131E'
    }
  },
  {
    id: 'sama-sante',
    title: 'Sama Santé',
    category: 'personnel',
    status: 'en cours',
    tagline: 'La santé, simplement connectée.',
    description: 'Projet e-santé SaaS destiné à faciliter la gestion des rendez-vous, des établissements de santé et des dossiers patients.',
    notes: 'Projet personnel en cours de développement actif (non déployé en production commerciale ni certifié médicalement).',
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Express',
      'Prisma',
      'PostgreSQL'
    ],
    visualColors: {
      primary: '#0EA5E9',
      secondary: '#10B981',
      bg: '#081622'
    }
  },
  {
    id: 'africonnect-summit',
    title: 'AfriConnect Summit 2026',
    category: 'académique',
    status: 'terminé',
    tagline: 'Conférence panafricaine · Tech & Innovation',
    description: 'Site web dédié à une conférence panafricaine autour de la technologie, de l\'innovation et du numérique.',
    technicalNote: 'Développé en Vanilla sans framework CSS (Bootstrap n\'a pas été utilisé). Projet versionné sur GitHub (8 commits).',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript Vanilla',
      'GitHub Pages'
    ],
    demoUrl: 'https://samb444.github.io/SAMB-CODE-AfriConnectSummit/',
    visualColors: {
      primary: '#22C55E',
      secondary: '#F8FAFC',
      bg: '#0F172A'
    }
  },
  {
    id: 'afritalent',
    title: 'AfriTalent',
    category: 'académique',
    status: 'terminé',
    tagline: 'Mise en relation de compétences numériques',
    description: 'Plateforme mettant en relation des freelances africains avec des entreprises à la recherche de compétences numériques.',
    demoUrl: 'https://samb444.github.io/samb-cod-AfriTalent',
    visualColors: {
      primary: '#38BDF8',
      secondary: '#818CF8',
      bg: '#0C1524'
    }
  },
  {
    id: 'dahira-madjmahoun-noreyni',
    title: 'Dahira Madjmahoun Noreyni',
    category: 'client',
    status: 'terminé',
    tagline: 'Site institutionnel · Touba Malika',
    description: 'Site web conçu pour l\'organisation communautaire Dahira Madjmahoun Noreyni dans le contexte de Touba Malika.',
    context: 'Touba Malika',
    demoUrl: 'https://dahira-madjmahoun-noreyni.netlify.app',
    visualColors: {
      primary: '#10B981',
      secondary: '#F59E0B',
      bg: '#0A1A17'
    }
  }
];
