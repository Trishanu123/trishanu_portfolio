export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string; // Main reference link
  github?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Language' | 'AI/ML' | 'Embedded' | 'Web' | 'Tools' | 'Development';
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description?: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  result: string; // e.g., "1st Place"
  link?: string;
}

export interface ImpactItem {
  id: string;
  title: string;
  context: string; // e.g., "Gatik Pulse Magazine" or "IBM Tech Talk"
  description?: string;
  link?: string;
  type: 'Media' | 'Leadership' | 'Speaking';
}
