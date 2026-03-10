# Portfolio Project

Portfolio profissional desenvolvido com React + TypeScript, com foco em apresentacao de projetos, identidade visual forte e evolucao continua da base de codigo.

## Objetivo

Este projeto foi estruturado para:

- apresentar a trajetoria profissional de forma clara;
- destacar projetos em ordem cronologica;
- facilitar manutencao com dados tipados;
- suportar evolucao de layout e conteudo sem retrabalho.

## Principais Atualizacoes

- migracao da camada principal para React + TypeScript;
- novo layout global com navegacao consistente;
- redesign das paginas para um visual mais profissional e responsivo;
- nova Home com hero section, metricas e destaque de projetos;
- nova pagina de Portfolio com timeline cronologica por ano;
- dados de projetos e skills separados em arquivos tipados.

## Stack Tecnica

- React 19
- TypeScript
- Vite
- React Router DOM
- i18next + react-i18next
- EmailJS (pagina de contato)
- CSS Modules

## Estrutura do Projeto

```text
src/
	components/
		Layout/
			Layout.tsx
			Layout.module.css
	data/
		projects.ts
		skills.ts
	locales/
		pt.ts
		en.ts
	i18n.ts
	pages/
		Home/
			Home.tsx
			HomePage.module.css
		About/
			About.tsx
			AboutPage.module.css
		Skills/
			Skills.tsx
			SkillsPage.module.css
		Portfolio/
			Portfolio.tsx
			PortfolioPage.module.css
		Contact/
			Contact.tsx
			ContactPage.module.css
	routes/
		routes.tsx
	types/
		portfolio.ts
	App.tsx
	main.tsx
	index.css
```

## Como Executar Localmente

### 1. Instalar dependencias

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

### 3. Gerar build de producao

```bash
npm run build
```

### 4. Visualizar build local

```bash
npm run preview
```

## Variaveis de Ambiente

A pagina de contato usa EmailJS. Crie um arquivo `.env` na raiz com:

```bash
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Sem essas variaveis, o formulario continua funcionando na interface, mas o envio fica desativado.

## Manutencao de Conteudo

### Internacionalizacao (i18n)

O projeto possui suporte a dois idiomas:

- `pt` (padrao)
- `en`

Arquivos principais da traducao:

- `src/i18n.ts`: configuracao do i18next
- `src/locales/pt.ts`: textos em portugues
- `src/locales/en.ts`: textos em ingles

O seletor de idioma fica no header e persiste preferencia no navegador via `localStorage`.

### Projetos do portfolio

Edite o arquivo `src/data/projects.ts` para incluir:

- titulo do projeto;
- ano e periodo (usado na timeline);
- papel desempenhado;
- descricao e destaques;
- stack utilizada;
- imagem;
- links de repositorio e/ou projeto ao vivo.

### Skills

Edite `src/data/skills.ts` para atualizar categorias e itens exibidos na pagina Skills.

## Scripts Disponiveis

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: executa preview da build local
- `npm run lint`: valida padrao de codigo

## Roadmap Sugerido

- adicionar testes de componentes (ex.: Vitest + React Testing Library);
- configurar CI para lint + build;
- versionar conteudo do portfolio via CMS ou JSON externo;
- adicionar internacionalizacao (pt/en).

## Licenca

Distribuido sob a licenca MIT.

