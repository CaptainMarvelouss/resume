import React from 'react';

export interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#5E6AD2]" aria-hidden="true" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#818CF8]/90 font-medium">
        {number ? `${number} / ${label}` : label}
      </span>
    </div>
  );
};
