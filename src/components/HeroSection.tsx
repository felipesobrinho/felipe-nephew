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
          className="text-muted-foreground max-w-lg text-base leading-relaxed mb-10"
        >
          {content.hero.description}
        </motion.p>
        <motion.a
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          href="#contato"
          className="inline-block font-mono text-sm border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-200"
        >
          Entre em contato
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
