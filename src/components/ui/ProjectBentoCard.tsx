import type { ReactNode } from 'react';

type ProjectBentoCardProps = {
  imageSrc: string;
  imageAlt: string;
  heightClass: string;
  cardClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  aos?: string;
  aosDelay?: number;
  children: ReactNode;
};

export function ProjectBentoCard({
  imageSrc,
  imageAlt,
  heightClass,
  cardClassName = '',
  overlayClassName = 'bg-gradient-to-t from-background via-transparent to-transparent',
  contentClassName = 'absolute bottom-0 left-0 p-10 space-y-4',
  aos,
  aosDelay,
  children,
}: ProjectBentoCardProps) {
  return (
    <article
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`group relative overflow-hidden rounded-xl ${heightClass} ${cardClassName}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className={contentClassName}>{children}</div>
    </article>
  );
}
