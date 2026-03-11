const en = {
  layout: {
    role: "Frontend Developer",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    language: {
      label: "Language",
      pt: "PT",
      en: "EN",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  home: {
    kicker: "Portfolio 2026",
    title:
      "Interfaces that transform ideas into clear, fast, and scalable products.",
    description:
      "I build web experiences focused on performance, visual consistency, and business outcomes. I work from discovery to delivery with attention to architecture, UX, and continuous evolution.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    metrics: {
      projectsLabel: "Projects delivered",
      yearsValue: "2 years",
      yearsLabel: "Continuous evolution",
      stackLabel: "Main stack",
    },
    featuredTitle: "Featured projects",
    previewAlt: "Preview of project {{title}}",
  },
  about: {
    kicker: "About me",
    title: "I build products balancing visual detail and technical solidity.",
    paragraph1:
      "My journey combines continuous learning, execution capability, and impact focus. Over the past years, I have worked on web interface projects with React, evolving to TypeScript and frontend architecture best practices.",
    paragraph2:
      "Today, my goal is to collaborate on digital products that require quality delivery, team collaboration, and sustainable codebase growth.",
    differentialsTitle: "Strengths",
    differentials: [
      "Clear communication with technical and non-technical teams.",
      "Component organization to scale without rework.",
      "Attention to responsiveness, semantics, and accessibility.",
      "Product-oriented mindset focused on continuous improvement.",
    ],
  },
  skills: {
    kicker: "Professional stack",
    title: "Skills applied in real projects",
  },
  portfolio: {
    kicker: "Project history",
    title: "Chronological evolution of my trajectory",
    rolePrefix: "Role:",
    liveProject: "Live project",
    repository: "Repository",
    previewAlt: "Preview of project {{title}}",
  },
  contact: {
    kicker: "Contact",
    title: "Let us turn your idea into a high-level interface.",
    description:
      "If you need a new digital product, a modernized interface, or help accelerating a frontend backlog, we can talk.",
    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    actions: {
      send: "Send message",
      sending: "Sending...",
    },
    alerts: {
      envMissing: "Configure VITE_EMAILJS_* variables to enable sending.",
      fillAll: "Fill in all fields before sending.",
      success: "Message sent successfully!",
      error: "Could not send right now. Please try again.",
    },
  },
} as const;

export default en;