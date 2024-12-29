import React, { useEffect, useState } from "react";

function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 300, // Center vertically
        left: position.x - 300, // Center horizontally
        width: "600px", // Adjust size for the spotlight
        height: "600px",
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        filter: "blur(80px)", // Diffuses the spotlight for a seamless blend
        mixBlendMode: "soft-light",
        opacity: 0.8, // Adjust overall brightness
        transition: "transform 0.05s ease, opacity 0.2s ease", // Smooth transition
      }}
    ></div>
  );
}

export default CursorEffect;