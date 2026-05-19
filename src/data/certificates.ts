import { Certificates } from "../types/portfolio";

// import 
import figmaForDevsImage from '../assets/certificates-img/ada-figma-para-devs.png';
import coders24BackEndImage from '../assets/certificates-img/ada-trilha-digital-coders-2024-back-end.png';
import pythonEssentialsImage from '../assets/certificates-img/cisco-networking-academy-python-essentials-1.png';
import responsiveWebDesignImage from '../assets/certificates-img/freecode-camp-responsive-web-design.png';
import pooPythonImage from '../assets/certificates-img/fundacao-bradesco-desenvolvimento-orientado-a-objetos-com-python.png';
import oneFrontEndImage from '../assets/certificates-img/oracle-next-education-front-end.png';
import oneReactImage from '../assets/certificates-img/oracle-next-education-react.png';
import agileMethodologiesImage from '../assets/certificates-img/santander-open-academy-gestao-de-projetos-fundamentos-metodo-agile.png';
import criticalThinkingImage from '../assets/certificates-img/santander-open-academy-pensamento-critico-resolucao-de-problemas.png';
import cybersecurityImage from '../assets/certificates-img/senac-introducao-ciberseguranca.png';
import programLogicImage from '../assets/certificates-img/udemy-algoritmos-e-logica-programacao.png';
import webDevelopmentImage from '../assets/certificates-img/udemy-complete-2024-web-development-bootcamp.png';
import cSharpImage from '../assets/certificates-img/udemy-csharp-logica-programcao-algoritmos.png';
import gitAndGithubImage from '../assets/certificates-img/udemy-git-github-essencial-para-desenvolvedor.png';

export const certificates: Certificates[] = [
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Figma para Devs',
            en: 'Figma for Devs'
        },
        issuer: 'Ada',
        date: '2024',
        url: 'https://ada.tech/certificado?code=f0803252-7945-adfe-a645-987eb29ef308',
        image: figmaForDevsImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Trilha Digital - Coders 2024 - Back-End',
            en: 'Digital Path - Coders 2024 - Back-End'
        },
        issuer: 'Ada',
        date: '2024',
        url: 'https://ada.tech/certificado?code=f09453f2-c8a8-a6ee-dfa0-21045d1344d1',
        image: coders24BackEndImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Python Essentials 1',
            en: 'Python Essentials 1'
        },
        issuer: 'Cisco Networking Academy',
        date: '2023',
        url: 'https://www.credly.com/badges/ff6d97c3-2d7a-4325-8d5f-677aefc4885a',
        image: pythonEssentialsImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Responsive Web Design',
            en: 'Responsive Web Design'
        },
        issuer: 'freeCodeCamp',
        date: '2023',
        url: '',
        image: responsiveWebDesignImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Python - Desenvolvimento Orientado a Objetos',
            en: 'Python - Object-Oriented Development'
        },
        issuer: 'Fundação Bradesco',
        date: '2024',
        url: '',
        image: pooPythonImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Front End T6 - ONE',
            en: 'Front End T6 - ONE'
        },
        issuer: 'Oracle Next Education | Alura',
        date: '2024',
        url: '',
        image: oneFrontEndImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'React T6 - ONE',
            en: 'React T6 - ONE'
        },
        issuer: 'Oracle Next Education | Alura',
        date: '2024',
        url: '',
        image: oneReactImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Gestão de Projetos e Fundamentos do Métodos Agile',
            en: 'Project Management and Fundamentals of Agile Methodology'
        },
        issuer: 'Santander | Open Academy',
        date: '2024',
        url: '',
        image: agileMethodologiesImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Pensamento Crítico e Resolução de Problemas',
            en: 'Critical Thinking and Problem Solving'
        },
        issuer: 'Santander | Open Academy',
        date: '2025',
        url: '',
        image: criticalThinkingImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Introdução à Cibersegurança',
            en: 'Introduction to Cybersecurity'
        },
        issuer: 'Senac | Cisco Networking Academy',
        date: '2025',
        url: 'https://www.credly.com/badges/80f66da8-ab84-4551-848f-d3d2df41d310',
        image: cybersecurityImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Algoritmos e Lógica de Programação',
            en: 'Algorithms and Programming Logic'
        },
        issuer: 'Udemy',
        date: '2022',
        url: 'https://www.udemy.com/certificate/UC-e072e5b4-3c1d-45a4-9813-f83b4c27df46/',
        image: programLogicImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Complete 2024 Web Development Bootcamp',
            en: 'Complete 2024 Web Development Bootcamp'
        },
        issuer: 'Udemy',
        date: '2024',
        url: 'https://www.udemy.com/certificate/UC-b5f5fbc0-4b15-4577-a64e-0ff1b92eec4b/',
        image: webDevelopmentImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'C# - Lógica de Programação e Algoritmos',
            en: 'C# - Programming Logic and Algorithms'
        },
        issuer: 'Udemy',
        date: '2022',
        url: 'https://www.udemy.com/certificate/UC-21b73499-eb8b-49d4-b829-ee3266da0b45/',
        image: cSharpImage
    },
    {
        id: crypto.randomUUID(),
        title: {
            pt: 'Git e GitHub Essencial para Desenvolvedor',
            en: 'Git and GitHub Essential for Developers'
        },
        issuer: 'Udemy',
        date: '2023',
        url: 'https://www.udemy.com/certificate/UC-6ae08abf-6768-48b8-90ff-822cd277b99b/',
        image: gitAndGithubImage
    },
];
