export type Locale = 'pt' | 'en';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface ProjectItem {
  id: number;
  title: LocalizedText;
  year: number;
  period: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  id: number;
  title: LocalizedText;
  items: LocalizedText[];
}