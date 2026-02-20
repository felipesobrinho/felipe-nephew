# Portfolio — Minimal Single-Page

Um portfolio pessoal minimalista e moderno, construído como uma single-page application com arquitetura inspirada em CMS headless para fácil manutenção.

## 🖥️ Sobre o Projeto

O site apresenta as seguintes seções:

- **Hero** — Apresentação inicial com nome, título e chamada para ação
- **Sobre mim** — Breve bio e tecnologias dominadas
- **Experiência** — Timeline de experiências profissionais
- **Educação** — Formação acadêmica e especializações
- **Projetos** — Cards com projetos em destaque, links e tecnologias
- **Contato** — Seção com convite para contato e link direto para e-mail

Todo o conteúdo é gerenciado a partir de um único arquivo de dados (`src/data/content.ts`), funcionando como um CMS headless — basta editar os dados e o layout se adapta automaticamente.

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **React 18** | Biblioteca principal de UI |
| **TypeScript** | Tipagem estática em todo o projeto |
| **Vite** | Build tool e dev server |
| **Tailwind CSS** | Estilização utilitária com design tokens |
| **shadcn/ui** | Componentes base acessíveis |
| **Framer Motion** | Animações de entrada e transições |
| **Lucide React** | Ícones SVG |
| **React Router** | Roteamento SPA |

## 📁 Estrutura

```
src/
├── data/
│   └── content.ts        # Dados centralizados (CMS-like)
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── pages/
    └── Index.tsx          # Composição da single-page
```

## 🚀 Como rodar

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```
