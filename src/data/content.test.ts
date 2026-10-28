import { describe, it, expect } from "vitest";
import content, { type AiCaseCategory } from "./content";

const SECTION_IDS = ["sobre", "ia", "arquitetura", "experiencia", "projetos", "educacao", "contato"];
const AI_CATEGORIES: AiCaseCategory[] = ["prompts", "automacao", "agente", "producao"];

const caseProofs = (c: (typeof content.ai.cases)[number]) =>
  [c.links.demo, c.links.github, c.links.video, c.media?.src].filter(Boolean) as string[];

describe("integridade do conteúdo do portfólio", () => {
  it("todo item da navegação aponta para uma seção existente na página", () => {
    for (const item of content.nav) {
      expect(SECTION_IDS).toContain(item.href.replace("#", ""));
    }
  });

  it("IA aplicada vem logo depois de Sobre na navegação", () => {
    const hrefs = content.nav.map((n) => n.href);
    expect(hrefs.indexOf("#ia")).toBe(hrefs.indexOf("#sobre") + 1);
  });

  it("não há projetos com título duplicado", () => {
    const titles = content.projects.items.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("projetos em destaque documentam decisões de arquitetura", () => {
    const featured = content.projects.items.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
    for (const project of featured) {
      expect(project.decisions?.length ?? 0).toBeGreaterThan(0);
    }
  });

  it("toda experiência tem destaques e tecnologias", () => {
    for (const exp of content.experience.items) {
      expect(exp.highlights.length).toBeGreaterThan(0);
      expect(exp.technologies.length).toBeGreaterThan(0);
    }
  });

  it("experiências seguem a ordem dos currículos", () => {
    expect(content.experience.items.map((e) => e.company)).toEqual([
      "PUC Minas — IEC",
      "Pró-Bem Gestão Criança",
      "4MTI",
      "Recivil",
    ]);
  });

  it("todo princípio indica onde foi aplicado", () => {
    for (const principle of [...content.architecture.aiPrinciples, ...content.architecture.principles]) {
      expect(principle.appliedIn.trim()).not.toBe("");
    }
  });

  it("links externos usam https ou mailto", () => {
    const urls = [
      ...content.socials.map((s) => s.url),
      ...content.projects.items.flatMap((p) => [p.url, p.github].filter(Boolean) as string[]),
      ...content.ai.cases.flatMap((c) => [c.links.demo, c.links.github, c.links.video].filter(Boolean) as string[]),
    ];
    for (const url of urls) {
      expect(url).toMatch(/^(https:\/\/|mailto:)/);
    }
  });

  it("o bacharelado nunca aparece como concluído", () => {
    const bacharelado = content.education.items.find((e) => e.degree.startsWith("Bacharelado"));
    expect(bacharelado?.status).toBe("Não concluído");
  });

  it("Power Apps não aparece nas competências", () => {
    const skills = content.about.skills.flatMap((g) => g.items).join(" ");
    expect(skills).not.toMatch(/power apps/i);
  });
});

describe("seção IA aplicada", () => {
  it("todo case de IA tem resultado e ao menos uma prova (link ou mídia)", () => {
    expect(content.ai.cases.length).toBeGreaterThan(0);
    for (const c of content.ai.cases) {
      expect(c.result.trim(), c.title).not.toBe("");
      expect(caseProofs(c).length, c.title).toBeGreaterThan(0);
    }
  });

  it("as quatro categorias da pergunta têm ao menos um case", () => {
    expect(content.ai.categories.map((c) => c.id).sort()).toEqual([...AI_CATEGORIES].sort());
    for (const category of AI_CATEGORIES) {
      const cases = content.ai.cases.filter((c) => c.category === category);
      expect(cases.length, category).toBeGreaterThan(0);
    }
  });

  it("todo case descreve problema, abordagem e stack", () => {
    for (const c of content.ai.cases) {
      expect(c.problem.trim(), c.title).not.toBe("");
      expect(c.approach.trim(), c.title).not.toBe("");
      expect(c.stack.length, c.title).toBeGreaterThan(0);
    }
  });

  it("mídias dos cases são arquivos locais com texto alternativo", () => {
    for (const c of content.ai.cases) {
      if (!c.media) continue;
      expect(c.media.src, c.title).toMatch(/^\/ia\/.+\.(jpg|png|webp|svg|gif)$/);
      expect(c.media.alt.trim(), c.title).not.toBe("");
    }
  });

  it("não há cases com título duplicado", () => {
    const titles = content.ai.cases.map((c) => c.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("o hero traz os três números de impacto", () => {
    const stats = content.hero.stats.map((s) => `${s.value} ${s.label}`).join(" | ");
    expect(stats).toContain("6 meses → 1 semana");
    expect(stats).toContain("~30 h/mês");
    expect(stats).toMatch(/361 ativos.*152 colaboradores/);
  });
});
