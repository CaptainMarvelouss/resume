import { useRef, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useMouseSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    // Check if hover is supported (prevents touch device bugs)
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (!canHover) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      el.style.setProperty('--spotlight-opacity', '1');
    };

    const handlePointerLeave = () => {
      el.style.setProperty('--spotlight-opacity', '0');
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [reducedMotion]);

  return ref;
}
