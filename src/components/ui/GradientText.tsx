import React from 'react';

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'headline' | 'accent' | 'shimmer';
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'headline',
  as: Component = 'span',
  className = '',
  ...props
}) => {
  const variantStyles = {
    headline: 'bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-[#5E6AD2] via-[#818CF8] to-[#5E6AD2] bg-clip-text text-transparent',
    shimmer: 'shimmer-text',
  }[variant];

  return (
    <Component className={`${variantStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
};
