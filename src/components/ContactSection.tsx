import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import content from "@/data/content";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Mail,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ContactSection = () => {
  return (
    <motion.section
      id="contato"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm mb-4">05. E agora?</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          {content.contact.heading}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          {content.contact.description}
        </p>
        <a
          href={`mailto:${content.contact.email}`}
          className="inline-block font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
        >
          Dizer olá
        </a>

        <div className="flex items-center justify-center gap-6 mt-16">
          {content.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
