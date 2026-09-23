export interface ContactChannel {
  id: 'email' | 'phone' | 'whatsapp';
  label: string;
  value: string;
  actionUrl: string;
  actionLabel: string;
  description: string;
  isExternal?: boolean;
  highlight?: boolean;
}

export interface SocialNetwork {
  id: 'github' | 'tiktok' | 'instagram';
  name: string;
  handle: string;
  url: string;
  description: string;
  badge: string;
}

export const CONTACT_INFO = {
  fullName: 'Codé Samb',
  headline: 'Étudiant en informatique · Développeur web · Créateur de solutions numériques',
  location: 'Dakar, Sénégal (GMT+0)',
  availabilityStatus: 'Disponible pour échanges & opportunités',
  primaryEmail: 'sambcode822@gmail.com',
  primaryPhone: '+221 70 608 21 20',
  whatsappUrl: 'https://wa.me/221706082120',
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email professionnel',
    value: 'sambcode822@gmail.com',
    actionUrl: 'mailto:sambcode822@gmail.com',
    actionLabel: 'Envoyer un email',
    description: 'Pour échanger sur des projets web, des collaborations ou des opportunités de stage et d’apprentissage.',
    highlight: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+221 70 608 21 20',
    actionUrl: 'https://wa.me/221706082120',
    actionLabel: 'Ouvrir WhatsApp',
    description: 'Messagerie instantanée directe pour des échanges rapides et le suivi de projets.',
    isExternal: true,
    highlight: true,
  },
  {
    id: 'phone',
    label: 'Téléphone direct',
    value: '+221 70 608 21 20',
    actionUrl: 'tel:+221706082120',
    actionLabel: 'Appeler directement',
    description: 'Disponible pour échanger de vive voix sur vos besoins numériques et collaborations.',
  },
];

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: 'Samb444',
    url: 'https://github.com/Samb444',
    description: 'Dépôts publics, code source de mes projets web, expérimentations et historique de commits.',
    badge: 'Code & Projets',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@mouridedev',
    url: 'https://www.tiktok.com/@mouridedev',
    description: 'Partage d’expérience, apprentissage continu, veille technologique et vie d’étudiant développeur.',
    badge: 'Contenu & Veille',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@begue_borom_touba',
    url: 'https://www.instagram.com/begue_borom_touba',
    description: 'Profil personnel, actualités et quotidien.',
    badge: 'Profil & Réseau',
  },
];
