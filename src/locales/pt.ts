const pt = {
  layout: {
    role: "Frontend Developer",
    nav: {
      home: "Inicio",
      about: "Sobre",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contato",
    },
    language: {
      label: "Idioma",
      pt: "PT",
      en: "EN",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  home: {
    kicker: "Portfolio 2026",
    title:
      "Interfaces que transformam ideias em produtos claros, rapidos e escalaveis.",
    description:
      "Desenvolvo experiencias web focadas em performance, consistencia visual e resultado de negocio. Trabalho do discovery a entrega com atencao em arquitetura, UX e evolucao continua.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    metrics: {
      projectsLabel: "Projetos entregues",
      yearsValue: "2 anos",
      yearsLabel: "Evolucao constante",
      stackLabel: "Stack principal",
    },
    featuredTitle: "Projetos em destaque",
    previewAlt: "Preview do projeto {{title}}",
  },
  about: {
    kicker: "Sobre mim",
    title:
      "Construo produtos com equilibrio entre detalhe visual e solidez tecnica.",
    paragraph1:
      "Minha trajetoria combina aprendizado continuo, capacidade de execucao e foco em impacto. Nos ultimos anos, atuei em projetos de interfaces web com React, evoluindo para TypeScript e boas praticas de arquitetura de frontend.",
    paragraph2:
      "Hoje, meu objetivo e colaborar em produtos digitais que exigem qualidade de entrega, colaboracao em equipe e crescimento sustentavel da base de codigo.",
    differentialsTitle: "Diferenciais",
    differentials: [
      "Comunicacao clara com times tecnicos e nao tecnicos.",
      "Organizacao de componentes para escalar sem retrabalho.",
      "Atencao em responsividade, semantica e acessibilidade.",
      "Visao orientada a melhoria continua de produto.",
    ],
  },
  skills: {
    kicker: "Stack profissional",
    title: "Habilidades aplicadas em projetos reais",
  },
  portfolio: {
    kicker: "Historico de projetos",
    title: "Evolucao cronologica da minha trajetoria",
    rolePrefix: "Atuacao:",
    liveProject: "Projeto ao vivo",
    repository: "Repositorio",
    previewAlt: "Preview do projeto {{title}}",
  },
  contact: {
    kicker: "Contato",
    title: "Vamos tirar seu projeto do papel com uma interface de alto nivel.",
    description:
      "Se voce precisa criar um novo produto digital, modernizar uma interface ou acelerar um backlog de frontend, podemos conversar.",
    labels: {
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
    },
    actions: {
      send: "Enviar mensagem",
      sending: "Enviando...",
    },
    alerts: {
      envMissing:
        "Configure as variaveis VITE_EMAILJS_* para habilitar o envio.",
      fillAll: "Preencha todos os campos antes de enviar.",
      success: "Mensagem enviada com sucesso!",
      error: "Nao foi possivel enviar agora. Tente novamente.",
    },
  },
} as const;

export default pt;