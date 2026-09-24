import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      download,
      icon,
      iconPosition = 'left',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] disabled:opacity-50 disabled:pointer-events-none select-none';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
      md: 'text-sm px-4 py-2 rounded-lg gap-2',
      lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5',
    }[size];

    const variantStyles = {
      primary:
        'bg-[#5E6AD2] hover:bg-[#6872D9] text-white active:scale-[0.98] shadow-cta-glow btn-shine border border-[#6872D9]/40',
      secondary:
        'bg-white/[0.05] hover:bg-white/[0.09] text-[#EDEDEF] border border-white/[0.08] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]',
      ghost:
        'bg-transparent hover:bg-white/[0.06] text-[#8A8F98] hover:text-[#EDEDEF] border border-transparent',
      outline:
        'bg-transparent hover:bg-white/[0.04] text-[#EDEDEF] border border-white/[0.12] hover:border-white/[0.2] active:scale-[0.98]',
    }[variant];

    const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          download={download}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
