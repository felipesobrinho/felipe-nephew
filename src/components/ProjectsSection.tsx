import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import content, { type Project } from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex items-center gap-3">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Código de ${project.title} no GitHub`}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github size={18} />
      </a>
    )}
    {project.url && (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.title}`}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <ExternalLink size={18} />
      </a>
    )}
  </div>
);

const StatusBadge = ({ status }: { status: Project["status"] }) => (
  <span className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-0.5">
    {status}
  </span>
);

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors duration-300"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
      <div className="flex items-center gap-4 shrink-0">
        <StatusBadge status={project.status} />
        <ProjectLinks project={project} />
      </div>
    </div>
    <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>

    {project.decisions && (
      <div className="mt-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Decisões de arquitetura</h4>
        <ul className="space-y-2">
          {project.decisions.map((decision) => (
            <li
              key={decision}
              className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-['▹'] before:text-primary before:absolute before:left-0"
            >
              {decision}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex flex-wrap gap-2 mt-6">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.article>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    viewport={{ once: true }}
    className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
  >
    <div className="flex items-center justify-between mb-4">
      <StatusBadge status={project.status} />
      <ProjectLinks project={project} />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4">
      {project.technologies.map((tech) => (
        <span key={tech} className="font-mono text-xs text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  const featured = content.projects.items.filter((p) => p.featured);
  const others = content.projects.items.filter((p) => !p.featured);

  return (
    <motion.section
      id="projetos"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="04" title={content.projects.heading} className="mb-6" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          {content.projects.intro}
        </p>

        <div className="space-y-6">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        <h3 className="text-lg font-semibold text-foreground mt-16 mb-6">Outros projetos</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
