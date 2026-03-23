type TimelineEntryProps = {
  period: string;
  title: string;
  detail: string;
  active?: boolean;
};

export function TimelineEntry({ period, title, detail, active }: TimelineEntryProps) {
  return (
    <div className="relative space-y-2">
      <div
        className={`absolute -left-10 top-2 h-4 w-4 rounded-full border-4 border-background ${
          active ? 'bg-primary' : 'bg-surface-container-highest'
        }`}
      />
      <span className={`text-xs font-bold tracking-widest uppercase ${active ? 'text-secondary' : 'text-on-surface-variant'}`}>
        {period}
      </span>
      <h4 className="font-headline text-xl font-bold">{title}</h4>
      <p className="font-body text-sm text-on-surface-variant">{detail}</p>
    </div>
  );
}
