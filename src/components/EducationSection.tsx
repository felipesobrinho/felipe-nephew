import { motion } from "framer-motion";
import content from "@/data/content";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const EducationSection = () => {
  return (
    <motion.section
      id="educacao"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-12">
          <span className="font-mono text-primary text-lg">03.</span>
          {content.education.heading}
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="space-y-12">
          {content.education.items.map((edu, i) => (
            <motion.div
              key={i}
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
