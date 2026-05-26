import { useEffect, useState } from "react";

export default function CandleCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      {/* 🔥 glow suave tipo aura */}
      <div className="absolute -inset-5 rounded-full bg-pink-300/20 blur-2xl animate-pulse" />

      {/* ✨ segundo brillo sutil */}
      <div className="absolute -inset-2 rounded-full bg-orange-200/10 blur-xl" />

      {/* 🕯️ vela */}
      <div className="text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(255,182,193,0.6)]">
        🕯️
      </div>
    </div>
  );
}