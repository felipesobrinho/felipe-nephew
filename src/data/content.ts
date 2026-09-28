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

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
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
  architecture: {
    heading: string;
    intro: string;
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

const content: SiteContent = {
  name: "Felipe Sobrinho",
  role: "Engenheiro de Software",

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Arquitetura", href: "#arquitetura" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Educação", href: "#educacao" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    greeting: "Olá, eu sou",
    headline: "Engenheiro de Software Full Stack.",
    description:
      "Projeto e entrego sistemas web de ponta a ponta — da modelagem de dados e das decisões de arquitetura até a interface e o deploy — com foco em código limpo, manutenibilidade e dados confiáveis.",
    stats: [
      { value: "5+", label: "módulos de ERP refatorados" },
      { value: "300+", label: "arquivos com queries otimizadas" },
      { value: "2", label: "sistemas internos em produção na PUC Minas" },
    ],
  },

  about: {
    heading: "Sobre mim",
    paragraphs: [
      "Sou engenheiro de software full stack com background em engenharia de dados. Conduzo projetos de ponta a ponta — levantamento de requisitos, modelagem, back-end, interface, integrações, documentação técnica e deploy — e mantenho sistemas em produção para uma instituição de ensino.",
      "Trabalho com pull requests e code review, registro decisões técnicas por escrito e prefiro resolver a causa dos problemas: modelagem relacional consistente, queries analisadas com EXPLAIN, auditoria e regras de negócio explícitas no código.",
      "Unir desenvolvimento de software e engenharia de dados é o meu diferencial: eu construo o sistema e também sei tirar dele dados confiáveis para relatórios e decisões. Hoje aprofundo Clean/Hexagonal Architecture, DDD e system design na pós em Engenharia de Software.",
    ],
    skills: [
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
          "APIs REST",
          "Webhooks",
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
        group: "Cloud e entrega",
        items: ["Azure", "CI/CD", "Vercel", "Git e PR flow", "Power Automate", "Power Apps"],
      },
      {
        group: "Engenharia",
        items: [
          "Clean Code",
          "Code review",
          "Documentação técnica",
          "Auditoria e rastreabilidade",
          "Product owner",
          "Metodologias ágeis",
        ],
      },
    ],
  },

  architecture: {
    heading: "Arquitetura e engenharia",
    intro:
      "Princípios que aplico nos sistemas que construo e mantenho — cada um com o lugar onde já foi colocado em prática.",
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
          "Chamados no CSC, avisos no Microsoft Teams (webhooks) e eventos no Google Calendar são disparados por regra de negócio — só reservas presenciais —, sem acoplar o fluxo principal aos serviços externos.",
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
        "Clean Architecture",
        "Arquitetura Hexagonal",
        "Domain-Driven Design",
        "System design",
        "Concorrência e idempotência",
        "Métricas de banco de dados",
      ],
    },
  },

  experience: {
    heading: "Experiência",
    items: [
      {
        role: "Desenvolvedor Full Stack",
        company: "4MTI",
        period: "Jul — Ago 2026",
        summary:
          "Desenvolvimento e evolução de um ERP corporativo (módulos financeiro, colaboradores, clientes e funil de vendas), com foco em refatorar código legado para uma base limpa, escalável e performática.",
        highlights: [
          "Refatorei mais de 5 módulos do ERP e criei os módulos de Métricas GitLab e People Analytics.",
          "Otimizei consultas em mais de 300 arquivos: removi DATE_FORMAT implícitos, revisei joins e padronizei aliases, analisando planos de execução com EXPLAIN em MySQL e PostgreSQL.",
          "Implementei componentes de interface em React com estado global (Redux/Zustand) e formulários complexos (React Hook Form).",
          "Trabalhei com Git, pull requests e code review no dia a dia.",
        ],
        technologies: ["React", "PHP", "Python", "PostgreSQL", "MySQL", "Redux", "Zustand", "Git"],
      },
      {
        role: "Analista de TI",
        company: "PUC Minas — IEC",
        companyUrl: "https://www.pucminas.br",
        period: "2025 — 2026",
        summary:
          "Conduzi de ponta a ponta o desenvolvimento de sistemas internos em produção — do levantamento de requisitos ao deploy — atuando também como product owner e responsável pela documentação técnica.",
        highlights: [
          "Construí o sistema de gestão de inventário de TI (alocação, movimentação e auditoria de ativos) e o sistema de reservas de laboratórios (perfis de acesso, fluxo de aprovação e notificações).",
          "Integrei os sistemas ao CSC (ticketing interno), ao Microsoft Teams e ao Google Calendar.",
          "Conduzi o processo de ELT e projetei relatórios e dashboards para auditoria de uso dos laboratórios.",
          "Transformei layouts do Figma em interface e automatizei processos com Power Automate e Power Apps, em ambiente Azure com CI/CD.",
        ],
        technologies: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "NextAuth",
          "Azure",
          "Power Automate",
        ],
      },
      {
        role: "Estagiário / Analista de Suporte e Desenvolvimento",
        company: "Recivil",
        companyUrl: "https://www.recivil.com.br",
        period: "2023 — 2025",
        summary:
          "Desenvolvimento do sistema interno e do software fornecido a cartórios, no back-end com Java e Spring Boot (MVC) e no front-end com Vue.js.",
        highlights: [
          "Desenvolvi funcionalidades de front-end em Vue.js e rotas de back-end em Spring Boot.",
          "Escrevi queries de migração e de atualizações evolutivas do sistema.",
          "Executei manutenções em banco de dados de produção, diretamente no ambiente do cliente.",
        ],
        technologies: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "MySQL"],
      },
    ],
  },

  projects: {
    heading: "Projetos",
    intro:
      "Dois sistemas em produção em destaque, com as decisões de arquitetura por trás deles, e outros projetos abaixo.",
    items: [
      {
        title: "Gestão de Inventário de TI",
        featured: true,
        status: "Em produção",
        description:
          "Sistema web full stack para gerir o parque tecnológico da instituição: cadastro, alocação, movimentação e auditoria de ativos, com histórico completo e rastreabilidade.",
        decisions: [
          "Auditoria automática em toda alteração, feita por um serviço central reaproveitado pelas rotas.",
          "Multi-alocação de itens definida no modelo de dados, sem exceções pontuais no código.",
          "Busca global por atalho (Ctrl+K), exportação em PDF, desfazer/refazer com toasts e upload de arquivos no Supabase Storage.",
          "Módulo de fórum e várias categorias de inventário sobre o mesmo modelo base.",
        ],
        technologies: [
          "Next.js",
          "React 19",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "NextAuth",
          "TanStack Table",
          "Tailwind CSS",
        ],
        github: "https://github.com/felipesobrinho/InventarioIEC",
      },
      {
        title: "Sistema de Reservas de Laboratórios",
        featured: true,
        status: "Em produção",
        description:
          "Plataforma de reservas de laboratórios acadêmicos com fluxo de aprovação, controle de disponibilidade, notificações, auditoria e relatórios.",
        decisions: [
          "Ciclo de vida da reserva modelado como máquina de estados, com três perfis de acesso (RBAC).",
          "Integrações com CSC, Microsoft Teams (webhooks) e Google Calendar, acionadas só para reservas presenciais.",
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
      },
      {
        title: "Avante Vedações",
        status: "Pessoal",
        description:
          "ERP completo para uma empresa de vedações hidráulicas e pneumáticas, com módulos de estoque, vendas e financeiro.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "React Hook Form"],
        url: "https://avante-beta.vercel.app/",
        github: "https://github.com/felipesobrinho/avante",
      },
      {
        title: "Mundo Kids CRM",
        status: "Pessoal",
        description:
          "CRM sob medida com gestão de clientes, histórico de transações, controle financeiro, auditoria de vendas e automação de processos internos.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "Tailwind CSS"],
      },
      {
        title: "Site da Probem Gestão Criança",
        status: "Em desenvolvimento",
        description:
          "Landing page para uma ONG com painel administrativo: cada seção, texto e imagem é editável por quem não tem conhecimento técnico. Estrutura pensada para ser replicada em outras ONGs.",
        technologies: ["Next.js", "TypeScript", "Payload CMS"],
      },
      {
        title: "CardAppio — Cardápio Digital",
        status: "Acadêmico",
        description:
          "Cardápio digital com pedidos em mesa para restaurantes. Projeto destaque da mostra de projetos do curso, com nota máxima e menção honrosa da banca.",
        technologies: ["React Native", "Expo"],
        github: "https://github.com/felipesobrinho/pmv-ads-2023-2-e3-proj-mov-t1-CardAppio",
      },
      {
        title: "Smarteach — Plataforma de Ensino Online",
        status: "Acadêmico",
        description:
          "Plataforma de ensino online com comunicação entre alunos e professores e sistema de avaliação e feedback.",
        technologies: ["Next.js", "TypeScript", "React Hook Form", "Prisma", "PostgreSQL"],
        github: "https://github.com/felipesobrinho/Smarteach",
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
        period: "2025 — 2027",
        description:
          "Ênfase em arquitetura de software, padrões de projeto, sistemas distribuídos e estruturas de dados.",
      },
      {
        degree: "Bacharelado em Ciência da Computação",
        institution: "Estácio",
        period: "2022 — 2026",
      },
      {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "PUC Minas",
        institutionUrl: "https://www.pucminas.br",
        period: "2022 — 2025",
        description:
          "Formação prática em desenvolvimento de software e metodologias ágeis, com projetos aplicados a cenários reais de mercado.",
      },
    ],
  },

  contact: {
    heading: "Vamos conversar?",
    description:
      "Estou aberto a novas oportunidades como desenvolvedor full stack ou back-end. Se quiser falar sobre uma vaga ou um projeto, me mande uma mensagem.",
    email: "felipe.sobrinho.3@outlook.com",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/felipesobrinho", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/felipe-sobrinho/", icon: "linkedin" },
    { label: "Email", url: "mailto:felipe.sobrinho.3@outlook.com", icon: "email" },
  ],

  footer: "Desenvolvido com ❤️ e muito café.",
};

export default content;
