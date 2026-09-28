import { motion } from "framer-motion";
import content from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const ArchitectureSection = () => {
  const { heading, intro, principles, learning } = content.architecture;

  return (
    <motion.section
      id="arquitetura"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title={heading} className="mb-6" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">{intro}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="bg-card rounded-lg p-6 border border-border flex flex-col"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {principle.description}
              </p>
              <p className="font-mono text-xs text-primary mt-4">{principle.appliedIn}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-sm text-foreground font-medium mr-2">{learning.label}:</span>
          {learning.items.map((item) => (
            <span
              key={item}
              className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
