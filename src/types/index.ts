export type ProjectCategory = 'académique' | 'personnel' | 'client';
export type ProjectStatus = 'en cours' | 'terminé';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tagline?: string;
  description: string;
  longDescription?: string;
  objective?: string;
  role?: string;
  context?: string;
  technologies?: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  notes?: string;
  technicalNote?: string;
  features?: string[];
  visualColors?: {
    primary: string;
    secondary?: string;
    bg?: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  category: 'informatique' | 'droit';
  description?: string;
  skillsAcquired?: string[];
  status?: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  image: string;
  credentialUrl?: string;
  description?: string;
}

export interface HackathonAward {
  id: string;
  event: string;
  location: string;
  year: string;
  result: string;
  rankBadge: string;
  description: string;
  image: string;
  skillsUsed: string[];
}
