import React, { useState } from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withStatusDot?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials = 'DH',
  size = 'lg',
  withStatusDot = false,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-9 w-9 text-xs rounded-xl',
    md: 'h-12 w-12 text-sm rounded-xl',
    lg: 'h-16 w-16 sm:h-20 sm:w-20 text-base sm:text-lg rounded-2xl',
    xl: 'h-20 w-20 sm:h-24 sm:w-24 text-lg sm:text-xl rounded-2xl',
  }[size];

  const dotSizes = {
    sm: 'h-2 w-2 bottom-0 right-0',
    md: 'h-2.5 w-2.5 bottom-0 right-0',
    lg: 'h-3 w-3 bottom-0.5 right-0.5',
    xl: 'h-3.5 w-3.5 bottom-1 right-1',
  }[size];

  const showFallback = !src || imageError;

  return (
    <div className={`relative inline-block shrink-0 select-none group ${className}`}>
      <div
        className={`relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-card transition-all duration-300 group-hover:border-white/20 group-hover:shadow-card-hover ${sizeClasses}`}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono font-semibold tracking-wider text-[#818CF8] bg-[#0a0a0e]">
            <span>{initials}</span>
          </div>
        )}
      </div>

      {withStatusDot && (
        <span
          className={`absolute flex ${dotSizes}`}
          title="Open to work"
          aria-label="Online status: Open to work"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-full w-full rounded-full border-2 border-[#050506] bg-emerald-500" />
        </span>
      )}
    </div>
  );
};
