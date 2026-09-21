export interface TimelineItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  category: 'informatique' | 'droit';
  isCurrent: boolean;
  location: string;
  description: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
  subtext: string;
}

export const ABOUT_FACTS = {
  fullName: 'Codé Samb',
  role: 'Étudiant en informatique · Développeur web · Créateur de solutions numériques',
  institution: 'Groupe ISI',
  currentDegree: 'Licence 1 Informatique appliquée à la gestion des entreprises',
  academicYear: '2025–2026',
  location: 'Dakar, Sénégal',
  interestAreas: 'Informatique, développement web, solutions numériques',
  longTermGoal: "Évoluer progressivement vers le développement web et le génie logiciel, en consolidant continuellement mes bases techniques.",
  paragraphs: [
    "Étudiant en informatique au Groupe ISI à Dakar, je développe mes compétences à travers la pratique du code et la réalisation de projets web concrets.",
    "Mon parcours comprend un cursus universitaire initial en droit public à l'UCAD, suivi d'une réorientation vers l'informatique appliquée à la gestion.",
    "Je travaille aujourd'hui sur des projets académiques, personnels et collaboratifs afin de transformer mes apprentissages théoriques en applications utiles.",
    "Mon objectif est de progresser avec régularité en développement web et d'approfondir mes connaissances en conception d'applications."
  ],
  highlights: [
    {
      label: 'Formation en cours',
      value: 'Groupe ISI',
      subtext: 'Licence 1 Informatique de gestion'
    },
    {
      label: 'Parcours initial',
      value: 'Droit public (UCAD)',
      subtext: 'Licence 1 à Licence 3 (2022–2025)'
    },
    {
      label: 'Pratique concrète',
      value: 'Projets Web',
      subtext: 'Applications académiques, personnelles et d\'équipe'
    },
    {
      label: 'Objectif',
      value: 'Développement Web',
      subtext: 'Consolidation technique & génie logiciel'
    }
  ] as AboutHighlight[]
};

export const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    id: 'isi-l1',
    period: '2025–2026',
    degree: 'Licence 1 Informatique appliquée à la gestion des entreprises',
    institution: 'Groupe ISI',
    category: 'informatique',
    isCurrent: true,
    location: 'Dakar, Sénégal',
    description: 'Bases solides en algorithmique, développement web, bases de données relationnelles et principes fondamentaux de gestion.'
  },
  {
    id: 'ucad-l3',
    period: '2024–2025',
    degree: 'Licence 3 Droit public',
    institution: 'UCAD',
    category: 'droit',
    isCurrent: false,
    location: 'Dakar, Sénégal',
    description: 'Troisième année universitaire validée. Développement d\'une forte capacité d\'analyse, d\'esprit critique et de rigueur rédactionnelle.'
  },
  {
    id: 'ucad-l2',
    period: '2023–2024',
    degree: 'Licence 2 Droit public',
    institution: 'UCAD',
    category: 'droit',
    isCurrent: false,
    location: 'Dakar, Sénégal',
    description: 'Deuxième année validée. Structuration logique du raisonnement, traitement d\'informations complexes et synthèse.'
  },
  {
    id: 'ucad-l1',
    period: '2022–2023',
    degree: 'Licence 1 Droit',
    institution: 'UCAD',
    category: 'droit',
    isCurrent: false,
    location: 'Dakar, Sénégal',
    description: 'Première année validée. Acquisition des méthodes de travail universitaires et analyse méthodique de documents.'
  }
];

