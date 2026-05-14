import type { ProjectItem } from "../types/portfolio";

// import images
import organoImg from "../assets/organo.png";
import aluraGeekImg from "../assets/alura-geek.png";
import aluraFlixImg from "../assets/alura-flix.png";
import candidatoSPAImg from "../assets/spa-gov.png";
import portfolioImg from "../assets/portfolio.png";
import fungiFindersImg from "../assets/fungi-finders.png";
import dashboardHighlightsImg from "../assets/dashboard-highlights.png";
import imcTasksManagerImg from "../assets/imc-task-manager.png";
import landingPageProfissionalAutonomoImg from "../assets/landing-page-senac-project.png";

export const projects: ProjectItem[] = [
  {
    id: crypto.randomUUID(),
    title: { pt: "Candidato SPA", en: "Candidate SPA" },
    year: 2024,
    period: { pt: "Q1 2024", en: "Q1 2024" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Single Page Application para apresentacao de perfil de candidato, com secoes orientadas para informações do candidato.",
      en: "Single Page Application to present a candidate profile with sections oriented towards candidate information.",
    },
    stack: ["React", "TypeScript", "Vite"],
    highlights: [
      {
        pt: "Arquitetura de pagina unica com rotas limpas",
        en: "Single-page architecture with clean routes",
      },
      {
        pt: "Componentes reutilizaveis para secoes institucionais",
        en: "Reusable components for institutional sections",
      },
      {
        pt: "Design focado em leitura rapida de informacoes",
        en: "Design focused on fast information scanning",
      },
    ],
    image: candidatoSPAImg,
    repoUrl: "https://github.com/Ricardo-Forttunato",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Organo", en: "Organo" },
    year: 2024,
    period: { pt: "Q2 2024", en: "Q2 2024" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Aplicacao para organizacao de times com cadastro de colaboradores e renderizacao dinamica de cards. Projeto desenvolvido durante formação em React da Alura/ONE, focado em arquitetura de componentes e controle de estado com hooks.",
      en: "Application for team organization with member registration and dynamic card rendering. Project developed during Alura/ONE's React training, focused on component architecture and state management with hooks.",
    },
    stack: ["React", "JavaScript", "CSS Modules"],
    highlights: [
      {
        pt: "Componentizacao orientada a reuso",
        en: "Reusable component-based architecture",
      },
      {
        pt: "Controle de estado com hooks",
        en: "State management with hooks",
      },
      {
        pt: "Fluxo de cadastro e exibicao em tempo real",
        en: "Real-time registration and display flow",
      },
    ],
    liveUrl: "https://organo-project-six.vercel.app/",
    image: organoImg,
    repoUrl: "https://github.com/Ricardo-Forttunato/organo-project",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Alura Geek", en: "Alura Geek" },
    year: 2024,
    period: { pt: "Q3 2024", en: "Q3 2024" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "E-commerce de produtos geek com formulario de cadastro, vitrine e experiencia focada em usabilidade. Projeto desenvolvido durante formacao em React da Alura/ONE, com ênfase em fluxo de cadastro, organizacao de estados e design responsivo.",
      en: "Geek product e-commerce with registration form, storefront, and usability-focused experience. Project developed during Alura/ONE's React training, with emphasis on registration flow, state organization, and responsive design.",
    },
    stack: ["React", "JavaScript", "CSS", "REST API"],
    highlights: [
      {
        pt: "Criacao de fluxo de cadastro de produtos",
        en: "Product registration workflow implementation",
      },
      {
        pt: "Organizacao de estados para listagem e filtros",
        en: "State organization for listing and filters",
      },
      {
        pt: "UI responsiva para desktop e mobile",
        en: "Responsive UI for desktop and mobile",
      },
    ],
    liveUrl: "https://alura-geek-eight-chi.vercel.app/",
    image: aluraGeekImg,
    repoUrl: "https://github.com/Ricardo-Forttunato/alura-geek",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "NatureFlix", en: "NatureFlix" },
    year: 2024,
    period: { pt: "Q3 2024", en: "Q3 2024" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Plataforma de catalogo de videos com destaque de categorias e foco em arquitetura de componentes. Projeto desenvolvido durante formacao em React da Alura/ONE, com ênfase em organização de componentes e padroes visuais consistentes.",
      en: "Video catalog platform with category highlights and component architecture focus. Project developed during Alura/ONE's React training, with emphasis on component organization and consistent visual patterns.",
    },
    stack: ["React", "JavaScript", "Styled Components"],
    highlights: [
      {
        pt: "Separacao de responsabilidades por componente",
        en: "Component-level separation of responsibilities",
      },
      {
        pt: "Aplicacao de padrao visual consistente",
        en: "Consistent visual pattern implementation",
      },
      {
        pt: "Estrutura preparada para escalar novos conteudos",
        en: "Structure prepared to scale new content",
      },
    ],
    liveUrl: "https://nature-flix.vercel.app/",
    image: aluraFlixImg,
    repoUrl: "https://github.com/Ricardo-Forttunato",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Gerenciador de Tarefas de IMC", en: "IMC Task Manager" },
    year: 2025,
    period: { pt: "Q1 2025", en: "Q1 2025" },
    role: { pt: "FullStack Developer", en: "FullStack Developer" },
    description: {
      pt: "Projeto Intergrador - Análise de Soluções Integradas para Organizações: Desenvolvimento de um gerenciador de tarefas completo baseado em atividades para melhorar o IMC, focado em escalabilidade e experiência do usuário.",
      en: "Integrative Project - Analysis of Integrated Solutions for Organizations: Development of a complete task manager based on activities to improve IMC, focused on scalability and user experience.",
    },
    stack: ["Flutter", "Dart", "Shared Preferences"],
    highlights: [
      {
        pt: "Interface amigável e intuitiva para facilitar o uso",
        en: "User-friendly and intuitive interface to facilitate usage",
      },
      {
        pt: "Cadastro de tarefas personalizadas para atender às necessidades individuais",
        en: "Custom task registration to meet individual needs",
      },
      {
        pt: "Sugestões de tarefas personalizadas com base no IMC do usuário",
        en: "Personalized task suggestions based on user's IMC",
      },
      {
        pt: "Suporte a tema escuro, ativado automaticamente com base na configuração do sistema e com opção de alternância manual.",
        en: "Dark theme support, automatically activated based on system configuration and with manual toggle option.",
      },
    ],
    image: imcTasksManagerImg,
    liveUrl:
      "https://ricardo-forttunato.github.io/imc_tasks_manager/landing-page/index.html#form-section",
    repoUrl: "https://github.com/Ricardo-Forttunato/imc_tasks_manager",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Fungi Finders", en: "Fungi Finders" },
    year: 2025,
    period: { pt: "Q1 2025", en: "Q1 2025" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Landing Page especializada desenvolvida durante formação no Frontend Masters, focada em técnicas avançadas de SPA e princípios modernos de UI/UX.",
      en: "Specialized Landing Page developed during Frontend Masters training, focused on advanced SPA techniques and modern UI/UX principles.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      {
        pt: "Desenvolvimento de SPA com navegação fluida e foco em performance de carregamento",
        en: "SPA development with fluid navigation and a focus on loading performance",
      },
      {
        pt: "Aplicação de conceitos de UI/UX para criar uma identidade visual forte e intuitiva",
        en: "Application of UI/UX concepts to create a strong and intuitive visual identity",
      },
      {
        pt: "Layout totalmente responsivo com semântica HTML5 e melhores práticas de acessibilidade",
        en: "Fully responsive layout with HTML5 semantics and accessibility best practices",
      },
    ],
    image: fungiFindersImg,
    liveUrl: "https://fungi-finders-front-end-master.vercel.app/",
    repoUrl:
      "https://github.com/Ricardo-Forttunato/Fungi-Finders-Front-endMaster",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Portfolio Profissional", en: "Professional Portfolio" },
    year: 2025,
    period: { pt: "Q2 2025", en: "Q2 2025" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Refatoracao completa do portfolio com React + TypeScript, visual profissional e timeline cronologica de projetos.",
      en: "Complete portfolio refactor with React + TypeScript, professional design, and chronological project timeline.",
    },
    stack: ["React", "TypeScript", "CSS Modules", "Vite"],
    highlights: [
      {
        pt: "Migracao completa para TypeScript",
        en: "Complete migration to TypeScript",
      },
      {
        pt: "Novo layout responsivo com identidade visual forte",
        en: "New responsive layout with strong visual identity",
      },
      {
        pt: "Estrutura de dados para manutencao e crescimento",
        en: "Data structure designed for maintenance and growth",
      },
    ],
    image: portfolioImg,
    liveUrl: "https://portfolio-orcin-eight-77.vercel.app/",
    repoUrl: "https://github.com/Ricardo-Forttunato/portfolio",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Sistema MES", en: "MES System" },
    year: 2026,
    period: { pt: "Q2 2025", en: "Q2 2025" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Engenharia de front-end de ponta a ponta para sistema corporativo, abrangendo prototipagem, integração de APIs e lançamento.",
      en: "End-to-end front-end engineering for enterprise systems, covering prototyping, API integration, and go-live.",
    },
    stack: ["React", "TypeScript", "tailwindcss", "Vite", "flowbite"],
    highlights: [
      {
        pt: "Arquitetura de dashboard responsivo com visualização de dados dinâmica",
        en: "Responsive dashboard architecture with dynamic data visualization",
      },
      {
        pt: "Microserviço independente em NestJS para geração de relatórios sob demanda",
        en: "Independent NestJS microservice for on-demand report generation",
      },
      {
        pt: "Otimização de performance para terminais de fábrica e dispositivos móveis",
        en: "Performance optimization for factory terminals and mobile devices",
      },
    ],
    image: dashboardHighlightsImg,
    // liveUrl: '/',
    repoUrl: "https://github.com/Ricardo-Forttunato",
  },
  {
    id: crypto.randomUUID(),
    title: { pt: "Landing Page de Marketing", en: "Marketing Landing Page" },
    year: 2024,
    period: { pt: "Q3 2024", en: "Q3 2024" },
    role: { pt: "Frontend Developer", en: "Frontend Developer" },
    description: {
      pt: "Landing Page de marketing para profissionais autônomos. Desenvolvido como pratica de aplicação de conceitos avançados de SPA e princípios modernos de UI/UX, com ênfase em performance e experiência do usuário no curso de Analise e desenvolvimento de Sistemas.",
      en: "Marketing landing page for freelancers. Developed as a practice of applying advanced SPA concepts and modern UI/UX principles, with an emphasis on performance and user experience in the Systems Analysis and Development course.",
    },
    stack: ["HTML", "JavaScript", "CSS", "Vite"],
    highlights: [
      {
        pt: "",
        en: "",
      },
    ],
    image: landingPageProfissionalAutonomoImg,
    liveUrl:
      "https://ricardo-forttunato.github.io/landing-page-profissional-autonomo/",
    repoUrl:
      "https://github.com/Ricardo-Forttunato/landing-page-profissional-autonomo",
  },
];
