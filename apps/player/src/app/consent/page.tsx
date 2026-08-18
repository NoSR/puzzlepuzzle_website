"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@puzzlepuzzle/ui";

export default function ConsentPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
      }
    }
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.closePath();
    }
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      padding: "var(--spacing-4) 0"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-4)" }}>참여 서약서</h1>
      
      <div style={{
        width: "100%",
        maxWidth: "800px",
        height: "200px",
        overflowY: "auto",
        backgroundColor: "var(--color-surface-hover)",
        padding: "var(--spacing-4)",
        borderRadius: "var(--radius-md)",
        marginBottom: "var(--spacing-6)",
        fontSize: "1.2rem",
        lineHeight: "1.6"
      }}>
        <p>1. 본인은 안전 수칙을 준수하며 직원의 안내에 따를 것을 서약합니다.</p>
        <p>2. 체험 중 발생하는 기물 파손에 대해서는 배상 책임이 있음을 확인합니다.</p>
        <p>3. 임산부, 심신 노약자, 음주자의 경우 체험이 제한될 수 있습니다.</p>
        <p>4. 스포일러 유출을 금지하며, 적발 시 법적 책임을 질 수 있습니다.</p>
      </div>

      <div style={{ marginBottom: "var(--spacing-6)", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontSize: "1.5rem", marginBottom: "var(--spacing-2)" }}>아래에 서명해 주세요</p>
        <div style={{ position: "relative" }}>
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            style={{
              backgroundColor: "white",
              border: "2px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              touchAction: "none"
            }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          <button 
            onClick={clearSignature}
            style={{
              position: "absolute",
              top: "var(--spacing-2)",
              right: "var(--spacing-2)",
              padding: "var(--spacing-1) var(--spacing-2)",
              backgroundColor: "var(--color-surface-hover)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer"
            }}
          >
            지우기
          </button>
        </div>
      </div>

      <Link href={hasSignature ? "/team" : "#"} style={{ textDecoration: "none", pointerEvents: hasSignature ? "auto" : "none" }}>
        <Button 
          size="lg" 
          disabled={!hasSignature}
          style={{ 
            fontSize: "1.5rem", 
            padding: "var(--spacing-4) var(--spacing-8)",
            opacity: hasSignature ? 1 : 0.5
          }}
        >
          동의하고 다음으로
        </Button>
      </Link>
    </div>
  );
}
