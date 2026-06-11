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
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  description?: string;
}


export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface ContactInfo {
  heading: string;
  description: string;
  email: string;
}

export interface SiteContent {
  name: string;
  role: string;
  nav: NavItem[];
  hero: {
    greeting: string;
    headline: string;
    description: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    technologies: string[];
  };
  experience: {
    heading: string;
    items: Experience[];
  };
  education: {
    heading: string;
    items: Education[];
  };
  projects: {
    heading: string;
    items: Project[];
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
    { label: "Experiência", href: "#experiencia" },
    { label: "Educação", href: "#educacao" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    greeting: "Olá, eu sou",
    headline: "Engenheiro de Software",
    description:
      "Crio soluções digitais modernas e performáticas, com foco em código e arquitetura limpas.",
  },

  about: {
    heading: "Sobre mim",
    paragraphs: [
      "Sou um desenvolvedor Full Stack com experiência em diversas tecnologias modernas, busco sempre entregar soluções que unam performance e boa experiência de uso.",
      "Quando não estou programando, gosto de explorar novas ferramentas, linguagens e contribuir com projetos open source para a comunidade.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },

  experience: {
    heading: "Experiência",
    items: [
      {
        role: "Analista de TI",
        company: "PUC Minas",
        companyUrl: "https://www.pucminas.br",
        period: "2025 — Presente",
        description:
          "Atuo como analista de TI na empresa, com foco em desenvolvimento de automações, infraestrutura e suporte técnico.",
        technologies: ["Power Automate", "Power Apps", "Azure"],
      },
      {
        role: "Estagiário/Analista de Suporte",
        company: "Recivil",
        companyUrl: "https://www.recivil.com.br",
        period: "2023 — 2025",
        description:
          "Atuei como estagiário e analista de suporte técnico, auxiliei no desenvolvimento do sistema interno e do software prestado pela empresa para auxílio dos cartórios, utilizando Vue e Java",
        technologies: ["Vue.js", "Java", "Spring Boot", "PostgreSQL", "MySQL"],
      },
    ],
  },

  education: {
    heading: "Educação",
    items: [
      {
        degree: "Pós-Gradução em Engenharia de Software",
        institution: "PUC Minas",
        institutionUrl: "https://www.pucminas.br",
        period: "2025 — 2027",
        description:
        "Formação com ênfase em engenharia de software, estruturas de dados, sistemas distribuídos, padrões de projeto e arquitetura de software.",
      },
      {
        degree: "Tecnólogo Análise e Desenvolvimento de Sistemas",
        institution: "PUC Minas",
        institutionUrl: "https://www.pucminas.br",
        period: "2022 — 2025",
        description:
          "Curso focado em desenvolvimento de software, com projetos práticos utilizando tecnologias modernas e metodologias ágeis. Onde foi possível desenvolver diversos projetos impactantes e com práticas realistas aplicadas no mercado de trabalho.",
      },
    ],
  },

  projects: {
    heading: "Projetos",
    items: [
      {
      title: "Gestão Inventário TI",
      description:
        "Sistema web full-stack para gestão completa do parque tecnológico institucional. Permite cadastrar, visualizar, alocar, movimentar e auditar ativos de TI, mantendo histórico completo e rastreabilidade dos equipamentos.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn/UI"
      ],
      github: "#",
      url: "#",
    },

    {
      title: "Sistema de Reservas de Laboratórios (IEC)",
      description:
        "Plataforma para gerenciamento de reservas de laboratórios acadêmicos com fluxo de aprovação, controle de disponibilidade, auditoria de reservas, notificações e gestão de usuários por perfil.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "Tailwind CSS"
      ],
      github: "#",
      url: "#",
    },
      {
        title: "Avante Vedações",
        description:
          "Sistema de gestão ERP para empresa de peças de vedações hidráulicas e pneumáticas de alta performance, com módulos de estoque, vendas e financeiro",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "Tailwind"],
        url: "https://avante-beta.vercel.app/",
        github: "https://github.com/felipesobrinho/avante",
      },
      {
        title: "Mundo Kids CRM",
        description:
          "Criação de um CRM Personalizado com gestão de clientes, histórico de transações, controle financeiro, auditorias de vendas e automação de processos internos",
        technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Zustand", "Tailwind"],
        url: "#",
        github: "#",
      },
      {
        title: "CardAppio - Cardápio Digital",
        description:
          "Projeto acadêmico de um cardápio digital para restaurantes físicos, com funcionalidades de pedidos em mesa. Projeto destaque da mostra de projetos do curso, com nota máxima e menção honrosa pela banca avaliadora.",
        technologies: ["React Native", "Expo"],
        github: "https://github.com/felipesobrinho/pmv-ads-2023-2-e3-proj-mov-t1-CardAppio",
      },
      {
        title: "Smarteach - Plataforma de Ensino Online",
        description:
          "Projeto acadêmico de uma plataforma de ensino online, com recursos para facilitar a comunicação entre alunos e professores, além de um sistema de avaliação e feedback.",
        technologies: ["Next.js", "Hook Form", "TypeScript", "Prisma", "PostgreSQL"],
        github: "https://github.com/felipesobrinho/Smarteach",
      },
    ],
  },

  contact: {
    heading: "Vamos conversar?",
    description:
      "Estou sempre aberto a novas oportunidades e projetos interessantes. Se quiser trocar uma ideia, é só me mandar uma mensagem.",
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
