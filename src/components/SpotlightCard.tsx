import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMouseSpotlight } from '../hooks/useMouseSpotlight';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 229, 255, 0.12)',
}: SpotlightCardProps) {
  const { cardRef, position, isHovered, onMouseEnter, onMouseLeave, onMouseMove } =
    useMouseSpotlight();

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className={`relative overflow-hidden rounded-2xl bg-white dark:bg-[#0F1117] border border-zinc-200/80 dark:border-[#1E222D] shadow-sm transition-colors duration-200 ${className}`}
    >
      {/* Spotlight highlight (desktop only) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 dark:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
