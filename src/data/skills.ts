import type { SkillCategory } from '../types/portfolio';
import type { Certificates } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: { pt: "Core Frontend", en: "Core Frontend" },
    items: [
      { pt: "React", en: "React" },
      { pt: "TypeScript", en: "TypeScript" },
      { pt: "JavaScript ES6+", en: "JavaScript ES6+" },
      { pt: "HTML5", en: "HTML5" },
      { pt: "CSS3", en: "CSS3" },
    ],
  },
  {
    id: 2,
    title: { pt: "UI e Design", en: "UI and Design" },
    items: [
      { pt: "Figma", en: "Figma" },
      { pt: "Design responsivo", en: "Responsive design" },
      { pt: "Acessibilidade", en: "Accessibility" },
      { pt: "Componentizacao", en: "Component architecture" },
    ],
  },
  {
    id: 3,
    title: { pt: "Qualidade e Colaboracao", en: "Quality and Collaboration" },
    items: [
      { pt: "Git e GitHub", en: "Git and GitHub" },
      { pt: "Code review", en: "Code review" },
      { pt: "Padroes de projeto", en: "Project patterns" },
      { pt: "Planejamento agil", en: "Agile planning" },
    ],
  },
  {
    id: 4,
    title: { pt: "Ferramentas", en: "Tooling" },
    items: [
      { pt: "Vite", en: "Vite" },
      { pt: "React Router", en: "React Router" },
      { pt: "NPM", en: "NPM" },
      { pt: "Yarn", en: "Yarn" },
      { pt: "Vitest", en: "Vitest" },
      { pt: "React Testing Library", en: "React Testing Library" },
      { pt: "EmailJS", en: "EmailJS" },
    ],
  },
];