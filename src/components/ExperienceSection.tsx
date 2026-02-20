import { motion } from "framer-motion";
import content from "@/data/content";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ExperienceSection = () => {
  return (
    <motion.section
      id="experiencia"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-12">
          <span className="font-mono text-primary text-lg">02.</span>
          {content.experience.heading}
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="space-y-12">
          {content.experience.items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[5px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
              <p className="font-mono text-xs text-muted-foreground mb-1">{exp.period}</p>
              <h3 className="text-lg font-medium text-foreground">
                {exp.role}{" "}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @ {exp.company}
                  </a>
                ) : (
                  <span className="text-primary">@ {exp.company}</span>
                )}
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
