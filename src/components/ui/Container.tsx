import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    full: 'max-w-7xl',
  }[size];

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
