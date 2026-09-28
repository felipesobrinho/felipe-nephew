interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

const SectionHeading = ({ number, title, className = "mb-12" }: SectionHeadingProps) => (
  <h2 className={`flex items-center gap-3 text-2xl font-semibold text-foreground ${className}`}>
    <span className="font-mono text-primary text-lg">{number}.</span>
    {title}
    <span className="flex-1 h-px bg-border ml-4" />
  </h2>
);

export default SectionHeading;
