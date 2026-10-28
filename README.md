# felipe-nephew — portfólio de Felipe Sobrinho

Portfólio de **engenheiro de software AI-first**: agentes, RAG, automações e ferramentas internas em produção, cada case com problema, abordagem, resultado e uma prova clicável.

**Ao vivo:** https://felipe-nephew.vercel.app

| Número | O que significa |
|---|---|
| **6 meses → 1 semana** | Módulo de cálculo financeiro: previsão de 6 meses a 1 ano; com o kit de documentação e IA, processo entendido, requisitos priorizados e solução entregue em 1 semana |
| **~30 h/mês** | Economizadas com automações (Power Automate, Microsoft Graph e notificações do agendamento) |
| **361 ativos · 152 colaboradores** | Geridos com alocações no inventário de TI em produção (~10 usuários) |

## Seções

- **Hero** — posicionamento AI-first e os três números de impacto
- **Sobre** — bio e competências agrupadas por área
- **IA aplicada** (`#ia`) — cases com filtro por categoria: *Prompts e experimentos*, *Automações*, *Agentes e ferramentas* e *Em produção*
- **Como eu construo** — princípios de IA (contexto antes de código, revisão humana obrigatória, RAG em vez de prompt gigante, observabilidade de custo, latência e qualidade) e princípios de arquitetura de software, cada um com o lugar onde foi aplicado
- **Experiência**, **Projetos**, **Educação** e **Contato**

## Conteúdo como dado

Todo o conteúdo vive em [`src/data/content.ts`](src/data/content.ts), tipado, e o layout só renderiza. Um case de IA é um `AiCase`:

```ts
interface AiCase {
  title: string;
  category: "prompts" | "automacao" | "agente" | "producao";
  problem: string;
  approach: string;
  stack: string[];
  result: string;            // nunca vazio
  status: AiCaseStatus;
  links: { demo?: string; github?: string; video?: string };
  media?: { src: string; alt: string };
}
```

Os testes em [`src/data/content.test.ts`](src/data/content.test.ts) funcionam como contrato do conteúdo: todo case precisa ter resultado e ao menos uma prova (link ou mídia), as quatro categorias precisam ter pelo menos um case, links externos usam HTTPS, a navegação aponta para seções existentes e a formação não pode aparecer com status errado.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Card, Badge, Tabs) · Framer Motion · Vitest

## Estrutura

```
src/
├── data/
│   ├── content.ts        # conteúdo centralizado e tipado (CMS-like)
│   └── content.test.ts   # contrato do conteúdo
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── AiSection.tsx     # IA aplicada: cards + filtro por categoria
│   ├── ArchitectureSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── EducationSection.tsx
│   └── ContactSection.tsx
└── pages/Index.tsx       # composição da single-page
public/
├── og.png                # imagem de Open Graph
└── ia/                   # capas e diagramas dos cases (dados fictícios)
```

## Como rodar

```sh
npm ci
npm run dev      # desenvolvimento
npm test         # contrato do conteúdo
npm run lint
npm run build    # build de produção
```

Imagens e vídeos dos cases usam apenas dados fictícios. Nenhum dado interno da PUC Minas ou da Pró-Bem é publicado.
