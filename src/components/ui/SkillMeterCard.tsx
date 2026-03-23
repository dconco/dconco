type SkillMeterCardProps = {
  title: string;
  accentClass: string;
  tags: string[];
  value: number;
};

export function SkillMeterCard({ title, accentClass, tags, value }: SkillMeterCardProps) {
  return (
    <article className="space-y-6 rounded-xl bg-surface-container p-8">
      <h3 className={`text-sm font-bold tracking-widest uppercase ${accentClass}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-surface-container-highest px-4 py-2 text-xs font-bold text-on-surface">
            {tag}
          </span>
        ))}
      </div>
      <div className="border-outline-soft border-t pt-4">
        <div className="mb-2 flex items-center justify-between text-xs font-bold">
          <span>MASTERY</span>
          <span>{value}%</span>
        </div>
        <div className="h-1 rounded-full bg-surface-container-low">
          <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
        </div>
      </div>
    </article>
  );
}
