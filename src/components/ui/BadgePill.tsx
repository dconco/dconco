import type { ReactNode } from 'react';

type BadgePillProps = {
  children: ReactNode;
  className?: string;
};

export function BadgePill({ children, className = '' }: BadgePillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${className}`}
    >
      {children}
    </div>
  );
}
