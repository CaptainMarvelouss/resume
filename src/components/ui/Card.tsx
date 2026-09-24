import React, { forwardRef } from 'react';
import { useMouseSpotlight } from '@/hooks/useMouseSpotlight';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  enableSpotlight?: boolean;
  withTopHighlight?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      enableSpotlight = true,
      withTopHighlight = true,
      className = '',
      style,
      ...props
    },
    forwardedRef
  ) => {
    const spotlightRef = useMouseSpotlight<HTMLDivElement>();

    // Merge forwardedRef with internal spotlightRef
    const setRefs = (node: HTMLDivElement | null) => {
      spotlightRef.current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const variantStyles = {
      default: 'bg-gradient-to-b from-white/[0.07] to-white/[0.02] border-white/[0.06]',
      glass: 'glass-panel',
      gradient: 'bg-gradient-to-br from-[#5E6AD2]/10 via-white/[0.05] to-white/[0.01] border-white/[0.08]',
    }[variant];

    return (
      <div
        ref={setRefs}
        style={
          {
            '--mx': '0px',
            '--my': '0px',
            '--spotlight-opacity': '0',
            ...style,
          } as React.CSSProperties
        }
        className={`group relative rounded-2xl border transition-all duration-300 shadow-card hover:shadow-card-hover hover:border-white/[0.12] ${
          withTopHighlight ? 'highlight-top' : ''
        } ${variantStyles} ${className}`}
        {...props}
      >
        {/* Mouse Spotlight Layer */}
        {enableSpotlight && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-hidden"
            style={{
              opacity: 'var(--spotlight-opacity, 0)',
              background:
                'radial-gradient(350px circle at var(--mx, 0px) var(--my, 0px), rgba(94, 106, 210, 0.15), transparent 80%)',
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';
