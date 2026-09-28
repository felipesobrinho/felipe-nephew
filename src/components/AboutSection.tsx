import { motion } from "framer-motion";
import content from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <motion.section
      id="sobre"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="01" title={content.about.heading} className="mb-8" />

        <div className="space-y-4 max-w-3xl">
          {content.about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-14">
          {content.about.skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-medium text-foreground mb-3">{group.group}</h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-muted-foreground before:content-['▹'] before:text-primary before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
