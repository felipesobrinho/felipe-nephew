import { motion } from "framer-motion";
import content, { type Principle } from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const PrincipleGrid = ({ items, highlight = false }: { items: Principle[]; highlight?: boolean }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((principle) => (
      <article
        key={principle.title}
        className={`bg-card rounded-lg p-6 border flex flex-col ${
          highlight ? "border-primary/40" : "border-border"
        }`}
      >
        <h4 className="text-base font-semibold text-foreground mb-2">{principle.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{principle.description}</p>
        <p className="font-mono text-xs text-primary mt-4">{principle.appliedIn}</p>
      </article>
    ))}
  </div>
);

const ArchitectureSection = () => {
  const { heading, intro, aiPrinciplesLabel, aiPrinciples, principlesLabel, principles, learning } =
    content.architecture;

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
        <SectionHeading number="03" title={heading} className="mb-6" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">{intro}</p>

        <h3 className="font-mono text-sm text-primary mb-4">{aiPrinciplesLabel}</h3>
        <PrincipleGrid items={aiPrinciples} highlight />

        <h3 className="font-mono text-sm text-primary mt-12 mb-4">{principlesLabel}</h3>
        <PrincipleGrid items={principles} />

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-sm text-foreground font-medium mr-2">{learning.label}:</span>
          {learning.items.map((item) => (
            <span key={item} className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;
