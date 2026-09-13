'use client';

import React, { useEffect, useRef } from 'react';

interface Cube {
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  rotSpeedX: number;
  rotSpeedY: number;
  color: string;
}

export default function CubeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(168, 85, 247, 0.45)', // neon purple
      'rgba(236, 72, 153, 0.4)',  // neon pink
      'rgba(99, 102, 241, 0.45)', // neon indigo
      'rgba(251, 189, 8, 0.35)',  // gold accent
    ];

    const cubes: Cube[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 400 + 100,
      size: Math.random() * 28 + 16,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.35 - 0.1,
      rotSpeedX: (Math.random() - 0.5) * 0.015,
      rotSpeedY: (Math.random() - 0.5) * 0.015,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // 8개 꼭짓점 정의
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
    ];

    // 12개 모서리
    const edges = [
      [0,1], [1,2], [2,3], [3,0],
      [4,5], [5,6], [6,7], [7,4],
      [0,4], [1,5], [2,6], [3,7]
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const cube of cubes) {
        cube.x += cube.speedX;
        cube.y += cube.speedY;
        cube.rotX += cube.rotSpeedX;
        cube.rotY += cube.rotSpeedY;

        // 화면 밖으로 나가면 재배치
        if (cube.y < -50) cube.y = height + 50;
        if (cube.x < -50) cube.x = width + 50;
        if (cube.x > width + 50) cube.x = -50;

        // 회전 변환 & 투영
        const radX = cube.rotX;
        const radY = cube.rotY;

        const projected = vertices.map(([vx, vy, vz]) => {
          // X축 회전
          const y1 = vy * Math.cos(radX) - vz * Math.sin(radX);
          const z1 = vy * Math.sin(radX) + vz * Math.cos(radX);
          // Y축 회전
          const x2 = vx * Math.cos(radY) + z1 * Math.sin(radY);
          const z2 = -vx * Math.sin(radY) + z1 * Math.cos(radY);

          const scale = cube.size / 2;
          return {
            x: cube.x + x2 * scale,
            y: cube.y + y1 * scale,
          };
        });

        // 모서리 렌더링
        ctx.strokeStyle = cube.color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (const [s, e] of edges) {
          ctx.moveTo(projected[s].x, projected[s].y);
          ctx.lineTo(projected[e].x, projected[e].y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
    />
  );
}
