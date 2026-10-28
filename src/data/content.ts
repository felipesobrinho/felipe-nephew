export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter";
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export type EducationStatus = "Em andamento" | "Concluído" | "Não concluído";

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  status: EducationStatus;
  description?: string;
}

export type ProjectStatus = "Em produção" | "Em desenvolvimento" | "Pessoal" | "Acadêmico";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  /** Decisões de arquitetura/engenharia — usadas nos projetos em destaque. */
  decisions?: string[];
  featured?: boolean;
  url?: string;
  github?: string;
}

/**
 * Categorias da seção "IA aplicada". Cada uma corresponde a uma das opções da
 * pergunta "O que aparece no seu portfólio de IA?".
 */
export type AiCaseCategory = "prompts" | "automacao" | "agente" | "producao";

export type AiCaseStatus = "Em produção" | "Em implementação" | "Em uso" | "Open source";

export interface AiCaseLinks {
  demo?: string;
  github?: string;
  video?: string;
}

export interface AiCaseMedia {
  src: string;
  alt: string;
}

export interface AiCase {
  title: string;
  category: AiCaseCategory;
  problem: string;
  approach: string;
  stack: string[];
  /** Resultado medido ou estado atual — nunca vazio. */
  result: string;
  status: AiCaseStatus;
  links: AiCaseLinks;
  media?: AiCaseMedia;
}

export interface AiCategoryInfo {
  id: AiCaseCategory;
  label: string;
  description: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Principle {
  title: string;
  description: string;
  appliedIn: string;
}

export interface ContactInfo {
  heading: string;
  description: string;
  email: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  name: string;
  role: string;
  nav: NavItem[];
  hero: {
    greeting: string;
    headline: string;
    description: string;
    stats: Stat[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    skills: SkillGroup[];
  };
  ai: {
    heading: string;
    intro: string;
    categories: AiCategoryInfo[];
    cases: AiCase[];
  };
  architecture: {
    heading: string;
    intro: string;
    aiPrinciplesLabel: string;
    aiPrinciples: Principle[];
    principlesLabel: string;
    principles: Principle[];
    learning: {
      label: string;
      items: string[];
    };
  };
  experience: {
    heading: string;
    items: Experience[];
  };
  projects: {
    heading: string;
    intro: string;
    items: Project[];
  };
  education: {
    heading: string;
    items: Education[];
  };
  contact: ContactInfo;
  socials: SocialLink[];
  footer: string;
}

const GITHUB = "https://github.com/felipesobrinho";

const content: SiteContent = {
  name: "Felipe Sobrinho",
  role: "Engenheiro de Software AI-first",

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "IA aplicada", href: "#ia" },
    { label: "Arquitetura", href: "#arquitetura" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Educação", href: "#educacao" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    greeting: "Olá, eu sou",
    headline: "Engenheiro de Software AI-first.",
    description:
      "Construo agentes, RAG, automações e ferramentas internas que resolvem problemas reais — da descoberta com a área de negócio ao sistema em produção, com contexto antes de código, revisão humana e observabilidade.",
    stats: [
      {
        value: "6 meses → 1 semana",
        label: "do processo entendido à solução entregue no módulo financeiro, com kit de documentação e IA",
      },
      {
        value: "~30 h/mês",
        label: "economizadas com automações de processos (Power Automate e Microsoft Graph)",
      },
      {
        value: "361 ativos",
        label: "e 152 colaboradores com alocações no inventário de TI em produção",
      },
    ],
  },

  about: {
    heading: "Sobre mim",
    paragraphs: [
      "Sou engenheiro de software full stack e Product Owner, com background em engenharia de dados. A IA é o jeito como eu trabalho, não um apoio ocasional: desenvolvo com agentes de código (Claude Code, Codex, Antigravity e Cursor), escrevo specs, skills e guardrails para que a entrega saia no padrão do projeto (harness engineering) e orquestro agentes em fluxos de negócio.",
      "Conduzo projetos de ponta a ponta — descoberta com as áreas, requisitos, BPMN, modelagem de dados, back-end, interface, integrações e deploy — e mantenho sistemas em produção para uma instituição de ensino.",
      "Velocidade sem critério vira retrabalho: toda saída de IA passa por revisão humana, e acompanho custo, latência e qualidade com observabilidade. Unir software, dados e IA é o meu diferencial — sei o que pedir ao modelo e como transformar a resposta em produto, ferramenta ou processo.",
    ],
    skills: [
      {
        group: "IA aplicada",
        items: [
          "Claude Code, Codex, Antigravity, Cursor",
          "Claude Skills e engenharia de contexto",
          "RAG (pgvector / Supabase Vector)",
          "Orquestração de agentes",
          "Harness engineering e guardrails",
          "Observabilidade com OpenTelemetry",
        ],
      },
      {
        group: "Linguagens",
        items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "SQL"],
      },
      {
        group: "Back-end e integrações",
        items: [
          "Node.js",
          "Next.js (App Router)",
          "Spring Boot",
          "APIs REST e webhooks",
          "Microsoft Graph",
          "NextAuth e RBAC",
        ],
      },
      {
        group: "Front-end",
        items: [
          "React",
          "Vue.js",
          "Tailwind CSS",
          "shadcn/ui",
          "Zustand e Redux",
          "React Hook Form",
          "TanStack Table",
          "Recharts",
        ],
      },
      {
        group: "Dados",
        items: [
          "PostgreSQL",
          "MySQL",
          "Prisma (migrations)",
          "Supabase",
          "Otimização com EXPLAIN",
          "ELT e dashboards",
        ],
      },
      {
        group: "Cloud, automação e produto",
        items: [
          "Azure",
          "CI/CD",
          "Vercel",
          "Power Automate",
          "Product owner e BPMN",
          "Metodologias ágeis",
        ],
      },
    ],
  },

  ai: {
    heading: "IA aplicada",
    intro:
      "Casos reais em que uso IA para resolver problemas, cada um com o problema, a abordagem, o resultado e uma prova clicável. Dados internos ficam de fora: os repositórios públicos usam dados fictícios.",
    categories: [
      {
        id: "prompts",
        label: "Prompts e experimentos",
        description: "Prompts bem estruturados, skills e experimentações com LLMs",
      },
      {
        id: "automacao",
        label: "Automações",
        description: "Automações que economizaram horas reais",
      },
      {
        id: "agente",
        label: "Agentes e ferramentas",
        description: "Ferramentas internas, dashboards e agentes que resolvem problemas",
      },
      {
        id: "producao",
        label: "Em produção",
        description: "Soluções em produção usadas por outras pessoas, com resultados mensuráveis",
      },
    ],
    cases: [
      {
        title: "Captação de Projetos com RAG e agentes",
        category: "agente",
        status: "Em implementação",
        problem:
          "Organizar a entrada de novos projetos na GTI (TI central da PUC Minas): transformar cada solicitação de formulário num pré-esboço coerente com os projetos já homologados, antes da triagem humana.",
        approach:
          "Microsoft Forms → item na lista do SharePoint → agente de pré-esboço com RAG sobre a Biblioteca de Projetos (Supabase Vector/pgvector) e Claude → rascunho para triagem humana da GTI no Teams → reunião de entendimento → kit de documentação gerado com RAG → homologação → backlog. Cada chamada gera um trace no OpenTelemetry (tokens, latência, custo e trechos recuperados), e um fluxo semanal consolida as métricas de uso da IA para a GTI.",
        stack: [
          "RAG",
          "Supabase Vector (pgvector)",
          "Claude",
          "OpenTelemetry",
          "JSON Schema",
          "Microsoft Forms",
          "SharePoint",
          "Teams",
        ],
        result:
          "Em implementação na GTI. O demo público reproduz o pipeline com documentos fictícios: ingestão, busca vetorial, pré-esboço validado por JSON Schema, triagem humana, conjunto de avaliação, traces e relatório semanal.",
        links: {
          github: `${GITHUB}/rag-captacao-demo`,
          video: `${GITHUB}/rag-captacao-demo/blob/main/docs/media/rag-captacao-demo.mp4`,
        },
        media: {
          src: "/ia/rag-captacao.jpg",
          alt: "Painel do demo de captação: demanda fictícia, trechos recuperados, pré-esboço em rascunho e métricas de observabilidade",
        },
      },
      {
        title: "Kit de documentação com IA (Claude Skill)",
        category: "prompts",
        status: "Em produção",
        problem:
          "No módulo de cálculo financeiro da IEC/PUC Minas, a previsão para entender o processo, levantar os requisitos e desenhar a solução era de 6 meses a 1 ano.",
        approach:
          "Uma skill no Claude com uma biblioteca de documentos-modelo: a partir do contexto do projeto, gera o MVP, as histórias de usuário (INVEST, critérios Dado/Quando/Então e Definição de Pronto) e o BPMN as-is/to-be no padrão da governança de TI. O responsável revisa cada documento antes de enviar.",
        stack: ["Claude Skills", "Engenharia de contexto", "Prompt engineering", "BPMN", "Histórias de usuário"],
        result:
          "Processo entendido, requisitos elicitados e priorizados e solução desenhada e entregue em 1 semana (previsão: 6 meses a 1 ano). O padrão é usado em todo projeto novo submetido à GTI.",
        links: {
          github: `${GITHUB}/claude-skill-doc-kit`,
        },
      },
      {
        title: "Harness de desenvolvimento AI-first",
        category: "prompts",
        status: "Open source",
        problem:
          "Agente de código sem contexto produz código fora do padrão do projeto, inventa regra de negócio e gera retrabalho — o famoso vibe coding.",
        approach:
          "A spec vira contexto e guardrail: AGENTS.md e CLAUDE.md com stack, convenções e proibições, specs com critérios Dado/Quando/Então, ADRs, skills de spec-first e portão de revisão, hooks de lint e testes e revisão humana de cada entrega. O mesmo harness serve Claude Code, Codex, Antigravity e Cursor.",
        stack: ["Claude Code", "Codex", "Antigravity", "Cursor", "Spec-driven development", "Guardrails"],
        result:
          "Template aberto e reutilizável com o método que uso no dia a dia nos meus projetos, pronto para copiar com um comando.",
        links: {
          github: `${GITHUB}/ai-harness-template`,
        },
      },
      {
        title: "Automações de processos com Power Automate e Microsoft Graph",
        category: "automacao",
        status: "Em produção",
        problem:
          "Rotinas administrativas repetidas quase todos os dias, cada uma consumindo de 30 min a 1 h de trabalho manual.",
        approach:
          "Fluxos no Power Automate e chamadas ao Microsoft Graph que eliminam as etapas manuais, incluindo as notificações automáticas do agendamento de laboratórios (chamado, aviso no Teams e evento no Google Calendar).",
        stack: ["Power Automate", "Microsoft Graph", "Webhooks do Teams", "Google Calendar API"],
        result: "~30 h/mês economizadas — cada automação poupa de 30 min a 1 h, e quase todas rodam diariamente.",
        links: {
          github: `${GITHUB}/laboratorios-iec`,
          video: `${GITHUB}/laboratorios-iec/blob/main/docs/media/laboratorios-demo.mp4`,
        },
        media: {
          src: "/ia/automacoes.svg",
          alt: "Diagrama antes e depois: tarefa manual diária de 30 min a 1 h substituída por gatilho, fluxo no Power Automate e Microsoft Graph",
        },
      },
      {
        title: "Inventário de TI (InventarioIEC)",
        category: "producao",
        status: "Em produção",
        problem:
          "A TI da IEC precisava de um único lugar para registrar os ativos, a quem cada um está alocado e o histórico de cada movimentação.",
        approach:
          "Sistema full stack construído AI-first, com agentes de código e revisão humana: Next.js 16 (App Router), Prisma e PostgreSQL/Supabase, NextAuth (credentials + bcrypt), TanStack Table, auditoria central (registrarAuditoria) em toda alteração, migrations versionadas e testes com Jest e Playwright.",
        stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL/Supabase", "NextAuth", "Jest", "Playwright"],
        result: "Em produção: ~10 usuários da TI, 361 ativos e 152 colaboradores inventariados com suas alocações.",
        links: {
          github: `${GITHUB}/InventarioIEC`,
          video: `${GITHUB}/InventarioIEC/blob/main/docs/media/inventario-demo.mp4`,
        },
        media: {
          src: "/ia/inventario.jpg",
          alt: "Dashboard do inventário de TI com dados fictícios",
        },
      },
      {
        title: "Agendamento de Laboratórios (LaboratoriosIEC)",
        category: "producao",
        status: "Em produção",
        problem:
          "Agendar os laboratórios da IEC com aprovação, controle de disponibilidade, abertura de chamado e aviso às equipes envolvidas.",
        approach:
          "Máquina de estados de reservas, 3 perfis de acesso (RBAC), integrações com a API de chamados, webhooks do Microsoft Teams e Google Calendar disparadas só em reservas presenciais, auditoria e relatórios em Recharts alimentados por ELT (SharePoint e múltiplos Google Calendars).",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL/Supabase", "Recharts", "Teams webhooks", "Google Calendar"],
        result:
          "Em produção na IEC: a cada reserva presencial, chamado e aviso no Teams saem automaticamente; na confirmação, o evento vai para a agenda do laboratório. Cada passo fica no histórico da reserva.",
        links: {
          github: `${GITHUB}/laboratorios-iec`,
          video: `${GITHUB}/laboratorios-iec/blob/main/docs/media/laboratorios-demo.mp4`,
        },
        media: {
          src: "/ia/laboratorios.jpg",
          alt: "Tela de reservas de laboratórios com dados fictícios",
        },
      },
    ],
  },

  architecture: {
    heading: "Como eu construo",
    intro:
      "Princípios que aplico nos sistemas que construo e mantenho — com IA e sem ela —, cada um com o lugar onde já foi colocado em prática.",
    aiPrinciplesLabel: "Com IA",
    aiPrinciples: [
      {
        title: "Contexto antes de código",
        description:
          "Antes de pedir código a um agente, escrevo a spec: arquitetura, modelo de dados, regras de negócio e convenções. Ela vira contexto e guardrail (AGENTS.md, CLAUDE.md e skills) e mantém a entrega no padrão do projeto.",
        appliedIn: "ai-harness-template e sistemas da IEC",
      },
      {
        title: "Revisão humana obrigatória",
        description:
          "Nenhuma saída de IA vai direto para produção: o pré-esboço da Captação nasce marcado como rascunho e passa pela triagem da GTI, e todo código gerado passa por revisão, lint e testes antes do merge.",
        appliedIn: "Captação de Projetos e harness de desenvolvimento",
      },
      {
        title: "RAG em vez de prompt gigante",
        description:
          "Em vez de colar tudo no prompt, recupero só os trechos relevantes da base (pgvector/Supabase Vector) e exijo saída estruturada, validada por JSON Schema, que cita de onde veio cada informação.",
        appliedIn: "Captação de Projetos (rag-captacao-demo)",
      },
      {
        title: "Observabilidade de custo, latência e qualidade",
        description:
          "Cada chamada ao modelo gera um trace no OpenTelemetry com tokens, latência, custo e trechos recuperados, e um fluxo semanal consolida as métricas de uso da IA. Sem medir, não dá para saber se a IA está ajudando.",
        appliedIn: "Captação de Projetos",
      },
    ],
    principlesLabel: "Arquitetura de software",
    principles: [
      {
        title: "Preocupações transversais em um só lugar",
        description:
          "Auditoria não é copiada em cada rota: um serviço central registra quem fez o quê, e as rotas apenas o chamam. Uma regra muda em um ponto, não em dezenas.",
        appliedIn: "Inventário TI e Reservas de Laboratórios",
      },
      {
        title: "Regras de negócio explícitas",
        description:
          "O ciclo de vida da reserva é uma máquina de estados e o acesso é controlado por três perfis (RBAC). As transições válidas ficam declaradas, em vez de espalhadas em condicionais.",
        appliedIn: "Reservas de Laboratórios",
      },
      {
        title: "Integrações condicionais e desacopladas",
        description:
          "Chamados, avisos no Microsoft Teams (webhooks) e eventos no Google Calendar são disparados por regra de negócio — só reservas presenciais —, sem acoplar o fluxo principal aos serviços externos.",
        appliedIn: "Reservas de Laboratórios",
      },
      {
        title: "Modelagem de dados guiada pelo domínio",
        description:
          "Um ativo pode ter várias alocações ativas por decisão de design, horários de reserva vivem em tabela própria (dia, hora de início, hora de fim) e todo schema evolui somente por migrations versionadas.",
        appliedIn: "Inventário TI e Reservas de Laboratórios",
      },
      {
        title: "Dados como produto (ELT)",
        description:
          "Extração, carga e transformação de fontes diferentes — SharePoint e múltiplos calendários do Google Agenda — para auditar o uso dos laboratórios e alimentar relatórios e dashboards.",
        appliedIn: "Relatórios e auditoria de laboratórios",
      },
      {
        title: "Evolução de legado com evidência",
        description:
          "Refatoração de módulos de um ERP corporativo guiada por planos de execução (EXPLAIN) no MySQL e no PostgreSQL: joins revisados, conversões implícitas de data removidas e queries padronizadas.",
        appliedIn: "ERP corporativo na 4MTI",
      },
    ],
    learning: {
      label: "Em aprofundamento",
      items: [
        "Avaliação de LLMs (evals)",
        "Clean Architecture",
        "Arquitetura Hexagonal",
        "Domain-Driven Design",
        "System design",
        "Concorrência e idempotência",
      ],
    },
  },

  experience: {
    heading: "Experiência",
    items: [
      {
        role: "Engenheiro de Software Full Stack & Product Owner",
        company: "PUC Minas — IEC",
        companyUrl: "https://www.pucminas.br",
        period: "Dez 2025 — atual",
        summary:
          "Construo de ponta a ponta as soluções internas do Instituto de Educação Continuada — da descoberta com os setores à homologação com a GTI (TI central) —, de forma AI-first e atuando também como Product Owner.",
        highlights: [
          "Criei o kit de documentação com IA (skill no Claude + biblioteca de documentos-modelo): no módulo de cálculo financeiro, a previsão de 6 meses a 1 ano virou 1 semana para entender o processo, priorizar requisitos e entregar a solução. O padrão é usado em todo projeto novo submetido à GTI.",
          "Automatizei rotinas com Power Automate e Microsoft Graph, incluindo as notificações do agendamento: ~30 h/mês economizadas.",
          "Inventário de TI em produção para ~10 usuários, com 361 ativos e 152 colaboradores inventariados com alocações; auditoria central, migrations versionadas e testes com Jest e Playwright.",
          "Agendamento de laboratórios em produção: máquina de estados, 3 perfis RBAC, integrações com a API de chamados, Microsoft Teams e Google Calendar, auditoria, relatórios e ELT.",
          "Em implementação: Captação de Projetos com RAG (Supabase Vector) e Claude, triagem humana no Teams e observabilidade com OpenTelemetry.",
        ],
        technologies: [
          "Claude Code",
          "RAG",
          "OpenTelemetry",
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL/Supabase",
          "Power Automate",
          "Microsoft Graph",
          "Azure",
        ],
      },
      {
        role: "Engenheiro de Software & Consultor de Automação de Processos",
        company: "Pró-Bem Gestão Criança",
        companyUrl: "https://probemgestaocrianca.org.br",
        period: "Out 2026 — atual",
        summary:
          "Contrato PJ: conduzo a transformação digital de uma ONG que assessora outras organizações sociais, do mapeamento dos processos à entrega.",
        highlights: [
          "Aplicação de gestão financeira web (Next.js) e desktop (Electron), com Prisma, pnpm e testes em Vitest — em desenvolvimento.",
          "Digitalização do processo das ONGs assessoradas, pensada para ser replicada em cada instituição.",
          "CMS replicável com Payload CMS e Next.js, para que equipes sem conhecimento técnico mantenham o próprio site.",
        ],
        technologies: ["Next.js", "Electron", "TypeScript", "Prisma", "pnpm", "Vitest", "Payload CMS"],
      },
      {
        role: "Engenheiro de Software Full Stack",
        company: "4MTI",
        period: "Jul — Ago 2026",
        summary:
          "Desenvolvimento e evolução de um ERP corporativo (financeiro, colaboradores, clientes e funil de vendas), refatorando código legado para uma base limpa, escalável e performática.",
        highlights: [
          "Refatorei mais de 5 módulos do ERP e criei os módulos de People Analytics e Métricas GitLab.",
          "Fiz mais de 300 otimizações de queries guiadas por planos de execução (EXPLAIN) em MySQL e PostgreSQL: joins revisados, conversões implícitas de data removidas e aliases padronizados.",
          "Implementei interfaces em React com estado global (Redux/Zustand) e formulários complexos (React Hook Form), com Git, pull requests e code review no dia a dia.",
        ],
        technologies: ["React", "PHP", "Python", "PostgreSQL", "MySQL", "Redux", "Zustand", "Git"],
      },
      {
        role: "Desenvolvedor de Software — Cartosoft",
        company: "Recivil",
        companyUrl: "https://www.recivil.com.br",
        period: "Dez 2023 — Dez 2025",
        summary:
          "Desenvolvimento do Cartosoft, sistema usado por mais de 1.000 cartórios, no back-end com Java e Spring Boot e no front-end com Vue.js.",
        highlights: [
          "Desenvolvi funcionalidades de front-end em Vue.js e rotas de back-end em Spring Boot.",
          "Escrevi queries de migração e de atualizações evolutivas do sistema em PostgreSQL e MySQL.",
          "Executei manutenções em bancos de dados de produção, diretamente no ambiente do cliente.",
        ],
        technologies: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "MySQL"],
      },
    ],
  },

  projects: {
    heading: "Projetos",
    intro:
      "Os dois sistemas em produção com as decisões de arquitetura por trás deles, e outros projetos abaixo.",
    items: [
      {
        title: "Gestão de Inventário de TI",
        featured: true,
        status: "Em produção",
        description:
          "Sistema web full stack para gerir o parque tecnológico da instituição: cadastro, alocação, movimentação e auditoria de ativos, com histórico completo e rastreabilidade.",
        decisions: [
          "Auditoria automática em toda alteração, feita por um serviço central (registrarAuditoria) reaproveitado pelas rotas.",
          "Multi-alocação de itens definida no modelo de dados, sem exceções pontuais no código.",
          "Schema evoluído só por migrations versionadas; testes unitários com Jest e ponta a ponta com Playwright.",
          "Busca global por atalho (Ctrl+K), exportação em PDF, desfazer/refazer com toasts e upload de arquivos no Supabase Storage.",
        ],
        technologies: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "NextAuth",
          "TanStack Table",
          "Jest",
          "Playwright",
        ],
        github: `${GITHUB}/InventarioIEC`,
      },
      {
        title: "Sistema de Reservas de Laboratórios",
        featured: true,
        status: "Em produção",
        description:
          "Plataforma de reservas de laboratórios acadêmicos com fluxo de aprovação, controle de disponibilidade, notificações, auditoria e relatórios.",
        decisions: [
          "Ciclo de vida da reserva modelado como máquina de estados, com três perfis de acesso (RBAC).",
          "Integrações com a API de chamados, Microsoft Teams (webhooks) e Google Calendar, acionadas só para reservas presenciais.",
          "Horários em tabela relacionada (dia, início e fim) e evolução do banco somente por migrations do Prisma.",
          "Páginas de auditoria e relatórios com Recharts, alimentadas por um processo de ELT.",
          "Tema claro/escuro com variáveis semânticas do shadcn/ui.",
        ],
        technologies: [
          "Next.js 14",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "shadcn/ui",
          "Recharts",
          "Tailwind CSS",
        ],
        github: `${GITHUB}/laboratorios-iec`,
      },
      {
        title: "Pró-Bem — gestão financeira e CMS",
        status: "Em desenvolvimento",
        description:
          "Aplicação de gestão financeira web e desktop para a ONG, digitalização do processo das instituições assessoradas e um CMS replicável para equipes não técnicas.",
        technologies: ["Next.js", "Electron", "Prisma", "Vitest", "Payload CMS"],
      },
      {
        title: "Avante Vedações",
        status: "Pessoal",
        description:
          "ERP para uma empresa de vedações hidráulicas e pneumáticas, com módulos de estoque, vendas e financeiro.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "React Hook Form"],
        url: "https://avante-beta.vercel.app/",
        github: `${GITHUB}/avante`,
      },
      {
        title: "Mundo Kids CRM",
        status: "Pessoal",
        description:
          "CRM sob medida com gestão de clientes, histórico de transações, controle financeiro e automação de processos internos.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "Tailwind CSS"],
      },
      {
        title: "CardAppio — Cardápio Digital",
        status: "Acadêmico",
        description:
          "Cardápio digital com pedidos em mesa para restaurantes. Projeto destaque da mostra do curso, com nota máxima e menção honrosa da banca.",
        technologies: ["React Native", "Expo"],
        github: `${GITHUB}/pmv-ads-2023-2-e3-proj-mov-t1-CardAppio`,
      },
      {
        title: "Smarteach — Plataforma de Ensino Online",
        status: "Acadêmico",
        description:
          "Plataforma de ensino online com comunicação entre alunos e professores e sistema de avaliação e feedback.",
        technologies: ["Next.js", "TypeScript", "React Hook Form", "Prisma", "PostgreSQL"],
        github: `${GITHUB}/Smarteach`,
      },
    ],
  },

  education: {
    heading: "Educação",
    items: [
      {
        degree: "Pós-graduação em Engenharia de Software",
        institution: "PUC Minas",
        institutionUrl: "https://www.pucminas.br",
        period: "2026 — 2027",
        status: "Em andamento",
        description:
          "Ênfase em arquitetura de software, padrões de projeto, sistemas distribuídos e estruturas de dados.",
      },
      {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "PUC Minas",
        institutionUrl: "https://www.pucminas.br",
        period: "2022 — 2025",
        status: "Concluído",
        description:
          "Formação prática em desenvolvimento de software e metodologias ágeis, com projetos aplicados a cenários reais de mercado.",
      },
      {
        degree: "Bacharelado em Ciência da Computação",
        institution: "Estácio",
        period: "2022 — 2026",
        status: "Não concluído",
      },
    ],
  },

  contact: {
    heading: "Vamos conversar?",
    description:
      "Estou aberto a oportunidades como engenheiro de software AI-first — construindo agentes, RAG, automações e produtos com IA. Se quiser falar sobre uma vaga ou um projeto, me mande uma mensagem.",
    email: "felipe.sobrinho.3@outlook.com",
  },

  socials: [
    { label: "GitHub", url: GITHUB, icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/felipe-sobrinho/", icon: "linkedin" },
    { label: "Email", url: "mailto:felipe.sobrinho.3@outlook.com", icon: "email" },
  ],

  footer: "Desenvolvido com ❤️, muito café e agentes de código com revisão humana.",
};

export default content;
