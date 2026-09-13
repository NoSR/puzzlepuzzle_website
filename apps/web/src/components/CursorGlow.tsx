'use client';

import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 터치 디바이스에서는 미동작
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
        transform: `translate3d(${pos.x - 210}px, ${pos.y - 210}px, 0)`,
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(236, 72, 153, 0.08) 45%, transparent 70%)',
        filter: 'blur(30px)',
        transition: 'transform 0.12s cubic-bezier(0.2, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    />
  );
}
