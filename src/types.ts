export type ProgramType = 'ALL' | 'FLL' | 'FTC' | 'FRC';

export interface ProgramInfo {
  id: 'fll' | 'ftc' | 'frc';
  name: string;
  shortName: string;
  tagline: string;
  ageRange: string;
  teamSize: string;
  robotSpec: string;
  description: string;
  badgeColor: string;
  accentColor: string;
  bgGradient: string;
  highlights: string[];
  stages: {
    title: string;
    description: string;
  }[];
  skillsLearned: string[];
  kitInfo: string;
  competitionFormat: string;
  image: string;
}

export interface EventItem {
  id: string;
  name: string;
  program: 'FLL' | 'FTC' | 'FRC' | 'ALL';
  programName: string;
  category: 'Regional' | 'Nacional' | 'Festival' | 'Off-Season';
  date: string;
  rawDate: string;
  city: string;
  state: string;
  venue: string;
  status: 'Inscrições Abertas' | 'Em Breve' | 'Fase de Classificação' | 'Encerrado';
  description: string;
  teamsCount?: string;
  publicAccess: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'FIRST LEGO League' | 'FIRST Tech Challenge' | 'FIRST Robotics Competition' | 'Eventos' | 'Equipes' | 'Inovação';
  programTag?: 'FLL' | 'FTC' | 'FRC' | 'GERAL';
  summary: string;
  content: string[];
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  program: 'FLL' | 'FTC' | 'FRC' | 'SENAI';
  quote: string;
  avatar: string;
  yearActive: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Estudantes' | 'Escolas & SENAI' | 'Competições' | 'Mentoria';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'fll' | 'ftc' | 'frc';
  categoryLabel: string;
  program: 'FLL' | 'FTC' | 'FRC' | 'TODOS';
  caption: string;
  image: string;
}

export interface StateData {
  uf: string;
  name: string;
  region: 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';
  activeTeams: number;
  senaiHubs: number;
  featuredEvents: string[];
  programsActive: ('FLL' | 'FTC' | 'FRC')[];
  description: string;
}

export interface QuizAnswer {
  ageGroup?: '9-14' | '12-18' | '14-19';
  interest?: 'discovery' | 'mechanics_code' | 'industrial_eng';
  experience?: 'beginner' | 'intermediate' | 'advanced';
  schoolType?: 'fundamental' | 'medio' | 'senai_tecnico';
}
