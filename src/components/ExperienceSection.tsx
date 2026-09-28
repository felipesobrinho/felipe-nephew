import { motion } from "framer-motion";
import content from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  return (
    <motion.section
      id="experiencia"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="03" title={content.experience.heading} />

        <div className="space-y-14">
          {content.experience.items.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
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
              <p className="text-muted-foreground mt-2 leading-relaxed">{exp.summary}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed pl-5 relative before:content-['▹'] before:text-primary before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
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
