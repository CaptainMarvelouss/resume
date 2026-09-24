import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const AmbientBackground: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Layer 1: Base radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #0d0e1a 0%, #050506 50%, #020203 100%)',
        }}
      />

      {/* Layer 2: 64px grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Layer 3: Animated glowing blobs */}
      {!reducedMotion ? (
        <>
          {/* Primary top-center blob */}
          <div
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] sm:h-[1000px] rounded-full bg-[#5E6AD2]/20 blur-[140px] animate-float-slow will-change-transform"
          />

          {/* Secondary left blob */}
          <div
            className="absolute top-[25%] -left-[15%] w-[600px] h-[800px] rounded-full bg-[#818CF8]/12 blur-[130px] animate-float-slow-reverse will-change-transform"
          />

          {/* Tertiary right blob */}
          <div
            className="absolute top-[55%] -right-[15%] w-[550px] h-[700px] rounded-full bg-[#4F46E5]/12 blur-[120px] animate-float-slow will-change-transform"
          />

          {/* Bottom pulsing blob */}
          <div
            className="absolute bottom-[-10%] left-1/3 w-[800px] h-[500px] rounded-full bg-[#5E6AD2]/10 blur-[130px] animate-pulse-subtle will-change-transform"
          />
        </>
      ) : (
        /* Static fallback for reduced motion */
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[600px] rounded-full bg-[#5E6AD2]/15 blur-[120px]" />
      )}

      {/* Layer 4: SVG noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
    </div>
  );
};
