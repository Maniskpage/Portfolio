import { useState, useEffect, useRef } from 'react';

export function useMouseSpotlight() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable spotlight on non-touch devices with screen width >= 768px
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768 && window.matchMedia('(hover: hover)').matches);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return {
    cardRef,
    position,
    isHovered: isHovered && isDesktop,
    isDesktop,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onMouseMove: handleMouseMove,
  };
}
