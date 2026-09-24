import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'subtle' | 'outline' | 'status' | 'method';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  size = 'sm',
  pulse = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-mono',
    md: 'text-xs px-3 py-1 font-mono',
  }[size];

  const variantStyles = {
    accent:
      'bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 text-[#818CF8]',
    subtle:
      'bg-white/[0.04] border border-white/[0.08] text-[#EDEDEF]/90',
    outline:
      'bg-transparent border border-white/[0.12] text-[#8A8F98]',
    status:
      'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans font-medium',
    method:
      'font-mono font-semibold tracking-wider',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full select-none transition-colors ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};
