import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = '',
  width = '100%',
}) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className} style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Expo-out curve
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
