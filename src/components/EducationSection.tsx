import { motion } from "framer-motion";
import content from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const EducationSection = () => {
  return (
    <motion.section
      id="educacao"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="05" title={content.education.heading} />

        <div className="space-y-12">
          {content.education.items.map((edu, i) => (
            <motion.div
              key={`${edu.degree}-${edu.institution}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l border-border hover:border-primary transition-colors duration-300"
            >
              <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[5px] rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
              <p className="font-mono text-xs text-muted-foreground mb-1">{edu.period}</p>
              <h3 className="text-lg font-medium text-foreground">
                {edu.degree}{" "}
                {edu.institutionUrl ? (
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @ {edu.institution}
                  </a>
                ) : (
                  <span className="text-primary">@ {edu.institution}</span>
                )}
              </h3>
              {edu.description && (
                <p className="text-muted-foreground mt-2 leading-relaxed">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
