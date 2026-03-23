type SectionIntroProps = {
  title: string;
  subtitle: string;
  italic?: boolean;
};

export function SectionIntro({ title, subtitle, italic }: SectionIntroProps) {
  return (
    <div className="space-y-2">
      <h2 className={`font-headline text-4xl font-bold ${italic ? 'italic' : ''}`}>{title}</h2>
      <p className="font-body text-on-surface-variant">{subtitle}</p>
    </div>
  );
}
