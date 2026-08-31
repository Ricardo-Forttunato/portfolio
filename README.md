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
- Yarn 4

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

O projeto utiliza `yarn@4.15.0` como gerenciador de pacotes.

### 1. Habilitar o Corepack

```bash
corepack enable
```

### 2. Instalar dependencias

```bash
yarn install
```

### 3. Rodar em desenvolvimento

```bash
yarn dev
```

### 4. Gerar build de producao

```bash
yarn build
```

### 5. Visualizar build local

```bash
yarn preview
```

### 6. Executar testes

```bash
yarn test
```

### 7. Validar lint

```bash
yarn lint
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

- `yarn dev`: inicia o servidor de desenvolvimento com Vite
- `yarn build`: executa a checagem TypeScript e gera a build de producao
- `yarn preview`: executa o preview da build local
- `yarn lint`: valida o padrao de codigo com ESLint
- `yarn test`: executa os testes com Vitest

## Roadmap Sugerido

- ampliar cobertura de testes para fluxos de pagina e integracao;
- configurar CI para lint + build;
- versionar conteudo do portfolio via CMS ou JSON externo;
- adicionar testes end-to-end para navegacao principal.

## Licenca

Distribuido sob a licenca MIT.
