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
import landingPageB2BImg from '../assets/landing-page-b2b.png';
import pdfExtractorImg from '../assets/pdf-extractor.png';
import easyDashboardImg from '../assets/easydashboard-main-screen.png';
import vlServiceImg from '../assets/vlservice-main-screen.png';

export const projects: ProjectItem[] = [
  {
    id: crypto.randomUUID(),
    title: { pt: 'Candidato SPA', en: 'Candidate SPA' },
    year: 2024,
    featured: false,
    period: { pt: 'Q1 2024', en: 'Q1 2024' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Single Page Application para apresentação de perfil de candidato, com secoes orientadas para informações do candidato.',
      en: 'Single Page Application to present a candidate profile with sections oriented towards candidate information.',
    },
    stack: ['React', 'TypeScript', 'Vite'],
    highlights: [
      {
        pt: 'Arquitetura de pagina unica com rotas limpas',
        en: 'Single-page architecture with clean routes',
      },
      {
        pt: 'Componentes reutilizaveis para secoes institucionais',
        en: 'Reusable components for institutional sections',
      },
      {
        pt: 'Design focado em leitura rapida de informacoes',
        en: 'Design focused on fast information scanning',
      },
    ],
    image: candidatoSPAImg,
    repoUrl: 'https://github.com/Ricardo-Forttunato',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Organo', en: 'Organo' },
    year: 2024,
    featured: false,
    period: { pt: 'Q2 2024', en: 'Q2 2024' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Aplicação para organização de times com cadastro de colaboradores e renderização dinamica de cards. Projeto desenvolvido durante formação em React da Alura/ONE, focado em arquitetura de componentes e controle de estado com hooks.',
      en: 'Application for team organization with member registration and dynamic card rendering. Project developed during Alura/ONE React training, focused on component architecture and state management with hooks.',
    },
    stack: ['React', 'JavaScript', 'CSS Modules'],
    highlights: [
      {
        pt: 'Componentização orientada a reuso',
        en: 'Reusable component-based architecture',
      },
      {
        pt: 'Controle de estado com hooks',
        en: 'State management with hooks',
      },
      {
        pt: 'Fluxo de cadastro e exibição em tempo real',
        en: 'Real-time registration and display flow',
      },
    ],
    liveUrl: 'https://organo-project-six.vercel.app/',
    image: organoImg,
    repoUrl: 'https://github.com/Ricardo-Forttunato/organo-project',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Alura Geek', en: 'Alura Geek' },
    year: 2024,
    featured: false,
    period: { pt: 'Q3 2024', en: 'Q3 2024' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'E-commerce de produtos geek com formulario de cadastro, vitrine e experiencia focada em usabilidade. Projeto desenvolvido durante formação em React da Alura/ONE, com ênfase em fluxo de cadastro, organização de estados e design responsivo.',
      en: 'Geek product e-commerce with registration form, storefront, and usability-focused experience. Project developed during Alura/ONE React training, with emphasis on registration flow, state organization, and responsive design.',
    },
    stack: ['React', 'JavaScript', 'CSS', 'REST API'],
    highlights: [
      {
        pt: 'Criação de fluxo de cadastro de produtos',
        en: 'Product registration workflow implementation',
      },
      {
        pt: 'Organização de estados para listagem e filtros',
        en: 'State organization for listing and filters',
      },
      {
        pt: 'UI responsiva para desktop e mobile',
        en: 'Responsive UI for desktop and mobile',
      },
    ],
    liveUrl: 'https://alura-geek-eight-chi.vercel.app/',
    image: aluraGeekImg,
    repoUrl: 'https://github.com/Ricardo-Forttunato/alura-geek',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'NatureFlix', en: 'NatureFlix' },
    year: 2024,
    featured: false,
    period: { pt: 'Q3 2024', en: 'Q3 2024' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Plataforma de catalogo de videos com destaque de categorias e foco em arquitetura de componentes. Projeto desenvolvido durante formação em React da Alura/ONE, com ênfase em organização de componentes e padroes visuais consistentes.',
      en: 'Video catalog platform with category highlights and component architecture focus. Project developed during Alura/ONE React training, with emphasis on component organization and consistent visual patterns.',
    },
    stack: ['React', 'JavaScript', 'Styled Components'],
    highlights: [
      {
        pt: 'Separação de responsabilidades por componente',
        en: 'Component-level separation of responsibilities',
      },
      {
        pt: 'Aplicação de padrao visual consistente',
        en: 'Consistent visual pattern implementation',
      },
      {
        pt: 'Estrutura preparada para escalar novos conteudos',
        en: 'Structure prepared to scale new content',
      },
    ],
    liveUrl: 'https://nature-flix.vercel.app/',
    image: aluraFlixImg,
    repoUrl: 'https://github.com/Ricardo-Forttunato',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Gerenciador de Tarefas de IMC', en: 'IMC Task Manager' },
    year: 2025,
    featured: false,
    period: { pt: 'Q1 2025', en: 'Q1 2025' },
    role: { pt: 'FullStack Developer', en: 'FullStack Developer' },
    description: {
      pt: 'Projeto Integrador - Análise de Soluções Integradas para Organizações: Desenvolvimento de um gerenciador de tarefas completo baseado em atividades para melhorar o IMC, focado em escalabilidade e experiência do usuário.',
      en: 'Integrative Project - Analysis of Integrated Solutions for Organizations: Development of a complete task manager based on activities to improve IMC, focused on scalability and user experience.',
    },
    stack: ['Flutter', 'Dart', 'Shared Preferences'],
    highlights: [
      {
        pt: 'Interface amigável e intuitiva para facilitar o uso',
        en: 'User-friendly and intuitive interface to facilitate usage',
      },
      {
        pt: 'Cadastro de tarefas personalizadas para atender às necessidades individuais',
        en: 'Custom task registration to meet individual needs',
      },
      {
        pt: 'Sugestões de tarefas personalizadas com base no IMC do usuário',
        en: "Personalized task suggestions based on user's IMC",
      },
      {
        pt: 'Suporte a tema escuro, ativado automaticamente com base na configuração do sistema e com opção de alternância manual.',
        en: 'Dark theme support, automatically activated based on system configuration and with manual toggle option.',
      },
    ],
    image: imcTasksManagerImg,
    liveUrl: 'https://ricardo-forttunato.github.io/imc_tasks_manager/',
    repoUrl: 'https://github.com/Ricardo-Forttunato/imc_tasks_manager',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Fungi Finders', en: 'Fungi Finders' },
    year: 2025,
    featured: false,
    period: { pt: 'Q1 2025', en: 'Q1 2025' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Landing Page especializada desenvolvida durante formação no Frontend Masters, focada em técnicas avançadas de SPA e princípios modernos de UI/UX.',
      en: 'Specialized Landing Page developed during Frontend Masters training, focused on advanced SPA techniques and modern UI/UX principles.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      {
        pt: 'Desenvolvimento de SPA com navegação fluida e foco em performance de carregamento',
        en: 'SPA development with fluid navigation and a focus on loading performance',
      },
      {
        pt: 'Aplicação de conceitos de UI/UX para criar uma identidade visual forte e intuitiva',
        en: 'Application of UI/UX concepts to create a strong and intuitive visual identity',
      },
      {
        pt: 'Layout totalmente responsivo com semântica HTML5 e melhores práticas de acessibilidade',
        en: 'Fully responsive layout with HTML5 semantics and accessibility best practices',
      },
    ],
    image: fungiFindersImg,
    liveUrl: 'https://fungi-finders-front-end-master.vercel.app/',
    repoUrl:
      'https://github.com/Ricardo-Forttunato/Fungi-Finders-Front-endMaster',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Portfolio Profissional', en: 'Professional Portfolio' },
    year: 2026,
    featured: false,
    period: { pt: 'Q1 2026', en: 'Q1 2026' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Refatoração completa do portfolio com React + TypeScript, visual profissional e timeline cronologica de projetos.',
      en: 'Complete portfolio refactor with React + TypeScript, professional design, and chronological project timeline.',
    },
    stack: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    highlights: [
      {
        pt: 'Migração completa para TypeScript',
        en: 'Complete migration to TypeScript',
      },
      {
        pt: 'Novo layout responsivo com identidade visual forte',
        en: 'New responsive layout with strong visual identity',
      },
      {
        pt: 'Estrutura de dados para manutenção e crescimento',
        en: 'Data structure designed for maintenance and growth',
      },
    ],
    image: portfolioImg,
    liveUrl: 'https://portfolio-ricardo-forttunato.vercel.app/portfolio',
    repoUrl: 'https://github.com/Ricardo-Forttunato/portfolio',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Sistema MES', en: 'MES System' },
    year: 2025,
    featured: true,
    period: { pt: 'Q2 2025', en: 'Q2 2025' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Engenharia de front-end de ponta a ponta para sistema corporativo, abrangendo prototipagem, integração de APIs e lançamento.',
      en: 'End-to-end front-end engineering for enterprise systems, covering prototyping, API integration, and go-live.',
    },
    stack: ['React', 'TypeScript', 'tailwindcss', 'Vite', 'flowbite'],
    highlights: [
      {
        pt: 'Arquitetura de dashboard responsivo com visualização de dados dinâmica',
        en: 'Responsive dashboard architecture with dynamic data visualization',
      },
      {
        pt: 'Microserviço independente em NestJS para geração de relatórios sob demanda',
        en: 'Independent NestJS microservice for on-demand report generation',
      },
      {
        pt: 'Otimização de performance para terminais de fábrica e dispositivos móveis',
        en: 'Performance optimization for factory terminals and mobile devices',
      },
    ],
    image: dashboardHighlightsImg,
    // liveUrl: '/',
    repoUrl: 'https://github.com/Ricardo-Forttunato',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Landing Page de Marketing', en: 'Marketing Landing Page' },
    year: 2024,
    featured: false,
    period: { pt: 'Q3 2024', en: 'Q3 2024' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Landing Page de marketing para profissionais autônomos. Desenvolvido como pratica de aplicação de conceitos avançados de SPA e princípios modernos de UI/UX, com ênfase em performance e experiência do usuário no curso de Analise e desenvolvimento de Sistemas.',
      en: 'Marketing landing page for freelancers. Developed as a practice of applying advanced SPA concepts and modern UI/UX principles, with an emphasis on performance and user experience in the Systems Analysis and Development course.',
    },
    stack: ['HTML', 'JavaScript', 'CSS', 'Vite'],
    highlights: [
      {
        pt: '',
        en: '',
      },
    ],
    image: landingPageProfissionalAutonomoImg,
    liveUrl:
      'https://ricardo-forttunato.github.io/landing-page-profissional-autonomo/',
    repoUrl:
      'https://github.com/Ricardo-Forttunato/landing-page-profissional-autonomo',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'Landing-Page B2B', en: 'B2B Landing-Page' },
    year: 2026,
    featured: false,
    period: { pt: 'Q2 2026', en: 'Q2 2026' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'Landing page moderna e altamente customizável voltada para empresas B2B e produtos SaaS. Projetada para ser uma solução White Label ágil e focada em conversão, permitindo que empresas promovam suas soluções com alta performance e design responsivo.',
      en: 'Modern and highly customizable B2B landing page for corporate companies and SaaS products. Designed as a flexible White Label solution focused on lead conversion, enabling companies to showcase their services with high performance and responsive design.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: [
      {
        pt: 'Arquitetura modular e reutilizável focada na fácil personalização de temas, marcas e conteúdos B2B.',
        en: 'Modular and reusable architecture designed for effortless customization of themes, branding, and B2B content.',
      },
      {
        pt: 'Layout otimizado para conversão de leads (CRO), com seções estratégicas de CTA, benefícios e apresentação de produto.',
        en: 'CRO-optimized layout with strategic Call-to-Action sections, product benefits, and feature showcases.',
      },
      {
        pt: 'Desenvolvido com React e Tailwind CSS, garantindo carregamento ultrarrápido, Pixel Perfect e total responsividade.',
        en: 'Built with React and Tailwind CSS, ensuring lightning-fast performance, pixel-perfect UI, and full responsiveness.',
      },
    ],
    image: landingPageB2BImg,
    liveUrl: 'https://portfolio-ricardo-forttunato.vercel.app/',
    repoUrl: 'https://github.com/Ricardo-Forttunato/landing-page-b2b',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'PDF Extractor', en: 'PDF Extractor' },
    year: 2026,
    featured: false,
    period: { pt: 'Q3 2026', en: 'Q3 2026' },
    role: { pt: 'Web Developer', en: 'Web Developer' },
    description: {
      pt: 'Aplicação web para extração e estruturação automática de dados de cartões de ponto e holerites em PDF. Combina leitura de texto vetorial com fallback de OCR local via Tesseract.js, disponibilizando uma interface de revisão lado a lado para validação humana e exportação em XLSX, CSV e JSON.',
      en: 'Web application for automated parsing and structuring of data from PDF timesheets and pay stubs. Combines native vector text extraction with local Tesseract.js OCR fallback, featuring a side-by-side review interface for human validation and export to XLSX, CSV, and JSON.',
    },
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Material UI',
      'Tesseract.js',
      'pdfjs-dist',
      'Zod',
      'ExcelJS',
      'Docker',
    ],
    highlights: [
      {
        pt: 'Pipeline de extração híbrida: processamento nativo via pdfjs-dist com fallback automático para OCR via Tesseract.js em documentos escaneados.',
        en: 'Hybrid extraction pipeline: native vector parsing via pdfjs-dist with automatic Tesseract.js OCR fallback for scanned pages.',
      },
      {
        pt: 'Interface de revisão split-screen criada com Material UI, permitindo validação dos dados em tempo real ao lado da visualização original do PDF.',
        en: 'Split-screen review interface built with Material UI, enabling real-time data validation alongside the original PDF viewer.',
      },
      {
        pt: 'Sistema de sinalização de incertezas e erros de validação (batidas ímpares e divergências matemáticas em holerites) antes da geração do XLSX/CSV.',
        en: 'Validation error and uncertainty flagging system (odd time punches and pay stub math mismatches) prior to XLSX/CSV generation.',
      },
      {
        pt: 'Arquitetura conteinerizada com Docker Compose para o processamento assíncrono em memória e preview estático seguro na Vercel.',
        en: 'Containerized architecture using Docker Compose for asynchronous in-memory processing and secure static preview on Vercel.',
      },
    ],
    image: pdfExtractorImg, // Lembre-se de importar a imagem da aplicação
    liveUrl: 'https://pdf-extractor.vercel.app', // Atualize para o link da Vercel após renomear
    repoUrl: 'https://github.com/Ricardo-Forttunato/pdf-extractor',
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'EasyDashboard', en: 'EasyDashboard' },
    year: 2026,
    featured: true,
    period: { pt: 'Q3 2026', en: 'Q3 2026' },
    role: { pt: 'Frontend Developer', en: 'Frontend Developer' },
    description: {
      pt: 'SPA client-side para geração e visualização de dashboards interativos a partir de dados manuais ou importação de arquivos (XLSX, CSV, PDF e imagens com OCR). Desenvolvida sob metodologia TDD e Clean Architecture, permite organizar múltiplos tipos de gráficos via drag-and-drop e exportar composições em alta qualidade para PDF e imagem diretamente no navegador, garantindo privacidade total sem dependência de servidores.',
      en: 'Client-side SPA for generating and visualizing interactive dashboards from manual inputs or imported files (XLSX, CSV, PDF, and OCR-scanned images). Built with TDD and Clean Architecture, it enables organizing multiple chart types via drag-and-drop and exporting layouts to PDF and image directly in the browser, ensuring total privacy with zero backend dependency.',
    },
    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Apache ECharts',
      'Tesseract.js',
      'PDF.js',
      'SheetJS (XLSX)',
      'Vitest',
      'Vue i18n',
    ],
    highlights: [
      {
        pt: 'Ingestão de dados 100% no cliente com parsing de planilhas (XLSX/CSV) e extração de dados via PDF.js e OCR com Tesseract.js em Web Worker.',
        en: '100% client-side data ingestion with spreadsheet parsing (XLSX/CSV) and text extraction via PDF.js and Tesseract.js OCR using Web Workers.',
      },
      {
        pt: 'Criação e personalização de múltiplos tipos de gráficos (barras, linhas, pizza, gauge, pareto e área) com Apache ECharts e layout drag-and-drop.',
        en: 'Creation and customization of multiple chart types (bar, line, pie, gauge, pareto, and area) with Apache ECharts and an interactive drag-and-drop layout.',
      },
      {
        pt: 'Exportação do dashboard para PNG e PDF diretamente no navegador (Zero-Backend), mantendo os dados sensíveis estritamente em memória local.',
        en: 'Direct in-browser dashboard export to PNG and PDF (Zero-Backend), keeping sensitive data strictly in local browser memory.',
      },
      {
        pt: 'Desenvolvimento guiado por testes (TDD) com Vitest e internacionalização completa (pt-BR e en) com zero strings fixas no código.',
        en: 'Test-Driven Development (TDD) with Vitest and full internationalization (pt-BR and en) with zero hardcoded strings.',
      },
    ],
    image: easyDashboardImg, // TODO: Importar a imagem da aplicação (ex: import easyDashboardImg from '@/assets/projects/easy-dashboard.png')
    liveUrl: 'https://easy-dashboard.vercel.app', // TODO: Atualizar quando o deploy na Vercel for publicado
    repoUrl: 'https://github.com/Ricardo-Forttunato/easy-dashboard', // Detectado no remote origin do git
  },
  {
    id: crypto.randomUUID(),
    title: { pt: 'VLService', en: 'VLService' },
    year: 2026,
    featured: true,
    period: { pt: 'Q4 2026', en: 'Q4 2026' },
    role: { pt: 'Desenvolvedor full-stack', en: 'Full-stack Developer' },
    description: {
      pt: 'Plataforma de serviços locais que conecta clientes a prestadores. Clientes publicam pedidos, recebem propostas e negociam pela plataforma; prestadores gerenciam seus serviços, propostas e assinaturas.',
      en: 'Local services platform connecting clients with service providers. Clients post requests, receive proposals and negotiate on the platform; providers manage their services, proposals and subscriptions.',
    },
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Fastify',
      'PostgreSQL',
      'Keycloak',
      'Mercado Pago',
      'Docker Compose',
    ],
    highlights: [
      {
        pt: 'Marketplace com pedidos, propostas, negociação privada, aceite e avaliações, com regras de acesso aplicadas pela API.',
        en: 'Marketplace with service requests, proposals, private negotiation, acceptance and reviews, with access rules enforced by the API.',
      },
      {
        pt: 'Assinaturas para prestadores com checkout por Pix e cartão, confirmação de pagamento e controle do período de acesso.',
        en: 'Provider subscriptions with Pix and card checkout, payment confirmation and access period management.',
      },
      {
        pt: 'Autenticação com Keycloak e painéis específicos para clientes, prestadores e administradores.',
        en: 'Keycloak authentication and dedicated dashboards for clients, providers and administrators.',
      },
      {
        pt: 'Produção conteinerizada com backups externos cifrados, arquivamento de WAL e recuperação ensaiada em ambiente isolado.',
        en: 'Containerized production with encrypted external backups, WAL archiving and recovery rehearsed in an isolated environment.',
      },
    ],
    image: vlServiceImg, // Importe uma captura ou imagem do VLService.
    liveUrl: 'https://vlservice.com.br',
    repoUrl: 'https://github.com/vlservices/vl-service-project',
  },
];
