import { motion } from "framer-motion";
import content from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl mx-auto w-full pt-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-primary text-sm mb-4"
        >
          {content.hero.greeting}
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl font-bold text-foreground mb-2"
        >
          {content.name}.
        </motion.h1>
        <motion.h2
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl font-bold text-muted-foreground mb-6"
        >
          {content.hero.headline}
        </motion.h2>
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground max-w-xl text-base leading-relaxed mb-10"
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-14"
        >
          <a
            href="#projetos"
            className="inline-block font-mono text-sm bg-primary text-primary-foreground px-6 py-3 rounded hover:bg-primary/90 transition-colors duration-200"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-block font-mono text-sm border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            Entre em contato
          </a>
        </motion.div>

        <motion.dl
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl border-t border-border pt-8"
        >
          {content.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold text-foreground">{stat.value}</dt>
              <dd className="text-sm text-muted-foreground mt-1 leading-snug">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default HeroSection;
