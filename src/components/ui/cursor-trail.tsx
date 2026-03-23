"use client";

import React, { useEffect, useRef } from "react";

const TRAIL_LENGTH = 18;

const CursorTrail = () => {
  const points = useRef<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY });
      if (points.current.length > TRAIL_LENGTH) {
        points.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((point, i) => {
        const opacity = (i + 1) / points.current.length;
        const size = (i + 1) / points.current.length * 3;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.5})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ touchAction: "none" }}
    />
  );
};

export default CursorTrail;
