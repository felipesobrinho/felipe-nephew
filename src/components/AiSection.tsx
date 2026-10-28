import { motion } from "framer-motion";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import content, { type AiCase, type AiCaseCategory } from "@/data/content";
import { sectionVariants, sectionViewport } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "./SectionHeading";

type Filter = "todos" | AiCaseCategory;

const categoryLabel = (id: AiCaseCategory) =>
  content.ai.categories.find((c) => c.id === id)?.label ?? id;

const CaseLinks = ({ item }: { item: AiCase }) => {
  const links = [
    { href: item.links.demo, label: "Demo", Icon: ExternalLink },
    { href: item.links.github, label: "Código", Icon: Github },
    { href: item.links.video, label: "Vídeo", Icon: PlayCircle },
  ].filter((l): l is { href: string; label: string; Icon: typeof Github } => Boolean(l.href));

  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}: ${item.title}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon size={15} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};

const CaseCard = ({ item, index }: { item: AiCase; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.06, duration: 0.45 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Card className="h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300 shadow-none overflow-hidden">
      {item.media && (
        <a
          href={item.links.video ?? item.links.demo ?? item.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-border bg-muted/30"
          aria-label={`Abrir prova de ${item.title}`}
        >
          <img
            src={item.media.src}
            alt={item.media.alt}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </a>
      )}
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-mono font-normal">
            {categoryLabel(item.category)}
          </Badge>
          <Badge variant="outline" className="font-mono font-normal text-muted-foreground">
            {item.status}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-snug text-foreground">{item.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 flex-1">
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wide text-primary mb-1">Problema</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wide text-primary mb-1">Abordagem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.approach}</p>
        </div>
        <div className="rounded-md border border-primary/30 bg-primary/5 px-3 py-2">
          <h4 className="text-xs font-mono uppercase tracking-wide text-primary mb-1">Resultado</h4>
          <p className="text-sm text-foreground leading-relaxed">{item.result}</p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Stack">
          {item.stack.map((tech) => (
            <li key={tech} className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-0">
        <CaseLinks item={item} />
      </CardFooter>
    </Card>
  </motion.div>
);

const CaseGrid = ({ cases }: { cases: AiCase[] }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {cases.map((item, i) => (
      <CaseCard key={item.title} item={item} index={i} />
    ))}
  </div>
);

const AiSection = () => {
  const { heading, intro, categories, cases } = content.ai;
  const filters: { id: Filter; label: string }[] = [
    { id: "todos", label: "Todos" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <motion.section
      id="ia"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title={heading} className="mb-6" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">{intro}</p>

        <Tabs defaultValue="todos">
          <TabsList className="h-auto flex-wrap justify-start gap-1 bg-transparent p-0 mb-8">
            {filters.map((f) => (
              <TabsTrigger
                key={f.id}
                value={f.id}
                className="font-mono text-xs border border-border data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-primary/10"
              >
                {f.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {filters.map((f) => {
            const description = categories.find((c) => c.id === f.id)?.description;
            const filtered = f.id === "todos" ? cases : cases.filter((c) => c.category === f.id);
            return (
              <TabsContent key={f.id} value={f.id} className="mt-0">
                {description && (
                  <p className="font-mono text-xs text-muted-foreground mb-6">{description}</p>
                )}
                <CaseGrid cases={filtered} />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </motion.section>
  );
};

export default AiSection;
