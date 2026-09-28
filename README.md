# Portfolio — Minimal Single-Page

Um portfolio pessoal minimalista e moderno, construído como uma single-page application com arquitetura inspirada em CMS headless para fácil manutenção.

## 🖥️ Sobre o Projeto

O site apresenta as seguintes seções:

- **Hero** — Posicionamento, indicadores e chamadas para ação
- **Sobre mim** — Bio e competências agrupadas por área
- **Arquitetura e engenharia** — Princípios aplicados e onde foram aplicados
- **Experiência** — Timeline com resultados por posição
- **Projetos** — Estudos de caso com decisões de arquitetura e demais projetos
- **Educação** — Formação acadêmica e especializações
- **Contato** — Convite para contato e link direto para e-mail

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
│   ├── content.ts        # Dados centralizados e tipados (CMS-like)
│   └── content.test.ts   # Testes de integridade do conteúdo
├── lib/
│   └── motion.ts         # Variantes de animação compartilhadas
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ArchitectureSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── EducationSection.tsx
│   ├── SectionHeading.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── pages/
    └── Index.tsx          # Composição da single-page
```

## 🚀 Como rodar

```sh
git clone https://github.com/felipesobrinho/felipe-nephew.git
cd felipe-nephew
npm i
npm run dev      # desenvolvimento
npm test         # testes
npm run build    # build de produção
```
