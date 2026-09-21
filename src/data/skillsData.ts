export interface SkillTech {
  name: string;
  role?: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  items: SkillTech[];
  note?: string;
}

export const SKILLS_DATA: SkillGroup[] = [
  {
    id: 'web-frontend',
    title: 'Développement Web',
    subtitle: 'Technologies Frontend & Standards du Web',
    badge: 'Web & Interface',
    description: 'Conception d\'interfaces web interactives et adaptatives, avec les technologies fondamentales du web moderne.',
    items: [
      { name: 'HTML', role: 'Structure sémantique', tag: 'Standard Web' },
      { name: 'CSS', role: 'Design, styles & responsive', tag: 'Styling' },
      { name: 'Bootstrap', role: 'Framework CSS utilitaire', tag: 'UI Framework' },
      { name: 'JavaScript', role: 'Logique & dynamisme client', tag: 'Langage' },
      { name: 'React', role: 'Composants & interfaces modernes', tag: 'Bibliothèque UI' },
      { name: 'TypeScript', role: 'Typage statique & robustesse', tag: 'Langage typé' }
    ]
  },
  {
    id: 'backend-api',
    title: 'Backend & API',
    subtitle: 'Serveurs d\'application & interfaces de programmation',
    badge: 'Serveur & API',
    description: 'Création de services backend et d\'API modulaires pour traiter la logique métier et servir les applications clientes.',
    items: [
      { name: 'Node.js', role: 'Environnement d\'exécution JavaScript', tag: 'Runtime' },
      { name: 'Express', role: 'Framework pour applications et API Node.js', tag: 'Framework API' }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de données',
    subtitle: 'SGBD relationnels & modélisation applicative',
    badge: 'Persistance & Données',
    description: 'Gestion des données relationnelles, requêtes SQL et intégration avec un ORM pour la modélisation côté application.',
    items: [
      { name: 'MySQL', role: 'Base de données relationnelle · SQL', tag: 'SGBD Relationnel' },
      { name: 'PostgreSQL', role: 'Base de données relationnelle · SQL', tag: 'SGBD Relationnel' },
      { name: 'Prisma', role: 'ORM pour Node.js & TypeScript', tag: 'ORM Applicatif' }
    ],
    note: 'Prisma est un ORM qui facilite l\'accès aux données et la modélisation côté application.'
  },
  {
    id: 'prog-tools',
    title: 'Programmation & Outils',
    subtitle: 'Langage & flux de développement',
    badge: 'Environnement & Code',
    description: 'Outils de développement au quotidien, contrôle de versions collaboratif et environnement de travail assisté.',
    items: [
      { name: 'Python', role: 'Langage de programmation', tag: 'Langage' },
      { name: 'Git', role: 'Gestion de versions', tag: 'VCS' },
      { name: 'GitHub', role: 'Dépôts & collaboration', tag: 'Plateforme' },
      { name: 'Visual Studio Code', role: 'Éditeur de code', tag: 'Éditeur' },
      { name: 'Antigravity', role: 'Environnement de développement assisté par IA', tag: 'Assistant IA' }
    ]
  },
  {
    id: 'management-office',
    title: 'Bureautique & Gestion',
    subtitle: 'Outils administratifs et socle de gestion',
    badge: 'Informatique de gestion',
    description: 'Compétences acquises dans le cadre de la formation en Informatique appliquée à la gestion au Groupe ISI.',
    items: [
      { name: 'Microsoft Word', role: 'Rédaction technique & mise en forme', tag: 'Bureautique' },
      { name: 'Microsoft Excel', role: 'Tableurs, calculs & analyse de données', tag: 'Bureautique' },
      { name: 'Microsoft PowerPoint', role: 'Présentations & synthèses visuelles', tag: 'Bureautique' },
      { name: 'Notions de gestion & comptabilité', role: 'Principes comptables & organisation d\'entreprise', tag: 'Gestion' }
    ]
  }
];

