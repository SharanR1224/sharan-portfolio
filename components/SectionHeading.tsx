import Reveal from "./Reveal";

export default function SectionHeading({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow flex items-center justify-center gap-2 text-blue-glow">
        <span className="text-purple-glow">$</span> {command}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
