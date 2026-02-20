import { motion } from "framer-motion";
import content from "@/data/content";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const AboutSection = () => {
  return (
    <motion.section
      id="sobre"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground mb-8">
          <span className="font-mono text-primary text-lg">01.</span>
          {content.about.heading}
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-2">
              {content.about.technologies.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-sm text-muted-foreground before:content-['▹'] before:text-primary before:mr-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
