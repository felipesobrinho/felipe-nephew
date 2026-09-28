import { describe, it, expect } from "vitest";
import content from "./content";

describe("integridade do conteúdo do portfólio", () => {
  it("todo item da navegação aponta para uma seção existente na página", () => {
    const sectionIds = ["sobre", "arquitetura", "experiencia", "projetos", "educacao", "contato"];
    for (const item of content.nav) {
      expect(sectionIds).toContain(item.href.replace("#", ""));
    }
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

  it("todo princípio de arquitetura indica onde foi aplicado", () => {
    for (const principle of content.architecture.principles) {
      expect(principle.appliedIn.trim()).not.toBe("");
    }
  });

  it("links externos usam https ou mailto", () => {
    const urls = [
      ...content.socials.map((s) => s.url),
      ...content.projects.items.flatMap((p) => [p.url, p.github].filter(Boolean) as string[]),
    ];
    for (const url of urls) {
      expect(url).toMatch(/^(https:\/\/|mailto:)/);
    }
  });
});
