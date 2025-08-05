import React, { useEffect, useState, useCallback } from "react";

function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    // Throttle mouse events for better performance
    requestAnimationFrame(() => {
      setPosition({ x: event.clientX, y: event.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "600px",
        height: "600px",
        transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        filter: "blur(80px)",
        mixBlendMode: "soft-light",
        opacity: 0.8,
        willChange: "transform",
      }}
    />
  );
}

export default CursorEffect;